import { useParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { sanityClient, urlFor } from "@/lib/sanity";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArrowLeft, Loader2 } from "lucide-react";
import { PortableText } from "@portabletext/react";
import { useEffect, useRef, useState } from "react";

const TweetEmbed = ({ url }: { url: string }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tweetId = url.split("/").pop()?.split("?")[0];
    if (!tweetId || !ref.current) return;

    const render = () => {
      ref.current!.innerHTML = "";
      (window as any).twttr.widgets.createTweet(tweetId, ref.current!, { dnt: true });
    };

    if (!(window as any).twttr) {
      const script = document.createElement("script");
      script.src = "https://platform.twitter.com/widgets.js";
      script.async = true;
      script.onload = () => render();
      document.head.appendChild(script);
    } else {
      render();
    }
  }, [url]);

  return <div ref={ref} className="my-8 flex justify-center" />;
};

interface BlogPost {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  excerpt: string;
  coverImage: any;
  body: any[];
  seoTitle: string;
  seoDescription: string;
  noIndex: boolean;
}

const portableTextComponents = {
  types: {
    image: ({ value }: { value: any }) => {
      if (!value?.asset) return null;
      return (
        <div className="my-8 rounded-xl overflow-hidden">
          <img
            src={urlFor(value).width(1200).auto("format").url()}
            alt={value.alt || ""}
            className="w-full h-auto"
          />
        </div>
      );
    },
    tweet: ({ value }: { value: { url: string } }) => {
      if (!value?.url) return null;
      return <TweetEmbed url={value.url} />;
    },
    table: ({ value }: { value: { rows: { cells: string[] }[] } }) => {
      if (!value?.rows?.length) return null;
      const [headerRow, ...bodyRows] = value.rows;
      return (
        <div className="my-8 overflow-x-auto rounded-xl border" style={{ borderColor: "#1B422920" }}>
          <table className="w-full border-collapse text-left" style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "16px" }}>
            <thead>
              <tr style={{ backgroundColor: "#1B4229", color: "#fff" }}>
                {headerRow.cells.map((cell, i) => (
                  <th key={i} className="px-5 py-3 font-semibold tracking-wide uppercase" style={{ fontSize: "13px", letterSpacing: "0.05em" }}>{cell}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {bodyRows.map((row, ri) => (
                <tr key={ri} style={{ backgroundColor: ri % 2 === 0 ? "#FAF9F6" : "#f5f0e8" }}>
                  {row.cells.map((cell, ci) => (
                    <td key={ci} className="px-5 py-3" style={{ borderTop: "1px solid #1B422915" }}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    },
  },
  block: {
    h1: ({ children }: any) => (
      <h1 className="font-working-man mt-12 mb-4 uppercase tracking-wide" style={{ fontSize: "24px", fontWeight: 700, color: "#1b411c" }}>{children}</h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="font-working-man mt-12 mb-4 uppercase tracking-wide" style={{ fontSize: "26px", fontWeight: 700, color: "#1b411c" }}>{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="font-working-man mt-8 mb-3" style={{ fontSize: "19px", fontWeight: 600, color: "#1b411c" }}>{children}</h3>
    ),
    normal: ({ children }: any) => <p className="mb-6">{children}</p>,
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 pl-6 my-8 italic" style={{ borderColor: "#CDDB2D", color: "#1B4229BB" }}>{children}</blockquote>
    ),
  },
  list: {
    bullet: ({ children }: any) => <ul className="list-disc pl-6 mb-6 space-y-2" style={{ color: "#1a1a1a" }}>{children}</ul>,
    number: ({ children }: any) => <ol className="list-decimal pl-6 mb-6 space-y-2">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }: any) => <li className="leading-relaxed pl-1">{children}</li>,
    number: ({ children }: any) => <li className="leading-relaxed">{children}</li>,
  },
  marks: {
    strong: ({ children }: any) => <strong className="font-semibold" style={{ color: "#1B4229" }}>{children}</strong>,
    link: ({ value, children }: any) => (
      <a href={value?.href} target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#1B4229" }}>{children}</a>
    ),
  },
};

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
      document.title = `${post.seoTitle || post.title} | ATTIMO Specialty Extra Virgin Olive Oil`;
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
      year: "numeric",
    });
  };

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#FAF9F6" }}>
      <Header onWaitlistClick={() => {}} forceScrolled />

      <main className="flex-1 pt-28 pb-20 px-6 md:px-12 lg:px-20">
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
                <div className="rounded-xl mb-12">
                  <img
                    src={urlFor(post.coverImage).width(1200).auto("format").url()}
                    alt={post.title}
                    className="w-full h-auto rounded-xl"
                  />
                </div>
              )}

              <div
                className="prose prose-lg mx-auto"
                style={{
                  fontFamily: "Space Grotesk, sans-serif",
                  color: "#1a1a1a",
                  fontSize: "20px",
                  lineHeight: 1.8,
                  maxWidth: "720px",
                }}
              >
                {post.body && (
                  <PortableText value={post.body} components={portableTextComponents} />
                )}
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
