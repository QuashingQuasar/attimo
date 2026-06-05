import { useState } from "react";
import { toast } from "sonner";
import { DEFAULT_LOCALE, type Locale } from "@/lib/i18n/config";
import { getDict } from "@/lib/i18n/dictionaries";

interface NotifyMeFormProps {
  productName: string;
  locale?: Locale;
  /**
   * @deprecated kept for API back-compat; the container is now always rendered
   * on the dark forest-green brand surface.
   */
  backgroundColor?: string;
  /** Override the default "Coming Soon" heading. */
  heading?: string;
  /** Override the default "Get notified when {productName} is in stock." subtitle. */
  subtitle?: string;
  /** Background color for the submit button. Defaults to the brand chartreuse. */
  buttonBackgroundColor?: string;
  /**
   * Short identifier for the product this restock signup is for (e.g.
   * "Coratina", "Picual"). Stored on the Brevo contact under the
   * `RESTOCK_PRODUCT` attribute so the audience can be segmented when sending
   * the restock email. Falls back to `productName` when not supplied.
   */
  restockProductKey?: string;
}

// Brand surface for the OOS CTA — matches the dark forest green of the top
// shipping bar so the CTA stands out from the cream page background.
const CONTAINER_BG = "#1B4229";
const CONTAINER_TEXT = "#FFFAEA";
const CONTAINER_TEXT_MUTED = "rgba(255, 250, 234, 0.75)";

export const NotifyMeForm = ({
  productName,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  backgroundColor: _ignoredBackgroundColor,
  heading,
  subtitle,
  buttonBackgroundColor = "#CDDB2D",
  restockProductKey,
  locale = DEFAULT_LOCALE,
}: NotifyMeFormProps) => {
  const t = getDict(locale).notify;
  const headingText = heading ?? t.comingSoon;
  const subtitleText = subtitle ?? t.subtitle.replace("{name}", productName);
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setSubmitting(true);
    try {
      const response = await fetch("/api/notify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email.trim(),
          product: restockProductKey ?? productName,
        }),
      });

      if (!response.ok) {
        let detail = "Something went wrong";
        try {
          const data = await response.json();
          if (data?.error) detail = data.error;
        } catch {
          /* ignore non-JSON error bodies */
        }
        throw new Error(detail);
      }

      setSubmitted(true);
      toast.success(t.success, {
        position: "top-center",
      });
    } catch (err) {
      console.error("Error submitting notify form:", err);
      toast.error(t.error, {
        position: "top-center",
      });
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div
        className="rounded-xl px-5 py-6 text-center"
        style={{ backgroundColor: CONTAINER_BG }}
      >
        <p
          className="font-semibold"
          style={{
            color: CONTAINER_TEXT,
            fontFamily: "UDC Working Man Sans, sans-serif",
            fontSize: "clamp(0.95rem, 1.1vw, 1.15rem)",
          }}
        >
          {t.onList}
        </p>
        <p
          className="mt-1"
          style={{
            color: CONTAINER_TEXT_MUTED,
            fontFamily: "Space Grotesk, sans-serif",
            fontSize: "clamp(0.8rem, 0.95vw, 1rem)",
          }}
        >
          {t.emailWhenStock.replace("{name}", productName)}
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <div
        className="rounded-xl px-5 py-5"
        style={{ backgroundColor: CONTAINER_BG }}
      >
        <p
          className="font-semibold mb-1"
          style={{
            color: CONTAINER_TEXT,
            fontFamily: "UDC Working Man Sans, sans-serif",
            fontSize: "clamp(0.95rem, 1.1vw, 1.15rem)",
          }}
        >
          {headingText}
        </p>
        <p
          className="mb-4"
          style={{
            color: CONTAINER_TEXT_MUTED,
            fontFamily: "Space Grotesk, sans-serif",
            fontSize: "clamp(0.8rem, 0.95vw, 1rem)",
          }}
        >
          {subtitleText}
        </p>
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            type="email"
            required
            placeholder={t.placeholder}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 rounded-lg border-2 border-transparent bg-white px-4 py-2.5 text-olive-dark placeholder:text-olive-medium/60 focus:outline-none focus:border-white transition-colors"
            style={{
              fontFamily: "Space Grotesk, sans-serif",
              fontSize: "clamp(0.85rem, 1vw, 1rem)",
            }}
          />
          <button
            type="submit"
            disabled={submitting}
            className="rounded-lg px-5 py-2.5 font-bold transition-all disabled:opacity-50 hover:opacity-90"
            style={{
              backgroundColor: buttonBackgroundColor,
              color: "#1B4229",
              fontFamily: "UDC Working Man Sans, sans-serif",
              fontSize: "clamp(0.85rem, 1vw, 1rem)",
            }}
          >
            {submitting ? "..." : t.notifyMe}
          </button>
        </form>
      </div>
    </div>
  );
};
