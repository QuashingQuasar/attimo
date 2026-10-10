import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useState, useEffect, type ReactNode } from "react";
import { WaitlistForm } from "@/components/WaitlistForm";
import { DEFAULT_LOCALE, type Locale } from "@/lib/i18n/config";
import type { LegalDoc } from "@/lib/legalContent";

// Inline **bold** and [label](href) only.
function inline(text: string): ReactNode[] {
  const out: ReactNode[] = [];
  const re = /(\*\*[^*]+\*\*)|(\[[^\]]+\]\([^)]+\))/g;
  let last = 0, m: RegExpExecArray | null, i = 0;
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) out.push(text.slice(last, m.index));
    if (m[1]) out.push(<strong key={i++}>{m[1].slice(2, -2)}</strong>);
    else if (m[2]) { const lm = /^\[([^\]]+)\]\(([^)]+)\)$/.exec(m[2])!; out.push(<a key={i++} href={lm[2]} className="underline font-medium">{lm[1]}</a>); }
    last = re.lastIndex;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
}

const LegalPage = ({ doc, locale = DEFAULT_LOCALE }: { doc: LegalDoc; locale?: Locale }) => {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
  useEffect(() => { document.title = doc.metaTitle; return () => { document.title = 'ATTIMO Specialty Extra Virgin Olive Oil'; }; }, [doc.metaTitle]);

  return (
    <div className="relative min-h-screen" style={{ backgroundColor: '#FFFAEA' }}>
      <Header onWaitlistClick={() => setIsWaitlistOpen(true)} forceScrolled locale={locale} />
      <main className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif', color: '#1B4229' }}>{doc.title}</h1>
          <p className="text-sm mb-12" style={{ fontFamily: 'Space Grotesk, sans-serif', color: '#1B4229', opacity: 0.6 }}>{doc.updated}</p>
          <div className="space-y-10" style={{ fontFamily: 'Space Grotesk, sans-serif', color: '#1B4229' }}>
            {doc.sections.map((s) => (
              <section key={s.h2}>
                <h2 className="text-2xl font-semibold mb-3">{s.h2}</h2>
                {s.blocks.map((b, i) =>
                  b.kind === "p" ? <p key={i} className="leading-relaxed opacity-80 mb-3">{inline(b.text)}</p>
                  : b.kind === "h3" ? <h3 key={i} className="text-lg font-semibold mt-5 mb-2">{b.text}</h3>
                  : b.kind === "ul" ? <ul key={i} className="list-disc pl-6 space-y-2 opacity-80 mb-3">{b.items.map((it, j) => <li key={j}>{inline(it)}</li>)}</ul>
                  : <div key={i} className="mt-3 opacity-80 space-y-1">{b.lines.map((l, j) => <p key={j}>{inline(l)}</p>)}</div>
                )}
              </section>
            ))}
          </div>
        </div>
      </main>
      <Footer locale={locale} />
      <WaitlistForm isOpen={isWaitlistOpen} onClose={() => setIsWaitlistOpen(false)} />
    </div>
  );
};

export default LegalPage;
