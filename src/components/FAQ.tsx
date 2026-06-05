import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ReactNode } from "react";
import { Link } from "@/lib/router-stub";
import { DEFAULT_LOCALE, type Locale } from "@/lib/i18n/config";
import { getDict, type Dict } from "@/lib/i18n/dictionaries";

interface FaqItem {
  question: string;
  answer: string | null;
  answerElement?: ReactNode;
}

type VarietyKey = "coratina" | "nocellara" | "picual";

function getFaqs(handle: string | undefined, t: Dict["faq"]): FaqItem[] {
  const h = (handle || "") as VarietyKey | "";
  const isVariety = (k: string): k is VarietyKey =>
    k === "coratina" || k === "nocellara" || k === "picual";
  const varietyName = h ? h.charAt(0).toUpperCase() + h.slice(1) : "";

  return [
    {
      question: t.q.different,
      answer: t.a.different,
    },
    {
      question: t.q.origin,
      answer: isVariety(h) ? t.origin[h] : t.origin.generic,
    },
    {
      question: h ? t.q.tasteTemplate.replace("{variety}", varietyName) : t.q.tasteNoHandle,
      answer: isVariety(h) ? t.flavour[h] : t.flavour.generic,
    },
    {
      question: t.q.polyphenols,
      answer: null,
      answerElement: (
        <>
          {t.a.polyphenolsText}{" "}
          <Link
            to="/blog/polyphenols-in-olive-oil-explained"
            className="underline hover:no-underline"
            style={{ color: "#1B4229" }}
          >
            {t.a.polyphenolsLink}
          </Link>
          .
        </>
      ),
    },
    {
      question: t.q.fresh,
      answer: t.a.fresh,
    },
    {
      question: t.q.lab,
      answer: h ? null : t.a.labGeneric,
      answerElement: h ? (() => {
        const labUrls: Record<string, string> = {
          coratina: "/lab/Coratina2025.pdf",
          nocellara: "/lab/Nocellara2025.pdf",
          picual: "/lab/Picual2025.pdf",
        };
        const labUrl = labUrls[h];
        return (
          <>
            {t.a.labText}{" "}
            <a
              href={labUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:no-underline"
              style={{ color: "#1B4229" }}
            >
              {t.a.labLinkPrefix}{varietyName}
            </a>
            .
          </>
        );
      })() : undefined,
    },
    {
      question: t.q.use,
      answer: null,
      answerElement: (
        <>
          {isVariety(h) ? t.use[h] : t.use.generic}{" "}
          <Link
            to="/blog/should-you-cook-with-olive-oil"
            className="underline hover:no-underline"
            style={{ color: "#1B4229" }}
          >
            {t.a.useLink}
          </Link>
          .
        </>
      ),
    },
    {
      question: t.q.store,
      answer: t.a.store,
    },
    {
      question: t.q.cancel,
      answer: null,
      answerElement: (
        <>
          {t.a.cancelPre}
          <a href="mailto:hello@attimo-oil.com" className="underline hover:no-underline" style={{ color: "#1B4229" }}>
            hello@attimo-oil.com
          </a>
          {t.a.cancelPost}
        </>
      ),
    },
    {
      question: t.q.organic,
      answer: t.a.organic,
    },
    {
      question: t.q.wholesale,
      answer: null,
      answerElement: (
        <>
          {t.a.wholesalePre}
          <Link to="/contact" className="underline hover:no-underline" style={{ color: "#1B4229" }}>
            {t.a.wholesaleContactLink}
          </Link>
          {t.a.wholesaleMid}
          <a href="mailto:hello@attimo-oil.com" className="underline hover:no-underline" style={{ color: "#1B4229" }}>
            hello@attimo-oil.com
          </a>
          {t.a.wholesalePost}
        </>
      ),
    },
    {
      question: t.q.shipping,
      answer: null,
      answerElement: (
        <>
          {t.a.shippingText}{" "}
          <a
            href="/shipping"
            className="underline hover:no-underline"
            style={{ color: "#1B4229" }}
          >
            {t.a.shippingLink}
          </a>
          .
        </>
      ),
    },
  ];
}

interface FAQProps {
  handle?: string;
  locale?: Locale;
}

export const FAQ = ({ handle, locale = DEFAULT_LOCALE }: FAQProps) => {
  const t = getDict(locale).faq;
  const faqs = getFaqs(handle, t);

  return (
    <section className="pt-[35px] md:pt-[51px] lg:pt-[62px] pb-14 md:pb-20 lg:pb-24" style={{ backgroundColor: "#FFFAEA" }}>
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-8 md:mb-10">
          <h2 className="font-beverly font-bold mb-4 tracking-tight" style={{ color: "#1B4229", fontSize: "clamp(2.2rem, 3.64vw, 4.1rem)" }}>
            {t.heading}
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border rounded-2xl px-6 overflow-hidden" style={{ borderColor: "#1B4229", backgroundColor: "white" }}>
              <AccordionTrigger className="text-left font-medium py-6 hover:no-underline" style={{ color: "#1B4229", fontSize: "clamp(1rem, 1.3vw, 1.5rem)" }}>
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="pb-6 leading-relaxed" style={{ fontFamily: "Space Grotesk, sans-serif", color: "#1B4229", fontSize: "clamp(0.875rem, 1.1vw, 1.25rem)" }}>
                {faq.answerElement || faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
