import { useState } from "react";
import { DEFAULT_LOCALE, type Locale } from "@/lib/i18n/config";
import { getDict } from "@/lib/i18n/dictionaries";

// Hero signup for the new harvest, shown between seasons. One field, posts to
// /api/notify under the season product key, which maps to the season's Brevo
// list. Sits under the logo; the shop CTA becomes the secondary action.
const UDC = "'UDC Working Man Sans', sans-serif";
const SG = "'Space Grotesk', sans-serif";

export const HarvestSignup = ({ locale = DEFAULT_LOCALE, line, button }: { locale?: Locale; line?: string | null; button?: string }) => {
  const t = getDict(locale);
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "busy" | "done" | "error">("idle");

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || state === "busy") return;
    setState("busy");
    try {
      const r = await fetch("/api/notify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim(), product: "Harvest 26/27" }),
      });
      setState(r.ok ? "done" : "error");
    } catch {
      setState("error");
    }
  };

  const shadow = "0 1px 12px rgba(0,0,0,.55)";

  if (state === "done") {
    return (
      <p className="mx-auto max-w-xl" style={{ fontFamily: SG, fontSize: "clamp(1rem,1.2vw,1.15rem)", color: "#FFFAEA", textShadow: shadow }}>
        {t.hero.harvest.success}
      </p>
    );
  }

  return (
    <form onSubmit={submit} className="mx-auto w-full" style={{ maxWidth: 560 }}>
      {line !== null && (
        <p className="mb-4" style={{ fontFamily: SG, fontSize: "clamp(1.02rem,1.3vw,1.25rem)", color: "#FFFAEA", textShadow: shadow }}>
          {line ?? t.hero.harvest.line}
        </p>
      )}
      <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-2">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={t.hero.harvest.placeholder}
          aria-label={t.hero.harvest.placeholder}
          className="flex-1 rounded-lg px-4 py-3.5 outline-none"
          style={{ fontFamily: SG, fontSize: "1.02rem", color: "#1B4229", backgroundColor: "rgba(255,250,234,.96)", border: "2px solid rgba(255,250,234,.6)" }}
        />
        <button
          type="submit"
          disabled={state === "busy"}
          className="rounded-lg px-7 py-3.5 font-semibold transition-all duration-300 hover:scale-[1.03]"
          style={{ fontFamily: UDC, fontSize: "1.05rem", letterSpacing: ".04em", color: "#1B4229", backgroundColor: "#CDDB2D", border: "2px solid #CDDB2D", opacity: state === "busy" ? 0.7 : 1, whiteSpace: "nowrap" }}
        >
          {button ?? t.hero.harvest.button}
        </button>
      </div>
      {state === "error" && (
        <p className="mt-3" style={{ fontFamily: SG, fontSize: ".95rem", color: "#F2B8A2", textShadow: shadow }}>{t.notify.error}</p>
      )}
    </form>
  );
};
