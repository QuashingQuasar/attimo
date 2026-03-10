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

const getFirstElementText = (parent: Element | Document, tagName: string) =>
  parent.getElementsByTagNameNS("*", tagName)[0]?.textContent?.trim() ?? "";

const stripHtml = (html: string) => {
  if (!html) return "";

  const doc = new DOMParser().parseFromString(html, "text/html");
  return doc?.body.textContent?.replace(/\s+/g, " ").trim() ?? "";
};

const extractImageFromHtml = (html: string) => {
  if (!html) return null;

  const doc = new DOMParser().parseFromString(html, "text/html");
  const image = doc?.querySelector("img");
  const src = image?.getAttribute("src");

  if (!src) return null;

  return {
    url: src,
    altText: image.getAttribute("alt"),
  };
};

const parseBlogFeed = (xmlText: string): BlogArticle[] => {
  const xml = new DOMParser().parseFromString(xmlText, "application/xml");
  const parserError = xml.querySelector("parsererror");

  if (parserError) {
    throw new Error("Invalid blog feed response");
  }

  const feedTitle = getFirstElementText(xml, "title").replace(/^.*?-\s*/, "") || "Press";
  const entries = Array.from(xml.getElementsByTagNameNS("*", "entry"));

  return entries.slice(0, 3).map((entry, index) => {
    const articleUrl = Array.from(entry.getElementsByTagNameNS("*", "link")).find(
      (link) => link.getAttribute("rel") === "alternate",
    )?.getAttribute("href") ?? getFirstElementText(entry, "id");

    const summaryHtml = getFirstElementText(entry, "summary");
    const contentHtml = getFirstElementText(entry, "content");
    const excerpt = stripHtml(summaryHtml || contentHtml);
    const image = extractImageFromHtml(contentHtml) ?? extractImageFromHtml(summaryHtml);
    const handle = articleUrl
      ? articleUrl.split("/").filter(Boolean).pop() ?? `article-${index}`
      : `article-${index}`;

    return {
      id: getFirstElementText(entry, "id") || articleUrl || `article-${index}`,
      title: getFirstElementText(entry, "title"),
      handle,
      excerpt,
      publishedAt: getFirstElementText(entry, "published") || getFirstElementText(entry, "updated"),
      image,
      blogTitle: feedTitle,
      onlineStoreUrl: articleUrl || null,
    };
  });
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

    return new Response(JSON.stringify({ articles }), {
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
