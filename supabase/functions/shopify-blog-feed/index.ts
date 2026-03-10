const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const BLOG_FEED_URL = "https://shop.attimo-oil.com/blogs/press.atom";

type BlogArticle = {
  id: string;
  title: string;
  handle: string;
  excerpt: string;
  publishedAt: string;
  image: {
    url: string;
    altText: string | null;
  } | null;
  blogTitle: string;
  onlineStoreUrl: string | null;
};

const decodeXmlEntities = (value: string) =>
  value
    .replace(/<!\[CDATA\[|\]\]>/g, "")
    .replace(/<!--\[CDATA\[/g, "")
    .replace(/\]\]-->/g, "")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .trim();

const extractTagContent = (source: string, tagName: string) => {
  const match = source.match(new RegExp(`<${tagName}\\b[^>]*>([\\s\\S]*?)</${tagName}>`, "i"));
  return decodeXmlEntities(match?.[1] ?? "");
};

const stripHtml = (html: string) =>
  decodeXmlEntities(html)
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();

const extractImageFromHtml = (html: string) => {
  const normalizedHtml = decodeXmlEntities(html);
  const src = normalizedHtml.match(/<img[^>]+src=["']([^"']+)["']/i)?.[1];
  const altText = normalizedHtml.match(/<img[^>]+alt=["']([^"']*)["']/i)?.[1] ?? null;

  if (!src) return null;

  return { url: src, altText };
};

const extractAlternateLink = (entryXml: string) => {
  const linkTags = entryXml.match(/<link\b[^>]*>/gi) ?? [];

  for (const linkTag of linkTags) {
    if (!/rel=["']alternate["']/i.test(linkTag)) continue;
    const href = linkTag.match(/href=["']([^"']+)["']/i)?.[1];
    if (href) return decodeXmlEntities(href);
  }

  return "";
};

const parseBlogFeed = (xmlText: string): BlogArticle[] => {
  const feedPrefix = xmlText.split(/<entry\b/i)[0] ?? xmlText;
  const feedTitle = extractTagContent(feedPrefix, "title").replace(/^.*?-\s*/, "") || "Press";
  const entries = Array.from(xmlText.matchAll(/<entry\b[^>]*>([\s\S]*?)<\/entry>/gi), (match) => match[0]);

  return entries.slice(0, 3).map((entryXml, index) => {
    const articleUrl = extractAlternateLink(entryXml) || extractTagContent(entryXml, "id");
    const summaryHtml = extractTagContent(entryXml, "summary");
    const contentHtml = extractTagContent(entryXml, "content");
    const excerpt = stripHtml(summaryHtml || contentHtml);
    const image = extractImageFromHtml(contentHtml) ?? extractImageFromHtml(summaryHtml);
    const handle = articleUrl
      ? articleUrl.split("/").filter(Boolean).pop() ?? `article-${index}`
      : `article-${index}`;

    return {
      id: extractTagContent(entryXml, "id") || articleUrl || `article-${index}`,
      title: extractTagContent(entryXml, "title"),
      handle,
      excerpt,
      publishedAt: extractTagContent(entryXml, "published") || extractTagContent(entryXml, "updated"),
      image,
      blogTitle: feedTitle,
      onlineStoreUrl: articleUrl || null,
    };
  });
};

const fetchFeaturedImage = async (articleUrl: string): Promise<{ url: string; altText: string | null } | null> => {
  try {
    const res = await fetch(articleUrl, {
      headers: { "User-Agent": "Lovable-Blog-Fetcher" },
    });
    if (!res.ok) { await res.text(); return null; }
    const html = await res.text();
    const ogImage = html.match(/<meta[^>]+property=["']og:image["'][^>]+content=["']([^"']+)["']/i)?.[1]
      ?? html.match(/<meta[^>]+content=["']([^"']+)["'][^>]+property=["']og:image["']/i)?.[1];
    if (!ogImage) return null;
    const altText = html.match(/<meta[^>]+property=["']og:image:alt["'][^>]+content=["']([^"']*)["']/i)?.[1]
      ?? html.match(/<meta[^>]+content=["']([^"']*)["'][^>]+property=["']og:image:alt["']/i)?.[1]
      ?? null;
    return { url: ogImage, altText };
  } catch {
    return null;
  }
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const response = await fetch(BLOG_FEED_URL, {
      headers: {
        "User-Agent": "Lovable-Blog-Fetcher",
        "Accept": "application/atom+xml, application/xml, text/xml;q=0.9, */*;q=0.8",
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch blog feed: ${response.status}`);
    }

    const xmlText = await response.text();
    const articles = parseBlogFeed(xmlText);

    // Fetch featured images in parallel
    const enriched = await Promise.all(
      articles.map(async (article) => {
        if (article.onlineStoreUrl) {
          const featuredImage = await fetchFeaturedImage(article.onlineStoreUrl);
          if (featuredImage) {
            return { ...article, image: featuredImage };
          }
        }
        return article;
      }),
    );

    return new Response(JSON.stringify({ articles: enriched }), {
      headers: {
        ...corsHeaders,
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Failed to fetch blog articles";

    return new Response(JSON.stringify({ error: message }), {
      status: 500,
      headers: {
        ...corsHeaders,
        "Content-Type": "application/json",
      },
    });
  }
});
