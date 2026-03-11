import { useQuery } from "@tanstack/react-query";
import { sanityClient, urlFor } from "@/lib/sanity";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
import { Loader2 } from "lucide-react";

interface BlogPost {
  _id: string;
  title: string;
  slug: {current: string;};
  publishedAt: string;
  excerpt: string;
  coverImage: any;
  seoTitle: string;
  seoDescription: string;
  noIndex: boolean;
}

const BlogPage = () => {
  const { data: posts, isLoading } = useQuery({
    queryKey: ["blog-posts"],
    queryFn: () =>
    sanityClient.fetch<BlogPost[]>(
      `*[_type == "post"] | order(publishedAt desc) {
          _id, title, slug, publishedAt, excerpt, coverImage, seoTitle, seoDescription, noIndex
        }`
    )
  });

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString("en-US", {
      month: "long",
      year: "numeric"
    });
  };

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#FAF9F6" }}>
      <Header onWaitlistClick={() => {}} forceScrolled />

      {/* SEO */}
      <title>The Olive Press — ATTIMO Blog</title>
      <meta name="description" content="Stories, science, and sourcing behind high-polyphenol extra virgin olive oil." />

      <main className="flex-1 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <h1
            className="tracking-tight leading-[0.95] uppercase"
            style={{
              fontFamily: "UDC Working Man Sans, sans-serif",
              fontSize: "clamp(2.4rem, 4vw, 4.5rem)",
              color: "#1B4229",
              paddingTop: "140px",
              paddingBottom: "8px",
            }}
          >
            the olive press
          </h1>

          {isLoading && (
            <div className="flex justify-center py-20">
              <Loader2 className="w-8 h-8 animate-spin" style={{ color: "#1B4229" }} />
            </div>
          )}

          {!isLoading && posts && posts.length === 0 && (
            <p className="text-center py-20 font-working-man text-lg" style={{ color: "#1B422966" }}>
              No posts yet — check back soon.
            </p>
          )}

          {!isLoading && posts && posts.length > 0 && (
            <div
              className="grid grid-cols-1 md:grid-cols-3"
              style={{ gap: "32px", paddingTop: "48px", paddingBottom: "80px" }}
            >
              {posts.map((post) => (
                <Link
                  key={post._id}
                  to={`/blog/${post.slug.current}`}
                  className="group block"
                >
                  <div
                    className="rounded-xl overflow-hidden"
                    style={{ aspectRatio: "16/9", backgroundColor: "#1B422910" }}
                  >
                    {post.coverImage ? (
                      <img
                        src={urlFor(post.coverImage).width(960).auto("format").url()}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <span className="font-working-man text-sm" style={{ color: "#1B422940" }}>
                          No image
                        </span>
                      </div>
                    )}
                  </div>

                  <span
                    className="block font-working-man tracking-wide"
                    style={{ fontSize: "16px", color: "#1B422980", marginTop: "12px" }}
                  >
                    {formatDate(post.publishedAt)}
                  </span>
                  <h2
                    className="font-working-man uppercase"
                    style={{ fontSize: "26px", color: "#1b411c", marginTop: "4px" }}
                  >
                    {post.title}
                  </h2>
                  {post.excerpt && (
                    <p
                      style={{
                        fontFamily: "Space Grotesk, sans-serif",
                        fontSize: "20px",
                        lineHeight: 1.8,
                        color: "#555",
                        marginTop: "8px",
                      }}
                    >
                      {post.excerpt}
                    </p>
                  )}
                </Link>
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );

};

export default BlogPage;