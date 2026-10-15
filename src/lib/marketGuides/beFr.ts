import type { MarketGuideContent, ShipEvidence } from "./types";

// Shipping evidence per Index entry id, Belgium (French page). Filled from a page-by-page
// check of each producer's own shipping/FAQ page; "not stated" means the site did
// not say. `notes` is the French one-liner shown in the table. Entry ids match src/content/polyphenol-index/*.yaml.
export const BE_FR_SHIPPING: Record<string, ShipEvidence> = {
  "blueprint-snake-oil": { ships: "yes", basis: "lists country", route: "retailer", seller: "BONO", days: "le lendemain", cost: "€4,95", free_from: "€35", quote: "Voor België geldt: bestel voor 23:00 uur, en ontvang je producten de volgende dag.", source_url: "https://support.bono.nl/nl/articles/8979368-wat-is-jullie-levertijd", checked: "2026-10-13", notes: "Via BONO, partenaire européen officiel ; commandé avant 23 h, livré le lendemain" },
  "olvlimits-green-machine": { ships: "yes", basis: "EU-wide statement", route: "webshop", days: "2 à 6 jours ouvrables", cost: "not stated", free_from: "€50", quote: "European Union (EU): 2–6 business days", source_url: "https://olvlimits.com/en-be/policies/shipping-policy", checked: "2026-10-13", notes: "Expédie depuis les Pays-Bas ; la Belgique n'est pas nommée, UE en 2 à 6 jours ouvrables" },
  "oro-del-desierto-picual": { ships: "yes", basis: "lists country", route: "retailer", seller: "Oliva Oliva", days: "3 à 6 jours ouvrables", cost: "11,50 € HTVA", quote: "Zone S: Belgium, France, Luxembourg, Monaco, Netherlands", source_url: "https://olivaoliva.com/en/content/9-shipping-costs", checked: "2026-10-13", notes: "Via l'épicerie fine espagnole Oliva Oliva ; la Belgique figure dans ses zones d'expédition" },
  "pamako-monovarietal": { ships: "yes", basis: "EU-wide statement", route: "webshop", seller: "Pamako UK", days: "not stated", cost: "not stated", quote: "Shipping Across the UK & Europe", source_url: "https://www.pamako.co.uk/policies/shipping-policy", checked: "2026-10-13", notes: "Le site grec n'a pas de boutique ; la boutique britannique de Pamako expédie en Europe" },
  "pj-kabos-phenolic-shot": { ships: "yes", basis: "EU-wide statement", route: "webshop", days: "not stated", cost: "gratuit", quote: "Free EU shipping on all orders!", source_url: "https://www.pjkabos.gr", checked: "2026-10-13", notes: "Livraison gratuite dans l'UE ; délai non indiqué" },
  "morocco-gold": { ships: "yes", basis: "EU-wide statement", route: "webshop", days: "not stated", cost: "gratuit", quote: "Standard delivery within the USA, Canada, Australia, Europe & UK – Free", source_url: "https://morocco-gold.com/shop/morocco-gold-extra-virgin-olive-oil/", checked: "2026-10-13", notes: "Livraison gratuite vers l'Europe ; délai non indiqué par pays" },
  "olivea-ultra-high-phenolic": { ships: "yes", basis: "worldwide statement", route: "webshop", days: "not stated", cost: "$10", quote: "International shipping available for a flat rate of $10", source_url: "https://www.myolivea.com/pages/llms-full-txt", checked: "2026-10-13", notes: "International depuis les États-Unis ; l'Europe n'est pas nommée" },
  "olio-intini-coratina": { ships: "not stated", basis: "none", route: "request", days: "not stated", cost: "not stated", quote: "Per spedizioni all'estero o richieste particolari compilate il form contatti e cercheremo di soddisfare le vostre esigenze.", source_url: "https://oliointini.it/prodotto/coratina/", checked: "2026-10-13", notes: "Étranger sur demande via le formulaire de contact" },
  "kyoord-high-phenolic": { ships: "no", basis: "none", route: "none", days: "not stated", cost: "not stated", quote: "Kyoord is currently shipping to addresses in the United States and Canada.", source_url: "https://kyoord.com/policies/shipping-policy", checked: "2026-10-13", notes: "États-Unis et Canada uniquement" },
  "laconiko-zoi": { ships: "not stated", basis: "none", route: "none", days: "not stated", cost: "not stated", quote: "", source_url: "https://laconiko.com/", checked: "2026-10-13", notes: "Aucune voie vers la Belgique trouvée" },
  "oleum-crete-koroneiki": { ships: "no", basis: "none", route: "none", days: "not stated", cost: "not stated", quote: "Free delivery on all UAE orders.", source_url: "https://oleumcrete.ae/policies/shipping-policy", checked: "2026-10-13", notes: "Émirats arabes unis uniquement" },
  "rapunzel-polyphenolia": { ships: "no", basis: "none", route: "none", days: "not stated", cost: "not stated", quote: "Lieferung ausschließlich innerhalb Deutschlands und nach Österreich", source_url: "https://shop.rapunzel.de/versand-und-zahlungsbedingungen/", checked: "2026-10-13", notes: "Allemagne et Autriche uniquement" },
  "sakellaropoulos-fyllikon": { ships: "not stated", basis: "none", route: "none", days: "not stated", cost: "not stated", quote: "", source_url: "https://www.bioarmonia.gr/products", checked: "2026-10-13", notes: "Commande par téléphone en Grèce uniquement" },
  "the-governor-limited": { ships: "no", basis: "none", route: "none", days: "not stated", cost: "not stated", quote: "We ship to England, Wales, Scotland, Northern Ireland, Guernsey, Jersey, and the Isle of Man.", source_url: "https://thegovernorevoo.co.uk/pages/shipping-policy", checked: "2026-10-13", notes: "Royaume-Uni uniquement" },
  "olive-oil-club-picholine": { ships: "yes", basis: "EU-wide statement", route: "webshop", days: "not stated", cost: "not stated", free_from: "€100", quote: "We ship all over Europe - Free delivery above €100", source_url: "https://oliveoilclub.myshopify.com/", checked: "2026-10-15", notes: "Expédie dans toute l'Europe, livraison offerte dès 100 € ; frais en dessous et délai non indiqués ; épuisé au 15 octobre 2026" },
  "deliba-ottobratico": { ships: "yes", basis: "EU-wide statement", route: "webshop", days: "not stated", cost: "not stated", quote: "Orders to supported destinations in Europe and the United Kingdom are fulfilled from Italy", source_url: "https://delibaoliveoil.com/policies/shipping-policy", checked: "2026-10-15", notes: "Livre en Europe depuis l'Italie ; pays, frais et délai visibles seulement au paiement ; épuisé au 15 octobre 2026" },
  "oleaphen-high-phenolic": { ships: "not stated", basis: "none", route: "none", days: "not stated", quote: "UK orders go through Oleaphen's UK partner at highphenolic.co.uk.", source_url: "https://www.highphenolic.com/buy-high-phenolic-olive-oil", checked: "2026-10-15", notes: "Aucune information d'expédition sur le site ; seulement un partenaire britannique pour le Royaume-Uni" },
};

export const beFr: MarketGuideContent = {
  lang: "fr",
  slug: "/fr/huile-olive-riche-polyphenols-acheter-belgique",
  market: "Belgique",
  country: "Belgium",
  daysUnit: "jours ouvrables",
  siblings: [{ href: "/nl/polyfenolrijke-olijfolie-kopen-belgie", label: "In het Nederlands →" }, { href: "/fr/huile-olive-riche-polyphenols-acheter-france", label: "Vous achetez en France ? Voir le guide français →" }],
  hreflangs: [{ hreflang: "nl-BE", href: "https://attimo-oil.com/nl/polyfenolrijke-olijfolie-kopen-belgie" }, { hreflang: "fr-BE", href: "https://attimo-oil.com/fr/huile-olive-riche-polyphenols-acheter-belgique" }],
  updated: "13 octobre 2026",
  meta: {
    title: "Acheter de l'huile d'olive riche en polyphénols en Belgique | ATTIMO",
    description: "Guide d'achat de l'huile d'olive riche en polyphénols en Belgique. Quelles huiles vous pouvez y acheter, quel est leur taux de polyphénols et comment il a été mesuré, et ce que coûte la livraison en Belgique. Mis à jour le {updated}.",
  },
  nav: { glance: "Huiles", criteria: "Critères", table: "Comparatif", oils: "Par huile", number: "Le chiffre", faq: "FAQ" },
  hero: {
    eyebrow: "Guide d'achat · Belgique",
    h1: "Acheter de l'huile d'olive riche en polyphénols en Belgique",
    lead: "Quelles huiles d'olive riches en polyphénols vous pouvez acheter en Belgique, et ce qu'il faut vérifier avant de commander.",
    cta: "Voir les huiles",
    ctaSecondary: "Ce qu'il faut vérifier",
    updatedLabel: "Mis à jour le",
    checkedLine: "Vérifié sur le site de chaque producteur",
  },
  glance: {
    eyebrow: "Ce que vous pouvez acheter",
    h2: "Les huiles d'olive riches en polyphénols que vous pouvez acheter en Belgique",
    introPre: "Uniquement les huiles avec un taux de polyphénols publié, dans l'ordre de l'",
    introLink: "Index des polyphénols",
    introPost: ".",
    labels: { attimoName: "ATTIMO Coratina", attimoSub: "Marque belge · aussi Nocellara et Picual", price: "Prix", priceNote: "prix du producteur, {verified}", method: "Mesuré par", methodLink: "qu'est-ce que cela veut dire ?", compounds: "Oléocanthal + oléacéine", total: "Polyphénols totaux", buy: "Acheter", cost: "Frais de port", days: "Livraison", source: "Source", notStated: "non indiqué", attimoAlso: "Aussi {nocellara} et {picual}" },
  },
  criteria: {
    eyebrow: "Ce qu'il faut vérifier",
    h2: "Quatre choses à voir avant de commander",
    intro: "Vous savez ce qu'est l'huile d'olive et vous en voulez une bonne. Voici la différence entre une bonne huile et une huile qui le dit seulement.",
    items: [
      { key: "origin", title: "Une vraie date de récolte", text: "L'huile de supermarché n'en a généralement pas, parce qu'elle mélange des huiles de plusieurs années. Les polyphénols baissent dès le jour du pressage, donc vous voulez savoir quel âge a l'huile et de quelle olive elle vient.", weight: 20, icon: "/icons/basket-2.svg" },
      { key: "report", title: "Un taux de polyphénols avec le rapport derrière", text: "Les polyphénols sont les composés qui rendent une huile d'olive saine et poivrée. Un chiffre sur l'étiquette est une affirmation ; un rapport de laboratoire que vous pouvez ouvrir est une preuve.", weight: 30, icon: "/icons/flask.svg" },
      { key: "method", title: "Comment ce chiffre a été mesuré", text: "Il existe plusieurs façons de mesurer les polyphénols, et elles donnent des chiffres différents pour la même huile. Un chiffre sans sa méthode ne se compare à rien.", weight: 20, icon: "/icons/olive.svg" },
      { key: "delivery", title: "Livraison en Belgique", text: "La marque livre-t-elle en Belgique, en combien de jours, et son site le dit-il lui-même ? Sinon, ne comptez pas dessus.", weight: 30, icon: "/icons/branch-2.svg" },
    ],
  },
  table: {
    eyebrow: "Comparatif",
    h2: "Toutes les huiles disponibles, comparées",
    intro: "Les mêmes huiles, notées sur les quatre critères ci-dessus. Deux colonnes pour le taux de polyphénols : les deux composés principaux à part, et le total tel que le producteur le publie.",
    cols: { oil: "Huile", compounds: "Oléocanthal + oléacéine", total: "Total", method: "Méthode", price: "Prix", buy: "Comment acheter en Belgique", days: "Livraison", score: "Score" },
    buy: { webshop: "Boutique en ligne, livre en Belgique", webshopEu: "Boutique en ligne, livre dans toute l'UE", webshopWorld: "Boutique en ligne, livre à l'international", retailer: "Via un magasin", distributor: "Via un distributeur", request: "Sur demande" },
    footnote: "mg/kg. Informations de livraison lues sur le site de chaque vendeur le {checked} ; la phrase se trouve derrière le lien source. Les taux de polyphénols viennent de l'Index des polyphénols, où chaque chiffre renvoie à son rapport. Les prix sont ceux du producteur, relevés en {verified}.",
    links: {
      index: { title: "L'Index des polyphénols", text: "Chaque huile d'olive au monde qui publie un taux de polyphénols, sur une seule page, classée selon les deux composés principaux." },
      methods: { title: "Pourquoi les méthodes diffèrent", text: "HPLC, NMR et Folin-Ciocalteu donnent des chiffres différents pour la même huile. Ce que chaque méthode mesure, et ce que vous pouvez comparer." },
    },
  },
  oils: {
    eyebrow: "Par huile",
    h2: "Ce que chaque huile montre et ne montre pas",
    intro: "Les mêmes quatre critères, détaillés huile par huile. Les plus et les moins viennent directement de ce que le producteur publie.",
    labels: { score: "Score", pros: "Plus", cons: "Moins", forWho: "Pour qui", standsOut: "Pourquoi elle se distingue", buy: "Acheter", price: "Prix", source: "Source", priceOnSite: "non indiqué" },
    pros: { report: "Rapport de laboratoire en ligne", hplc: "Oléocanthal et oléacéine rapportés séparément", method: "Méthode indiquée", origin: "Variété et récolte indiquées", shipsNl: "Livre en Belgique, {days}", shipsEu: "Livre dans toute l'UE" },
    cons: { nmr: "Total mesuré par NMR : compte une longue liste de composés phénoliques à leur poids entier, molécules dérivées lourdes comprises, et ressort 20 à 48 % plus haut que la HPLC pour la même huile. Comparez sur oléocanthal + oléacéine.", shipping: "Livraison {cost}", shippingFree: "Livraison {cost}, gratuite à partir de {free}", noReport: "Aucun rapport à ouvrir", noMethod: "Méthode non indiquée", totalOnly: "Seulement un total, sans composés séparés", noDays: "Délai de livraison en Belgique non indiqué", nlNotNamed: "La Belgique n'est pas nommée séparément", noOrigin: "Variété ou récolte non indiquée" },
    perOil: {
      "attimo-coratina": { cons: ["Pas encore de magasins en {market}", "Picual encore mesuré par Folin-Ciocalteu, pas par HPLC"], forWho: "Pour qui prend l'huile d'olive en shot quotidien, ou veut une huile puissante, amère et poivrée pour finir un plat.", standsOut: "Le rapport, la méthode, la variété et la date de récolte sont tous en ligne, et l'huile est en {market} sous {daysText}." },
      "olvlimits-green-machine": { forWho: "Pour qui veut la bouteille vite : marque néerlandaise, livraison en Belgique en quelques jours ouvrables selon leur page d'expédition" },
      "pj-kabos-phenolic-shot": { forWho: "Pour qui cherche une huile grecque avec un total élevé et accepte un délai de livraison non indiqué." },
    },
  },
  number: {
    eyebrow: "Le chiffre",
    h2: "Ce que veut dire un taux de polyphénols, en trois étapes",
    intro: "Chaque marque de ce guide imprime un chiffre en milligrammes par kilo. Voici comment le lire.",
    steps: [
      { title: "C'est un seul chiffre pour toute une famille de composés", text: "Les polyphénols sont des dizaines de composés différents. Deux d'entre eux, l'oléocanthal et l'oléacéine, sont les mieux étudiés et donnent le picotement poivré au fond de la gorge." },
      { title: "Des méthodes différentes donnent des chiffres différents", text: "Un laboratoire peut compter chaque composé séparément (HPLC) ou estimer toute la famille en une fois (NMR, Folin-Ciocalteu). La même huile affiche alors deux totaux différents. Aucun des deux n'est faux ; ils mesurent des choses différentes." },
      { title: "Ne comparez donc que ce qui est comparable", text: "Deux totaux issus de la même méthode, ou mieux : oléocanthal plus oléacéine, parce que chaque laboratoire rapporte ces deux composés séparément. C'est pourquoi ils ont leur propre colonne dans ce guide." },
    ],
    cta: "Chaque méthode expliquée",
  },
  avoid: {
    eyebrow: "Ce qu'il faut laisser en rayon",
    h2: "Quatre signes pour reposer une bouteille",
    items: [
      { title: "Pas de date de récolte", text: "Une date de péremption seule veut dire que vous ne savez pas quel âge a l'huile." },
      { title: "\"Riche en polyphénols\" sans chiffre", text: "Une affirmation sans milligrammes par kilo, c'est du marketing." },
      { title: "Un chiffre sans méthode ni rapport", text: "Vous ne pouvez ni le comparer ni le vérifier." },
      { title: "\"Extra vierge\" comme argument de qualité", text: "Extra vierge est le niveau d'entrée de la catégorie. Cela ne dit rien sur la fraîcheur ni sur les polyphénols." },
    ],
  },
  attimo: {
    eyebrow: "ATTIMO en Belgique",
    h2: "Trois huiles monovariétales, récoltées tôt, chez vous sous {daysText}",
    intro: "Fraîche de la dernière récolte, avec le rapport de laboratoire en ligne. Livraison en Belgique {standard}, gratuite à partir de {freeFrom}, sous {days}.",
  },
  faq: {
    heading: "Questions fréquentes",
    items: [
      { question: "ATTIMO livre-t-il en Belgique ?", answer: "Oui. La livraison coûte {standard} et est gratuite à partir de {freeFrom}. Les commandes arrivent sous {daysText}." },
      { question: "Quelle huile a le taux de polyphénols le plus élevé en Belgique ?", answer: "Cela dépend de la méthode de mesure. Le tableau montre chaque chiffre publié avec sa méthode, et les deux composés principaux dans leur propre colonne. ATTIMO Coratina 25/26 mesure 847 mg/kg (HPLC), dont 807 mg/kg d'oléocanthal plus oléacéine." },
      { question: "Comment comparer les différentes marques ?", answer: "Comme le fait ce guide. D'abord une vraie date de récolte sur la bouteille, pour que vous sachiez quel âge a l'huile. Ensuite un chiffre de polyphénols avec le rapport de laboratoire derrière, et la méthode de mesure utilisée, car des méthodes différentes donnent des chiffres différents pour la même huile. Quand les méthodes diffèrent, comparez sur l'oléocanthal + oléacéine, que chaque laboratoire indique séparément. Ensuite si la marque livre en {market}, en combien de jours et à quel coût, selon ses propres termes. Le tableau ci-dessus note chaque huile sur ces quatre points." },
      { question: "Puis-je acheter ATTIMO dans un magasin en Belgique ?", answer: "Pour l'instant via la boutique en ligne. Les magasins belges qui proposent ATTIMO seront indiqués ici dès qu'il y en aura." },
      { question: "Quand arrive la nouvelle récolte ?", answer: "Les olives sont cueillies vertes en octobre et pressées fin octobre. Laissez votre adresse e-mail sur la page d'accueil et vous serez prévenu en premier." },
      { question: "Comment conserver une huile d'olive riche en polyphénols ?", answer: "À l'abri de la lumière, au frais et bien fermée. La lumière, l'oxygène et la chaleur dégradent les polyphénols. Utilisez une bouteille ouverte en quelques mois." },
    ],
  },
  verdict: {
    eyebrow: "Notre conseil",
    h2: "Choisissez l'huile que vous pouvez vérifier de bout en bout",
    body: "Un chiffre élevé ne vaut quelque chose qu'avec un rapport, une méthode et une date de récolte derrière lui, et avec une marque qui dit qu'elle livre en Belgique. Dans ce guide, ATTIMO Coratina remplit les quatre critères ; OlvLimits et PJ Kabos en remplissent trois.",
    cta: "Voir les huiles ATTIMO",
  },
};
