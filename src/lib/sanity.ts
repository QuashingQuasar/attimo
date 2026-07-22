import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import type { HreflangEntry } from "@/lib/i18n/config";

export const sanityClient = createClient({
  projectId: "25tuybj3",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: true,
});

const builder = imageUrlBuilder(sanityClient);

type SanityImageSource = Parameters<ReturnType<typeof imageUrlBuilder>["image"]>[0];

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

export interface BlogPostPreview {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  excerpt: string;
  coverImage: any;
  seoTitle?: string;
  seoDescription?: string;
  noIndex?: boolean;
  // Content language. Absent on older posts → treated as English via
  // coalesce(language, "en") in every query below.
  language?: string;
  // Shared key linking a post to its translations (equals the English slug).
  // Only set on posts that have (or are) a translation.
  translationKey?: string;
}

export interface BlogPost extends BlogPostPreview {
  body: any[];
  _updatedAt?: string;
}

// English-only posts (default market blog index + /blog/[slug] getStaticPaths).
export async function getAllPosts(): Promise<BlogPostPreview[]> {
  return sanityClient.fetch<BlogPostPreview[]>(
    `*[_type == "post" && coalesce(language, "en") == "en"] | order(publishedAt desc) {
      _id, title, slug, publishedAt, excerpt, coverImage, seoTitle, seoDescription, noIndex,
      "language": coalesce(language, "en"), translationKey
    }`
  );
}

// Posts for a given content language (e.g. "de"). Powers the /de/blog index
// and the German [slug] route's getStaticPaths.
export async function getPostsByLang(lang: string): Promise<BlogPostPreview[]> {
  return sanityClient.fetch<BlogPostPreview[]>(
    `*[_type == "post" && coalesce(language, "en") == $lang] | order(publishedAt desc) {
      _id, title, slug, publishedAt, excerpt, coverImage, seoTitle, seoDescription, noIndex,
      "language": coalesce(language, "en"), translationKey
    }`,
    { lang }
  );
}

export async function getPostBySlug(
  slug: string,
  lang: string = "en"
): Promise<BlogPost | null> {
  return sanityClient.fetch<BlogPost | null>(
    `*[_type == "post" && slug.current == $slug && coalesce(language, "en") == $lang][0] {
      _id, title, slug, publishedAt, _updatedAt, excerpt, coverImage, body, seoTitle, seoDescription, noIndex,
      "language": coalesce(language, "en"), translationKey
    }`,
    { slug, lang }
  );
}

export async function getMorePosts(
  currentSlug: string,
  lang: string = "en"
): Promise<BlogPostPreview[]> {
  return sanityClient.fetch<BlogPostPreview[]>(
    `*[_type == "post" && slug.current != $slug && coalesce(language, "en") == $lang] | order(publishedAt desc)[0..2] {
      _id, title, slug, publishedAt, excerpt, coverImage
    }`,
    { slug: currentSlug, lang }
  );
}

export async function getAllPostMeta(): Promise<
  { slug: string; publishedAt: string; updatedAt: string; language: string; translationKey?: string }[]
> {
  return sanityClient.fetch(
    `*[_type == "post" && (noIndex != true)] | order(publishedAt desc) {
      "slug": slug.current, publishedAt, "updatedAt": _updatedAt,
      "language": coalesce(language, "en"), translationKey
    }`
  );
}

// --- Blog i18n helpers -----------------------------------------------------

const SITE_ORIGIN = "https://attimo-oil.com";

// Content-language → URL prefix. Matches the locale slugs in i18n/config
// (Swedish content lives under /se, Danish under /dk).
const LANG_TO_PREFIX: Record<string, string> = {
  en: "",
  de: "de",
  fr: "fr",
  sv: "se",
  da: "dk",
};

// Canonical path for a blog post in a given content language.
export function blogPath(slug: string, language: string): string {
  const prefix = LANG_TO_PREFIX[language] ?? "";
  return prefix ? `/${prefix}/blog/${slug}` : `/blog/${slug}`;
}

// All language variants of a post, resolved from the shared translationKey.
export async function getTranslationCluster(
  translationKey: string
): Promise<{ language: string; slug: string }[]> {
  if (!translationKey) return [];
  return sanityClient.fetch(
    `*[_type == "post" && translationKey == $key] {
      "language": coalesce(language, "en"), "slug": slug.current
    }`,
    { key: translationKey }
  );
}

// Build the hreflang cluster (self + alternates + x-default→English) for a
// blog post. Returns [] when the post has no translations, so single-language
// posts emit no hreflang tags.
export async function getBlogHreflangs(
  translationKey: string | undefined
): Promise<HreflangEntry[]> {
  if (!translationKey) return [];
  const cluster = await getTranslationCluster(translationKey);
  if (cluster.length < 2) return [];
  const entries: HreflangEntry[] = cluster.map((t) => ({
    hreflang: t.language,
    href: `${SITE_ORIGIN}${blogPath(t.slug, t.language)}`,
  }));
  const en = cluster.find((t) => t.language === "en");
  if (en) entries.push({ hreflang: "x-default", href: `${SITE_ORIGIN}${blogPath(en.slug, "en")}` });
  return entries;
}
