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
    lead: "Toutes les huiles d'olive riches en polyphénols que vous pouvez commander en Belgique, comparées sur les polyphénols, le prix et la livraison.",
    cta: "Voir les huiles",
    ctaSecondary: "Ce qu'il faut vérifier",
    updatedLabel: "Mis à jour le",
    checkedLine: "Informations tirées du site de chaque producteur",
  },
  glance: {
    eyebrow: "",
    h2: "{n} huiles au taux de polyphénols publié",
    introPre: "Les plus riches en oléocanthal et oléacéine en premier, comme dans l'",
    introLink: "Index des polyphénols",
    introPost: ". Ce sont les deux polyphénols les mieux étudiés. Les laboratoires les mesurent de la même façon, quelle que soit leur méthode. Les huiles qui ne publient qu'un total figurent en fin de liste.",
    labels: { value: "€ pour 100 mg d'oléocanthal + oléacéine", attimoName: "ATTIMO Coratina", attimoSub: "Marque belge · aussi Nocellara et Picual", price: "Prix", priceNote: "prix du producteur, {verified}", method: "Mesuré par", methodLink: "qu'est-ce que cela veut dire ?", compounds: "Oléocanthal + oléacéine", total: "Polyphénols totaux", buy: "Acheter", cost: "Frais de port", days: "Livraison", source: "Source", notStated: "non indiqué", attimoAlso: "Aussi {nocellara} et {picual}" },
  },
  criteria: {
    eyebrow: "Ce qu'il faut vérifier",
    h2: "Une bonne huile riche en polyphénols affiche sa date de récolte, son rapport de laboratoire, sa méthode de mesure et ses conditions de livraison",
    intro: "",
    items: [
      { key: "report", title: "Un rapport de laboratoire que vous pouvez ouvrir", text: "Les polyphénols sont les composés qui rendent l'huile d'olive amère et poivrée. La plupart de ses effets sur la santé étudiés par la recherche viennent d'eux. Un chiffre sur une étiquette est une affirmation. Un rapport qui porte le nom du laboratoire vous permet de la vérifier.", weight: 30, icon: "/icons/flask.svg" },
      { key: "delivery", title: "Livraison dans votre pays", text: "Beaucoup de marques d'huile riche en polyphénols ne vendent qu'aux États-Unis. Le site du vendeur doit nommer votre pays, ou indiquer qu'il livre dans toute l'UE, avec les frais et le délai de livraison.", weight: 30, icon: "/icons/branch-2.svg" },
      { key: "method", title: "La méthode de mesure à côté du chiffre", text: "Les laboratoires mesurent les polyphénols de différentes façons. La même huile peut afficher 20 à 48 % de plus avec une méthode qu'avec une autre, si bien qu'un chiffre sans sa méthode ne peut pas être comparé.", weight: 20, icon: "/icons/olive.svg" },
      { key: "origin", title: "Une date de récolte et une variété nommée", text: "Les polyphénols baissent dès le jour du pressage : la date de récolte vous dit donc combien il en reste. L'huile de supermarché en indique rarement une, parce qu'elle mélange des huiles de plusieurs récoltes.", weight: 20, icon: "/icons/basket-2.svg" },
    ],
  },
  table: {
    eyebrow: "Comparatif",
    h2: "Comparez les huiles sur les polyphénols, le prix et la livraison",
    intro: "Cliquez sur une colonne pour trier le tableau. Cliquez sur une huile pour ouvrir sa fiche.",
    footnotes: [
      "Polyphénols en mg/kg, d'après le rapport de laboratoire de chaque producteur.",
      "Les prix sont ceux du producteur, relevés en {verified}. Les prix en dollars et en livres sont convertis en euros au taux de la Banque centrale européenne.",
      "Frais de livraison tels qu'indiqués sur le site du vendeur le {checked}.",
    ],
    cols: { oil: "Huile", compounds: "Oléocanthal + oléacéine", total: "Polyphénols totaux", method: "Méthode de mesure", price: "Prix pour 500 ml", value: "Prix pour 100 mg d'oléocanthal + oléacéine", buy: "Comment acheter en Belgique", days: "Livraison", score: "Score" },
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
    h2: "Comment lire un taux de polyphénols",
    intro: "Un taux de polyphénols correspond aux milligrammes de polyphénols contenus dans un kilo d'huile. Deux choses déterminent ce qu'il signifie : quels composés ont été comptés, et comment.",
    steps: [
      { title: "Le total additionne des dizaines de composés", text: "Deux d'entre eux, l'oléocanthal et l'oléacéine, sont les mieux étudiés. L'oléocanthal provoque le picotement poivré au fond de la gorge." },
      { title: "La méthode de mesure change le total", text: "La NMR compte une liste de composés plus longue que la HPLC, et affiche donc un chiffre plus élevé pour la même huile. Les deux chiffres sont justes." },
      { title: "L'oléocanthal et l'oléacéine se comparent d'une méthode à l'autre", text: "Les laboratoires mesurent ces deux composés de la même façon, à environ 10 % près. Ils sont donc la base la plus juste pour comparer des huiles analysées avec des méthodes différentes." },
    ],
    cta: "Comment fonctionne chaque méthode de mesure",
    visual: { title: "Des méthodes différentes donnent des taux de polyphénols différents", caption: "Les deux totaux et le chiffre oléocanthal + oléacéine viennent des deux certificats publiés par le producteur pour la même huile.", compounds: "Oléocanthal + oléacéine, NMR" },
  },
  avoid: {
    eyebrow: "Ce qu'il faut laisser en rayon",
    h2: "Quatre signes pour reposer une bouteille",
    items: [
      { title: "Pas de date de récolte", text: "Une date de péremption seule ne vous dit pas quel âge a l'huile." },
      { title: "\"Riche en polyphénols\" sans chiffre", text: "Sans milligrammes par kilo, l'affirmation ne peut être ni vérifiée ni comparée." },
      { title: "Un chiffre sans méthode ni rapport", text: "Vous ne pouvez ni le comparer à d'autres huiles ni le vérifier." },
      { title: "\"Extra vierge\" comme argument de qualité", text: "Extra vierge est le niveau minimal de la catégorie. Cela ne dit rien sur la fraîcheur ni sur les polyphénols." },
    ],
  },
  attimo: {
    eyebrow: "ATTIMO en Belgique",
    h2: "Trois huiles monovariétales, récoltées tôt, chez vous sous {daysText}",
    intro: "Fraîche de la dernière récolte, avec le rapport de laboratoire en ligne.",
  },
  faq: {
    heading: "Questions fréquentes",
    items: [
      { question: "ATTIMO livre-t-il en Belgique ?", answer: "Oui. La livraison coûte {standard} et est gratuite à partir de {freeFrom}. Les commandes arrivent sous {daysText}." },
      { question: "Quelle huile a le taux de polyphénols le plus élevé en Belgique ?", answer: "Cela dépend de la méthode de mesure. Le tableau montre chaque chiffre publié avec sa méthode, et les deux composés principaux dans leur propre colonne. ATTIMO Coratina 25/26 mesure 847 mg/kg (HPLC), dont 807 mg/kg d'oléocanthal plus oléacéine." },
      { question: "Comment comparer les différentes marques ?", answer: "Comme le fait ce guide. D'abord une vraie date de récolte sur la bouteille, pour que vous sachiez quel âge a l'huile. Ensuite un chiffre de polyphénols avec le rapport de laboratoire derrière, et la méthode de mesure utilisée, car des méthodes différentes donnent des chiffres différents pour la même huile. Quand les méthodes diffèrent, comparez sur l'oléocanthal + oléacéine, que chaque laboratoire indique séparément. Ensuite si la marque livre en {market}, en combien de jours et à quel coût, selon ses propres termes." },
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
