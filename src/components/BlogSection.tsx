import { ArrowRight, Loader2 } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { sanityClient, urlFor } from "@/lib/sanity";
import { Link } from "react-router-dom";

interface SanityPost {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  excerpt: string;
  coverImage: any;
}

export const BlogSection = () => {
  const { data: articles = [], isLoading } = useQuery({
    queryKey: ["blog-posts-homepage"],
    queryFn: () =>
      sanityClient.fetch<SanityPost[]>(
        `*[_type == "post"] | order(publishedAt desc)[0..2] {
          _id, title, slug, publishedAt, excerpt, coverImage
        }`
      ),
  });

  const formatDate = (dateStr: string) => {
    const d = new Date(dateStr);
    return d.toLocaleDateString("en-US", { month: "short", year: "numeric" });
  };

  return (
    <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20" style={{ backgroundColor: "#B3E58C" }}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14 gap-6">
          <div>
            

            
            <h2
              className="tracking-tight leading-[0.95] uppercase"
              style={{
                fontFamily: "UDC Working Man Sans, sans-serif",
                fontSize: "clamp(3rem, 6vw, 7rem)",
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
          <Link
            key={article._id}
            to={`/blog/${article.slug.current}`}
            className="group cursor-pointer block">
            
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-5" style={{ backgroundColor: "#1B4229" }}>
                  {article.coverImage ?
              <img
                src={urlFor(article.coverImage).width(800).height(600).url()}
                alt={article.title}
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
              </Link>
          )}
          </div>
        }
      </div>
    </section>);

};