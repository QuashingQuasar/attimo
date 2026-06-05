// ─────────────────────────────────────────────────────────────────────────
// French dictionary — overlay for the /fr/ market (lang: "fr").
//
// Typed as `Dict` (derived from en.ts), so this object MUST cover every key —
// a missing key fails the build. Keep all factual claims/numbers identical to
// English (they live in data, not here); translate language only.
//
// Persuasion / brand-voice strings are marked `// REVIEW` so a native French
// reviewer can find and polish them quickly. Plain UI/functional strings are
// left unmarked.
// ─────────────────────────────────────────────────────────────────────────
import type { Dict } from "../dictionaries";

export const fr: Dict = {
  nav: {
    shop: "Boutique",
    blog: "Blog",
    quiz: "Quiz",
  },

  announce: {
    freeShipping2: "LIVRAISON GRATUITE DÈS 2 BOUTEILLES",
    freeShipping3: "LIVRAISON GRATUITE DÈS 3 BOUTEILLES",
    coratinaRestock: "Commandes avec Coratina expédiées sous 5 à 7 jours", // REVIEW
  },

  meta: {
    home: {
      title: "ATTIMO — Huile d'olive monovariétale, riche en polyphénols, récolte précoce", // REVIEW
      description:
        "Huile d'olive monovariétale, riche en polyphénols. Récolte précoce, testée en laboratoire. Du petit verger familial à votre table. Commandez maintenant.", // REVIEW
    },
    shipping: {
      title: "Livraison & expédition | ATTIMO", // REVIEW
      description:
        "Tarifs de livraison, seuils de livraison gratuite et délais pour l'huile d'olive ATTIMO dans toute l'Union européenne.", // REVIEW
    },
    quiz: {
      title: "Quiz du palais | ATTIMO", // REVIEW
      description:
        "Trouvez votre huile d'olive ATTIMO idéale. Faites le quiz du palais de 60 secondes pour associer votre goût à la bonne huile d'olive vierge extra monovariétale.", // REVIEW
    },
  },

  footer: {
    blog: "Blog",
    ambassadors: "Ambassadeurs",
    privacy: "Politique de confidentialité",
    terms: "Conditions générales",
    shipping: "Livraison",
    contact: "Contact",
    manageOrders: "Gérer commandes & abonnement",
    rights: "© 2026 ATTIMO. Tous droits réservés.",
    changeRegion: "Changer de devise ou de pays",
  },

  cart: {
    ariaLabel: "Panier",
    title: "Panier",
    emptyDescription: "Votre panier est actuellement vide.",
    // French uses the singular for 0 and 1, plural from 2.
    itemsInCart: (n: number) => `${n} article${n >= 2 ? "s" : ""} dans votre panier`,
    emptyHeading:
      "On dirait que vous n'avez encore rien ajouté. Commençons.", // REVIEW
    freeShipping: "Livraison gratuite ✓",
    freeShippingNudge: (n: number) =>
      `Ajoutez ${n} bouteille${n >= 2 ? "s" : ""} de plus pour la livraison gratuite`, // REVIEW
    youMightAlsoLike: "Vous aimerez aussi",
    add: "+ Ajouter",
    viewProduct: (name: string) => `Voir ${name}`,
    subtotal: "Sous-total",
    shipping: "Livraison",
    free: "Gratuite",
    calculatedAtCheckout: "Calculée au paiement",
    creatingCheckout: "Création du paiement...",
    checkout: "Payer avec Shopify",
  },

  quiz: {
    intro:
      "Répondez à quelques questions rapides pour découvrir laquelle de nos trois huiles monovariétales vous correspond le mieux.", // REVIEW
    backToAttimo: "← Retour à ATTIMO",
    resultsLabel: "Résultats",
    back: "Retour",
    next: "Suivant",
    seeResults: "Voir les résultats",
    yourMatchIs: "Votre match, c'est",
    why: (name: string) => `Pourquoi ${name} ?`,
    shop: (name: string) => `Acheter ${name}`,
    retake: "Refaire le quiz",
  },

  products: {
    flavour: {
      coratina: "Corsé et Intense", // REVIEW
      picual: "Vert et Herbacé", // REVIEW
      nocellara: "Doux et Fruité", // REVIEW
    },
    tagline: {
      coratina: "Une dose de polyphénols bienfaisants", // REVIEW
      picual: "Le bon goût polyvalent", // REVIEW
      nocellara: "Une douceur irrésistible", // REVIEW
    },
  },

  hero: {
    cta: "Découvrir la nouvelle récolte", // REVIEW
    badges: [
      "TESTÉ EN LABORATOIRE", // REVIEW
      "RÉCOLTE PRÉCOCE", // REVIEW
      "MONOVARIÉTAL", // REVIEW
      "DU VERGER À LA TABLE", // REVIEW
      "TOUJOURS FRAIS", // REVIEW
      "PRESSÉ À FROID", // REVIEW
    ],
  },

  oilCollection: {
    heading: "Huile d'olive vierge extra de spécialité", // REVIEW
    subtitle:
      "Olives d'une seule variété, récoltées tôt et pressées à froid en quelques heures pour un maximum de saveur et de bienfaits.", // REVIEW
    size: "500ML",
    backSoon: "Bientôt de retour",
    soldOut: "Temporairement épuisé",
    quizPrompt: "Vous ne savez pas quelle huile est faite pour vous ?",
    quizCta: "Trouvez votre saveur →",
  },

  industryProblem: {
    headingPre: "Le", // REVIEW
    headingLie: "mensonge « extra vierge »", // REVIEW
    intro:
      "L'huile d'olive vierge extra est saluée pour ses bienfaits sur la santé et la longevité, mais 80 % des huiles vierges extra des supermarchés ne respectent même pas les normes de base et sont en réalité pauvres en polyphénols, ceux-là mêmes qui apportent ces bienfaits et la saveur.", // REVIEW
    stat1Value: "~80%",
    stat1Text:
      "des huiles vendues comme « extra vierges » en supermarché ne respectent pas ces normes", // REVIEW
    stat2Value: "~90%",
    stat2Text:
      "des huiles d'olive « extra vierges » sont pauvres en polyphénols bénéfiques pour la santé", // REVIEW
    arg1Title: "La saveur et la santé disparaissent dans l'assemblage", // REVIEW
    arg1Text:
      "Les grands producteurs se développent en mélangeant des huiles de sources et d'années différentes pour obtenir un goût standardisé. Cette pratique tue ce qui fait la richesse d'une vraie huile d'olive : une saveur fraîche et distincte et des polyphénols qui la rendent extrêmement saine.", // REVIEW
    arg2Title: "Vous n'avez jamais goûté la vraie", // REVIEW
    arg2Text:
      "Une vraie extra vierge est intense : amère, poivrée, parfumée. Chaque huile a son empreinte : variété d'olive, verger, récolte, savoir-faire. Ce sont aussi les huiles les plus saines, mais la plupart des gens n'y goûtent jamais.", // REVIEW
    arg3Title: "L'industrie tue les vergers familiaux", // REVIEW
    arg3Text:
      "La pression financière force les petits producteurs à vendre aux acteurs industriels. Leur huile sublime est mélangée à des produits bon marché et vendue pour une bouchée de pain. Faire de l'huile d'olive est un art, comme le vin, mais quand les artistes ne sont pas payés, l'art disparaît.", // REVIEW
  },

  kleiaWay: {
    headingLine1: "Comment nous garantissons", // REVIEW
    headingLine2: "que vous obtenez le meilleur", // REVIEW
    tiles: [
      {
        title: "TOUJOURS FRAIS", // REVIEW
        text: "Une huile d'olive toujours issue de la dernière récolte. Pressée quelques heures après la cueillette, mise en bouteille à son apogée de fraîcheur.", // REVIEW
      },
      {
        title: "MONOVARIÉTAL", // REVIEW
        text: "Chaque bouteille provient d'une seule variété d'olive. Vous obtenez l'expression pure du cultivar et de son origine.", // REVIEW
      },
      {
        title: "RÉCOLTE PRÉCOCE", // REVIEW
        text: "Les olives sont récoltées tôt en saison, quand elles sont les plus riches en polyphénols, source de goût et de santé", // REVIEW
      },
      {
        title: "DU VERGER À LA TABLE", // REVIEW
        text: "Nous nous approvisionnons directement auprès de ceux qui font l'huile. Aucun intermédiaire, aucun assemblage, aucun raccourci.", // REVIEW
      },
      {
        title: "QUALITÉ TESTÉE EN LABO", // REVIEW
        text: "Chaque bouteille est testée par des laboratoires indépendants sur des marqueurs de qualité clés que vous pouvez vérifier vous-même.", // REVIEW
      },
    ],
  },

  oilComparison: {
    vs: "vs",
    others: "les autres", // REVIEW
    supermarketColumn: "Huile de supermarché", // REVIEW
    features: {
      fresh: "FRAÎCHE", // REVIEW
      earlyHarvest: "RÉCOLTE PRÉCOCE", // REVIEW
      singleSource: "SOURCE UNIQUE", // REVIEW
      traceable: "TRAÇABLE", // REVIEW
      labTested: "TESTÉE EN LABO", // REVIEW
      polyphenols: "POLYPHÉNOLS", // REVIEW
    },
    themFreshNo: "Non, mélangée à de vieilles huiles", // REVIEW
    themBlended: "Huile assemblée de plus de 3 pays", // REVIEW
  },

  polyphenol: {
    heading: "la différence polyphénols", // REVIEW
    intro:
      "Les polyphénols font toute la différence pour les bienfaits santé et la saveur de l'huile d'olive. Les huiles ATTIMO sont pressées à partir d'olives récoltées tôt, lorsque les polyphénols sont à leur maximum.", // REVIEW
    barAvg: "Huile de supermarché (moy.)", // REVIEW
    barEu: "Allégation santé UE", // REVIEW
    barBlueprint: "Blueprint Olive Oil",
    tooltips: {
      avgTitle: "Vierge extra moyenne", // REVIEW
      avgSub: "~180 mg/kg de polyphénols",
      avgDesc:
        "La plupart des huiles vierges extra de supermarché se situent entre 100 et 250 mg/kg. L'assemblage, l'âge et la transformation industrielle réduisent tous la teneur en polyphénols.", // REVIEW
      euTitle: "Allégation santé UE", // REVIEW
      euSub: "250 mg/kg de polyphénols",
      euDesc:
        "L'Autorité européenne de sécurité des aliments (EFSA) autorise une allégation santé pour une huile d'olive contenant au moins 250 mg/kg de polyphénols.", // REVIEW
      blueprintTitle: "Blueprint Olive Oil",
      blueprintSub: "400 mg/kg de polyphénols",
      blueprintDesc:
        "Bryan Johnson dépense des millions à optimiser sa santé pour la longévité. Son huile d'olive Blueprint, à 400 mg/kg de polyphénols, est l'une des huiles riches en polyphénols les plus reconnues du marché.", // REVIEW
      attimoTitle: "Huile d'olive ATTIMO",
      attimoSub: "400–900 mg/kg de polyphénols",
      attimoDesc:
        "Nos huiles d'olive se situent entre 400 et 900 mg/kg de polyphénols selon la variété.", // REVIEW
    },
    cards: [
      {
        content: "Les polyphénols sont un type d'antioxydant présent dans les olives.", // REVIEW
        content2:
          "Ils renforcent les défenses du corps contre le vieillissement cellulaire et contribuent à la santé métabolique et cardiaque à long terme.", // REVIEW
      },
      {
        content:
          "Les plus fortes teneurs en polyphénols proviennent d'olives à récolte précoce, cueillies et pressées en quelques heures.", // REVIEW
        content2: "Une fois en bouteille, les niveaux déclinent régulièrement avec le temps.", // REVIEW
      },
      {
        content:
          "Les huiles commerciales combinent des lots de différents pays et années pour assurer l'approvisionnement.", // REVIEW
        content2:
          "Ce procédé dilue la teneur en polyphénols bien en dessous des niveaux d'une huile fraîchement pressée.", // REVIEW
      },
    ],
  },

  testimonials: {
    heading: "Ce qu'en dit la rue", // REVIEW
    reviews: [
      { title: "Bon sur tout !", text: "Avant, je cuisinais simplement à l'huile d'olive. Maintenant, j'en mets partout. Je ne savais pas qu'elle pouvait avoir autant de goût." }, // REVIEW
      { title: "Comme en Espagne", text: "Ayant vécu en Espagne un certain temps, je m'étais habitué à avoir d'excellentes huiles d'olive. C'est difficile d'en trouver de bonnes en Allemagne ; Attimo a ravivé de merveilleux souvenirs." }, // REVIEW
      { title: "Enfin", text: "Je rapporte toujours des tonnes d'huile d'olive de vacances, mais ça part vite. Très heureuse d'avoir enfin trouvé une vraie huile d'olive à la maison." }, // REVIEW
      { title: "Super fraîche", text: "J'ai essayé beaucoup d'huiles d'olive et celle-ci est ma préférée. L'odeur est absolument incroyable, si fraîche qu'on dirait que les olives sont pressées à l'instant même." }, // REVIEW
      { title: "Accro très vite", text: "J'ai acheté 4 bouteilles et elles ont disparu en un mois. Je n'achèterai plus jamais au supermarché." }, // REVIEW
      { title: "On sent la qualité", text: "J'étais sceptique sur le prix mais maintenant je comprends. On goûte vraiment la différence de qualité, il n'y a rien de comparable dans les magasins d'ici." }, // REVIEW
      { title: "La récolte fraîche en bouteille", text: "On dirait que je viens de cueillir les olives et de les presser moi-même. Super fraîche et naturelle, j'adore !" }, // REVIEW
    ],
  },

  blog: {
    heading: "Le Pressoir", // REVIEW
    seeMore: "Voir plus d'articles",
    noArticles: "Aucun article pour le moment.",
    noImage: "Pas d'image",
    readMore: "Lire la suite",
    newsletterPrompt: "Recevez les histoires, conseils et nouveautés ATTIMO dans votre boîte mail", // REVIEW
    emailPlaceholder: "votre@email.com",
    subscribe: "S'abonner",
    invalidEmail: "Veuillez saisir une adresse e-mail valide.",
    subscribed: "Vous êtes inscrit !",
    error: "Une erreur est survenue. Veuillez réessayer.",
  },

  product: {
    loading: "Chargement du produit...",
    notFound: "Produit introuvable",
    newHarvest: "Nouvelle récolte", // REVIEW
    inStock: "En stock",
    soldOut: "Épuisé",
    comingSoon: "Bientôt disponible",
    backSoon: "Bientôt de retour",
    newBatchHeading: "Nouveau lot en route", // REVIEW
    newBatchSubtitle:
      "Nous vous enverrons un e-mail dès que la Coratina d'Italia sera de nouveau disponible (estimation 1 à 2 semaines).", // REVIEW
    attrVariety: "Variété",
    attrOrigin: "Origine",
    attrHarvest: "Récolte",
    attrFlavour: "Saveur",
    harvestDate: "Octobre 2025",
    addToCart: "AJOUTER AU PANIER", // REVIEW
    freeShipCheck: "(LIVRAISON GRATUITE ✓)",
    addForFreeShip: "(AJOUTEZ {n} BOUTEILLE{plural} {more}POUR LA LIVRAISON GRATUITE)",
    moreWord: "DE PLUS ",
    trustLab: "Qualité testée en laboratoire indépendant", // REVIEW
    shipsTomorrow: "Commandez aujourd'hui, expédié demain", // REVIEW
    viewLabResults: "Voir les résultats de laboratoire",
    howToReadLabValues: "Comment lire une analyse d'huile d'olive",
    waitingResults: "(En attente des résultats)",
    polyTooltipAria: "Que signifie Polyphénols bioactifs ?",
    polyTooltipText:
      "Tous les polyphénols ne se valent pas. Nos {value} {unit} sont mesurés selon la méthode HPLC standard de l'UE dans un laboratoire accrédité ISO. De nombreux producteurs déclarent des « polyphénols totaux » selon des méthodes plus larges incluant des composés à l'activité santé moins documentée, produisant des chiffres plus élevés qui ne sont pas directement comparables.", // REVIEW
    toastAdded: "{n} bouteille{plural} ajoutée{plural} au panier",
    titleSuffix: "Huile d'olive vierge extra de spécialité", // REVIEW
  },

  faq: {
    heading: "Questions fréquentes",
    origin: {
      coratina: "L'ATTIMO Coratina provient directement d'un petit verger familial des Pouilles, en Italie — la plus grande région productrice d'huile d'olive du pays, réputée pour ses arbres centenaires et sa qualité exceptionnelle.", // REVIEW
      nocellara: "L'ATTIMO Nocellara provient directement d'un petit verger familial de la vallée du Belice, en Sicile — une région renommée pour ses sols riches en minéraux et ses conditions de culture méditerranéennes idéales.", // REVIEW
      picual: "L'ATTIMO Picual provient directement d'un petit verger familial de Jaén, en Espagne — la plus grande région productrice d'huile d'olive au monde, où le Picual est cultivé depuis des siècles.", // REVIEW
      generic: "ATTIMO s'approvisionne auprès de petits vergers familiaux de régions méditerranéennes réputées pour leur huile d'olive exceptionnelle. Chaque bouteille provient d'un seul verger et n'est jamais assemblée, vous pouvez donc retracer exactement où votre huile a été produite.", // REVIEW
    },
    flavour: {
      coratina: "La Coratina est l'une des variétés d'olive au goût le plus intense. Attendez-vous à des notes franches d'herbes fraîches, d'artichaut et de poivre noir, avec une puissance de polyphénols ultra-élevée et une finale sèche et persistante. C'est l'huile d'olive que les amateurs prennent à la cuillère.", // REVIEW
      nocellara: "La Nocellara produit une huile douce et fruitée aux notes de tomate fraîche, d'amande et de pomme verte. Souple et accessible, avec une finale légèrement poivrée — parfaite pour ceux qui préfèrent un profil plus doux.", // REVIEW
      picual: "Le Picual offre une huile robuste et herbacée aux notes d'herbes fraîchement coupées, de feuille de figuier et une finale poivrée nette. Polyvalent par excellence, riche en polyphénols et parfait pour un usage quotidien.", // REVIEW
      generic: "Cette amertume et ce piquant poivré proviennent des polyphénols, les composés qui rendent l'huile d'olive saine. La plupart des gens sont habitués à des huiles fades et trop transformées. Une vraie extra vierge doit avoir du caractère : elle est intense, fraîche et complexe.", // REVIEW
    },
    use: {
      coratina: "La Coratina s'utilise de préférence comme huile de finition pour profiter pleinement de son goût puissant et de ses bienfaits. Versez-la sur une entrecôte, des légumes grillés, des soupes consistantes, une bruschetta, ou même une glace. Elle se savoure de préférence crue ou ajoutée après cuisson, car une forte chaleur peut détruire les polyphénols.", // REVIEW
      nocellara: "La Nocellara est une huile polyvalente du quotidien. Versez-la sur des salades, du poisson, des pâtes et du pain frais. Son caractère doux la rend idéale pour les plats légers où l'on veut de la saveur sans masquer les aliments. À savourer de préférence crue ou ajoutée après cuisson.", // REVIEW
      picual: "Le Picual est un formidable polyvalent. Utilisez-le pour finir des légumes rôtis, napper du houmous, assaisonner céréales et légumineuses, ou tremper du pain croustillant. Son caractère robuste tient bien, mais il se savoure de préférence cru ou ajouté après cuisson pour préserver les polyphénols.", // REVIEW
      generic: "Utilisez ATTIMO comme huile de finition pour profiter au maximum de sa saveur et de ses bienfaits. Versez-la sur des salades, des légumes cuits, des pâtes, du pain ou des viandes grillées. Elle se savoure de préférence crue ou ajoutée après cuisson, car une forte chaleur peut détruire les polyphénols qui font sa singularité.", // REVIEW
    },
    q: {
      different: "Qu'est-ce qui rend l'huile d'olive ATTIMO différente ?",
      origin: "D'où provient cette huile d'olive ?",
      tasteTemplate: "Quel goût a l'ATTIMO {variety} ?",
      tasteNoHandle: "Quel goût a-t-elle ?",
      polyphenols: "Que sont les polyphénols et pourquoi sont-ils importants ?",
      fresh: "Quelle est la fraîcheur de l'huile d'olive ?",
      lab: "Puis-je voir les résultats de laboratoire ?",
      use: "Comment utiliser cette huile d'olive ?",
      store: "Comment conserver mon huile d'olive ?",
      cancel: "Puis-je modifier ou annuler ma commande ?",
      organic: "Votre huile d'olive est-elle bio ?",
      wholesale: "Vendez-vous en gros ou aux restaurants ?",
      shipping: "Où livrez-vous et combien ça coûte ?",
    },
    a: {
      different: "ATTIMO s'approvisionne directement auprès de vergers uniques, garantissant que chaque bouteille provient de la dernière récolte, sans assemblage ni intermédiaire. Chaque bouteille est testée en laboratoire sur des marqueurs de qualité comme la teneur en polyphénols, vous offrant la véritable huile d'olive vierge extra bénéfique pour la santé que la plupart des gens n'ont jamais goûtée.", // REVIEW
      fresh: "Chaque bouteille provient de la dernière récolte et est mise en bouteille rapidement pour préserver sa fraîcheur. Contrairement aux huiles produites en masse qui peuvent reposer des mois voire des années, ATTIMO livre une huile dans les mois suivant la récolte. Vous bénéficiez ainsi d'un maximum de saveur et de bienfaits.", // REVIEW
      store: "Conservez-la dans un endroit frais et sombre, à l'abri de la chaleur et de la lumière. Une fois ouverte, utilisez-la dans les quelques mois pour une fraîcheur optimale. Les composés qui la rendent saine se dégradent avec le temps : plus c'est frais, mieux c'est.", // REVIEW
      organic: "Notre Coratina est certifiée biologique. Pour nos autres huiles, la certification bio n'est pas notre principal critère — nous accordons une grande importance à la façon dont les olives sont cultivées et transformées, en privilégiant une agriculture à faible intervention, la récolte précoce et la qualité avant tout. Certifiée ou non, nous appliquons à chaque huile les mêmes exigences élevées.", // REVIEW
      polyphenolsText: "Les polyphénols sont des composés naturels de l'huile d'olive qui apportent les bienfaits dont vous avez entendu parler — propriétés anti-inflammatoires, soutien de la santé cardiaque et protection antioxydante. La plupart des huiles du commerce ont de faibles taux de polyphénols à cause de la transformation et de l'assemblage. Les huiles ATTIMO en sont riches car elles sont fraîches, non assemblées et issues de sources de qualité.", // REVIEW
      polyphenolsLink: "En savoir plus sur les polyphénols",
      labGeneric: "Absolument. Chaque lot d'huile ATTIMO est testé de façon indépendante par un laboratoire tiers, et les résultats complets sont disponibles sur chaque page produit. Nous testons la teneur en polyphénols, l'acidité, l'indice de peroxyde et bien plus. Nous croyons en une transparence totale — vous devez toujours pouvoir vérifier la qualité de ce que vous mettez dans votre assiette.", // REVIEW
      labText: "Oui. Chaque lot est testé par un laboratoire tiers, et vous pouvez vérifier vous-même les marqueurs de qualité. Nous croyons en une transparence totale — vous devez savoir exactement ce que vous obtenez.", // REVIEW
      labLinkPrefix: "Voir les résultats de laboratoire pour ",
      useLink: "En savoir plus sur la cuisson à l'huile d'olive",
      cancelPre: "Les commandes peuvent être modifiées ou annulées avant leur préparation. Une fois votre commande expédiée, nous ne pouvons plus apporter de modifications. Pour demander une modification ou une annulation, contactez-nous dès que possible à ", // REVIEW
      cancelPost: ". Une fois votre commande expédiée, vous recevrez un lien de suivi par e-mail pour suivre votre livraison.", // REVIEW
      wholesalePre: "Oui — nous travaillons avec des restaurants, des épiceries fines, des magasins spécialisés, des hôtels et d'autres entreprises, que vous souhaitiez la servir à table, l'utiliser en cuisine ou la proposer sur vos étagères. Contactez-nous via notre ", // REVIEW
      wholesaleContactLink: "formulaire de contact",
      wholesaleMid: " ou écrivez directement à ",
      wholesalePost: " et nous nous occupons du reste.", // REVIEW
      shippingText: "Nous livrons dans toute l'Union européenne, de la Belgique et des Pays-Bas à la Finlande et au Portugal. La livraison débute à 7 € pour les pays principaux et va jusqu'à 22 € pour les destinations plus éloignées — mais la plupart des commandes bénéficient de la livraison gratuite à partir de 2 à 4 bouteilles selon votre localisation. Les commandes passées aujourd'hui sont expédiées demain, et la livraison prend de 2 à 7 jours ouvrés selon votre région.", // REVIEW
      shippingLink: "Voir tous les détails de livraison",
    },
  },

  productTabs: {
    flavourProfile: "Profil de saveur",
    harvestDetails: "Détails de la récolte",
    bestUses: "Meilleurs usages",
    shippingDelivery: "Livraison & expédition",
    shippingBody:
      "Nous livrons dans toute l'Europe. Les commandes sont soigneusement emballées et expédiées le jour ouvré suivant. La livraison prend généralement de 2 à 7 jours ouvrés selon votre localisation. La plupart des commandes de plusieurs bouteilles bénéficient de la livraison gratuite.", // REVIEW
    shippingLink: "Voir tous les tarifs et délais de livraison →",
  },

  purchase: {
    oneTime: "Achat unique",
    perBottle: " / bouteille",
    subscribe: "Abonnez-vous et économisez",
    deliveryFrequency: "Fréquence de livraison",
    everyMonth: "Tous les mois",
    every2Months: "Tous les 2 mois",
    every3Months: "Tous les 3 mois",
  },

  quantity: {
    bottleSingular: "Bouteille",
    bottlePlural: "Bouteilles",
    freeShipping: "Livraison gratuite",
    onlyInStock: "{label} — seulement {available} en stock",
    percentOff: "{label}, {pct}% de réduction",
  },

  notify: {
    comingSoon: "Bientôt disponible",
    subtitle: "Soyez informé dès que {name} est de nouveau en stock.",
    onList: "✓ Vous êtes sur la liste",
    emailWhenStock: "Nous vous enverrons un e-mail dès que {name} sera en stock.",
    placeholder: "Votre adresse e-mail",
    notifyMe: "Prévenez-moi",
    success: "Vous serez prévenu dès le retour en stock !",
    error: "Une erreur est survenue. Veuillez réessayer.",
  },

  moreVarieties: "Autres variétés", // REVIEW

  shippingPage: {
    title: "Livraison | ATTIMO Huile d'olive vierge extra de spécialité",
    heading: "Informations de livraison",
    intro:
      "Nous livrons dans toute l'Union européenne. Plus vous commandez, moins vous payez la livraison — voire pas du tout.", // REVIEW
    factShipsTomorrow: "Commandez aujourd'hui, expédié demain", // REVIEW
    factFreeMulti: "Livraison gratuite sur les commandes de plusieurs bouteilles", // REVIEW
    factPacked: "Soigneusement emballé pour une livraison en toute sécurité", // REVIEW
    ratesHeading: "Tarifs de livraison & seuils de livraison gratuite",
    standardLabel: "Standard :",
    freeFromLabel: "GRATUITE dès",
    estLabel: "Env.",
    autoCalcNote:
      "Les frais de livraison sont calculés automatiquement au paiement selon votre pays de livraison.", // REVIEW
    processingHeading: "Préparation & livraison",
    processingP1:
      "Les commandes passées avant la fin de la journée sont emballées et expédiées le jour ouvré suivant. Vous recevrez un lien de suivi par e-mail dès que votre commande quitte nos locaux.", // REVIEW
    processingP2:
      "Les délais de livraison dépendent de votre localisation. La plupart des pays principaux (Belgique, Allemagne, Luxembourg, Pays-Bas) reçoivent leur commande sous 2 à 3 jours ouvrés. Pour les autres destinations de l'UE, comptez de 3 à 7 jours ouvrés selon le transporteur et la destination.", // REVIEW
    returnsHeading: "Retours & dommages",
    returnsP1:
      "Comme l'huile d'olive est un produit alimentaire, elle est exemptée du droit de rétractation standard de 14 jours de l'UE prévu par la directive sur les droits des consommateurs. Nous n'acceptons pas les retours de produits ouverts ou non endommagés.", // REVIEW
    damagedStrong: "Endommagé pendant le transport ?",
    damagedPre: " Si votre commande arrive endommagée ou défectueuse, contactez-nous sous 14 jours à ",
    damagedPost: " avec une photo des dommages. Nous organiserons un remplacement ou un remboursement intégral — sans tracas.", // REVIEW
    contactHeading: "Des questions sur votre commande ?",
    contactSub: "Nous sommes là pour vous aider. Écrivez-nous à tout moment.", // REVIEW
    freeFromBottles: "{n} bouteilles",
    tierNames: { core: "Principal", tier1: "Palier 1", tier2: "Palier 2", tier3: "Palier 3" },
    delivery: {
      core: "2–3 jours ouvrés",
      tier1: "3–5 jours ouvrés",
      tier2: "4–6 jours ouvrés",
      tier3: "5–7 jours ouvrés",
    },
    countries: {
      Belgium: "Belgique", Germany: "Allemagne", Luxembourg: "Luxembourg", Netherlands: "Pays-Bas",
      Austria: "Autriche", Bulgaria: "Bulgarie", Croatia: "Croatie", Czechia: "Tchéquie", Denmark: "Danemark",
      France: "France", Hungary: "Hongrie", Liechtenstein: "Liechtenstein", Malta: "Malte", Poland: "Pologne",
      Slovakia: "Slovaquie", Slovenia: "Slovénie", Estonia: "Estonie", Ireland: "Irlande", Italy: "Italie",
      Latvia: "Lettonie", Lithuania: "Lituanie", Spain: "Espagne", Sweden: "Suède", Finland: "Finlande",
      Greece: "Grèce", Portugal: "Portugal", Romania: "Roumanie",
    },
  },

  productMeta: {
    coratina: {
      title: "Coratina | Huile d'olive monovariétale, riche en polyphénols, récolte précoce", // REVIEW
      description: "Huile d'olive vierge extra Coratina à 847mg/kg de polyphénols — notre plus élevée. Certifiée bio, monovariétale, récolte précoce, pressée à froid. 500ml.", // REVIEW
      productName: "Huile d'olive vierge extra Attimo Coratina 500ml",
    },
    nocellara: {
      title: "Nocellara | Huile d'olive monovariétale, riche en polyphénols, récolte précoce", // REVIEW
      description: "Huile d'olive vierge extra Nocellara de Sicile. Monovariétale, récolte précoce, pressée à froid. 400mg/kg de polyphénols, testée en laboratoire. 500ml.", // REVIEW
      productName: "Huile d'olive vierge extra Attimo Nocellara 500ml",
    },
    picual: {
      title: "Picual | Huile d'olive monovariétale, riche en polyphénols, récolte précoce", // REVIEW
      description: "Huile d'olive vierge extra Picual d'Andalousie. Monovariétale, récolte précoce, pressée à froid. 675mg/kg de polyphénols, testée en laboratoire. 500ml.", // REVIEW
      productName: "Huile d'olive vierge extra Attimo Picual 500ml",
    },
  },

  originRegionFallback: {
    heading: "Du verger à la bouteille", // REVIEW
    body: "L'ATTIMO Nocellara provient directement d'une petite ferme de la vallée du Belice, sur la côte ouest de la Sicile, où l'on produit de l'huile d'olive depuis avant les Romains.\n\nIci, un sol crayeux et des étés secs stressent les oliviers, ce qui maintient des fruits petits à la saveur concentrée. La côte garde les nuits fraîches, ce qui ralentit l'accumulation des composés phénoliques les plus agressifs. Récoltée tôt, on obtient une huile riche en polyphénols mais douce de caractère — plus souple et plus ronde que tout ce qui est produit plus à l'intérieur des terres.", // REVIEW
  },
};
