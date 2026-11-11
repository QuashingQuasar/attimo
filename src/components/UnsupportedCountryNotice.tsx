import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { MapPin } from "lucide-react";

interface UnsupportedCountryNoticeProps {
  countryName: string;
  countryCode: string;
  productName?: string;
  /** Button colour; the product page passes the oil's accent. */
  buttonColor?: string;
}

export const UnsupportedCountryNotice = ({
  countryName,
  countryCode,
  productName,
  buttonColor = "#CDDB2D",
}: UnsupportedCountryNoticeProps) => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setLoading(true);
    try {
      const { error } = await supabase
        .from("shipping_expansion_requests")
        .insert({
          email: email.trim(),
          country_code: countryCode,
          country_name: countryName,
          product_name: productName ?? null,
        });

      if (error) throw error;
      setSubmitted(true);
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Same surface as the sold-out form (NotifyMeForm): dark green box, cream
  // text, white field, the oil's accent on the button.
  return (
    <div className="rounded-xl px-5 py-5 space-y-4" style={{ backgroundColor: "#1B4229" }}>
      <div className="flex items-start gap-3">
        <MapPin
          size={20}
          strokeWidth={1.5}
          className="flex-shrink-0 mt-0.5"
          style={{ color: "#FFFAEA" }}
        />
        <p
          className="leading-relaxed"
          style={{
            fontFamily: "Space Grotesk, sans-serif",
            color: "#FFFAEA",
            fontSize: "clamp(0.95rem, 1.1vw, 1.1rem)",
          }}
        >
          We don't ship to <strong>{countryName}</strong> yet — but we're
          working on it.
        </p>
      </div>

      {submitted ? (
        <p
          style={{
            fontFamily: "Space Grotesk, sans-serif",
            color: "rgba(255, 250, 234, 0.75)",
            fontSize: "clamp(0.9rem, 1vw, 1rem)",
          }}
        >
          We'll let you know as soon as we ship to {countryName}. ✓
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            type="email"
            required
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 min-w-0 rounded-lg border-2 border-transparent bg-white px-4 py-2.5 text-olive-dark placeholder:text-olive-medium/60 focus:outline-none focus:border-white transition-colors"
            style={{
              fontFamily: "Space Grotesk, sans-serif",
              fontSize: "clamp(0.85rem, 1vw, 1rem)",
            }}
          />
          <button
            type="submit"
            disabled={loading}
            className="rounded-lg px-4 sm:px-5 py-2.5 font-bold whitespace-nowrap flex-shrink-0 transition-all disabled:opacity-50 hover:opacity-90"
            style={{
              backgroundColor: buttonColor,
              color: "#1B4229",
              fontFamily: "UDC Working Man Sans, sans-serif",
              fontSize: "clamp(0.85rem, 1vw, 1rem)",
            }}
          >
            {loading ? "..." : "Notify me"}
          </button>
        </form>
      )}
    </div>
  );
};
