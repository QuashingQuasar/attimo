import { useState } from "react";

// New-harvest list: one email, which oils the visitor wants to hear about.
// Posts to /api/notify once for the season list ("Harvest 26/27") and once per
// ticked oil that has its own Brevo list, so a Coratina tick also lands in the
// Coratina restock list. Oil-list failures are swallowed; the season list is
// the one that has to succeed.
type Oil = { key: string; label: string };

type Props = {
  oils: Oil[];
  emailLabel: string;
  emailPlaceholder: string;
  oilsLabel: string;
  consent: string;
  cta: string;
  done: string;
  doneSub: string;
  error: string;
};

const UDC = "'UDC Working Man Sans', sans-serif";
const SG = "'Space Grotesk', sans-serif";
const CREAM = "#FFFAEA";
const GREEN = "#1B4229";
const ACCENT = "#CDDB2D";

export default function HarvestWaitlistForm(p: Props) {
  const [email, setEmail] = useState("");
  const [picked, setPicked] = useState<Record<string, boolean>>(Object.fromEntries(p.oils.map((o) => [o.key, true])));
  const [state, setState] = useState<"idle" | "busy" | "done" | "error">("idle");

  const post = (product: string) =>
    fetch("/api/notify", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ email: email.trim(), product }) });

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || state === "busy") return;
    setState("busy");
    try {
      const main = await post("Harvest 26/27");
      if (!main.ok) throw new Error(String(main.status));
      await Promise.allSettled(p.oils.filter((o) => picked[o.key]).map((o) => post(o.key)));
      setState("done");
    } catch {
      setState("error");
    }
  };

  if (state === "done") {
    return (
      <div className="rounded-xl px-6 py-7" style={{ backgroundColor: "rgba(255,250,234,.08)", border: "1px solid rgba(255,250,234,.25)" }}>
        <p style={{ fontFamily: UDC, fontWeight: 700, fontSize: "1.2rem", color: ACCENT }}>{p.done}</p>
        <p className="mt-1" style={{ fontFamily: SG, fontSize: "1rem", color: "rgba(255,250,234,.8)" }}>{p.doneSub}</p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="grid gap-5">
      <label className="grid gap-2">
        <span style={{ fontFamily: UDC, fontWeight: 700, fontSize: ".85rem", letterSpacing: ".1em", textTransform: "uppercase", color: ACCENT }}>{p.emailLabel}</span>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={p.emailPlaceholder}
          className="w-full rounded-lg px-4 py-3 outline-none"
          style={{ fontFamily: SG, fontSize: "1.05rem", color: GREEN, backgroundColor: CREAM, border: "1px solid rgba(255,250,234,.4)" }}
        />
      </label>
      <fieldset className="grid gap-2">
        <legend className="mb-2" style={{ fontFamily: UDC, fontWeight: 700, fontSize: ".85rem", letterSpacing: ".1em", textTransform: "uppercase", color: ACCENT }}>{p.oilsLabel}</legend>
        <div className="flex flex-wrap gap-2">
          {p.oils.map((o) => {
            const on = picked[o.key];
            return (
              <label
                key={o.key}
                className="inline-flex items-center gap-2 rounded-full px-4 py-2 cursor-pointer select-none"
                style={{
                  fontFamily: SG, fontSize: ".98rem",
                  color: on ? GREEN : CREAM,
                  backgroundColor: on ? ACCENT : "transparent",
                  border: `1px solid ${on ? ACCENT : "rgba(255,250,234,.45)"}`,
                }}
              >
                <input type="checkbox" className="sr-only" checked={on} onChange={() => setPicked({ ...picked, [o.key]: !on })} />
                <span aria-hidden="true" className="inline-block w-2 h-2 rounded-full" style={{ backgroundColor: on ? GREEN : "rgba(255,250,234,.5)" }} />
                {o.label}
              </label>
            );
          })}
        </div>
      </fieldset>
      <div className="flex flex-col sm:flex-row sm:items-center gap-4">
        <button
          type="submit"
          disabled={state === "busy"}
          style={{ fontFamily: UDC, fontWeight: 700, fontSize: "1.05rem", letterSpacing: ".05em", borderRadius: 8, padding: ".95rem 1.6rem", backgroundColor: ACCENT, color: GREEN, opacity: state === "busy" ? 0.7 : 1 }}
        >
          {p.cta}
        </button>
        <p style={{ fontFamily: SG, fontSize: ".9rem", color: "rgba(255,250,234,.65)" }}>{p.consent}</p>
      </div>
      {state === "error" && <p style={{ fontFamily: SG, fontSize: ".95rem", color: "#F2B8A2" }}>{p.error}</p>}
    </form>
  );
}
