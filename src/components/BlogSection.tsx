import { ArrowRight, Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import { storefrontApiRequest } from "@/lib/shopify";

interface BlogArticle {
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
}

const BLOG_ARTICLES_QUERY = `
  query GetBlogArticles($first: Int!) {
    blogs(first: 5) {
      edges {
        node {
          title
          articles(first: $first, sortKey: PUBLISHED_AT, reverse: true) {
            edges {
              node {
                id
                title
                handle
                excerpt
                publishedAt
                image {
                  url
                  altText
                }
                onlineStoreUrl
              }
            }
          }
        }
      }
    }
  }
`;

export const BlogSection = () => {
  const [articles, setArticles] = useState<BlogArticle[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const data = await storefrontApiRequest(BLOG_ARTICLES_QUERY, { first: 3 });
        const blogEdges = data?.data?.blogs?.edges || [];
        const allArticles: BlogArticle[] = [];
        for (const blogEdge of blogEdges) {
          const blogTitle = blogEdge.node.title;
          const articleEdges = blogEdge.node.articles?.edges || [];
          for (const ae of articleEdges) {
            allArticles.push({ ...ae.node, blogTitle });
          }
        }
        allArticles.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
        setArticles(allArticles.slice(0, 3));
      } catch (error) {
        console.error("Failed to fetch blog articles:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchArticles();
  }, []);

  const formatDate = (dateStr: string) => {
    const d = new Date(dateStr);
    return d.toLocaleDateString("en-US", { month: "short", year: "numeric" });
  };

  return (
    <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20" style={{ backgroundColor: '#FFFAEA' }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14 gap-6">
          <div>
            <p className="font-working-man text-olive-medium tracking-[0.2em] uppercase text-sm mb-3">
              Journal
            </p>
            <h2
              className="text-olive-dark tracking-tight leading-[0.95]"
              style={{
                fontFamily: 'UDC Working Man Sans, sans-serif',
                fontSize: 'clamp(2.2rem, 3.5vw, 4rem)',
              }}
            >
              stories from the grove
            </h2>
          </div>
        </div>

        {/* Loading state */}
        {isLoading && (
          <div className="flex justify-center py-16">
            <Loader2 className="w-8 h-8 text-olive-medium animate-spin" />
          </div>
        )}

        {/* Empty state */}
        {!isLoading && articles.length === 0 && (
          <div className="text-center py-16">
            <p className="font-working-man text-olive-medium text-lg">No articles found yet.</p>
          </div>
        )}

        {/* Blog Grid */}
        {!isLoading && articles.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {articles.map((article) => (
              <a
                key={article.id}
                href={article.onlineStoreUrl || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="group cursor-pointer block"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-5 bg-olive-dark/5">
                  {article.image ? (
                    <img
                      src={article.image.url}
                      alt={article.image.altText || article.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-muted">
                      <span className="text-muted-foreground font-working-man text-sm">No image</span>
                    </div>
                  )}
                  {/* Category badge */}
                  <span className="absolute top-4 left-4 bg-olive-dark/80 backdrop-blur-sm text-cream px-3 py-1 rounded-full text-xs font-working-man tracking-wider uppercase">
                    {article.blog.title}
                  </span>
                </div>

                {/* Text content */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-xs font-working-man text-olive-medium tracking-wide">
                    <span>{formatDate(article.publishedAt)}</span>
                  </div>
                  <h3 className="font-working-man text-olive-dark text-lg md:text-xl leading-snug group-hover:text-olive-medium transition-colors duration-300">
                    {article.title}
                  </h3>
                  {article.excerpt && (
                    <p className="font-working-man-light text-olive-medium text-sm leading-relaxed line-clamp-2">
                      {article.excerpt}
                    </p>
                  )}
                  <span className="inline-flex items-center gap-1 text-olive-dark text-sm font-working-man group-hover:gap-2 transition-all duration-300">
                    Read more <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
