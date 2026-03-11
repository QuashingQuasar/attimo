import { useParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { sanityClient, urlFor } from "@/lib/sanity";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArrowLeft, Loader2 } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useEffect } from "react";

/**
 * The Sanity body field is stored as plain text with whitespace structure
 * but no markdown syntax. This function normalizes it into proper markdown
 * by detecting paragraph breaks and preserving the text structure.
 */
function normalizeBody(body: string): string {
  if (!body) return "";
  
  // The body comes with inconsistent whitespace. Clean it up:
  // 1. Normalize line endings
  let text = body.replace(/\r\n/g, "\n");
  
  // 2. Collapse runs of whitespace around newlines into clean paragraph breaks
  text = text.replace(/\n\s*\n\s*\n*/g, "\n\n");
  
  // 3. Trim leading/trailing whitespace from each line
  text = text
    .split("\n")
    .map((line) => line.trim())
    .join("\n");
  
  // 4. Remove empty leading/trailing content
  text = text.trim();
  
  return text;
}

interface BlogPost {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  excerpt: string;
  coverImage: any;
  body: string;
  seoTitle: string;
  seoDescription: string;
  noIndex: boolean;
}

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();

  const { data: post, isLoading } = useQuery({
    queryKey: ["blog-post", slug],
    queryFn: () =>
      sanityClient.fetch<BlogPost>(
        `*[_type == "post" && slug.current == $slug][0] {
          _id, title, slug, publishedAt, excerpt, coverImage, body, seoTitle, seoDescription, noIndex
        }`,
        { slug }
      ),
    enabled: !!slug,
  });

  useEffect(() => {
    if (post) {
      document.title = post.seoTitle || post.title;
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute("content", post.seoDescription || post.excerpt || "");
      }
      const metaRobots = document.querySelector('meta[name="robots"]');
      if (post.noIndex) {
        if (metaRobots) {
          metaRobots.setAttribute("content", "noindex");
        } else {
          const meta = document.createElement("meta");
          meta.name = "robots";
          meta.content = "noindex";
          document.head.appendChild(meta);
        }
      }
    }
  }, [post]);

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FAF9F6" }}>
      <Header onWaitlistClick={() => {}} forceScrolled />

      <main className="pt-28 pb-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-3xl mx-auto">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 mb-10 text-sm font-working-man hover:gap-3 transition-all duration-300"
            style={{ color: "#1B422999" }}
          >
            <ArrowLeft className="w-4 h-4" />
            Back to all posts
          </Link>

          {isLoading && (
            <div className="flex justify-center py-20">
              <Loader2 className="w-8 h-8 animate-spin" style={{ color: "#1B4229" }} />
            </div>
          )}

          {!isLoading && !post && (
            <div className="text-center py-20">
              <h2 className="font-working-man text-2xl mb-4" style={{ color: "#1B4229" }}>
                Post not found
              </h2>
              <Link to="/blog" className="text-sm font-working-man underline" style={{ color: "#1B422999" }}>
                Return to blog
              </Link>
            </div>
          )}

          {!isLoading && post && (
            <article>
              <span
                className="text-sm font-working-man tracking-wide"
                style={{ color: "#1B422980" }}
              >
                {formatDate(post.publishedAt)}
              </span>

              <h1
                className="mt-3 mb-8 tracking-tight leading-[1.05]"
                style={{
                  fontFamily: "UDC Working Man Sans, sans-serif",
                  fontSize: "clamp(2rem, 3.5vw, 3.5rem)",
                  color: "#1B4229",
                }}
              >
                {post.title}
              </h1>

              {post.coverImage && (
                <div className="relative aspect-[16/9] rounded-xl overflow-hidden mb-12">
                  <img
                    src={urlFor(post.coverImage).width(1200).height(675).auto("format").url()}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              <div
                className="prose prose-lg max-w-none"
                style={{
                  fontFamily: "Space Grotesk, sans-serif",
                  color: "#1B4229DD",
                  lineHeight: 1.8,
                }}
              >
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  components={{
                    h1: ({ children }) => (
                      <h1 className="font-working-man text-3xl mt-12 mb-4" style={{ color: "#1B4229" }}>{children}</h1>
                    ),
                    h2: ({ children }) => (
                      <h2 className="font-working-man text-2xl mt-12 mb-4" style={{ color: "#1B4229" }}>{children}</h2>
                    ),
                    h3: ({ children }) => (
                      <h3 className="font-working-man text-xl mt-8 mb-3" style={{ color: "#1B4229" }}>{children}</h3>
                    ),
                    p: ({ children }) => <p className="mb-6">{children}</p>,
                    a: ({ href, children }) => (
                      <a href={href} target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#1B4229" }}>{children}</a>
                    ),
                    ul: ({ children }) => <ul className="list-disc pl-6 mb-6 space-y-2">{children}</ul>,
                    ol: ({ children }) => <ol className="list-decimal pl-6 mb-6 space-y-2">{children}</ol>,
                    li: ({ children }) => <li className="leading-relaxed">{children}</li>,
                    blockquote: ({ children }) => (
                      <blockquote className="border-l-4 pl-6 my-8 italic" style={{ borderColor: "#CDDB2D", color: "#1B4229BB" }}>{children}</blockquote>
                    ),
                    table: ({ children }) => (
                      <div className="overflow-x-auto my-8 rounded-lg border" style={{ borderColor: "#1B422920" }}>
                        <table className="w-full text-sm">{children}</table>
                      </div>
                    ),
                    thead: ({ children }) => <thead style={{ backgroundColor: "#1B422910" }}>{children}</thead>,
                    th: ({ children }) => (
                      <th className="px-4 py-3 text-left font-working-man text-xs tracking-wide" style={{ color: "#1B4229", borderBottom: "1px solid #1B422920" }}>{children}</th>
                    ),
                    td: ({ children }) => (
                      <td className="px-4 py-3 text-sm" style={{ borderBottom: "1px solid #1B422910" }}>{children}</td>
                    ),
                    hr: () => <hr className="my-10" style={{ borderColor: "#1B422915" }} />,
                    strong: ({ children }) => <strong className="font-semibold" style={{ color: "#1B4229" }}>{children}</strong>,
                  }}
                >
                  {normalizeBody(post.body)}
                </ReactMarkdown>
              </div>
            </article>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPostPage;
