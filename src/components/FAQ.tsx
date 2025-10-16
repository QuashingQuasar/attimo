import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What makes ATTIMO olive oil different?",
    answer: "ATTIMO sources directly from single groves, ensuring every bottle comes from the latest harvest with no blending or middlemen. Each bottle is lab-tested for quality markers like polyphenol content, giving you the real, health-boosting extra virgin olive oil most people have never tasted."
  },
  {
    question: "What are polyphenols and why do they matter?",
    answer: "Polyphenols are natural compounds in olive oil that provide the health benefits you've heard about—anti-inflammatory properties, heart health support, and antioxidant protection. Most store-bought oils have low polyphenol levels due to processing and blending. ATTIMO oils are high in polyphenols because they're fresh, unblended, and from quality sources."
  },
  {
    question: "How fresh is the olive oil?",
    answer: "Every bottle is from the latest harvest and bottled quickly to preserve freshness. Unlike mass-produced oils that can sit for months or years, ATTIMO delivers oil within months of harvest, ensuring you get maximum flavor and health benefits."
  },
  {
    question: "Can I see the lab results for my bottle?",
    answer: "Absolutely. Every batch is third-party lab tested, and you can verify the quality markers yourself. We believe in complete transparency—you should know exactly what you're getting."
  },
  {
    question: "Why does real extra virgin olive oil taste bitter or peppery?",
    answer: "That bitterness and peppery kick come from polyphenols—the compounds that make olive oil healthy. Most people are used to bland, over-processed oils. Real extra virgin should have character: it's intense, fresh, and complex."
  },
  {
    question: "How should I store my olive oil?",
    answer: "Keep it in a cool, dark place away from heat and light. Once opened, use it within a few months for optimal freshness. The compounds that make it healthy break down over time, so fresher is always better."
  },
  {
    question: "When will my order ship?",
    answer: "We're currently building our waitlist for the first harvest release. Join the waitlist to be notified as soon as we're ready to ship and get early access to order."
  }
];

export const FAQ = () => {
  return (
    <section className="py-24" style={{ backgroundColor: '#FFFAEA' }}>
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-beverly font-bold mb-4 tracking-tight" style={{ 
            color: '#1B4229',
            fontSize: 'clamp(2rem, 4vw, 4.5rem)'
          }}>
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 font-light" style={{ 
            fontFamily: 'Space Grotesk, monospace',
            fontSize: 'clamp(1rem, 1.3vw, 1.5rem)'
          }}>
            Everything you need to know about ATTIMO
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border rounded-2xl px-6 overflow-hidden"
              style={{ borderColor: '#1B4229', backgroundColor: 'white' }}
            >
              <AccordionTrigger 
                className="text-left font-medium py-6 hover:no-underline"
                style={{ 
                  color: '#1B4229',
                  fontSize: 'clamp(1rem, 1.3vw, 1.5rem)'
                }}
              >
                {faq.question}
              </AccordionTrigger>
              <AccordionContent 
                className="pb-6 leading-relaxed"
                style={{ 
                  fontFamily: 'Space Grotesk, monospace', 
                  color: '#1B4229',
                  fontSize: 'clamp(0.875rem, 1.1vw, 1.25rem)'
                }}
              >
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
