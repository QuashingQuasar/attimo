import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WaitlistForm } from "@/components/WaitlistForm";
import { DEFAULT_LOCALE, type Locale } from "@/lib/i18n/config";

const TEXT = "#1B4229";
const TEXT_MUTED = "#5a6e54";
const BORDER = "rgba(27, 66, 41, 0.12)";
const CARD_BG = "#f5edda";
const ACCENT = "#CDDB2D";
const CREAM = "#FFFAEA";

const FONT = "Space Grotesk, sans-serif";

interface AmbassadorsPageProps {
  locale?: Locale;
}

const AmbassadorsPage = ({ locale = DEFAULT_LOCALE }: AmbassadorsPageProps = {}) => {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
  const [name, setName] = useState("");
  const [handle, setHandle] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim() || status === "sending") return;
    setStatus("sending");
    setErrorMsg("");
    try {
      const res = await fetch("/api/ambassador", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, handle, message }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Failed to send");
      }
      setStatus("sent");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong");
    }
  };

  useEffect(() => {
    document.title = "Ambassadors | ATTIMO Specialty Extra Virgin Olive Oil";
    return () => {
      document.title = "ATTIMO Specialty Extra Virgin Olive Oil";
    };
  }, []);

  return (
    <div
      className="min-h-screen overflow-y-scroll h-screen"
      style={{ backgroundColor: CREAM, fontFamily: FONT, color: TEXT }}
    >
      <Header
        onWaitlistClick={() => setIsWaitlistOpen(true)}
        forceTransparent
        locale={locale}
      />

      {/* HERO */}
      <section
        className="relative flex flex-col justify-end"
        style={{
          minHeight: "80vh",
          padding: "140px 0 72px",
          backgroundImage: "url('/images/ambassadors-hero.png')",
          backgroundSize: "cover",
          backgroundPosition: "center 30%",
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.45) 40%, rgba(0,0,0,0.15) 100%)",
          }}
          aria-hidden="true"
        />
        <div
          className="relative mx-auto w-full px-6"
          style={{ maxWidth: 1100, zIndex: 1 }}
        >
          <div
            style={{
              fontSize: "clamp(13px, 1vw, 16px)",
              letterSpacing: 3.5,
              textTransform: "uppercase",
              color: "rgba(255, 255, 255, 0.7)",
              marginBottom: 20,
              fontWeight: 500,
            }}
          >
            Extra virgins only
          </div>
          <h1
            style={{
              fontFamily: "UDC Working Man Sans, sans-serif",
              fontSize: "clamp(36px, 5vw, 76px)",
              fontWeight: 400,
              lineHeight: 1.1,
              color: "#fff",
              marginBottom: 24,
              letterSpacing: "-1px",
              textWrap: "balance",
            }}
          >
            Get paid for helping us pour more ATTIMO olive oil
          </h1>
          <p
            style={{
              fontSize: "clamp(17px, 1.35vw, 22px)",
              color: "rgba(255, 255, 255, 0.95)",
              maxWidth: 920,
              lineHeight: 1.55,
              fontWeight: 400,
            }}
          >
            Get a personal discount code to share ATTIMO with friends, family and followers.
            Your people get 15% off. You earn 15% on every bottle.
          </p>
        </div>
      </section>

      {/* THIS IS FOR YOU IF */}
      <section
        className="mx-auto w-full px-6"
        style={{ maxWidth: 1100, padding: "96px 24px", borderTop: `1px solid ${BORDER}` }}
      >
        <div style={sectionLabel}>This is for you if</div>
        <h2 style={sectionHeading}>
          You take olive oil very seriously and think your friends or followers should too
        </h2>
        <p style={sectionBody}>
          Whether it's over coffee, at the dinner table, in a story, on a blog or a recipe video:
          if someone buys an ATTIMO bottle thanks to you, we would love to cut you in. No minimum
          followers, no content requirements. If you are a food creator, great. If you just have
          friends and family who love great food, also great.
        </p>
      </section>

      {/* GET STARTED + DEAL CARDS */}
      <section
        className="mx-auto w-full px-6"
        style={{ maxWidth: 1100, padding: "96px 24px", borderTop: `1px solid ${BORDER}` }}
      >
        <div style={sectionLabel}>Get started today</div>

        <div
          className="grid gap-6 md:gap-6"
          style={{
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
            marginTop: 40,
          }}
          data-steps
        >
          <Step n={1} title={
            <a
              href="#form"
              style={{
                color: TEXT,
                textDecoration: "underline",
                textUnderlineOffset: 3,
              }}
            >
              Drop us a few lines
            </a>
          }>
            So we can get to know you.
          </Step>
          <Step n={2} title="Get your personal code">
            Share it with whoever and wherever; link in bio, dinner party, group chat.
          </Step>
          <Step n={3} title="Get paid monthly">
            We track everything in a nice dashboard. Commissions are paid at the end of each month.
          </Step>
        </div>

        <div
          className="grid gap-5"
          style={{
            gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
            marginTop: 40,
          }}
          data-deals
        >
          <DealCard dark label="For them" desc="Off their order. Better than anything else on the site." />
          <DealCard label="For you" desc="Commission on every bottle sold through your code. No minimum, no cap." />
        </div>
      </section>

      {/* FORM */}
      <section
        id="form"
        className="mx-auto w-full px-6"
        style={{ maxWidth: 1100, padding: "104px 24px", borderTop: `1px solid ${BORDER}` }}
      >
        <h2 style={{ ...sectionHeading, marginBottom: 12 }}>Ready to share ATTIMO?</h2>
        <p
          style={{
            fontSize: "clamp(17px, 1.35vw, 22px)",
            color: TEXT_MUTED,
            marginBottom: 48,
            fontWeight: 300,
            maxWidth: 700,
          }}
        >
          We'll get back to you within a couple of days.
        </p>

        {status === "sent" ? (
          <p
            style={{
              fontSize: "clamp(17px, 1.35vw, 22px)",
              color: TEXT,
              fontWeight: 400,
              maxWidth: 700,
            }}
          >
            Thanks ! We'll get back to you soon.
          </p>
        ) : (
          <form onSubmit={handleSubmit} noValidate>
            <div
              className="grid gap-4"
              style={{
                gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                marginBottom: 16,
              }}
              data-form-grid
            >
              <FormField
                label="Name"
                id="name"
                placeholder="Your name"
                value={name}
                onChange={setName}
              />
              <FormField
                label="Instagram / website"
                id="handle"
                placeholder="@handle or URL"
                value={handle}
                onChange={setHandle}
              />
              <FormField
                label="A few words about yourself"
                id="message"
                placeholder="Who are you and why do you like ATTIMO?"
                textarea
                full
                value={message}
                onChange={setMessage}
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              style={{
                display: "inline-block",
                padding: "18px 48px",
                background: ACCENT,
                color: TEXT,
                border: "none",
                fontFamily: FONT,
                fontSize: 15,
                fontWeight: 700,
                letterSpacing: 1.5,
                textTransform: "uppercase",
                borderRadius: 6,
                cursor: status === "sending" ? "wait" : "pointer",
                opacity: status === "sending" ? 0.6 : 1,
                transition: "opacity 0.2s ease",
                marginTop: 8,
              }}
              onMouseEnter={(e) => {
                if (status !== "sending") (e.target as HTMLButtonElement).style.opacity = "0.85";
              }}
              onMouseLeave={(e) => {
                if (status !== "sending") (e.target as HTMLButtonElement).style.opacity = "1";
              }}
            >
              {status === "sending" ? "Sending…" : "Send"}
            </button>

            {status === "error" && (
              <p style={{ marginTop: 16, color: "#a33", fontSize: 14 }}>
                {errorMsg || "Something went wrong. Please try again."}
              </p>
            )}
          </form>
        )}
      </section>

      <Footer locale={locale} />
      <WaitlistForm isOpen={isWaitlistOpen} onClose={() => setIsWaitlistOpen(false)} />

      {/* Responsive overrides — the brief calls for 3-col → 1-col and 2-col → 1-col at 640px */}
      <style>{`
        @media (max-width: 640px) {
          section[style*="80vh"] { min-height: 65vh !important; padding: 120px 0 60px !important; }
          [data-steps] { grid-template-columns: 1fr !important; }
          [data-deals] { grid-template-columns: 1fr !important; }
          [data-form-grid] { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
};

const sectionLabel = {
  fontSize: "clamp(13px, 1vw, 16px)",
  letterSpacing: 3.5,
  textTransform: "uppercase",
  color: TEXT_MUTED,
  marginBottom: 28,
  fontWeight: 500,
};

const sectionHeading = {
  fontFamily: "UDC Working Man Sans, sans-serif",
  fontSize: "clamp(28px, 3.6vw, 52px)",
  fontWeight: 400,
  lineHeight: 1.15,
  marginBottom: 28,
  color: TEXT,
  letterSpacing: "-0.5px",
  textWrap: "balance" as const,
};

const sectionBody = {
  fontSize: "clamp(17px, 1.35vw, 22px)",
  color: TEXT_MUTED,
  lineHeight: 1.7,
  maxWidth: 900,
  fontWeight: 300,
};

const Step = ({
  n,
  title,
  children,
}: {
  n: number;
  title: React.ReactNode;
  children: React.ReactNode;
}) => (
  <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
    <div
      style={{
        fontSize: 15,
        fontWeight: 600,
        color: TEXT,
        background: ACCENT,
        width: 44,
        height: 44,
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
      }}
    >
      {n}
    </div>
    <div>
      <h3
        style={{
          fontFamily: "UDC Working Man Sans, sans-serif",
          fontSize: "clamp(19px, 1.5vw, 24px)",
          fontWeight: 500,
          marginBottom: 8,
          color: TEXT,
        }}
      >
        {title}
      </h3>
      <p
        style={{
          fontSize: "clamp(17px, 1.35vw, 22px)",
          color: TEXT_MUTED,
          lineHeight: 1.65,
          fontWeight: 300,
        }}
      >
        {children}
      </p>
    </div>
  </div>
);

const DealCard = ({
  dark = false,
  label,
  desc,
}: {
  dark?: boolean;
  label: string;
  desc: string;
}) => (
  <div
    style={{
      background: dark ? TEXT : CARD_BG,
      border: `1px solid ${dark ? TEXT : BORDER}`,
      borderRadius: 10,
      padding: "52px 44px",
      color: dark ? CREAM : TEXT,
    }}
  >
    <div
      style={{
        fontSize: "clamp(13px, 1vw, 16px)",
        letterSpacing: 3,
        textTransform: "uppercase",
        color: dark ? "rgba(255, 250, 234, 0.6)" : TEXT_MUTED,
        marginBottom: 22,
        fontWeight: 500,
      }}
    >
      {label}
    </div>
    <div
      style={{
        fontSize: "clamp(64px, 6.5vw, 104px)",
        fontWeight: 300,
        lineHeight: 1,
        marginBottom: 22,
        letterSpacing: "-3px",
      }}
    >
      15<span style={{ fontSize: "0.5em", fontWeight: 400, letterSpacing: 0 }}>%</span>
    </div>
    <div
      style={{
        fontSize: "clamp(17px, 1.35vw, 22px)",
        lineHeight: 1.65,
        color: dark ? "rgba(255, 250, 234, 0.7)" : TEXT_MUTED,
        fontWeight: 300,
      }}
    >
      {desc}
    </div>
  </div>
);

const FormField = ({
  label,
  id,
  placeholder,
  textarea = false,
  full = false,
  value,
  onChange,
}: {
  label: string;
  id: string;
  placeholder: string;
  textarea?: boolean;
  full?: boolean;
  value: string;
  onChange: (v: string) => void;
}) => {
  const inputStyle = {
    fontFamily: FONT,
    fontSize: 17,
    fontWeight: 300,
    padding: "16px 18px",
    background: CARD_BG,
    border: `1px solid ${BORDER}`,
    borderRadius: 6,
    color: TEXT,
    outline: "none",
    transition: "border-color 0.2s ease",
    width: "100%",
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 6,
        gridColumn: full ? "1 / -1" : undefined,
      }}
    >
      <label
        htmlFor={id}
        style={{
          fontSize: 13,
          letterSpacing: 2,
          textTransform: "uppercase",
          color: TEXT_MUTED,
          fontWeight: 500,
        }}
      >
        {label}
      </label>
      {textarea ? (
        <textarea
          id={id}
          name={id}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          style={{ ...inputStyle, resize: "vertical", minHeight: 100 }}
          onFocus={(e) => (e.target.style.borderColor = TEXT)}
          onBlur={(e) => (e.target.style.borderColor = BORDER)}
        />
      ) : (
        <input
          type="text"
          id={id}
          name={id}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          style={inputStyle}
          onFocus={(e) => (e.target.style.borderColor = TEXT)}
          onBlur={(e) => (e.target.style.borderColor = BORDER)}
        />
      )}
    </div>
  );
};

export default AmbassadorsPage;
