// Localised copy for the high-polyphenol category hub, so one page component
// renders EN / DE / FR. Shared components (OilProductWidgets, IndustryProblem,
// FAQ, Footer, …) already localise via getDict(locale); this module carries the
// hub's *bespoke* copy (hero, custom sections, section-override props, meta).
//
// Translations flagged for a native review pass (see REVIEW notes). Link-heavy
// footnotes keep only language-neutral external sources on DE/FR (the internal
// blog posts aren't translated yet).
import type { ReactNode, CSSProperties } from "react";
import { HIGH_POLYPHENOL_FAQS } from "./highPolyphenolContent";

const refLink: CSSProperties = { color: "inherit", textDecorationLine: "underline", textUnderlineOffset: "3px" };
const ACCENT = "#CDDB2D";

export interface HubContent {
  meta: { title: string; description: string };
  hero: { eyebrow: string; h1: string; subPre: string; subAccent: string; subPost: string; cta: string };
  range: { heading: string; subtitle: string; quizPrompt: string };
  scale: {
    heading: string;
    intro: string;
    cards: { content: string; content2: string }[];
    citation: ReactNode;
  };
  problem: {
    heading: string;
    intro: string;
    args: { title: string; text: string }[];
    footnote: ReactNode;
  };
  compounds: {
    eyebrow: string;
    heading: string;
    leadIn: ReactNode;
    items: { name: string; icon: string; does: string; proof: string; sub: string }[];
  };
  science: {
    eyebrow: string;
    heading: string;
    intro: string;
    evidence: { claim: string; body: string; source: string; href: string }[];
    guideLink?: ReactNode;
    disclaimer: string;
  };
  labReceipts: { heading: string; intro: string };
  kleia: { heading: string; intro: string };
  faq: { heading: string; items: { question: string; answer: string }[] };
  blogHeading: string;
}

const ICON = { mortar: "/icons/mortar.svg", olive: "/icons/olive.svg", flask: "/icons/flask.svg" };
const EUR_LEX = "https://eur-lex.europa.eu/LexUriServ/LexUriServ.do?uri=OJ:L:2012:136:0001:0040:en:PDF";
const UC_DAVIS = "https://www.ucdavis.edu/news/most-imported-olive-oils-don%E2%80%99t-match-%E2%80%98extra-virgin%E2%80%99-claims-study-finds";

// ───────────────────────────── ENGLISH ─────────────────────────────
const en: HubContent = {
  meta: {
    title: "High-Polyphenol Olive Oil | Lab-Tested 400–900 mg/kg",
    description:
      "Shop high-polyphenol olive oil, lab-tested at 400–900 mg/kg — three single-variety, polyphenol-rich extra virgin oils ranked by polyphenols. From €22.",
  },
  hero: {
    eyebrow: "Category · Extra Virgin Olive Oil",
    h1: "High-Polyphenol Olive Oil",
    subPre: "Single-variety, early-harvest extra virgin oil, ranked by what matters most: a ",
    subAccent: "polyphenol-rich",
    subPost: " profile you can taste — and verify in the lab.",
    cta: "Shop the range →",
  },
  range: {
    heading: "Shop Fresh Harvest",
    subtitle:
      "All three are genuinely high-polyphenol — the difference is flavour and intensity. Pick by taste, or take the quiz to find your match.",
    quizPrompt: "Not sure which one to pick?",
  },
  scale: {
    heading: "How many polyphenols should olive oil have?",
    intro:
      "There's no legal minimum — but there are milestones. Below is where a typical supermarket bottle lands, where the EU draws its health-claim line, where the well-known Blueprint oil sits, and where ATTIMO's range falls.",
    cards: [
      { content: "Polyphenols are the antioxidants behind olive oil's health reputation.", content2: "They're also what makes a fresh oil taste bitter and peppery — flavour and benefit come from the same place." },
      { content: "Levels peak in early-harvest olives and start falling the moment the oil is bottled.", content2: "Heat, light, age and blending all pull the number down — which is why most bottles never reach a high-polyphenol level." },
      { content: "Above 250 mg/kg, the EU lets a producer make a documented health claim.", content2: "ATTIMO's oils run 400–900 mg/kg, so every bottle clears that bar with room to spare." },
    ],
    citation: (
      <>
        The EU health-claim threshold of 250 mg/kg derives from the requirement of 5 mg hydroxytyrosol and derivatives per 20 g of oil under{" "}
        <a href={EUR_LEX} target="_blank" rel="noopener noreferrer" style={refLink}>Commission Regulation (EU) No&nbsp;432/2012</a>. The 400 mg/kg mark is the{" "}
        <a href="/blog/bryan-johnson-olive-oil" style={refLink}>Blueprint benchmark popularised by Bryan Johnson</a>. More in our{" "}
        <a href="/blog/polyphenols-olive-oil" style={refLink}>polyphenols explainer</a>.
      </>
    ),
  },
  problem: {
    heading: "Why high-polyphenol extra virgin olive oil is hard to find",
    intro: "The words “extra virgin” say nothing about polyphenols — and often aren't even accurate. Here's the gap, and the three reasons supermarket oil lands so low.",
    args: [
      { title: "Blended for shelf life, not polyphenols", text: "Industrial oil is blended across countries and harvests for a cheap, neutral, consistent taste. Blending and scale dilute the fresh-pressed polyphenols that make oil bitter, peppery and healthy." },
      { title: "Picked late, pressed slow", text: "Polyphenols peak in young, green olives. Mass producers harvest late for higher yield and press hours or days later — by which point much of the polyphenol content is already gone." },
      { title: "Old before you open it", text: "Polyphenols fade with time, light and heat. A bottle that has spent a year in transit and on a shelf has far less than the day it was pressed, even if it once qualified as high-polyphenol." },
    ],
    footnote: (
      <p>
        On the figures: the ~80% failure rate reflects widely-cited independent testing of supermarket “extra virgin” oils; the most rigorous public study, the{" "}
        <a href={UC_DAVIS} target="_blank" rel="noopener noreferrer" style={{ ...refLink, color: ACCENT }}>UC&nbsp;Davis Olive Center (2010–11)</a>, found 69% of sampled imported oils failed international extra-virgin standards. “Low in polyphenols” is measured against the EU health-claim threshold of 250 mg/kg (
        <a href={EUR_LEX} target="_blank" rel="noopener noreferrer" style={{ ...refLink, color: ACCENT }}>Reg.&nbsp;(EU)&nbsp;432/2012</a>).
      </p>
    ),
  },
  compounds: {
    eyebrow: "What's Inside",
    heading: "The compounds that matter",
    leadIn: (
      <>
        "Polyphenols" is an umbrella term. Three compounds do most of the heavy lifting — and an average supermarket oil barely registers any of them. New to lab reports?{" "}
        <a href="/blog/how-to-read-olive-oil-lab-analysis" style={{ ...refLink, color: "#ECA948" }}>Here's how to read one</a>.
      </>
    ),
    items: [
      { name: "Oleocanthal", icon: ICON.mortar, does: "A natural anti-inflammatory whose effect has been compared to ibuprofen — and the source of the peppery catch at the back of your throat.", proof: "471 mg/kg", sub: "in our Coratina · typical EVOO <10" },
      { name: "Oleacein", icon: ICON.olive, does: "A powerful antioxidant studied for blood-pressure regulation and cardiovascular protection.", proof: "336 mg/kg", sub: "in our Coratina · typical EVOO <40" },
      { name: "Hydroxytyrosol", icon: ICON.flask, does: "One of the most-studied olive antioxidants — and the exact compound the EU writes its olive-oil health claim around.", proof: "EU health-claim basis", sub: "≥250 mg/kg of hydroxytyrosol & derivatives" },
    ],
  },
  science: {
    eyebrow: "What The Science Says",
    heading: "Why high polyphenols are worth chasing",
    intro: "The reason a polyphenol-rich olive oil is worth the premium isn't taste alone. Three findings, each from a primary source — not a wellness blog.",
    evidence: [
      { claim: "It protects your cholesterol from oxidising", body: "Olive-oil polyphenols help protect blood lipids (LDL) from oxidative damage — the one olive-oil health benefit the EU has formally approved, granted only to oils with at least 5 mg of hydroxytyrosol per 20 g (≈250 mg/kg).", source: "EU Reg. 432/2012 (EFSA)", href: EUR_LEX },
      { claim: "It's anti-inflammatory, like a micro-dose of ibuprofen", body: "Oleocanthal — the compound behind the peppery throat-sting — was shown to inhibit the same COX-1 and COX-2 enzymes as ibuprofen. About 50 g of a high-oleocanthal oil delivers roughly a tenth of an ibuprofen dose.", source: "Beauchamp et al., Nature (2005)", href: "https://www.nature.com/articles/437045a" },
      { claim: "It anchors the most-proven heart-healthy diet", body: "In the PREDIMED trial, a Mediterranean diet rich in extra virgin olive oil (~50 ml/day) was associated with about 30% fewer major cardiovascular events in high-risk adults than a low-fat diet.", source: "Estruch et al., NEJM (2018)", href: "https://www.nejm.org/doi/full/10.1056/NEJMoa1800389" },
    ],
    guideLink: (
      <>
        Want the full picture?{" "}
        <a href="/blog/high-polyphenol-olive-oil-guide" className="underline underline-offset-4 hover:opacity-70 transition-opacity" style={{ color: "#1B4229", fontWeight: 600 }}>Read our complete guide to high-polyphenol olive oil</a>{" "}
        <span aria-hidden="true">→</span>
      </>
    ),
    disclaimer: "ATTIMO is a food, not a medicine. Polyphenol levels are lab-measured per batch; the health context above is drawn from the published research linked beside each point. This isn't medical advice, and individual results vary.",
  },
  labReceipts: {
    heading: "Don't take our word for it",
    intro: "Every batch is sent to an independent lab. Here are the full reports behind the numbers on this page — download and check them yourself.",
  },
  kleia: {
    heading: "Why our polyphenols stay high",
    intro: "High numbers aren't luck. They come from a few deliberate choices — early harvest, single variety, pressed and bottled fresh — the same choices industrial oil skips to scale.",
  },
  faq: {
    heading: "High-polyphenol olive oil FAQ",
    items: HIGH_POLYPHENOL_FAQS.map((f) => ({ question: f.question, answer: f.answer })),
  },
  blogHeading: "Keep reading polyphenols",
};

// ───────────────────────────── DEUTSCH (REVIEW) ─────────────────────────────
const de: HubContent = {
  meta: {
    title: "Polyphenolreiches Olivenöl | Laborgeprüft 400–900 mg/kg",
    description:
      "Polyphenolreiches Olivenöl kaufen, laborgeprüft mit 400–900 mg/kg — drei sortenreine, polyphenolreiche native Olivenöle nach Polyphenolgehalt gereiht. Ab 22 €.",
  },
  hero: {
    eyebrow: "Kategorie · Natives Olivenöl Extra",
    h1: "Polyphenolreiches Olivenöl",
    subPre: "Sortenrein, früh geerntet und nativ extra — gereiht nach dem, was zählt: einem ",
    subAccent: "polyphenolreichen",
    subPost: " Profil, das man schmeckt — und im Labor nachprüfen kann.",
    cta: "Zur Auswahl →",
  },
  range: {
    heading: "Frische Ernte kaufen",
    subtitle:
      "Alle drei sind wirklich polyphenolreich — der Unterschied ist Geschmack und Intensität. Nach Geschmack wählen, oder das Quiz machen, um deinen Favoriten zu finden.",
    quizPrompt: "Unsicher, welches passt?",
  },
  scale: {
    heading: "Wie viele Polyphenole sollte Olivenöl haben?",
    intro:
      "Es gibt kein gesetzliches Minimum — aber klare Marken. Unten siehst du, wo ein typisches Supermarktöl liegt, wo die EU ihre Health-Claim-Grenze zieht, wo das bekannte Blueprint-Öl steht und wo ATTIMOs Sorten fallen.",
    cards: [
      { content: "Polyphenole sind die Antioxidantien hinter dem gesunden Ruf des Olivenöls.", content2: "Sie machen ein frisches Öl auch bitter und pfeffrig — Geschmack und Nutzen kommen aus derselben Quelle." },
      { content: "Der Gehalt ist bei früher Ernte am höchsten und sinkt ab dem Moment der Abfüllung.", content2: "Hitze, Licht, Alter und Verschnitt drücken den Wert — deshalb erreichen die meisten Flaschen nie ein hohes Niveau." },
      { content: "Ab 250 mg/kg erlaubt die EU einen dokumentierten Health Claim.", content2: "ATTIMOs Öle liegen bei 400–900 mg/kg — jede Flasche übertrifft die Grenze deutlich." },
    ],
    citation: (
      <>
        Die EU-Health-Claim-Grenze von 250 mg/kg ergibt sich aus der Anforderung von 5 mg Hydroxytyrosol und Derivaten je 20 g Öl gemäß{" "}
        <a href={EUR_LEX} target="_blank" rel="noopener noreferrer" style={refLink}>Verordnung (EU) Nr.&nbsp;432/2012</a>. Die Marke von 400 mg/kg ist der von Bryan Johnson bekannt gemachte Blueprint-Richtwert.
      </>
    ),
  },
  problem: {
    heading: "Warum polyphenolreiches Olivenöl so schwer zu finden ist",
    intro: "„Nativ extra“ sagt nichts über Polyphenole aus — und stimmt oft nicht einmal. Hier ist die Lücke und die drei Gründe, warum Supermarktöl so niedrig liegt.",
    args: [
      { title: "Verschnitten für Haltbarkeit, nicht Polyphenole", text: "Industrieöl wird über Länder und Ernten hinweg verschnitten — für einen billigen, neutralen, gleichbleibenden Geschmack. Verschnitt und Masse verdünnen genau die frisch gepressten Polyphenole, die ein Öl bitter, pfeffrig und gesund machen." },
      { title: "Reif gepflückt, langsam gepresst", text: "Polyphenole sind in jungen, grünen Oliven am höchsten. Großproduzenten ernten spät für mehr Ausbeute und pressen Stunden oder Tage später — da ist ein Großteil schon verloren." },
      { title: "Alt, bevor du es öffnest", text: "Polyphenole verblassen mit Zeit, Licht und Hitze. Eine Flasche nach einem Jahr Transport und Regal enthält weit weniger als am Presstag — selbst wenn sie einmal polyphenolreich war." },
    ],
    footnote: (
      <p>
        Zu den Zahlen: Die ~80%-Fehlerquote spiegelt viel zitierte unabhängige Tests von Supermarkt-„nativ extra“-Ölen; die strengste öffentliche Studie, das{" "}
        <a href={UC_DAVIS} target="_blank" rel="noopener noreferrer" style={{ ...refLink, color: ACCENT }}>UC&nbsp;Davis Olive Center (2010–11)</a>, fand 69% der importierten Proben durchgefallen. „Niedrig an Polyphenolen“ misst sich an der EU-Grenze von 250 mg/kg (
        <a href={EUR_LEX} target="_blank" rel="noopener noreferrer" style={{ ...refLink, color: ACCENT }}>VO&nbsp;(EU)&nbsp;432/2012</a>).
      </p>
    ),
  },
  compounds: {
    eyebrow: "Was drinsteckt",
    heading: "Die entscheidenden Stoffe",
    leadIn: (
      <>
        „Polyphenole“ ist ein Sammelbegriff. Drei Verbindungen leisten die meiste Arbeit — und ein durchschnittliches Supermarktöl enthält kaum welche davon. Die Zahlen unten stammen aus unserem Coratina.
      </>
    ),
    items: [
      { name: "Oleocanthal", icon: ICON.mortar, does: "Ein natürlicher Entzündungshemmer, dessen Wirkung mit Ibuprofen verglichen wurde — und die Quelle des pfeffrigen Kratzens im Hals.", proof: "471 mg/kg", sub: "in unserem Coratina · typ. EVOO <10" },
      { name: "Oleacein", icon: ICON.olive, does: "Ein starkes Antioxidans, untersucht für Blutdruckregulierung und Herz-Kreislauf-Schutz.", proof: "336 mg/kg", sub: "in unserem Coratina · typ. EVOO <40" },
      { name: "Hydroxytyrosol", icon: ICON.flask, does: "Eines der am besten untersuchten Oliven-Antioxidantien — und genau die Verbindung, um die die EU ihren Health Claim formuliert.", proof: "Basis des EU-Health-Claims", sub: "≥250 mg/kg Hydroxytyrosol & Derivate" },
    ],
  },
  science: {
    eyebrow: "Was die Wissenschaft sagt",
    heading: "Warum sich hohe Polyphenole lohnen",
    intro: "Ein polyphenolreiches Olivenöl ist den Aufpreis nicht nur wegen des Geschmacks wert. Drei Befunde, jeder aus einer Primärquelle — kein Wellness-Blog.",
    evidence: [
      { claim: "Es schützt dein Cholesterin vor Oxidation", body: "Olivenöl-Polyphenole helfen, Blutfette (LDL) vor oxidativen Schäden zu schützen — der eine von der EU offiziell anerkannte Nutzen, nur für Öle mit mindestens 5 mg Hydroxytyrosol je 20 g (≈250 mg/kg).", source: "VO (EU) 432/2012 (EFSA)", href: EUR_LEX },
      { claim: "Es wirkt entzündungshemmend, wie eine Mikrodosis Ibuprofen", body: "Oleocanthal — der Stoff hinter dem pfeffrigen Kratzen — hemmt dieselben COX-1- und COX-2-Enzyme wie Ibuprofen. Rund 50 g eines oleocanthalreichen Öls liefern etwa ein Zehntel einer Ibuprofen-Dosis.", source: "Beauchamp et al., Nature (2005)", href: "https://www.nature.com/articles/437045a" },
      { claim: "Es ist Kern der am besten belegten herzgesunden Kost", body: "In der PREDIMED-Studie war eine mediterrane Ernährung mit viel nativem Olivenöl (~50 ml/Tag) mit rund 30% weniger schweren Herz-Kreislauf-Ereignissen verbunden als eine fettarme Ernährung.", source: "Estruch et al., NEJM (2018)", href: "https://www.nejm.org/doi/full/10.1056/NEJMoa1800389" },
    ],
    disclaimer: "ATTIMO ist ein Lebensmittel, kein Medikament. Polyphenolwerte werden pro Charge im Labor gemessen; der Gesundheitskontext oben stammt aus der jeweils verlinkten Forschung. Dies ist keine medizinische Beratung, und individuelle Ergebnisse variieren.",
  },
  labReceipts: {
    heading: "Vertrau nicht nur unserem Wort",
    intro: "Jede Charge geht an ein unabhängiges Labor. Hier sind die vollständigen Berichte hinter den Zahlen auf dieser Seite — herunterladen und selbst prüfen.",
  },
  kleia: {
    heading: "Warum unsere Polyphenole hoch bleiben",
    intro: "Hohe Werte sind kein Zufall. Sie kommen aus wenigen bewussten Entscheidungen — frühe Ernte, sortenrein, frisch gepresst und abgefüllt — genau das, was Industrieöl fürs Skalieren weglässt.",
  },
  faq: {
    heading: "FAQ zu polyphenolreichem Olivenöl",
    items: [
      { question: "Was ist polyphenolreiches Olivenöl?", answer: "Polyphenolreiches Olivenöl ist natives Olivenöl extra mit einer ungewöhnlich hohen Konzentration an Polyphenolen — den natürlichen Antioxidantien der Olive. Es gibt keine einheitliche gesetzliche Grenze, aber Öle über dem EU-Health-Claim-Wert von 250 mg/kg gelten allgemein als polyphenolreich. ATTIMOs Sorten liegen bei 400–900 mg/kg." },
      { question: "Wie viele Polyphenole sollte Olivenöl haben?", answer: "Typisches Supermarkt-Olivenöl liegt bei etwa 100–300 mg/kg. Die EU erlaubt einen Health Claim ab 250 mg/kg. Als polyphenolreich gelten Öle ab etwa 400 mg/kg. ATTIMO-Öle sind je nach Sorte auf 400–900 mg/kg laborgeprüft." },
      { question: "Welches Olivenöl hat die meisten Polyphenole?", answer: "In unserer Auswahl ist Coratina d'Italia mit 847 mg/kg am höchsten, gefolgt von Picual de España mit 675 mg/kg und Nocellara d'Italia mit 400 mg/kg. Coratina ist von Natur aus eine der polyphenolreichsten Olivensorten der Welt." },
      { question: "Beeinflussen Polyphenole den Geschmack?", answer: "Ja, direkt. Polyphenole verantworten Schärfe, Bitterkeit und die grüne Pikanz frischen Olivenöls — das pfeffrige Kratzen im Hals kommt großteils von Oleocanthal." },
      { question: "Wie bleiben hohe Polyphenole erhalten?", answer: "Frühe Ernte, sortenreine Pressung innerhalb weniger Stunden nach der Ernte und frische Abfüllung aus der letzten Ernte. Polyphenole zerfallen mit Hitze, Licht, Sauerstoff und Zeit — deshalb pressen wir kalt und versenden bald nach der Ernte." },
      { question: "Ist polyphenolreiches Olivenöl bio?", answer: "Unser Coratina ist bio-zertifiziert. Bei den anderen setzen wir auf schonenden Anbau, frühe Ernte und laborgeprüfte Qualität und halten jedes Öl am gleichen Standard." },
    ],
  },
  blogHeading: "Weiterlesen zu Polyphenolen",
};

// ───────────────────────────── FRANÇAIS (REVIEW) ─────────────────────────────
// Display headings are worded to avoid the one missing UDC glyph (à/À); dropped
// accents on all-caps (é→E) are normal, accepted French typography.
const fr: HubContent = {
  meta: {
    title: "Huile d'Olive Riche en Polyphénols | Testée en Labo 400–900 mg/kg",
    description:
      "Achetez une huile d'olive riche en polyphénols, testée en laboratoire à 400–900 mg/kg — trois huiles vierges extra monovariétales, classées par teneur en polyphénols. Dès 22 €.",
  },
  hero: {
    eyebrow: "Catégorie · Huile d'Olive Vierge Extra",
    h1: "Huile d'Olive Riche en Polyphénols",
    subPre: "Huile vierge extra monovariétale, de récolte précoce, classée selon l'essentiel : un profil ",
    subAccent: "riche en polyphénols",
    subPost: " que l'on goûte — et que l'on vérifie en laboratoire.",
    cta: "Voir la gamme →",
  },
  range: {
    heading: "Acheter la nouvelle récolte",
    subtitle:
      "Les trois sont réellement riches en polyphénols — la différence tient au goût et à l'intensité. Choisissez au goût, ou faites le quiz pour trouver la vôtre.",
    quizPrompt: "Vous hésitez ?",
  },
  scale: {
    heading: "Combien de polyphénols une huile d'olive devrait-elle contenir ?",
    intro:
      "Il n'existe pas de minimum légal — mais il y a des repères. Voici où se situe une bouteille de supermarché, où l'UE fixe sa limite d'allégation de santé, où se place la célèbre huile Blueprint, et où tombe la gamme ATTIMO.",
    cards: [
      { content: "Les polyphénols sont les antioxydants à l'origine de la réputation santé de l'huile d'olive.", content2: "Ce sont aussi eux qui rendent une huile fraîche amère et piquante — goût et bienfaits viennent de la même source." },
      { content: "Leur taux culmine dans les olives de récolte précoce et chute dès la mise en bouteille.", content2: "Chaleur, lumière, âge et assemblage font tous baisser le chiffre — c'est pourquoi la plupart des bouteilles n'atteignent jamais un niveau élevé." },
      { content: "Au-dessus de 250 mg/kg, l'UE autorise une allégation de santé documentée.", content2: "Les huiles ATTIMO titrent 400–900 mg/kg : chaque bouteille dépasse largement ce seuil." },
    ],
    citation: (
      <>
        Le seuil d'allégation de santé de l'UE, 250 mg/kg, découle de l'exigence de 5 mg d'hydroxytyrosol et dérivés pour 20 g d'huile, selon le{" "}
        <a href={EUR_LEX} target="_blank" rel="noopener noreferrer" style={refLink}>Règlement (UE) n°&nbsp;432/2012</a>. Le repère de 400 mg/kg est la référence Blueprint popularisée par Bryan Johnson.
      </>
    ),
  },
  problem: {
    heading: "Pourquoi l'huile d'olive vierge extra riche en polyphénols est si rare",
    intro: "La mention « vierge extra » ne dit rien des polyphénols — et n'est souvent même pas exacte. Voici l'écart, et les trois raisons pour lesquelles l'huile de supermarché tombe si bas.",
    args: [
      { title: "Assemblée pour la conservation, pas pour les polyphénols", text: "L'huile industrielle est assemblée entre pays et récoltes pour un goût neutre, bon marché et constant. L'assemblage et l'échelle diluent les polyphénols fraîchement pressés qui rendent l'huile amère, piquante et saine." },
      { title: "Cueillie tard, pressée lentement", text: "Les polyphénols culminent dans les olives jeunes et vertes. Les gros producteurs récoltent tard pour plus de rendement et pressent des heures ou des jours plus tard — une grande partie est déjà perdue." },
      { title: "Vieille avant l'ouverture", text: "Les polyphénols s'estompent avec le temps, la lumière et la chaleur. Une bouteille après un an de transport et de rayon en contient bien moins qu'au jour du pressage, même si elle était autrefois riche." },
    ],
    footnote: (
      <p>
        Sur les chiffres : le taux d'échec d'environ 80 % reflète des tests indépendants largement cités d'huiles « vierge extra » de supermarché ; l'étude publique la plus rigoureuse, l'{" "}
        <a href={UC_DAVIS} target="_blank" rel="noopener noreferrer" style={{ ...refLink, color: ACCENT }}>UC&nbsp;Davis Olive Center (2010–11)</a>, a trouvé que 69 % des échantillons importés échouaient. « Pauvre en polyphénols » se mesure au seuil UE de 250 mg/kg (
        <a href={EUR_LEX} target="_blank" rel="noopener noreferrer" style={{ ...refLink, color: ACCENT }}>Règl.&nbsp;(UE)&nbsp;432/2012</a>).
      </p>
    ),
  },
  compounds: {
    eyebrow: "Ce qu'elle contient",
    heading: "Les composés qui comptent",
    leadIn: (
      <>
        « Polyphénols » est un terme générique. Trois composés font l'essentiel du travail — et une huile de supermarché moyenne n'en contient presque aucun. Les chiffres ci-dessous proviennent de notre Coratina.
      </>
    ),
    items: [
      { name: "Oléocanthal", icon: ICON.mortar, does: "Un anti-inflammatoire naturel dont l'effet a été comparé à l'ibuprofène — et la source du picotement poivré au fond de la gorge.", proof: "471 mg/kg", sub: "dans notre Coratina · supermarché <10" },
      { name: "Oléacéine", icon: ICON.olive, does: "Un puissant antioxydant étudié pour la régulation de la tension et la protection cardiovasculaire.", proof: "336 mg/kg", sub: "dans notre Coratina · supermarché <40" },
      { name: "Hydroxytyrosol", icon: ICON.flask, does: "L'un des antioxydants de l'olive les plus étudiés — et le composé exact autour duquel l'UE rédige son allégation de santé.", proof: "base de l'allégation UE", sub: "≥250 mg/kg d'hydroxytyrosol & dérivés" },
    ],
  },
  science: {
    eyebrow: "Ce que dit la science",
    heading: "Pourquoi viser une huile riche en polyphénols",
    intro: "Si une huile riche en polyphénols vaut son prix, ce n'est pas seulement pour le goût. Trois résultats, chacun issu d'une source primaire — pas d'un blog bien-être.",
    evidence: [
      { claim: "Elle protège votre cholestérol de l'oxydation", body: "Les polyphénols de l'huile d'olive aident à protéger les lipides sanguins (LDL) du stress oxydatif — le seul bienfait de l'huile d'olive officiellement reconnu par l'UE, réservé aux huiles contenant au moins 5 mg d'hydroxytyrosol pour 20 g (≈250 mg/kg).", source: "Règl. UE 432/2012 (EFSA)", href: EUR_LEX },
      { claim: "Elle est anti-inflammatoire, comme une microdose d'ibuprofène", body: "L'oléocanthal — le composé derrière le picotement poivré — inhibe les mêmes enzymes COX-1 et COX-2 que l'ibuprofène. Environ 50 g d'une huile riche en oléocanthal apportent près d'un dixième d'une dose d'ibuprofène.", source: "Beauchamp et al., Nature (2005)", href: "https://www.nature.com/articles/437045a" },
      { claim: "Elle ancre le régime cardioprotecteur le mieux prouvé", body: "Dans l'essai PREDIMED, un régime méditerranéen riche en huile d'olive vierge extra (~50 ml/jour) a été associé à environ 30 % d'événements cardiovasculaires majeurs en moins chez des adultes à risque, comparé à un régime pauvre en graisses.", source: "Estruch et al., NEJM (2018)", href: "https://www.nejm.org/doi/full/10.1056/NEJMoa1800389" },
    ],
    disclaimer: "ATTIMO est un aliment, pas un médicament. Les taux de polyphénols sont mesurés en laboratoire par lot ; le contexte santé ci-dessus provient des recherches publiées liées à chaque point. Ceci n'est pas un avis médical, et les résultats varient d'une personne à l'autre.",
  },
  labReceipts: {
    heading: "Ne nous croyez pas sur parole",
    intro: "Chaque lot part dans un laboratoire indépendant. Voici les rapports complets derrière les chiffres de cette page — téléchargez-les et vérifiez vous-même.",
  },
  kleia: {
    heading: "Pourquoi notre huile reste riche en polyphénols",
    intro: "Des chiffres élevés, ce n'est pas de la chance. Ils viennent de quelques choix délibérés — récolte précoce, monovariétale, pressée et embouteillée fraîche — ceux que l'huile industrielle sacrifie pour produire à grande échelle.",
  },
  faq: {
    heading: "FAQ sur l'huile d'olive riche en polyphénols",
    items: [
      { question: "Qu'est-ce qu'une huile d'olive riche en polyphénols ?", answer: "Une huile d'olive riche en polyphénols est une huile vierge extra à concentration inhabituellement élevée en polyphénols — les antioxydants naturels produits par l'olive. Il n'existe pas de seuil légal unique, mais les huiles au-dessus du niveau d'allégation de santé de l'UE (250 mg/kg) sont généralement considérées comme riches. La gamme ATTIMO titre 400–900 mg/kg." },
      { question: "Combien de polyphénols une huile d'olive devrait-elle contenir ?", answer: "Une huile vierge extra de supermarché se situe autour de 100–300 mg/kg. L'UE autorise une allégation de santé à 250 mg/kg. Les huiles reconnues comme riches commencent vers 400 mg/kg. Les huiles ATTIMO sont testées en laboratoire à 400–900 mg/kg selon la variété." },
      { question: "Quelle huile d'olive contient le plus de polyphénols ?", answer: "Dans notre gamme, la Coratina d'Italia est la plus élevée à 847 mg/kg, suivie de la Picual de España à 675 mg/kg et de la Nocellara d'Italia à 400 mg/kg. La Coratina est naturellement l'une des variétés d'olive les plus riches en polyphénols au monde." },
      { question: "Les polyphénols influencent-ils le goût ?", answer: "Oui, directement. Les polyphénols sont responsables du piquant, de l'amertume et de l'ardence verte de l'huile d'olive fraîche — le picotement poivré au fond de la gorge vient en grande partie de l'oléocanthal." },
      { question: "Comment préserve-t-on des polyphénols élevés ?", answer: "Récolte précoce, pressage monovariétal dans les heures suivant la cueillette, et mise en bouteille fraîche de la dernière récolte. Les polyphénols se dégradent avec la chaleur, la lumière, l'oxygène et le temps ; nous pressons à froid et expédions peu après la récolte." },
      { question: "L'huile d'olive riche en polyphénols est-elle bio ?", answer: "Notre Coratina est certifiée bio. Pour les autres, nous privilégions une agriculture à faible intervention, la récolte précoce et une qualité vérifiée en laboratoire, en tenant chaque huile au même standard." },
    ],
  },
  blogHeading: "En savoir plus sur les polyphénols",
};

export const HUB_CONTENT: Record<"en" | "de" | "fr", HubContent> = { en, de, fr };

// Canonical paths for each localised hub. Slugs are TRANSLATED (not just
// prefixed) so each ranks its native keyword. Shared by the routes + the
// hreflang cluster + the sitemap so they never drift.
const HUB_ORIGIN = "https://attimo-oil.com";
export const HUB_SLUGS = {
  en: "/high-polyphenol-olive-oil",
  de: "/de/polyphenolreiches-olivenoel",
  fr: "/fr/huile-olive-riche-polyphenols",
} as const;

// hreflang cluster shared by every localised hub page. Only list a locale once
// its page is actually live — a stale hreflang to a 404 hurts.
export const HUB_HREFLANGS = [
  { hreflang: "en", href: HUB_ORIGIN + HUB_SLUGS.en },
  { hreflang: "de", href: HUB_ORIGIN + HUB_SLUGS.de },
  { hreflang: "fr", href: HUB_ORIGIN + HUB_SLUGS.fr },
  { hreflang: "x-default", href: HUB_ORIGIN + HUB_SLUGS.en },
];
