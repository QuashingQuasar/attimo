import { ArrowRight } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    category: "Harvest",
    title: "Why Early Harvest Olive Oil Is Worth Every Drop",
    excerpt: "The secret behind superior polyphenol content lies in timing. We pick our olives weeks before most producers even begin.",
    date: "Mar 2026",
    readTime: "5 min read",
    image: "/videos/harvest-2024-1.mp4",
    isVideo: true,
  },
  {
    id: 2,
    category: "Health",
    title: "Polyphenols: The Antioxidant Powerhouse in Your Kitchen",
    excerpt: "Not all olive oils are created equal. Learn how polyphenol levels can vary by 10x between brands — and why it matters.",
    date: "Feb 2026",
    readTime: "4 min read",
    image: "/images/hero-poster.png",
    isVideo: false,
  },
  {
    id: 3,
    category: "Origin",
    title: "From Alentejo With Love: Our Portuguese Terroir",
    excerpt: "The sun-drenched plains of southern Portugal create the perfect microclimate for olive trees with extraordinary character.",
    date: "Jan 2026",
    readTime: "6 min read",
    image: "/videos/content-video-2.mp4",
    isVideo: true,
  },
];

export const BlogSection = () => {
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
          <button className="group flex items-center gap-2 font-working-man text-olive-dark text-sm tracking-wide hover:text-olive-medium transition-colors self-start md:self-auto">
            View all articles
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="group cursor-pointer"
            >
              {/* Image / Video Thumbnail */}
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-5 bg-olive-dark/5">
                {post.isVideo ? (
                  <video
                    src={post.image}
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    onMouseEnter={(e) => (e.target as HTMLVideoElement).play()}
                    onMouseLeave={(e) => {
                      const v = e.target as HTMLVideoElement;
                      v.pause();
                      v.currentTime = 0;
                    }}
                  />
                ) : (
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                )}
                {/* Category badge */}
                <span className="absolute top-4 left-4 bg-olive-dark/80 backdrop-blur-sm text-cream px-3 py-1 rounded-full text-xs font-working-man tracking-wider uppercase">
                  {post.category}
                </span>
              </div>

              {/* Text content */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-xs font-working-man text-olive-medium tracking-wide">
                  <span>{post.date}</span>
                  <span className="w-1 h-1 rounded-full bg-olive-medium/50" />
                  <span>{post.readTime}</span>
                </div>
                <h3 className="font-working-man text-olive-dark text-lg md:text-xl leading-snug group-hover:text-olive-medium transition-colors duration-300">
                  {post.title}
                </h3>
                <p className="font-working-man-light text-olive-medium text-sm leading-relaxed line-clamp-2">
                  {post.excerpt}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
