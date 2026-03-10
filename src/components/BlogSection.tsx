import { ArrowRight, Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

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

export const BlogSection = () => {
  const [articles, setArticles] = useState<BlogArticle[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const { data, error } = await supabase.functions.invoke("shopify-blog-feed");

        if (error) {
          throw error;
        }

        setArticles(data?.articles || []);
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
    <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20" style={{ backgroundColor: "#CDDB2D" }}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14 gap-6">
          <div>
            

            
            <h2
              className="tracking-tight leading-[0.95]"
              style={{
                fontFamily: "UDC Working Man Sans, sans-serif",
                fontSize: "clamp(2.2rem, 3.5vw, 4rem)",
                color: "#1B4229"
              }}>
              
              the olive press
            </h2>
          </div>
        </div>

        {isLoading &&
        <div className="flex justify-center py-16">
            <Loader2 className="w-8 h-8 animate-spin" style={{ color: "#1B4229" }} />
          </div>
        }

        {!isLoading && articles.length === 0 &&
        <div className="text-center py-16">
            <p className="font-working-man text-lg" style={{ color: "#1B422999" }}>No articles found yet.</p>
          </div>
        }

        {!isLoading && articles.length > 0 &&
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {articles.map((article) =>
          <a
            key={article.id}
            href={article.onlineStoreUrl || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="group cursor-pointer block">
            
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-5" style={{ backgroundColor: "#1B4229" }}>
                  {article.image ?
              <img
                src={article.image.url}
                alt={article.image.altText || article.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" /> :


              <div className="w-full h-full flex items-center justify-center" style={{ backgroundColor: "#1B422920" }}>
                      <span className="font-working-man text-sm" style={{ color: "#1B422966" }}>No image</span>
                    </div>
              }
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-xs font-working-man tracking-wide" style={{ color: "#1B422999" }}>
                    <span>{formatDate(article.publishedAt)}</span>
                  </div>
                  <h3 className="font-working-man text-lg md:text-xl leading-snug transition-colors duration-300" style={{ color: "#1B4229" }}>
                    {article.title}
                  </h3>
                  {article.excerpt &&
              <p className="font-space-grotesk text-sm leading-relaxed line-clamp-2" style={{ color: "#1B4229CC" }}>
                      {article.excerpt}
                    </p>
              }
                  <span className="inline-flex items-center gap-1 text-sm font-working-man group-hover:gap-2 transition-all duration-300" style={{ color: "#1B4229" }}>
                    Read more <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </a>
          )}
          </div>
        }
      </div>
    </section>);

};