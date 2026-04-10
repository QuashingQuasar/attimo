import { useState, useEffect, useCallback } from "react";
import { X, Copy, Check } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const STORAGE_KEY_WELCOMED = "attimo_welcomed";
const SESSION_KEY_DISMISSED = "attimo_popup_dismissed";
const SESSION_KEY_SHOWN = "attimo_popup_shown";
const DISCOUNT_CODE = "FIRSTPRESS";

export const FirstOrderPopup = () => {
  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [agreed, setAgreed] = useState(false);

  useEffect(() => {
    // Never show if already welcomed or dismissed/shown this session
    if (localStorage.getItem(STORAGE_KEY_WELCOMED) === "true") return;
    if (sessionStorage.getItem(SESSION_KEY_DISMISSED) === "true") return;
    if (sessionStorage.getItem(SESSION_KEY_SHOWN) === "true") return;

    const timer = setTimeout(() => {
      sessionStorage.setItem(SESSION_KEY_SHOWN, "true");
      setVisible(true);
    }, 20000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = useCallback(() => {
    setVisible(false);
    sessionStorage.setItem(SESSION_KEY_DISMISSED, "true");
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || submitting || !agreed) return;

    setSubmitting(true);
    try {
      // Add to Brevo newsletter list
      await supabase.functions.invoke("add-brevo-contact", {
        body: { email: email.trim() },
      });

      // Send transactional discount email
      await supabase.functions.invoke("send-discount-email", {
        body: { email: email.trim() },
      });

      localStorage.setItem(STORAGE_KEY_WELCOMED, "true");
      setSubmitted(true);
    } catch (err) {
      console.error("Popup submit error:", err);
    } finally {
      setSubmitting(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(DISCOUNT_CODE);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center px-4"
      style={{ animation: "popupFadeIn 0.35s ease-out" }}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Popup */}
      <div
        className="relative w-full max-w-md rounded-xl p-8 shadow-2xl"
        style={{
          backgroundColor: "#1B4229",
          animation: "popupSlideUp 0.35s ease-out",
        }}
      >
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors"
          aria-label="Close"
        >
          <X size={20} />
        </button>

        {!submitted ? (
          <>
            <h2
              className="text-white mb-2"
              style={{
                fontFamily: "UDC Working Man Sans, sans-serif",
                fontSize: "clamp(1.35rem, 2.5vw, 1.75rem)",
                lineHeight: 1.2,
              }}
            >
              Get 15% off your first order
            </h2>
            <p
              className="mb-6"
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                fontSize: "clamp(0.9rem, 1.1vw, 1.05rem)",
                color: "hsl(45, 25%, 80%)",
              }}
            >
              We'll email your discount code.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="email"
                required
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-lg px-4 py-3 text-olive-dark placeholder:text-olive-medium/50 focus:outline-none focus:ring-2 focus:ring-gold-rich"
                style={{
                  fontFamily: "Space Grotesk, sans-serif",
                  fontSize: "clamp(0.9rem, 1vw, 1rem)",
                  backgroundColor: "hsl(45, 25%, 97%)",
                }}
              />
              <button
                type="submit"
                disabled={submitting}
                className="w-full rounded-lg py-3 font-semibold transition-all disabled:opacity-50"
                style={{
                  fontFamily: "UDC Working Man Sans, sans-serif",
                  fontSize: "clamp(0.95rem, 1.1vw, 1.1rem)",
                  backgroundColor: "hsl(46, 87%, 53%)",
                  color: "hsl(122, 42%, 18%)",
                }}
              >
                {submitting ? "Submitting…" : "Get my code"}
              </button>
            </form>

            <p
              className="mt-3 text-center"
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                fontSize: "0.75rem",
                color: "hsl(45, 25%, 60%)",
              }}
            >
              I agree to get emails from ATTIMO
            </p>
          </>
        ) : (
          <div className="text-center py-2">
            <p
              className="mb-1"
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                fontSize: "0.9rem",
                color: "hsl(45, 25%, 80%)",
              }}
            >
              Your code is
            </p>
            <div className="flex items-center justify-center gap-3 mb-4">
              <span
                className="tracking-widest text-white"
                style={{
                  fontFamily: "UDC Working Man Sans, sans-serif",
                  fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
                }}
              >
                {DISCOUNT_CODE}
              </span>
              <button
                onClick={handleCopy}
                className="rounded-md p-2 transition-colors"
                style={{
                  backgroundColor: "hsl(122, 42%, 25%)",
                  color: copied ? "hsl(46, 87%, 53%)" : "hsl(45, 25%, 80%)",
                }}
                aria-label="Copy code"
              >
                {copied ? <Check size={16} /> : <Copy size={16} />}
              </button>
            </div>
            <p
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                fontSize: "0.85rem",
                color: "hsl(45, 25%, 65%)",
              }}
            >
              You can also find it in your inbox
            </p>
          </div>
        )}
      </div>

      <style>{`
        @keyframes popupFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes popupSlideUp {
          from { opacity: 0; transform: translateY(20px) scale(0.97); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>
    </div>
  );
};
