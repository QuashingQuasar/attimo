import type { MarketGuideContent, ShipEvidence } from "./types";

// Shipping evidence per Index entry id, France. Filled separately from a page-by-page
// check of each producer's own shipping/FAQ page. Entry ids match src/content/polyphenol-index/*.yaml.
export const FR_SHIPPING: Record<string, ShipEvidence> = {
  "oro-del-desierto-picual": { ships: "yes", basis: "lists country", route: "retailer", seller: "Oliva Oliva", days: "not stated", cost: "11,50 € HTVA", quote: "Zone S: Belgium, France, Luxembourg, Monaco, Netherlands", source_url: "https://olivaoliva.com/en/content/9-shipping-costs", checked: "2026-10-13", notes: "Via l'épicerie fine espagnole Oliva Oliva ; la France figure dans ses zones d'expédition" },
  "olvlimits-green-machine": { ships: "yes", basis: "EU-wide statement", route: "webshop", days: "2 à 6 jours ouvrables", cost: "not stated", free_from: "100 €", quote: "European Union (EU): 2–6 business days", source_url: "https://olvlimits.com/en-fr/", checked: "2026-10-13", notes: "Expédie depuis les Pays-Bas ; la France n'est pas nommée, UE en 2 à 6 jours ouvrables ; vitrine française avec livraison offerte dès 100 €" },
  "rapunzel-polyphenolia": { ships: "yes", basis: "lists country", route: "retailer", seller: "Violey", days: "3 à 5 jours ouvrables", cost: "14,19 €", free_from: "350 €", quote: "We ship our products with DHL and in selected countries with UPS.", source_url: "https://www.violey.com/en/shipping.html", checked: "2026-10-13", notes: "Sa boutique ne livre qu'en Allemagne et en Autriche ; via le revendeur Violey, qui livre en France" },
  "pj-kabos-phenolic-shot": { ships: "yes", basis: "EU-wide statement", route: "webshop", days: "not stated", cost: "gratuit", quote: "Free EU shipping on all orders!", source_url: "https://www.pjkabos.gr", checked: "2026-10-13", notes: "Livraison gratuite dans l'UE ; délai non indiqué" },
  "morocco-gold": { ships: "yes", basis: "EU-wide statement", route: "webshop", days: "not stated", cost: "gratuit", quote: "Standard delivery within the USA, Canada, Australia, Europe & UK – Free", source_url: "https://morocco-gold.com/shop/morocco-gold-extra-virgin-olive-oil/", checked: "2026-10-13", notes: "Livraison gratuite vers l'Europe ; délai non indiqué par pays" },
  "pamako-monovarietal": { ships: "yes", basis: "EU-wide statement", route: "webshop", seller: "Pamako UK", days: "not stated", cost: "not stated", quote: "Shipping Across the UK & Europe", source_url: "https://www.pamako.co.uk/policies/shipping-policy", checked: "2026-10-13", notes: "Le site grec n'a pas de boutique ; la boutique britannique de Pamako expédie en Europe" },
  "blueprint-snake-oil": { ships: "yes", basis: "worldwide statement", route: "webshop", days: "not stated", cost: "not stated", quote: "We ship internationally from multiple fulfillment locations, including warehouses in Hong Kong and Singapore", source_url: "https://blueprint.bryanjohnson.com/policies/shipping-policy", checked: "2026-10-13", notes: "Sa boutique expédie à l'international ; la France et l'UE ne sont pas nommées, frais calculés au paiement" },
  "olivea-ultra-high-phenolic": { ships: "yes", basis: "worldwide statement", route: "webshop", days: "not stated", cost: "$10", quote: "International shipping available for a flat rate of $10", source_url: "https://www.myolivea.com/pages/llms-full-txt", checked: "2026-10-13", notes: "International depuis les États-Unis ; l'Europe n'est pas nommée" },
  "olio-intini-coratina": { ships: "not stated", basis: "none", route: "request", days: "not stated", cost: "not stated", quote: "Per spedizioni all'estero o richieste particolari compilate il form contatti e cercheremo di soddisfare le vostre esigenze.", source_url: "https://oliointini.it/prodotto/coratina/", checked: "2026-10-13", notes: "Étranger sur demande via le formulaire de contact" },
  "kyoord-high-phenolic": { ships: "no", basis: "none", route: "none", days: "not stated", cost: "not stated", quote: "Kyoord is currently shipping to addresses in the United States and Canada.", source_url: "https://kyoord.com/policies/shipping-policy", checked: "2026-10-13", notes: "États-Unis et Canada uniquement" },
  "laconiko-zoi": { ships: "not stated", basis: "none", route: "none", days: "not stated", cost: "not stated", quote: "", source_url: "https://laconiko.com/", checked: "2026-10-13", notes: "Aucune voie vers la France trouvée" },
  "oleum-crete-koroneiki": { ships: "no", basis: "none", route: "none", days: "not stated", cost: "not stated", quote: "Free delivery on all UAE orders.", source_url: "https://oleumcrete.ae/policies/shipping-policy", checked: "2026-10-13", notes: "Émirats arabes unis uniquement" },
  "sakellaropoulos-fyllikon": { ships: "not stated", basis: "none", route: "none", days: "not stated", cost: "not stated", quote: "", source_url: "https://www.bioarmonia.gr/products", checked: "2026-10-13", notes: "Commande par téléphone en Grèce uniquement" },
  "the-governor-limited": { ships: "no", basis: "none", route: "none", days: "not stated", cost: "not stated", quote: "We ship to England, Wales, Scotland, Northern Ireland, Guernsey, Jersey, and the Isle of Man.", source_url: "https://thegovernorevoo.co.uk/pages/shipping-policy", checked: "2026-10-13", notes: "Royaume-Uni uniquement" },
};

export const fr: MarketGuideContent = {
  lang: "fr",
  slug: "/fr/huile-olive-riche-polyphenols-acheter-france",
  market: "France",
  country: "France",
  daysUnit: "jours ouvrables",
  siblings: [{ href: "/fr/huile-olive-riche-polyphenols-acheter-belgique", label: "Vous achetez en Belgique ? Voir le guide belge →" }],
  updated: "13 octobre 2026",
  meta: {
    title: "Acheter de l'huile d'olive riche en polyphénols en France | ATTIMO",
    description: "Guide d'achat de l'huile d'olive riche en polyphénols en France. Quelles huiles vous pouvez y acheter, quel est leur taux de polyphénols et comment il a été mesuré, et ce que coûte la livraison en France. Mis à jour le {updated}.",
  },
  nav: { glance: "Huiles", criteria: "Critères", table: "Comparatif", oils: "Par huile", number: "Le chiffre", faq: "FAQ" },
  hero: {
    eyebrow: "Guide d'achat · France",
    h1: "Acheter de l'huile d'olive riche en polyphénols en France",
    lead: "Quelles huiles d'olive riches en polyphénols vous pouvez acheter en France, et ce qu'il faut vérifier avant de commander.",
    cta: "Voir les huiles",
    ctaSecondary: "Ce qu'il faut vérifier",
    updatedLabel: "Mis à jour le",
    checkedLine: "Vérifié sur le site de chaque producteur",
  },
  glance: {
    eyebrow: "Ce que vous pouvez acheter",
    h2: "Les huiles d'olive riches en polyphénols que vous pouvez acheter en France",
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
      { key: "delivery", title: "Livraison en France", text: "La marque livre-t-elle en France, en combien de jours, et son site le dit-il lui-même ? Sinon, ne comptez pas dessus.", weight: 30, icon: "/icons/branch-2.svg" },
    ],
  },
  table: {
    eyebrow: "Comparatif",
    h2: "Toutes les huiles disponibles, comparées",
    intro: "Les mêmes huiles, notées sur les quatre critères ci-dessus. Deux colonnes pour le taux de polyphénols : les deux composés principaux à part, et le total tel que le producteur le publie.",
    cols: { oil: "Huile", compounds: "Oléocanthal + oléacéine", total: "Total", method: "Méthode", price: "Prix", buy: "Comment acheter en France", days: "Livraison", score: "Score" },
    buy: { webshop: "Boutique en ligne, livre en France", webshopEu: "Boutique en ligne, livre dans toute l'UE", webshopWorld: "Boutique en ligne, livre à l'international", retailer: "Via un magasin", distributor: "Via un distributeur", request: "Sur demande" },
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
    pros: { report: "Rapport de laboratoire en ligne", hplc: "Oléocanthal et oléacéine rapportés séparément", method: "Méthode indiquée", origin: "Variété et récolte indiquées", shipsNl: "Livre en France, {days}", shipsEu: "Livre dans toute l'UE" },
    cons: { nmr: "Total mesuré par NMR : compte une longue liste de composés phénoliques à leur poids entier, molécules dérivées lourdes comprises, et ressort 20 à 48 % plus haut que la HPLC pour la même huile. Comparez sur oléocanthal + oléacéine.", shipping: "Livraison {cost}", shippingFree: "Livraison {cost}, gratuite à partir de {free}", noReport: "Aucun rapport à ouvrir", noMethod: "Méthode non indiquée", totalOnly: "Seulement un total, sans composés séparés", noDays: "Délai de livraison en France non indiqué", nlNotNamed: "La France n'est pas nommée séparément", noOrigin: "Variété ou récolte non indiquée" },
    perOil: {
      "attimo-coratina": { cons: ["Pas encore de magasins en {market}", "Picual encore mesuré par Folin-Ciocalteu, pas par HPLC"], forWho: "Pour qui prend l'huile d'olive en shot quotidien, ou veut une huile puissante, amère et poivrée pour finir un plat.", standsOut: "Le rapport, la méthode, la variété et la date de récolte sont tous en ligne, et l'huile est en {market} sous {daysText}." },
      "olvlimits-green-machine": { forWho: "Pour qui veut la bouteille vite : marque néerlandaise, livraison dans l'UE en 2 à 6 jours ouvrables selon leur page d'expédition" },
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
    eyebrow: "ATTIMO en France",
    h2: "Trois huiles monovariétales, récoltées tôt, chez vous sous {daysText}",
    intro: "Fraîche de la dernière récolte, avec le rapport de laboratoire en ligne. Livraison en France {standard}, gratuite à partir de {freeFrom}, sous {days}.",
  },
  faq: {
    heading: "Questions fréquentes",
    items: [
      { question: "ATTIMO livre-t-il en France ?", answer: "Oui. La livraison coûte {standard} et est gratuite à partir de {freeFrom}. Les commandes arrivent sous {daysText}." },
      { question: "Quelle huile a le taux de polyphénols le plus élevé en France ?", answer: "Cela dépend de la méthode de mesure. Le tableau montre chaque chiffre publié avec sa méthode, et les deux composés principaux dans leur propre colonne. ATTIMO Coratina 25/26 mesure 847 mg/kg (HPLC), dont 807 mg/kg d'oléocanthal plus oléacéine." },
      { question: "Comment comparer les différentes marques ?", answer: "Comme le fait ce guide. D'abord une vraie date de récolte sur la bouteille, pour que vous sachiez quel âge a l'huile. Ensuite un chiffre de polyphénols avec le rapport de laboratoire derrière, et la méthode de mesure utilisée, car des méthodes différentes donnent des chiffres différents pour la même huile. Quand les méthodes diffèrent, comparez sur l'oléocanthal + oléacéine, que chaque laboratoire indique séparément. Ensuite si la marque livre en {market}, en combien de jours et à quel coût, selon ses propres termes. Le tableau ci-dessus note chaque huile sur ces quatre points." },
      { question: "Puis-je acheter ATTIMO dans un magasin en France ?", answer: "Pour l'instant via la boutique en ligne. Les magasins français qui proposent ATTIMO seront indiqués ici dès qu'il y en aura." },
      { question: "Quand arrive la nouvelle récolte ?", answer: "Les olives sont cueillies vertes en octobre et pressées fin octobre. Laissez votre adresse e-mail sur la page d'accueil et vous serez prévenu en premier." },
      { question: "Comment conserver une huile d'olive riche en polyphénols ?", answer: "À l'abri de la lumière, au frais et bien fermée. La lumière, l'oxygène et la chaleur dégradent les polyphénols. Utilisez une bouteille ouverte en quelques mois." },
    ],
  },
  verdict: {
    eyebrow: "Notre conseil",
    h2: "Choisissez l'huile que vous pouvez vérifier de bout en bout",
    body: "Un chiffre élevé ne vaut quelque chose qu'avec un rapport, une méthode et une date de récolte derrière lui, et avec une marque qui dit qu'elle livre en France. Dans ce guide, ATTIMO Coratina remplit les quatre critères ; OlvLimits et PJ Kabos en remplissent trois.",
    cta: "Voir les huiles ATTIMO",
  },
};
