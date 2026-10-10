import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useState, useEffect } from "react";
import { WaitlistForm } from "@/components/WaitlistForm";
import { toast } from "sonner";
import { Mail, Send } from "lucide-react";
import { DEFAULT_LOCALE, type Locale } from "@/lib/i18n/config";
import { getDict } from "@/lib/i18n/dictionaries";

const ContactPage = ({ locale = DEFAULT_LOCALE }: { locale?: Locale }) => {
  const t = getDict(locale).contactPage;
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
  useEffect(() => { document.title = t.title; return () => { document.title = 'ATTIMO Specialty Extra Virgin Olive Oil'; }; }, [t.title]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;

    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          message: message.trim(),
        }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Failed to send");
      }
      setSubmitted(true);
    } catch {
      toast.error(t.error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col" style={{ backgroundColor: "#FFFAEA" }}>
      <Header onWaitlistClick={() => setIsWaitlistOpen(true)} forceScrolled locale={locale} />

      <main className="pt-32 pb-20 px-6 flex-1">
        <div className="container mx-auto max-w-2xl">
          {/* Heading */}
          <h1
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: "Space Grotesk, sans-serif", color: "#1B4229" }}
          >
            {t.heading}
          </h1>
          <p
            className="text-lg md:text-xl leading-relaxed mb-12"
            style={{ fontFamily: "Space Grotesk, sans-serif", color: "#1B4229", opacity: 0.7 }}
          >
            {t.intro}
          </p>

          {submitted ? (
            <div
              className="rounded-2xl p-8 md:p-10 text-center"
              style={{ backgroundColor: "rgba(27,66,41,0.06)" }}
            >
              <div
                className="inline-flex items-center justify-center w-14 h-14 rounded-full mb-5"
                style={{ backgroundColor: "#1B4229" }}
              >
                <Mail size={24} style={{ color: "#B3E58C" }} />
              </div>
              <h2
                className="text-2xl font-semibold mb-2"
                style={{ fontFamily: "Space Grotesk, sans-serif", color: "#1B4229" }}
              >
                {t.thanks}
              </h2>
              <p
                className="leading-relaxed"
                style={{ fontFamily: "Space Grotesk, sans-serif", color: "#1B4229", opacity: 0.7 }}
              >
                {t.thanksBody}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                  style={{ fontFamily: "Space Grotesk, sans-serif", color: "#1B4229" }}
                >
                  {t.name}
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={t.namePlaceholder}
                  className="w-full rounded-xl border-2 px-4 py-3 text-sm outline-none transition-colors focus:border-[#1B4229]"
                  style={{
                    fontFamily: "Space Grotesk, sans-serif",
                    borderColor: "rgba(27,66,41,0.2)",
                    backgroundColor: "white",
                    color: "#1B4229",
                  }}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                  style={{ fontFamily: "Space Grotesk, sans-serif", color: "#1B4229" }}
                >
                  {t.email}
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t.emailPlaceholder}
                  className="w-full rounded-xl border-2 px-4 py-3 text-sm outline-none transition-colors focus:border-[#1B4229]"
                  style={{
                    fontFamily: "Space Grotesk, sans-serif",
                    borderColor: "rgba(27,66,41,0.2)",
                    backgroundColor: "white",
                    color: "#1B4229",
                  }}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                  style={{ fontFamily: "Space Grotesk, sans-serif", color: "#1B4229" }}
                >
                  {t.message}
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={t.messagePlaceholder}
                  className="w-full rounded-xl border-2 px-4 py-3 text-sm outline-none transition-colors resize-none focus:border-[#1B4229]"
                  style={{
                    fontFamily: "Space Grotesk, sans-serif",
                    borderColor: "rgba(27,66,41,0.2)",
                    backgroundColor: "white",
                    color: "#1B4229",
                  }}
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-xl px-6 py-4 font-bold text-sm transition-all duration-300 hover:scale-[1.02] hover:opacity-90 disabled:opacity-50 flex items-center justify-center gap-2"
                style={{
                  fontFamily: "UDC Working Man Sans, sans-serif",
                  backgroundColor: "#1B4229",
                  color: "#FFFAEA",
                  fontSize: "clamp(0.9rem, 1.1vw, 1.1rem)",
                }}
              >
                <Send size={18} strokeWidth={1.5} />
                {loading ? t.sending : t.send}
              </button>
            </form>
          )}

          {/* Contact details */}
          <div
            className="mt-12 pt-8 border-t flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8"
            style={{ borderColor: "rgba(27,66,41,0.15)" }}
          >
            <a
              href="mailto:hello@attimo-oil.com"
              className="flex items-center gap-2 text-sm font-medium hover:underline"
              style={{ fontFamily: "Space Grotesk, sans-serif", color: "#1B4229" }}
            >
              <Mail size={18} strokeWidth={1.5} />
              hello@attimo-oil.com
            </a>
            <a
              href="https://www.instagram.com/attimo.oil"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium hover:underline"
              style={{ fontFamily: "Space Grotesk, sans-serif", color: "#1B4229" }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1B4229" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
              @attimo.oil
            </a>
          </div>
        </div>
      </main>

      <Footer locale={locale} />
      <WaitlistForm isOpen={isWaitlistOpen} onClose={() => setIsWaitlistOpen(false)} />
    </div>
  );
};

export default ContactPage;
