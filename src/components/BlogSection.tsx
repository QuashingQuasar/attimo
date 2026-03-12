import { ArrowRight, Loader2 } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { sanityClient, urlFor } from "@/lib/sanity";
import { Link } from "react-router-dom";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

interface SanityPost {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  excerpt: string;
  coverImage: any;
}

export const BlogSection = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = email.trim();
    if (!trimmed || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      toast.error("Please enter a valid email address.");
      return;
    }
    setIsSubmitting(true);
    try {
      const { error } = await supabase.from("waitlist").insert({
        name: "Newsletter Subscriber",
        contact_method: "email",
        contact_value: trimmed,
        gdpr_consent: true,
      });
      if (error) throw error;
      toast.success("You're on the list!");
      setEmail("");
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
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
                fontSize: "clamp(2.5rem, 4.5vw, 5.5rem)",
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

        {/* Newsletter signup */}
        <div className="mt-16 pt-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6" style={{ borderTop: "1px solid #1B422930" }}>
          <p
            className="text-sm md:text-base leading-relaxed max-w-md"
            style={{ fontFamily: "Space Grotesk, sans-serif", color: "#1B4229CC" }}>
            Get Olive Press insights, stories, harvest updates and product releases in your mailbox.
          </p>
          <form onSubmit={handleNewsletterSubmit} className="flex gap-3 w-full md:w-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="px-4 py-2.5 rounded-lg text-sm font-space-grotesk flex-1 md:w-64 outline-none transition-shadow duration-200 focus:ring-2"
              style={{
                backgroundColor: "#1B422912",
                color: "#1B4229",
                border: "1px solid #1B422925",
              }}
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-5 py-2.5 rounded-lg text-sm font-working-man tracking-wide uppercase transition-opacity duration-200 hover:opacity-90 disabled:opacity-50 whitespace-nowrap"
              style={{ backgroundColor: "#CDDB2D", color: "#1B4229" }}>
              {isSubmitting ? "..." : "Subscribe"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
