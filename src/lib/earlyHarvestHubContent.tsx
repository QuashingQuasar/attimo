// Localised copy for the early-harvest category hub, so one page component
// renders EN / DE / FR / SV / DA. Shared components (OilProductWidgets,
// IndustryProblem, OilComparison, KleiaWay, FAQ, Footer, …) already localise via
// getDict(locale); this module carries the page's *bespoke* copy (hero, ripeness
// spectrum, economics overrides, taste, evidence, freshness chart, meta, FAQ).
//
// Translations flagged for a native review pass. Numbers, proper names, external
// study URLs and the Italian term "olio nuovo" stay verbatim.
import { EARLY_HARVEST_FAQS } from "./earlyHarvestContent";

export interface EHContent {
  meta: { title: string; description: string };
  hero: { eyebrow: string; h1: string; subPre: string; subAccent: string; subPost: string; cta: string };
  bottleFlavours: { coratina: string; picual: string; nocellara: string };
  range: { heading: string; subtitle: string; quizPrompt: string };
  ripeness: {
    eyebrow: string; heading: string; intro: string;
    scaleLeft: string; scaleRight: string;
    stages: { label: string; when: string }[];
    markerLabel: string; markerSub: string;
  };
  problem: {
    heading: string; intro: string;
    stat1: { value: string; text: string };
    stat2: { value: string; text: string };
    args: { title: string; text: string }[];
    footnote: string;
  };
  taste: {
    eyebrow: string; heading: string;
    introPre: string; introEm: string; introPost: string;
    gentle: string; bold: string;
    notes: { coratina: string; picual: string; nocellara: string };
  };
  harvest: { heading: string; intro: string };
  evidence: {
    eyebrow: string; heading: string; intro: string;
    items: { claim: string; body: string; source: string; href: string }[];
    footnote: string;
  };
  freshness: {
    eyebrow: string; heading: string;
    body1: string;
    body2Pre: string; body2Accent: string; body2Post: string;
    chart: { title: string; fresh: string; euLine: string; ordinary: string; pressed: string; oneYear: string; caption: string };
  };
  healthTieIn: { heading: string; body: string; cta: string };
  proof: { heading: string; intro: string; reportSuffix: string };
  faq: { heading: string; items: { question: string; answer: string }[] };
  blogHeading: string;
}

const NATURE_HREF = "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10494621/";
const FOODS_HREF = "https://doi.org/10.3390/foods15040726";
const STORAGE_HREF = "https://www.sciencedirect.com/science/article/abs/pii/S0308814620315922";

// ───────────────────────────── ENGLISH ─────────────────────────────
const en: EHContent = {
  meta: {
    title: "Early Harvest Olive Oil | Green, Fresh & High in Polyphenols",
    description:
      "Shop early-harvest olive oil — olives picked green and young, cold-pressed within hours. Single-variety, this year's harvest, high in polyphenols. From €22.",
  },
  hero: {
    eyebrow: "Category · Extra Virgin Olive Oil",
    h1: "Early Harvest Olive Oil",
    subPre: "Olives picked ",
    subAccent: "green and young",
    subPost: ", pressed within hours — the freshest, most intense, most alive olive oil there is. Single-variety, this year's harvest.",
    cta: "Shop this year's harvest →",
  },
  bottleFlavours: { coratina: "Bold & punchy", picual: "Green & grassy", nocellara: "Gentle & fruity" },
  range: {
    heading: "This year's harvest",
    subtitle:
      "Three single-variety oils, all pressed from this season's early, green-picked olives. Pick by taste, or take the quiz to find your match.",
    quizPrompt: "Not sure which one to pick?",
  },
  ripeness: {
    eyebrow: "The Timing",
    heading: "What “early harvest” means",
    intro:
      "An olive changes as it ripens — green, then purple, then black — and so does the oil it makes. Pick early, while it's green, and you get less oil but far more of everything that matters: flavour, aroma and polyphenols. Wait, and you get more oil but a milder, flatter one. Early harvest is the choice to pick at the green peak.",
    scaleLeft: "← more flavour · more polyphenols · less oil",
    scaleRight: "more oil · milder · less polyphenol →",
    stages: [
      { label: "Green", when: "early October" },
      { label: "Turning", when: "late October" },
      { label: "Black", when: "November+" },
    ],
    markerLabel: "ATTIMO picks here",
    markerSub: "green & early",
  },
  problem: {
    heading: "Why early-harvest olive oil is rare — and costs more",
    intro:
      "Early harvest isn't a marketing word; it's an economic sacrifice most producers won't make. Here's the maths, and why the industry picks late instead.",
    stat1: { value: "~½", text: "the oil green, early-harvested olives give versus fully ripe ones — so it takes about twice the fruit to fill a bottle." },
    stat2: { value: "October", text: "the short early window when the fruit is still green and at its peak. The industry waits for yield; we don't." },
    args: [
      { title: "Green olives give less oil", text: "Ripe black olives are fat with oil; green ones aren't. Early harvest trades yield for quality — roughly half the oil per kilo of fruit, which is exactly why it costs more per bottle." },
      { title: "A short, careful window", text: "The green window lasts weeks, and firm early fruit has to be picked and pressed fast to avoid bruising and oxidation. More care, less oil, higher cost — the opposite of how commodity oil is made." },
      { title: "Volume wins at scale", text: "Mass producers pick late and mechanically, when olives are heavy with oil, then blend for a cheap, neutral, consistent taste. Early harvest is the deliberate choice not to." },
    ],
    footnote:
      "On the maths: green, early-picked olives contain less oil than fully ripe ones — roughly half — so it takes about twice the fruit to fill a bottle. That yield gap is the core economics behind early-harvest pricing.",
  },
  taste: {
    eyebrow: "The Taste",
    heading: "What early harvest tastes like",
    introPre:
      "Green, grassy and aromatic, with a bitterness on the tongue and a peppery catch at the back of the throat — sometimes enough to make you cough. That kick isn't a flaw; it's the taste of a fresh, just-pressed oil, straight from green fruit. In its first weeks, unfiltered, it's what Italians call ",
    introEm: "olio nuovo",
    introPost: ". Our three vary in intensity, but all share that living, green freshness.",
    gentle: "GENTLE",
    bold: "BOLD",
    notes: { coratina: "Bold & punchy", picual: "Green & grassy", nocellara: "Gentle & fruity" },
  },
  harvest: {
    heading: "How we harvest",
    intro:
      "Picked green in October, from a single variety, and cold-pressed within hours — then bottled fresh and shipped while it's still this year's oil.",
  },
  evidence: {
    eyebrow: "The Evidence",
    heading: "What the research shows",
    intro: "Early harvest isn't a marketing story — it's measurable. Three findings, each from peer-reviewed olive science.",
    items: [
      { claim: "Polyphenols peak in green olives — then fall as the fruit ripens", body: "Phenolic content is highest in young, green fruit and drops steadily through ripening as oleuropein, the parent compound, breaks down. Studies across Spanish, Iranian and Italian cultivars all find early-picked oils carry markedly more total polyphenols than the same trees harvested weeks later.", source: "Fruit maturity & polyphenols — Food Sci. & Nutrition (2023)", href: NATURE_HREF },
      { claim: "Less oil, more of what matters — the trade-off that sets the price", body: "Riper olives hold more oil but fewer bioactives; the two move in opposite directions. Early harvest deliberately takes the low-yield, high-polyphenol side of that curve — roughly half the oil per kilo of fruit — which is exactly why it costs more per bottle.", source: "Oil accumulation vs. bioactive retention — Foods, MDPI (2026)", href: FOODS_HREF },
      { claim: "It's perishable — freshness is the whole product", body: "Even a great early-harvest oil doesn't keep. Under light, extra virgin olive oil can fall below the EU's health-claim polyphenol level within about three months; even stored dark it loses a large share of its phenolics over a year, with the steepest drop in the first months after pressing.", source: "Phenolic loss in storage — Food Chemistry (2021)", href: STORAGE_HREF },
    ],
    footnote:
      "Findings are drawn from the peer-reviewed studies linked beside each point; ATTIMO's own per-batch lab numbers are below. Context, not medical advice.",
  },
  freshness: {
    eyebrow: "The Catch",
    heading: "It only works fresh",
    body1:
      "Everything early harvest gives you — the green intensity, the aroma, the polyphenols — starts fading the day the oil is bottled. A great early-harvest oil that's sat in transit and on a shelf for a year has quietly become an ordinary one. Freshness isn't a nice-to-have here; it's the whole product.",
    body2Pre: "So we do the one thing that keeps it honest: ",
    body2Accent: "we only ever sell the latest harvest.",
    body2Post: " When this year's is gone, we wait for the next — rather than shipping you last year's oil dressed up as fresh.",
    chart: {
      title: "Polyphenols fade after pressing",
      fresh: "Fresh — just pressed",
      euLine: "EU health-claim level",
      ordinary: "…ordinary oil",
      pressed: "Pressed",
      oneYear: "~1 year on the shelf",
      caption: "Illustrative. Decline steepens with light and heat; we ship at the left of this curve.",
    },
  },
  healthTieIn: {
    heading: "Picking early is also why it's the healthiest",
    body:
      "Polyphenols — the antioxidants behind olive oil's health reputation — peak in green, early-harvested olives. The harvest choice and the health benefit are the same decision.",
    cta: "See our high-polyphenol range →",
  },
  proof: {
    heading: "Freshness you can check",
    intro:
      "Careful early harvest shows up in the numbers — low acidity (from intact, quickly-pressed fruit) and low peroxides (from minimal oxidation). Every batch is third-party tested; here are the full reports.",
    reportSuffix: "lab report",
  },
  faq: {
    heading: "Early harvest olive oil FAQ",
    items: EARLY_HARVEST_FAQS.map((f) => ({ question: f.question, answer: f.answer })),
  },
  blogHeading: "Read more early harvest olive oil",
};

// ───────────────────────────── DEUTSCH (REVIEW) ─────────────────────────────
const de: EHContent = {
  meta: {
    title: "Frühe-Ernte-Olivenöl | Grün, frisch & polyphenolreich",
    description:
      "Frühe-Ernte-Olivenöl kaufen — grün und jung gepflückte Oliven, binnen Stunden kalt gepresst. Sortenrein, aus diesjähriger Ernte, polyphenolreich. Ab 22 €.",
  },
  hero: {
    eyebrow: "Kategorie · Natives Olivenöl Extra",
    h1: "Frühe-Ernte-Olivenöl",
    subPre: "Oliven ",
    subAccent: "grün und jung gepflückt",
    subPost: ", binnen Stunden gepresst — das frischste, intensivste, lebendigste Olivenöl, das es gibt. Sortenrein, aus diesjähriger Ernte.",
    cta: "Die neue Ernte kaufen →",
  },
  bottleFlavours: { coratina: "Kräftig & Intensiv", picual: "Grün & Grasig", nocellara: "Mild & Fruchtig" },
  range: {
    heading: "Die neue Ernte",
    subtitle:
      "Drei sortenreine Öle, alle aus den frühen, grün gepflückten Oliven dieser Saison gepresst. Nach Geschmack wählen, oder das Quiz machen, um deinen Favoriten zu finden.",
    quizPrompt: "Unsicher, welches passt?",
  },
  ripeness: {
    eyebrow: "Das Timing",
    heading: "Was „frühe Ernte“ bedeutet",
    intro:
      "Eine Olive verändert sich beim Reifen — grün, dann violett, dann schwarz — und mit ihr das Öl, das sie ergibt. Früh gepflückt, solange sie grün ist, gibt sie weniger Öl, aber weit mehr von allem, worauf es ankommt: Geschmack, Aroma und Polyphenole. Wartet man, bekommt man mehr Öl, aber ein milderes, flacheres. Frühe Ernte ist die Entscheidung, auf dem grünen Höhepunkt zu pflücken.",
    scaleLeft: "← mehr Geschmack · mehr Polyphenole · weniger Öl",
    scaleRight: "mehr Öl · milder · weniger Polyphenole →",
    stages: [
      { label: "Grün", when: "Anfang Oktober" },
      { label: "Umfärbend", when: "Ende Oktober" },
      { label: "Schwarz", when: "November+" },
    ],
    markerLabel: "ATTIMO pflückt hier",
    markerSub: "grün & früh",
  },
  problem: {
    heading: "Warum Frühe-Ernte-Olivenöl selten ist — und mehr kostet",
    intro:
      "Frühe Ernte ist kein Marketingwort; sie ist ein wirtschaftliches Opfer, das die meisten Erzeuger nicht bringen. Hier ist die Rechnung — und warum die Branche stattdessen spät pflückt.",
    stat1: { value: "~½", text: "so viel Öl geben grüne, früh geerntete Oliven im Vergleich zu voll reifen — es braucht also etwa doppelt so viel Frucht für eine Flasche." },
    stat2: { value: "Oktober", text: "das kurze frühe Fenster, in dem die Frucht noch grün und auf ihrem Höhepunkt ist. Die Branche wartet auf Ertrag; wir nicht." },
    args: [
      { title: "Grüne Oliven geben weniger Öl", text: "Reife schwarze Oliven sind prall voll Öl; grüne nicht. Frühe Ernte tauscht Ertrag gegen Qualität — etwa die Hälfte des Öls pro Kilo Frucht, genau deshalb kostet sie mehr pro Flasche." },
      { title: "Ein kurzes, sorgsames Fenster", text: "Das grüne Fenster dauert Wochen, und feste frühe Frucht muss schnell gepflückt und gepresst werden, um Quetschungen und Oxidation zu vermeiden. Mehr Sorgfalt, weniger Öl, höhere Kosten — das Gegenteil davon, wie Massenöl entsteht." },
      { title: "Im großen Stil gewinnt die Menge", text: "Massenproduzenten pflücken spät und maschinell, wenn die Oliven schwer von Öl sind, und verschneiden dann zu einem billigen, neutralen, gleichbleibenden Geschmack. Frühe Ernte ist die bewusste Entscheidung dagegen." },
    ],
    footnote:
      "Zur Rechnung: Grüne, früh gepflückte Oliven enthalten weniger Öl als voll reife — etwa die Hälfte — daher braucht es rund doppelt so viel Frucht für eine Flasche. Diese Ertragslücke ist die Kernökonomie hinter dem Preis von Frühe-Ernte-Öl.",
  },
  taste: {
    eyebrow: "Der Geschmack",
    heading: "Wie frühe Ernte schmeckt",
    introPre:
      "Grün, grasig und aromatisch, mit einer Bitterkeit auf der Zunge und einem pfeffrigen Kratzen im Hals — manchmal genug, um husten zu müssen. Dieser Kick ist kein Makel; er ist der Geschmack eines frischen, gerade gepressten Öls, direkt aus grüner Frucht. In seinen ersten Wochen, unfiltriert, ist es das, was die Italiener ",
    introEm: "olio nuovo",
    introPost: " nennen. Unsere drei variieren in der Intensität, teilen aber alle diese lebendige, grüne Frische.",
    gentle: "MILD",
    bold: "KRÄFTIG",
    notes: { coratina: "Kräftig & Intensiv", picual: "Grün & Grasig", nocellara: "Mild & Fruchtig" },
  },
  harvest: {
    heading: "Wie wir ernten",
    intro:
      "Grün im Oktober gepflückt, aus einer einzigen Sorte, und binnen Stunden kalt gepresst — dann frisch abgefüllt und versendet, solange es noch das Öl dieses Jahres ist.",
  },
  evidence: {
    eyebrow: "Die Belege",
    heading: "Was die Forschung zeigt",
    intro: "Frühe Ernte ist keine Marketinggeschichte — sie ist messbar. Drei Befunde, jeder aus begutachteter Oliven-Wissenschaft.",
    items: [
      { claim: "Polyphenole sind in grünen Oliven am höchsten — und sinken, wenn die Frucht reift", body: "Der Phenolgehalt ist in junger, grüner Frucht am höchsten und fällt beim Reifen stetig, während sich Oleuropein, die Ausgangsverbindung, abbaut. Studien an spanischen, iranischen und italienischen Sorten zeigen alle, dass früh gepflückte Öle deutlich mehr Gesamtpolyphenole tragen als dieselben Bäume, Wochen später geerntet.", source: "Fruchtreife & Polyphenole — Food Sci. & Nutrition (2023)", href: NATURE_HREF },
      { claim: "Weniger Öl, mehr von dem, worauf es ankommt — der Kompromiss, der den Preis bestimmt", body: "Reifere Oliven halten mehr Öl, aber weniger Bioaktivstoffe; beide bewegen sich in entgegengesetzte Richtungen. Frühe Ernte nimmt bewusst die ertragsarme, polyphenolreiche Seite dieser Kurve — etwa die Hälfte des Öls pro Kilo Frucht — genau deshalb kostet sie mehr pro Flasche.", source: "Ölbildung vs. Bioaktiv-Erhalt — Foods, MDPI (2026)", href: FOODS_HREF },
      { claim: "Es ist verderblich — Frische ist das ganze Produkt", body: "Selbst ein großartiges Frühe-Ernte-Öl hält nicht. Unter Licht kann natives Olivenöl extra binnen etwa drei Monaten unter den EU-Health-Claim-Wert für Polyphenole fallen; selbst dunkel gelagert verliert es über ein Jahr einen großen Teil seiner Phenole, mit dem steilsten Rückgang in den ersten Monaten nach der Pressung.", source: "Phenolverlust bei Lagerung — Food Chemistry (2021)", href: STORAGE_HREF },
    ],
    footnote:
      "Die Befunde stammen aus den neben jedem Punkt verlinkten, begutachteten Studien; ATTIMOs eigene Laborwerte pro Charge stehen weiter unten. Kontext, keine medizinische Beratung.",
  },
  freshness: {
    eyebrow: "Der Haken",
    heading: "Es funktioniert nur frisch",
    body1:
      "Alles, was frühe Ernte gibt — die grüne Intensität, das Aroma, die Polyphenole — beginnt an dem Tag zu verblassen, an dem das Öl abgefüllt wird. Ein großartiges Frühe-Ernte-Öl, das ein Jahr im Transport und im Regal stand, ist still und leise zu einem gewöhnlichen geworden. Frische ist hier kein Nice-to-have; sie ist das ganze Produkt.",
    body2Pre: "Also tun wir das eine, was es ehrlich hält: ",
    body2Accent: "wir verkaufen immer nur die jüngste Ernte.",
    body2Post: " Wenn die diesjährige weg ist, warten wir auf die nächste — statt dir das Öl vom Vorjahr als frisch verkleidet zu schicken.",
    chart: {
      title: "Polyphenole verblassen nach der Pressung",
      fresh: "Frisch — gerade gepresst",
      euLine: "EU-Health-Claim-Wert",
      ordinary: "…gewöhnliches Öl",
      pressed: "Gepresst",
      oneYear: "~1 Jahr im Regal",
      caption: "Illustrativ. Der Rückgang verschärft sich mit Licht und Hitze; wir versenden am linken Ende dieser Kurve.",
    },
  },
  healthTieIn: {
    heading: "Früh zu pflücken ist auch der Grund, warum es am gesündesten ist",
    body:
      "Polyphenole — die Antioxidantien hinter dem gesunden Ruf des Olivenöls — sind in grünen, früh geernteten Oliven am höchsten. Die Ernteentscheidung und der Gesundheitsnutzen sind ein und dieselbe Entscheidung.",
    cta: "Zu unserer polyphenolreichen Auswahl →",
  },
  proof: {
    heading: "Frische, die du prüfen kannst",
    intro:
      "Sorgfältige frühe Ernte zeigt sich in den Zahlen — niedriger Säuregrad (aus intakter, rasch gepresster Frucht) und niedrige Peroxide (aus minimaler Oxidation). Jede Charge wird von einem Drittlabor geprüft; hier sind die vollständigen Berichte.",
    reportSuffix: "Laborbericht",
  },
  faq: {
    heading: "FAQ zu Frühe-Ernte-Olivenöl",
    items: [
      { question: "Was ist Frühe-Ernte-Olivenöl?", answer: "Frühe-Ernte-Olivenöl wird aus Oliven gepresst, die noch grün und unreif gepflückt werden — meist im Oktober — statt sie zu Violett oder Schwarz ausreifen zu lassen. Grüne Oliven geben weniger Öl, aber ein weit intensiveres, frischeres und polyphenolreicheres. Das ist die Entscheidung hinter Begriffen wie „frühe Ernte“, „grüne Ernte“ und „olio nuovo“." },
      { question: "Wann werden Oliven für Frühe-Ernte-Öl geerntet?", answer: "Auf der Nordhalbkugel findet die frühe Ernte im Oktober statt, ganz zu Beginn der Saison, wenn die Frucht noch grün und fest ist. Spät geerntetes Öl kommt von Oliven, die bis in November und Dezember am Baum bleiben, sobald sie gereift und nachgedunkelt sind — das ergibt mehr Öl, aber ein milderes, polyphenolärmeres Ergebnis." },
      { question: "Schmeckt Frühe-Ernte-Olivenöl anders?", answer: "Deutlich. Frühe-Ernte-Öl ist grün, grasig und aromatisch, mit einer Bitterkeit auf der Zunge und einem pfeffrigen Kratzen im Hals. Dieser Pfeffer ist ein Zeichen von Frische und Polyphenolen, kein Fehler. Spät geerntete Öle sind milder und buttriger — geschmeidiger, aber flacher." },
      { question: "Warum ist Frühe-Ernte-Olivenöl teurer?", answer: "Weil grüne Oliven etwa die Hälfte des Öls reifer Oliven geben, braucht es rund doppelt so viel Frucht für eine Flasche — gepflückt in einem kurzen Fenster, oft von Hand. Du zahlst für geringeren Ertrag und höhere Qualität. Industrieöl wird gerade deshalb spät gepflückt, um Menge zu maximieren und Kosten zu senken." },
      { question: "Ist Frühe-Ernte-Olivenöl gesünder?", answer: "In der Regel ja — Polyphenole sind in grünen, früh geernteten Oliven am höchsten, und Polyphenole sind die Verbindungen hinter dem gesunden Ruf des Olivenöls. Das ist die direkte Verbindung zwischen der Ernteentscheidung und dem Gesundheitsnutzen. Die Wissenschaft dazu behandeln wir ausführlich auf unserer Seite zu polyphenolreichem Olivenöl." },
      { question: "Wie frisch sollte Frühe-Ernte-Olivenöl sein?", answer: "So frisch wie möglich. Frühe-Ernte-Öle erreichen ihren Höhepunkt direkt nach der Pressung und sinken in den folgenden Monaten, du willst also die aktuelle Ernte — keine Flasche, die ein Jahr im Transport und im Regal verbracht hat. ATTIMO verkauft genau aus diesem Grund immer nur die jüngste Ernte." },
      { question: "Ist frühe Ernte dasselbe wie olio nuovo?", answer: "Sie überschneiden sich. Olio nuovo („neues Öl“) ist das gerade gepresste, oft unfiltrierte Öl, das in den Wochen direkt nach einer frühen Ernte genossen wird — intensiv grün und pfeffrig. Frühe-Ernte-Öl ist die breitere Kategorie; olio nuovo ist ihr frischester, jüngster Ausdruck." },
    ],
  },
  blogHeading: "Mehr über Frühe-Ernte-Olivenöl lesen",
};

// ───────────────────────────── FRANÇAIS (REVIEW) ─────────────────────────────
const fr: EHContent = {
  meta: {
    title: "Huile d'Olive de Récolte Précoce | Verte, Fraîche & Riche en Polyphénols",
    description:
      "Achetez une huile d'olive de récolte précoce — olives cueillies vertes et jeunes, pressées à froid en quelques heures. Monovariétale, récolte de l'année, riche en polyphénols. Dès 22 €.",
  },
  hero: {
    eyebrow: "Catégorie · Huile d'Olive Vierge Extra",
    h1: "Huile d'Olive de Récolte Précoce",
    subPre: "Olives cueillies ",
    subAccent: "vertes et jeunes",
    subPost: ", pressées en quelques heures — l'huile d'olive la plus fraîche, la plus intense et la plus vivante qui soit. Monovariétale, récolte de l'année.",
    cta: "Découvrir la récolte de l'année →",
  },
  bottleFlavours: { coratina: "Corsé et Intense", picual: "Vert et Herbacé", nocellara: "Doux et Fruité" },
  range: {
    heading: "La récolte de l'année",
    subtitle:
      "Trois huiles monovariétales, toutes pressées à partir des olives vertes de début de saison. Choisissez au goût, ou faites le quiz pour trouver la vôtre.",
    quizPrompt: "Vous hésitez ?",
  },
  ripeness: {
    eyebrow: "Le Moment",
    heading: "Ce que signifie « récolte précoce »",
    intro:
      "Une olive change en mûrissant — verte, puis violette, puis noire — et l'huile qu'elle donne change avec elle. Cueillez tôt, quand elle est encore verte, et vous obtenez moins d'huile mais bien plus de tout ce qui compte : goût, arôme et polyphénols. Attendez, et vous obtenez plus d'huile, mais une huile plus douce et plus plate. La récolte précoce, c'est le choix de cueillir au sommet du vert.",
    scaleLeft: "← plus de goût · plus de polyphénols · moins d'huile",
    scaleRight: "plus d'huile · plus douce · moins de polyphénols →",
    stages: [
      { label: "Verte", when: "début octobre" },
      { label: "En véraison", when: "fin octobre" },
      { label: "Noire", when: "novembre et au-delà" },
    ],
    markerLabel: "ATTIMO cueille ici",
    markerSub: "vertes & tôt",
  },
  problem: {
    heading: "Pourquoi l'huile d'olive de récolte précoce est rare — et revient plus cher",
    intro:
      "La récolte précoce n'est pas un argument marketing ; c'est un sacrifice économique que la plupart des producteurs refusent de faire. Voici le calcul, et pourquoi l'industrie cueille tard.",
    stat1: { value: "~½", text: "l'huile que donnent les olives vertes, cueillies tôt, par rapport aux olives mûres — il faut donc environ deux fois plus de fruits pour remplir une bouteille." },
    stat2: { value: "Octobre", text: "la courte fenêtre du début de saison, quand le fruit est encore vert et à son apogée. L'industrie attend le rendement ; pas nous." },
    args: [
      { title: "Les olives vertes donnent moins d'huile", text: "Les olives noires mûres sont gorgées d'huile ; les vertes, non. La récolte précoce échange le rendement contre la qualité — environ la moitié de l'huile par kilo de fruit, ce qui explique précisément son coût plus élevé par bouteille." },
      { title: "Une fenêtre courte et délicate", text: "La fenêtre du vert dure quelques semaines, et le fruit ferme du début de saison doit être cueilli et pressé vite pour éviter meurtrissures et oxydation. Plus de soin, moins d'huile, un coût plus élevé — l'inverse de la façon dont on fabrique l'huile de grande consommation." },
      { title: "Le volume gagne quand on produit en masse", text: "Les producteurs de masse cueillent tard et mécaniquement, quand les olives sont lourdes d'huile, puis assemblent pour un goût neutre, bon marché et constant. La récolte précoce, c'est le choix délibéré de ne pas le faire." },
    ],
    footnote:
      "Côté calcul : les olives vertes, cueillies tôt, contiennent moins d'huile que les olives mûres — environ la moitié — il faut donc à peu près deux fois plus de fruits pour remplir une bouteille. Cet écart de rendement est le cœur de l'économie du prix de la récolte précoce.",
  },
  taste: {
    eyebrow: "Le Goût",
    heading: "La récolte précoce en bouche",
    introPre:
      "Verte, herbacée et aromatique, avec une amertume sur la langue et une accroche poivrée au fond de la gorge — parfois assez pour faire tousser. Ce coup de fouet n'est pas un défaut ; c'est le goût d'une huile fraîche, tout juste pressée, issue de fruits verts. Dans ses premières semaines, non filtrée, c'est ce que les Italiens appellent l'",
    introEm: "olio nuovo",
    introPost: ". Nos trois huiles varient en intensité, mais partagent toutes cette fraîcheur verte et vivante.",
    gentle: "DOUCE",
    bold: "CORSÉE",
    notes: { coratina: "Corsé et Intense", picual: "Vert et Herbacé", nocellara: "Doux et Fruité" },
  },
  harvest: {
    heading: "Comment nous récoltons",
    intro:
      "Cueillies vertes en octobre, à partir d'une seule variété, et pressées à froid en quelques heures — puis embouteillées fraîches et expédiées tant qu'il s'agit encore de l'huile de l'année.",
  },
  evidence: {
    eyebrow: "Les Preuves",
    heading: "Ce que montre la recherche",
    intro: "La récolte précoce n'est pas une histoire marketing — elle se mesure. Trois constats, chacun issu de la science de l'olive évaluée par les pairs.",
    items: [
      { claim: "Les polyphénols culminent dans les olives vertes — puis chutent avec la maturation", body: "La teneur en composés phénoliques est la plus élevée dans le fruit jeune et vert, et baisse régulièrement pendant la maturation à mesure que l'oleuropéine, le composé parent, se dégrade. Des études portant sur des variétés espagnoles, iraniennes et italiennes constatent toutes que les huiles cueillies tôt renferment nettement plus de polyphénols totaux que les mêmes arbres récoltés quelques semaines plus tard.", source: "Maturité du fruit & polyphénols — Food Sci. & Nutrition (2023)", href: NATURE_HREF },
      { claim: "Moins d'huile, plus de ce qui compte — l'arbitrage qui fixe le prix", body: "Les olives plus mûres contiennent plus d'huile mais moins de composés bioactifs ; les deux évoluent en sens inverse. La récolte précoce prend délibérément le côté faible rendement, haute teneur en polyphénols de cette courbe — environ la moitié de l'huile par kilo de fruit — ce qui explique précisément son coût plus élevé par bouteille.", source: "Accumulation d'huile vs. rétention des bioactifs — Foods, MDPI (2026)", href: FOODS_HREF },
      { claim: "Elle est périssable — et c'est tout le produit", body: "Même une excellente huile de récolte précoce ne se conserve pas. Exposée à la lumière, une huile d'olive vierge extra peut passer sous le seuil de polyphénols de l'allégation de santé de l'UE en trois mois environ ; même conservée à l'abri de la lumière, elle perd une large part de ses composés phénoliques en un an, la chute la plus forte survenant dans les premiers mois après le pressage.", source: "Perte de composés phénoliques au stockage — Food Chemistry (2021)", href: STORAGE_HREF },
    ],
    footnote:
      "Les constats sont tirés des études évaluées par les pairs liées à côté de chaque point ; les analyses de labo d'ATTIMO, lot par lot, figurent plus bas. Contexte, pas un avis médical.",
  },
  freshness: {
    eyebrow: "Le Hic",
    heading: "Ça ne marche que frais",
    body1:
      "Tout ce que la récolte précoce vous offre — l'intensité verte, l'arôme, les polyphénols — commence à s'estomper dès le jour de la mise en bouteille. Une excellente huile de récolte précoce restée un an en transit puis en rayon est discrètement devenue une huile ordinaire. Ici, la fraîcheur n'est pas un simple plus : c'est tout le produit.",
    body2Pre: "Alors nous faisons la seule chose qui reste honnête : ",
    body2Accent: "nous ne vendons jamais que la dernière récolte.",
    body2Post: " Quand celle de l'année est épuisée, nous attendons la suivante — plutôt que de vous expédier l'huile de l'an dernier maquillée en fraîche.",
    chart: {
      title: "Les polyphénols s'estompent après le pressage",
      fresh: "Fraîche — tout juste pressée",
      euLine: "Seuil d'allégation de santé UE",
      ordinary: "…huile ordinaire",
      pressed: "Pressage",
      oneYear: "~1 an en rayon",
      caption: "À titre indicatif. Le déclin s'accentue avec la lumière et la chaleur ; nous expédions à gauche de cette courbe.",
    },
  },
  healthTieIn: {
    heading: "Cueillir vert, c'est aussi ce qui la rend la plus saine",
    body:
      "Les polyphénols — les antioxydants derrière la réputation santé de l'huile d'olive — culminent dans les olives vertes, cueillies tôt. Le choix de récolte et le bienfait santé sont une seule et même décision.",
    cta: "Voir notre gamme riche en polyphénols →",
  },
  proof: {
    heading: "Des chiffres que vous pouvez vérifier",
    intro:
      "Une récolte précoce soignée se lit dans les chiffres — faible acidité (fruit intact, pressé vite) et faibles peroxydes (oxydation minimale). Chaque lot est testé par un laboratoire indépendant ; voici les rapports complets.",
    reportSuffix: "rapport de labo",
  },
  faq: {
    heading: "FAQ sur l'huile d'olive de récolte précoce",
    items: [
      { question: "Qu'est-ce que l'huile d'olive de récolte précoce ?", answer: "L'huile d'olive de récolte précoce est pressée à partir d'olives cueillies encore vertes et non mûres — généralement en octobre — plutôt que laissées mûrir jusqu'au violet ou au noir. Les olives vertes donnent moins d'huile, mais une huile bien plus intense, fraîche et riche en polyphénols. C'est le choix derrière des termes comme « récolte précoce », « récolte verte » et « olio nuovo »." },
      { question: "Quand récolte-t-on les olives pour une huile de récolte précoce ?", answer: "Dans l'hémisphère nord, la récolte précoce a lieu en octobre, tout au début de la saison, quand le fruit est encore vert et ferme. L'huile de récolte tardive provient d'olives laissées sur l'arbre jusqu'en novembre et décembre, une fois mûries et foncées — ce qui donne plus d'huile mais un résultat plus doux et moins riche en polyphénols." },
      { question: "L'huile d'olive de récolte précoce a-t-elle un goût différent ?", answer: "Nettement. L'huile de récolte précoce est verte, herbacée et aromatique, avec une amertume sur la langue et une accroche poivrée au fond de la gorge. Ce poivré est un signe de fraîcheur et de polyphénols, pas un défaut. Les huiles de récolte tardive sont plus douces et plus beurrées — plus souples, mais plus plates." },
      { question: "Pourquoi l'huile d'olive de récolte précoce est-elle plus chère ?", answer: "Parce que les olives vertes donnent environ la moitié de l'huile des olives mûres : il faut donc à peu près deux fois plus de fruits pour remplir une bouteille — cueillis dans une fenêtre courte, souvent à la main. Vous payez un rendement plus faible et une qualité plus élevée. L'huile industrielle est cueillie tard précisément pour maximiser le volume et réduire le coût." },
      { question: "L'huile d'olive de récolte précoce est-elle plus saine ?", answer: "En général oui — les polyphénols culminent dans les olives vertes, cueillies tôt, et ce sont eux les composés derrière la réputation santé de l'huile d'olive. C'est le lien direct entre le choix de récolte et le bienfait santé. Nous détaillons la science sur notre page dédiée à l'huile d'olive riche en polyphénols." },
      { question: "À quel point une huile d'olive de récolte précoce doit-elle être fraîche ?", answer: "Aussi fraîche que possible. Les huiles de récolte précoce atteignent leur apogée juste après le pressage et déclinent au fil des mois suivants ; vous voulez donc la récolte en cours — pas une bouteille qui a passé un an en transit et en rayon. ATTIMO ne vend jamais que la dernière récolte, précisément pour cette raison." },
      { question: "La récolte précoce, est-ce la même chose que l'olio nuovo ?", answer: "Les deux se recoupent. L'olio nuovo (« huile nouvelle ») est l'huile tout juste pressée, souvent non filtrée, que l'on savoure dans les semaines qui suivent une récolte précoce — intensément verte et poivrée. L'huile de récolte précoce est la catégorie plus large ; l'olio nuovo en est l'expression la plus fraîche et la plus jeune." },
    ],
  },
  blogHeading: "En savoir plus sur l'huile d'olive de récolte précoce",
};

// ───────────────────────────── SVENSKA (REVIEW) ─────────────────────────────
const sv: EHContent = {
  meta: {
    title: "Tidig Skörd Olivolja | Grön, Färsk & Polyfenolrik",
    description:
      "Köp tidig skörd olivolja — oliver plockade gröna och unga, kallpressade inom timmar. Sortren, årets skörd, polyfenolrik. Från 250 kr.",
  },
  hero: {
    eyebrow: "Kategori · Extra Jungfruolivolja",
    h1: "Tidig Skörd Olivolja",
    subPre: "Oliver plockade ",
    subAccent: "gröna och unga",
    subPost: ", pressade inom timmar — den färskaste, mest intensiva, mest levande olivolja som finns. Sortren, årets skörd.",
    cta: "Handla årets skörd →",
  },
  bottleFlavours: { coratina: "Kraftig & Intensiv", picual: "Grön & Gräsig", nocellara: "Mjuk & Fruktig" },
  range: {
    heading: "Årets skörd",
    subtitle:
      "Tre sortrena oljor, alla pressade från säsongens tidiga, grönplockade oliver. Välj efter smak, eller gör testet för att hitta din match.",
    quizPrompt: "Osäker på vilken du ska välja?",
  },
  ripeness: {
    eyebrow: "Tajmingen",
    heading: "Vad ”tidig skörd” betyder",
    intro:
      "En oliv förändras när den mognar — grön, sedan lila, sedan svart — och det gör oljan den ger också. Plocka tidigt, medan den är grön, och du får mindre olja men långt mer av allt som betyder något: smak, arom och polyfenoler. Vänta, och du får mer olja men en mildare, plattare. Tidig skörd är valet att plocka vid den gröna toppen.",
    scaleLeft: "← mer smak · mer polyfenoler · mindre olja",
    scaleRight: "mer olja · mildare · mindre polyfenol →",
    stages: [
      { label: "Grön", when: "tidigt i oktober" },
      { label: "Skiftar", when: "sent i oktober" },
      { label: "Svart", when: "november+" },
    ],
    markerLabel: "ATTIMO plockar här",
    markerSub: "grön & tidig",
  },
  problem: {
    heading: "Varför tidig skörd-olivolja är sällsynt — och kostar mer",
    intro:
      "Tidig skörd är inte ett marknadsföringsord; det är en ekonomisk uppoffring de flesta producenter inte gör. Här är matematiken, och varför industrin plockar sent i stället.",
    stat1: { value: "~½", text: "så mycket olja gröna, tidigt skördade oliver ger jämfört med fullmogna — så det krävs ungefär dubbelt så mycket frukt för att fylla en flaska." },
    stat2: { value: "Oktober", text: "det korta tidiga fönstret då frukten fortfarande är grön och på sin topp. Industrin väntar på utbyte; det gör inte vi." },
    args: [
      { title: "Gröna oliver ger mindre olja", text: "Mogna svarta oliver är feta av olja; gröna är det inte. Tidig skörd byter utbyte mot kvalitet — ungefär hälften så mycket olja per kilo frukt, vilket är precis varför den kostar mer per flaska." },
      { title: "Ett kort, varsamt fönster", text: "Det gröna fönstret varar veckor, och fast tidig frukt måste plockas och pressas snabbt för att undvika stötskador och oxidation. Mer omsorg, mindre olja, högre kostnad — motsatsen till hur bulkolja görs." },
      { title: "Volym vinner i stor skala", text: "Massproducenter plockar sent och maskinellt, när oliverna är tunga av olja, och blandar sedan för en billig, neutral, jämn smak. Tidig skörd är det medvetna valet att inte göra det." },
    ],
    footnote:
      "Om matematiken: gröna, tidigt plockade oliver innehåller mindre olja än fullmogna — ungefär hälften — så det krävs ungefär dubbelt så mycket frukt för att fylla en flaska. Det utbytesgapet är kärnan i ekonomin bakom priset på tidig skörd.",
  },
  taste: {
    eyebrow: "Smaken",
    heading: "Hur tidig skörd smakar",
    introPre:
      "Grön, gräsig och aromatisk, med en beska på tungan och ett pepprigt stick längst bak i halsen — ibland nog för att få dig att hosta. Det sticket är inget fel; det är smaken av en färsk, nypressad olja, direkt från grön frukt. Under sina första veckor, ofiltrerad, är den vad italienarna kallar ",
    introEm: "olio nuovo",
    introPost: ". Våra tre varierar i intensitet, men delar alla den levande, gröna friskheten.",
    gentle: "MJUK",
    bold: "KRAFTIG",
    notes: { coratina: "Kraftig & Intensiv", picual: "Grön & Gräsig", nocellara: "Mjuk & Fruktig" },
  },
  harvest: {
    heading: "Så skördar vi",
    intro:
      "Plockad grön i oktober, från en enda sort, och kallpressad inom timmar — sedan tappad färsk och skickad medan den fortfarande är årets olja.",
  },
  evidence: {
    eyebrow: "Bevisen",
    heading: "Vad forskningen visar",
    intro: "Tidig skörd är ingen marknadsföringssaga — den är mätbar. Tre fynd, vart och ett från kollegialt granskad olivforskning.",
    items: [
      { claim: "Polyfenoler når sin topp i gröna oliver — och faller sedan när frukten mognar", body: "Fenolhalten är högst i ung, grön frukt och sjunker stadigt genom mognaden när oleuropein, moderämnet, bryts ner. Studier på spanska, iranska och italienska sorter finner alla att tidigt plockade oljor bär markant mer totala polyfenoler än samma träd skördade veckor senare.", source: "Fruktmognad & polyfenoler — Food Sci. & Nutrition (2023)", href: NATURE_HREF },
      { claim: "Mindre olja, mer av det som betyder något — avvägningen som sätter priset", body: "Mognare oliver håller mer olja men färre bioaktiva ämnen; de två rör sig åt motsatt håll. Tidig skörd tar medvetet den låga-utbyte, höga-polyfenol-sidan av den kurvan — ungefär hälften så mycket olja per kilo frukt — vilket är precis varför den kostar mer per flaska.", source: "Oljeuppbyggnad vs. bevarade bioaktiva ämnen — Foods, MDPI (2026)", href: FOODS_HREF },
      { claim: "Den är färskvara — friskheten är hela produkten", body: "Även en fantastisk tidig skörd-olja håller sig inte. I ljus kan extra jungfruolja falla under EU:s polyfenolnivå för hälsopåstående inom ungefär tre månader; även mörkt förvarad förlorar den en stor del av sina fenoler under ett år, med det brantaste fallet under de första månaderna efter pressning.", source: "Fenolförlust vid lagring — Food Chemistry (2021)", href: STORAGE_HREF },
    ],
    footnote:
      "Fynden är hämtade från de kollegialt granskade studierna som länkas vid varje punkt; ATTIMOs egna labbsiffror per parti finns nedan. Kontext, inte medicinsk rådgivning.",
  },
  freshness: {
    eyebrow: "Haken",
    heading: "Den fungerar bara färsk",
    body1:
      "Allt tidig skörd ger dig — den gröna intensiteten, aromen, polyfenolerna — börjar blekna den dag oljan tappas. En fantastisk tidig skörd-olja som stått i transport och på en hylla i ett år har i tysthet blivit en helt vanlig. Friskhet är inget trevligt tillägg här; den är hela produkten.",
    body2Pre: "Så vi gör det enda som håller det ärligt: ",
    body2Accent: "vi säljer alltid bara den senaste skörden.",
    body2Post: " När årets är slut väntar vi på nästa — i stället för att skicka dig förra årets olja utklädd till färsk.",
    chart: {
      title: "Polyfenoler bleknar efter pressning",
      fresh: "Färsk — nypressad",
      euLine: "EU:s hälsopåståendenivå",
      ordinary: "…vanlig olja",
      pressed: "Pressad",
      oneYear: "~1 år på hyllan",
      caption: "Illustrativ. Nedgången blir brantare med ljus och värme; vi skickar från vänstra delen av kurvan.",
    },
  },
  healthTieIn: {
    heading: "Att plocka tidigt är också varför den är nyttigast",
    body:
      "Polyfenoler — antioxidanterna bakom olivoljans hälsorykte — når sin topp i gröna, tidigt skördade oliver. Skördevalet och hälsonyttan är samma beslut.",
    cta: "Se vårt polyfenolrika sortiment →",
  },
  proof: {
    heading: "Friskhet du kan kontrollera",
    intro:
      "Noggrann tidig skörd syns i siffrorna — låg syrahalt (från intakt, snabbt pressad frukt) och låga peroxider (från minimal oxidation). Varje parti testas av tredje part; här är de fullständiga rapporterna.",
    reportSuffix: "labbrapport",
  },
  faq: {
    heading: "FAQ om tidig skörd-olivolja",
    items: [
      { question: "Vad är tidig skörd-olivolja?", answer: "Tidig skörd-olivolja pressas från oliver plockade medan de fortfarande är gröna och omogna — vanligtvis i oktober — i stället för att lämnas att mogna till lila eller svart. Gröna oliver ger mindre olja, men en långt mer intensiv, färsk och polyfenolrik. Det är valet bakom uttryck som 'tidig skörd', 'grön skörd' och 'olio nuovo'." },
      { question: "När skördas oliverna för olja av tidig skörd?", answer: "På norra halvklotet sker den tidiga skörden i oktober, allra först på säsongen, när frukten fortfarande är grön och fast. Olja av sen skörd kommer från oliver som lämnats kvar på trädet in i november och december, när de mognat och mörknat — vilket ger mer olja men ett mildare, mindre polyfenolrikt resultat." },
      { question: "Smakar tidig skörd-olivolja annorlunda?", answer: "Tydligt. Olja av tidig skörd är grön, gräsig och aromatisk, med en beska på tungan och ett pepprigt stick längst bak i halsen. Den pepprigheten är ett tecken på friskhet och polyfenoler, inte ett fel. Oljor av sen skörd är mildare och mer smöriga — mjukare, men plattare." },
      { question: "Varför är tidig skörd-olivolja dyrare?", answer: "För att gröna oliver ger ungefär hälften så mycket olja som mogna, så det krävs ungefär dubbelt så mycket frukt för att fylla en flaska — plockad i ett kort fönster, ofta för hand. Du betalar för lägre utbyte och högre kvalitet. Industriolja plockas sent just för att maximera volym och sänka kostnaden." },
      { question: "Är tidig skörd-olivolja nyttigare?", answer: "Generellt ja — polyfenoler når sin topp i gröna, tidigt skördade oliver, och polyfenoler är ämnena bakom olivoljans hälsorykte. Det är den direkta länken mellan skördevalet och hälsonyttan. Vi går igenom vetenskapen på djupet på vår sida om polyfenolrik olivolja." },
      { question: "Hur färsk bör tidig skörd-olivolja vara?", answer: "Så färsk som möjligt. Oljor av tidig skörd når sin topp strax efter pressning och avtar under de följande månaderna, så du vill ha den aktuella skörden — inte en flaska som tillbringat ett år i transport och på en hylla. ATTIMO säljer alltid bara den senaste skörden, av precis det skälet." },
      { question: "Är tidig skörd samma sak som olio nuovo?", answer: "De överlappar. Olio nuovo ('ny olja') är den nypressade, ofta ofiltrerade olja som njuts under veckorna direkt efter en tidig skörd — intensivt grön och pepprig. Olja av tidig skörd är den bredare kategorin; olio nuovo är dess färskaste, yngsta uttryck." },
    ],
  },
  blogHeading: "Läs mer om tidig skörd-olivolja",
};

// ───────────────────────────── DANSK (REVIEW) ─────────────────────────────
const da: EHContent = {
  meta: {
    title: "Tidlig Høst Olivenolie | Grøn, Frisk & Polyfenolrig",
    description:
      "Køb tidlig høst olivenolie — oliven plukket grønne og unge, koldpresset inden for få timer. Enkeltsorts, dette års høst, polyfenolrig. Fra 170 kr.",
  },
  hero: {
    eyebrow: "Kategori · Ekstra Jomfru Olivenolie",
    h1: "Tidlig Høst Olivenolie",
    subPre: "Oliven plukket ",
    subAccent: "grønne og unge",
    subPost: ", presset inden for få timer — den friskeste, mest intense og mest levende olivenolie, der findes. Enkeltsorts, dette års høst.",
    cta: "Køb dette års høst →",
  },
  bottleFlavours: { coratina: "Kraftig & Intens", picual: "Grøn & Græsagtig", nocellara: "Mild & Frugtig" },
  range: {
    heading: "Dette års høst",
    subtitle:
      "Tre enkeltsorts olier, alle presset af denne sæsons tidlige, grønt plukkede oliven. Vælg efter smag, eller tag testen for at finde dit match.",
    quizPrompt: "Usikker på, hvilken du skal vælge?",
  },
  ripeness: {
    eyebrow: "Timingen",
    heading: "Hvad ”tidlig høst” betyder",
    intro:
      "En oliven ændrer sig, mens den modner — grøn, så violet, så sort — og det gør den olie, den giver, også. Pluk tidligt, mens den er grøn, og du får mindre olie, men langt mere af alt det, der betyder noget: smag, aroma og polyfenoler. Vent, og du får mere olie, men en mildere og fladere en. Tidlig høst er valget om at plukke, når det grønne er på sit højeste.",
    scaleLeft: "← mere smag · flere polyfenoler · mindre olie",
    scaleRight: "mere olie · mildere · færre polyfenoler →",
    stages: [
      { label: "Grøn", when: "tidligt i oktober" },
      { label: "Skiftende", when: "sidst i oktober" },
      { label: "Sort", when: "november+" },
    ],
    markerLabel: "ATTIMO plukker her",
    markerSub: "grøn & tidlig",
  },
  problem: {
    heading: "Hvorfor tidlig høst olivenolie er sjælden — og koster mere",
    intro:
      "Tidlig høst er ikke et marketingord; det er et økonomisk offer, som de fleste producenter ikke vil bringe. Her er regnestykket, og hvorfor branchen plukker sent i stedet.",
    stat1: { value: "~½", text: "af den olie, grønne, tidligt høstede oliven giver i forhold til fuldt modne — så det kræver cirka dobbelt så meget frugt at fylde en flaske." },
    stat2: { value: "Oktober", text: "det korte, tidlige vindue, hvor frugten stadig er grøn og på sit højeste. Branchen venter på udbytte; det gør vi ikke." },
    args: [
      { title: "Grønne oliven giver mindre olie", text: "Modne, sorte oliven er fede af olie; grønne er ikke. Tidlig høst bytter udbytte for kvalitet — cirka halvdelen af olien pr. kilo frugt, hvilket er præcis derfor, den koster mere pr. flaske." },
      { title: "Et kort, omhyggeligt vindue", text: "Det grønne vindue varer uger, og den faste, tidlige frugt skal plukkes og presses hurtigt for at undgå stød og oxidation. Mere omhu, mindre olie, højere pris — det modsatte af, hvordan masseolie laves." },
      { title: "Volumen vinder i stor skala", text: "Masseproducenter plukker sent og maskinelt, når olivenerne er tunge af olie, og blander så for en billig, neutral og ensartet smag. Tidlig høst er det bevidste valg om at lade være." },
    ],
    footnote:
      "Om regnestykket: grønne, tidligt plukkede oliven indeholder mindre olie end fuldt modne — cirka halvdelen — så det kræver cirka dobbelt så meget frugt at fylde en flaske. Det udbyttegab er kerneøkonomien bag prisen på tidlig høst.",
  },
  taste: {
    eyebrow: "Smagen",
    heading: "Hvordan tidlig høst smager",
    introPre:
      "Grøn, græsagtig og aromatisk, med en bitterhed på tungen og et peberagtigt stik bagest i halsen — nogle gange nok til at få dig til at hoste. Det spark er ikke en fejl; det er smagen af en frisk, nypresset olie, direkte fra grøn frugt. I sine første uger, ufiltreret, er det, hvad italienerne kalder ",
    introEm: "olio nuovo",
    introPost: ". Vores tre varierer i intensitet, men deler alle den levende, grønne friskhed.",
    gentle: "MILD",
    bold: "KRAFTIG",
    notes: { coratina: "Kraftig & Intens", picual: "Grøn & Græsagtig", nocellara: "Mild & Frugtig" },
  },
  harvest: {
    heading: "Sådan høster vi",
    intro:
      "Plukket grønt i oktober, fra en enkelt sort, og koldpresset inden for få timer — derefter tappet frisk og sendt afsted, mens det stadig er dette års olie.",
  },
  evidence: {
    eyebrow: "Beviset",
    heading: "Hvad forskningen viser",
    intro: "Tidlig høst er ikke en marketinghistorie — det er målbart. Tre fund, hvert fra fagfællebedømt olivenvidenskab.",
    items: [
      { claim: "Polyfenoler topper i grønne oliven — og falder så, når frugten modner", body: "Fenolindholdet er højest i unge, grønne oliven og falder støt gennem modningen, efterhånden som oleuropein, moderforbindelsen, nedbrydes. Studier på tværs af spanske, iranske og italienske sorter finder alle, at tidligt plukkede olier bærer markant flere samlede polyfenoler end de samme træer høstet uger senere.", source: "Frugtmodenhed & polyfenoler — Food Sci. & Nutrition (2023)", href: NATURE_HREF },
      { claim: "Mindre olie, mere af det, der tæller — det bytteforhold, der sætter prisen", body: "Modnere oliven rummer mere olie, men færre bioaktive stoffer; de to bevæger sig i modsatte retninger. Tidlig høst tager bevidst den lave-udbytte, høj-polyfenol side af den kurve — cirka halvdelen af olien pr. kilo frugt — hvilket er præcis derfor, den koster mere pr. flaske.", source: "Olieophobning vs. bioaktiv bevaring — Foods, MDPI (2026)", href: FOODS_HREF },
      { claim: "Den er letfordærvelig — friskhed er hele produktet", body: "Selv en fremragende tidlig høst-olie holder sig ikke. Under lys kan ekstra jomfruolie falde under EU's polyfenolniveau for sundhedsanprisning inden for cirka tre måneder; selv opbevaret mørkt mister den en stor del af sine fenoler over et år, med det stejleste fald i de første måneder efter presning.", source: "Fenoltab under opbevaring — Food Chemistry (2021)", href: STORAGE_HREF },
    ],
    footnote:
      "Fundene er hentet fra de fagfællebedømte studier, der er linket ved siden af hvert punkt; ATTIMOs egne labtal pr. parti findes nedenfor. Kontekst, ikke medicinsk rådgivning.",
  },
  freshness: {
    eyebrow: "Hagen ved det",
    heading: "Det virker kun frisk",
    body1:
      "Alt, hvad tidlig høst giver dig — den grønne intensitet, aromaen, polyfenolerne — begynder at falme den dag, olien tappes. En fremragende tidlig høst-olie, der har stået i transit og på en hylde i et år, er stille og roligt blevet en ganske almindelig en. Friskhed er ikke et nice-to-have her; det er hele produktet.",
    body2Pre: "Så vi gør den ene ting, der holder det ærligt: ",
    body2Accent: "vi sælger altid kun den seneste høst.",
    body2Post: " Når dette års er væk, venter vi på den næste — frem for at sende dig sidste års olie forklædt som frisk.",
    chart: {
      title: "Polyfenoler falmer efter presning",
      fresh: "Frisk — lige presset",
      euLine: "EU's niveau for sundhedsanprisning",
      ordinary: "…almindelig olie",
      pressed: "Presset",
      oneYear: "~1 år på hylden",
      caption: "Illustrativt. Faldet bliver stejlere med lys og varme; vi sender i venstre side af denne kurve.",
    },
  },
  healthTieIn: {
    heading: "At plukke tidligt er også derfor, den er sundest",
    body:
      "Polyfenoler — antioxidanterne bag olivenoliens sundhedsry — topper i grønne, tidligt høstede oliven. Høstvalget og sundhedsgavnen er den samme beslutning.",
    cta: "Se vores polyfenolrige sortiment →",
  },
  proof: {
    heading: "Friskhed, du kan tjekke",
    intro:
      "Omhyggelig tidlig høst viser sig i tallene — lav syre (fra intakt, hurtigt presset frugt) og lave peroxider (fra minimal oxidation). Hvert parti testes af tredjepart; her er de fulde rapporter.",
    reportSuffix: "labrapport",
  },
  faq: {
    heading: "FAQ om tidlig høst olivenolie",
    items: [
      { question: "Hvad er tidlig høst olivenolie?", answer: "Tidlig høst olivenolie er presset af oliven, der er plukket, mens de stadig er grønne og umodne — som regel i oktober — i stedet for at få lov at modne til violet eller sort. Grønne oliven giver mindre olie, men en langt mere intens, frisk og polyfenolrig en. Det er valget bag udtryk som ”tidlig høst”, ”grøn høst” og ”olio nuovo”." },
      { question: "Hvornår høstes oliven til tidlig høst-olie?", answer: "På den nordlige halvkugle sker tidlig høst i oktober, helt i begyndelsen af sæsonen, når frugten stadig er grøn og fast. Sen høst-olie kommer fra oliven, der får lov at hænge på træet ind i november og december, når de er modnet og mørknet — hvilket giver mere olie, men et mildere og mindre polyfenolrigt resultat." },
      { question: "Smager tidlig høst olivenolie anderledes?", answer: "Tydeligt. Tidlig høst-olie er grøn, græsagtig og aromatisk, med en bitterhed på tungen og et peberagtigt stik bagest i halsen. Det peber er et tegn på friskhed og polyfenoler, ikke en fejl. Sen høst-olier er mildere og mere smøragtige — blødere, men fladere." },
      { question: "Hvorfor er tidlig høst olivenolie dyrere?", answer: "Fordi grønne oliven giver cirka halvdelen af olien fra modne, så det kræver cirka dobbelt så meget frugt at fylde en flaske — plukket i et kort vindue, ofte i hånden. Du betaler for lavere udbytte og højere kvalitet. Industriolie plukkes sent netop for at maksimere volumen og sænke prisen." },
      { question: "Er tidlig høst olivenolie sundere?", answer: "Generelt ja — polyfenoler topper i grønne, tidligt høstede oliven, og polyfenoler er de forbindelser, der ligger bag olivenoliens sundhedsry. Det er den direkte forbindelse mellem høstvalget og sundhedsgavnen. Vi dækker videnskaben i dybden på vores side om polyfenolrig olivenolie." },
      { question: "Hvor frisk bør tidlig høst olivenolie være?", answer: "Så frisk som muligt. Tidlig høst-olier topper lige efter presning og falder i løbet af de følgende måneder, så du vil have den aktuelle høst — ikke en flaske, der har brugt et år i transit og på en hylde. ATTIMO sælger altid kun den seneste høst, netop af den grund." },
      { question: "Er tidlig høst det samme som olio nuovo?", answer: "De overlapper. Olio nuovo (”ny olie”) er den nypressede, ofte ufiltrerede olie, der nydes i ugerne lige efter en tidlig høst — intenst grøn og peberagtig. Tidlig høst-olie er den bredere kategori; olio nuovo er dens friskeste og yngste udtryk." },
    ],
  },
  blogHeading: "Læs mere om tidlig høst olivenolie",
};

export const EH_CONTENT: Record<"en" | "de" | "fr" | "sv" | "da", EHContent> = { en, de, fr, sv, da };

const EH_ORIGIN = "https://attimo-oil.com";
export const EH_SLUGS = {
  en: "/early-harvest-olive-oil",
  de: "/de/fruehe-ernte-olivenoel",
  fr: "/fr/huile-olive-recolte-precoce",
  sv: "/se/tidig-skord-olivolja",
  da: "/dk/tidlig-hoest-olivenolie",
} as const;

// hreflang cluster shared by every localised early-harvest page. All five ship
// together, so all are listed.
export const EH_HREFLANGS = [
  { hreflang: "en", href: EH_ORIGIN + EH_SLUGS.en },
  { hreflang: "de", href: EH_ORIGIN + EH_SLUGS.de },
  { hreflang: "fr", href: EH_ORIGIN + EH_SLUGS.fr },
  { hreflang: "sv", href: EH_ORIGIN + EH_SLUGS.sv },
  { hreflang: "da", href: EH_ORIGIN + EH_SLUGS.da },
  { hreflang: "x-default", href: EH_ORIGIN + EH_SLUGS.en },
];
