// French product copy — overlay for the /fr/ market. Mirrors the structure of
// productContentMap in productContent.ts EXACTLY (same keys, same numeric
// values, units, lab figures, icon paths, colours, coordinates). Only the
// human-readable strings are translated. Proper names (Coratina, Picual,
// Nocellara), origin tags ("Puglia, Italy" etc.) and all numbers are kept
// verbatim. All persuasion copy here is // REVIEW — drafted for a native pass.
import type { ProductContent } from "./productContent";

export const productContentFrMap: Record<string, ProductContent> = {
  "attimo-extra-virgin-olive-oil-coratina-500ml": {
    heroTitle: "CORATINA D'ITALIA",
    heroSubtitle: "Huile d'olive vierge extra de spécialité bio", // REVIEW
    benefits: [
      "100% olives Coratina récoltées précocement et pressées à froid en quelques heures", // REVIEW
      "Testée en laboratoire indépendant pour sa qualité et sa pureté", // REVIEW
      "Approvisionnée directement auprès d'un petit verger familial dans les Pouilles, en Italie", // REVIEW
    ],
    benefitTooltip:
      "Les polyphénols sont des composés naturels de l'huile d'olive qui procurent les bienfaits dont vous avez entendu parler — propriétés anti-inflammatoires, soutien à la santé cardiaque et protection antioxydante.", // REVIEW
    labReportUrl: "/lab/Coratina2025.pdf",
    sourceLine: "Approvisionnée directement auprès d'un petit verger familial dans les Pouilles, en Italie", // REVIEW
    labelDisclosure:
      "La bouteille présentée arbore notre futur label de marque ATTIMO. Votre huile de la récolte 2024/25 vous parviendra sous le label du producteur d'origine, contenant la même huile de qualité supérieure.", // REVIEW
    labTiles: [
      { key: "polyphenols", label: "POLYPHÉNOLS BIOACTIFS", value: "847", unit: "mg/kg", avg: "moy. ~180mg/kg", description: "Antioxydants naturels qui confèrent à l'huile d'olive ses bienfaits pour la santé." }, // REVIEW
      { key: "oleocanthal", label: "OLÉOCANTHAL", value: "471", unit: "mg/kg", avg: "moy. 10-30mg/kg", description: "Un puissant composé anti-inflammatoire propre à l'huile d'olive." }, // REVIEW
      { key: "oleacin", label: "OLÉACINE", value: "336", unit: "mg/kg", avg: "moy. 10-30mg/kg", description: "Un puissant antioxydant associé à la protection cardiovasculaire." }, // REVIEW
      { key: "acidity", label: "ACIDITÉ", value: "0.19", unit: "%", avg: "moy. ~0.8%", description: "Une acidité plus faible signifie des olives plus fraîches et une qualité supérieure." }, // REVIEW
    ],
    tabs: {
      details: {
        origin: "Puglia, Italy",
        olive: "Coratina",
        flavor: "Corsé et Intense", // REVIEW
        store: "tenir à l'abri de la lumière et de la chaleur", // REVIEW
        volume: "500ml",
      },
      flavorProfile: [
        { label: "POIVRÉ", rating: 5 },
        { label: "FRUITÉ", rating: 4 },
        { label: "AMER", rating: 5 },
        { label: "HERBACÉ", rating: 3 },
      ],
      harvest:
        "Les olives sont cueillies tôt en octobre, lorsqu'elles sont jeunes, vertes et riches en polyphénols qui rehaussent la saveur et les bienfaits pour la santé. Extraites à froid dans les heures suivant la récolte afin de préserver le caractère distinctif de l'huile.", // REVIEW
      uses: "À utiliser de préférence comme touche finale ; arrosez vos plats d'un filet pour ajouter une explosion de saveur vibrante.", // REVIEW
      usesExtra:
        "Parfaite sur les steaks, les légumes grillés, les soupes consistantes et la bruschetta.", // REVIEW
    },
    originStory: {
      headline:
        "La Coratina est une olive intransigeante, la reine des polyphénols. Elle donne une huile intense et amère, avec une vraie poigne, le genre que les aficionados prennent à la cuillère comme une dose quotidienne de longévité.", // REVIEW
      quickRef: [
        { label: "VARIÉTÉ", value: "100% Coratina" },
        { label: "ORIGINE", value: "Puglia, Italy" },
        { label: "SAVEUR", value: "Corsé et Intense" }, // REVIEW
        { label: "USAGE", value: "en filet sur les aliments frais" }, // REVIEW
        { label: "CONSERVATION", value: "à l'abri de la lumière et de la chaleur" }, // REVIEW
      ],
      features: [
        {
          title: "Corsé et Intense", // REVIEW
          description: "Herbes fraîches, artichaut et poivre noir. Très riche en polyphénols : puissance intense et finale sèche.", // REVIEW
          icon: "/icons/mortar.svg",
        },
        {
          title: "Récolte Précoce", // REVIEW
          description: "Récoltée précocement, lorsque les olives sont les plus riches en polyphénols qui rehaussent la saveur et les bienfaits pour la santé.", // REVIEW
          icon: "/icons/basket-2.svg",
        },
        {
          title: "100% Coratina",
          description: "Une variété italienne réputée pour sa teneur exceptionnellement élevée en polyphénols et son caractère vigoureux.", // REVIEW
          icon: "/icons/branch-2.svg",
        },
        {
          title: "Pressée à Froid", // REVIEW
          description: "Pressée dans les heures suivant la récolte à basse température afin de préserver chaque goutte de saveur et de nutrition.", // REVIEW
          icon: "/icons/olive.svg",
        },
        {
          title: "Bonne Sur Tout", // REVIEW
          description: "Arrosez-en les légumes, sublimez viandes et poissons, relevez les soupes, trempez-y du pain, essayez-la sur la glace.", // REVIEW
          icon: "/icons/bread-2.svg",
        },
      ],
    },
    labTrust: {
      heading: "testée en laboratoire pour sa qualité et sa pureté", // REVIEW
      subheading:
        "Les allégations santé sans preuves ne sont que du marketing. Nous faisons tester chaque lot de manière indépendante en laboratoire sur des marqueurs de qualité clés que vous pouvez vérifier par vous-même.", // REVIEW
      values: [
        { label: "Polyphénols", value: "847", unit: "mg/kg", standard: "moy. ~180 mg/kg", description: "Antioxydants naturels qui confèrent à l'huile d'olive ses bienfaits pour la santé." }, // REVIEW
        { label: "Oléocanthal", value: "471", unit: "mg/kg", standard: "moy. <10 mg/kg", description: "Un puissant composé anti-inflammatoire propre à l'huile d'olive." }, // REVIEW
        { label: "Oléacine", value: "336", unit: "mg/kg", standard: "moy. <40 mg/kg", description: "Un puissant antioxydant associé à la protection cardiovasculaire." }, // REVIEW
        { label: "Acidité", value: "0.19", unit: "%", standard: "moy. ~0.8%", description: "Une acidité plus faible signifie des olives plus fraîches et une qualité supérieure." }, // REVIEW
        { label: "Peroxydes", value: "7.2", unit: "meq/kg", standard: "moy. ~20 meq/kg", description: "Indique la fraîcheur de l'huile. Un faible taux de peroxyde = moins d'oxydation." }, // REVIEW
        { label: "K270", value: "0.15", unit: "", standard: "moy. ~0.22", description: "Mesure l'oxydation au fil du temps. Des valeurs plus faibles indiquent une huile plus fraîche et mieux préservée." }, // REVIEW
      ],
    },
    polyphenolValue: 847,
    polyphenolLabel: "Coratina",
    buttonColor: "#B3E58C",
    tileBackground: "#10221B",
    tileAccent: "#B3E58C",
    shippingNotice: "Expédition sous 5 à 7 jours", // REVIEW
    originRegion: {
      heading: "Du verger à la bouteille", // REVIEW
      body: "ATTIMO Coratina est approvisionnée directement auprès d'un petit verger familial dans les Pouilles, en Italie. La région est le plus grand producteur d'huile d'olive du pays, réputée pour ses arbres centenaires et sa qualité exceptionnelle.\n\nLes plaines côtières et le climat méditerranéen créent des conditions de culture idéales pour la variété Coratina. De longues journées baignées de soleil concentrent les polyphénols du fruit, préservant le caractère corsé et poivré qui rend cette huile exceptionnelle.", // REVIEW
      markerLon: 16.8,
      markerLat: 41.1,
      markerLabel: "Puglia",
      markerStyle: "pill-only" as const,
    },
  },

  nocellara: {
    heroTitle: "NOCELLARA D'ITALIA",
    heroSubtitle: "Huile d'olive vierge extra d'exception", // REVIEW
    benefits: [
      "Olives 100% Nocellara récoltées précocement et pressées à froid en quelques heures", // REVIEW
      "Testée en laboratoire indépendant pour la qualité et la pureté", // REVIEW
      "Provenant directement d'un petit verger familial en Italie", // REVIEW
    ],
    benefitTooltip:
      "Les polyphénols sont des composés naturels de l'huile d'olive qui apportent les bienfaits pour la santé dont vous avez entendu parler : propriétés anti-inflammatoires, soutien à la santé cardiaque et protection antioxydante.", // REVIEW
    labReportUrl: "/lab/Nocellara2025.pdf",
    sourceLine: "Provenant directement d'un petit verger familial en Italie", // REVIEW
    labelDisclosure:
      "La bouteille présentée arbore notre future étiquette de marque ATTIMO. Votre huile de la récolte 2024/25 arrivera sous l'étiquette du producteur d'origine, contenant la même huile de qualité supérieure.", // REVIEW
    labTiles: [
      { key: "polyphenols", label: "POLYPHÉNOLS BIOACTIFS", value: "400", unit: "mg/kg", avg: "moy. ~180mg/kg", description: "Antioxydants naturels qui confèrent à l'huile d'olive ses bienfaits pour la santé." }, // REVIEW
      { key: "oleocanthal", label: "OLÉOCANTHAL", value: "137", unit: "mg/kg", avg: "moy. <10mg/kg", description: "Un puissant composé anti-inflammatoire propre à l'huile d'olive." }, // REVIEW
      { key: "oleacin", label: "OLÉACINE", value: "209", unit: "mg/kg", avg: "moy. <40mg/kg", description: "un puissant antioxydant lié à la santé cardiaque et à la longévité" }, // REVIEW
      { key: "acidity", label: "ACIDITÉ", value: "0.21%", unit: "", avg: "moy. ~0.8%", description: "Une acidité plus faible signifie des olives plus fraîches et une qualité supérieure." }, // REVIEW
    ],
    tabs: {
      details: {
        origin: "Sicily, Italy",
        olive: "Nocellara",
        flavor: "Doux et Fruité", // REVIEW
        store: "tenir à l'abri de la lumière et de la chaleur", // REVIEW
        volume: "500ml",
      },
      flavorProfile: [
        { label: "FRUITÉ", rating: 5 },
        { label: "NOISETTÉ", rating: 4 },
        { label: "BEURRÉ", rating: 4 },
        { label: "POIVRÉ", rating: 2 },
      ],
      harvest:
        "Les olives sont cueillies tôt en octobre lorsqu'elles sont jeunes, vertes et riches en polyphénols qui rehaussent la saveur et les bienfaits pour la santé. Extraites à froid quelques heures après la récolte pour préserver le caractère doux et fruité distinctif de l'huile.", // REVIEW
      uses: "Délicieuse sur tout — versez-en un filet sur des aliments frais pour ajouter une douce touche de saveur.", // REVIEW
      usesExtra:
        "Parfaite pour les pâtes, pour enrichir les œufs, sublimer les fruits de mer, assaisonner les légumes verts — et essayez-la sur de la glace.", // REVIEW
    },
    originStory: {
      headline:
        "La Nocellara di Belice est une généreuse olive sicilienne, l'un des cépages les plus prisés d'Italie. Elle donne une huile douce aux notes fruitées et à la texture veloutée, facile à apprécier et à utiliser au quotidien.", // REVIEW
      quickRef: [
        { label: "VARIÉTÉ", value: "100% Nocellara" },
        { label: "ORIGINE", value: "Sicily, Italy" },
        { label: "SAVEUR", value: "Doux et Fruité" }, // REVIEW
        { label: "USAGE", value: "verser en filet sur des aliments frais" }, // REVIEW
        { label: "CONSERVATION", value: "à l'abri de la lumière et de la chaleur" }, // REVIEW
      ],
      features: [
        {
          title: "Doux et Fruité", // REVIEW
          description: "Amande fraîche et banane verte avec une texture veloutée et une finale ronde. Parfaite pour un usage polyvalent.", // REVIEW
          icon: "/icons/bread-2.svg",
        },
        {
          title: "Récolte Précoce", // REVIEW
          description: "Cueillies tôt en octobre lorsque les olives sont riches en polyphénols qui rehaussent la saveur et les bienfaits pour la santé.", // REVIEW
          icon: "/icons/basket-2.svg",
        },
        {
          title: "100% Nocellara",
          description: "Une généreuse variété d'olive sicilienne reconnue pour son caractère doux et ses notes rondes et fruitées.", // REVIEW
          icon: "/icons/branch-2.svg",
        },
        {
          title: "Pressée à Froid", // REVIEW
          description: "Pressée quelques heures après la récolte à basse température pour préserver chaque goutte de saveur et de nutriments.", // REVIEW
          icon: "/icons/olive.svg",
        },
        {
          title: "Délicieuse Sur Tout", // REVIEW
          description: "Parfaite pour les pâtes, pour enrichir les œufs, sublimer les fruits de mer, assaisonner les légumes verts, à essayer sur de la glace.", // REVIEW
          icon: "/icons/bread-2.svg",
        },
      ],
    },
    labTrust: {
      heading: "testée en laboratoire pour la qualité et la pureté", // REVIEW
      subheading:
        "Les allégations santé sans preuves ne sont que du marketing. Nous faisons tester chaque lot de manière indépendante en laboratoire sur des marqueurs de qualité clés que vous pouvez vérifier par vous-même.", // REVIEW
      values: [
        { label: "Polyphénols", value: "400", unit: "mg/kg", standard: "moy. ~180 mg/kg", description: "Antioxydants naturels qui confèrent à l'huile d'olive ses bienfaits pour la santé." }, // REVIEW
        { label: "Oléocanthal", value: "137", unit: "mg/kg", standard: "moy. <10 mg/kg", description: "Un puissant composé anti-inflammatoire propre à l'huile d'olive." }, // REVIEW
        { label: "Oléacine", value: "209", unit: "mg/kg", standard: "moy. <40 mg/kg", description: "Un puissant antioxydant lié à la santé cardiaque et à la longévité." }, // REVIEW
        { label: "Acidité", value: "0.21", unit: "%", standard: "moy. ~0.8%", description: "Une acidité plus faible signifie des olives plus fraîches et une qualité supérieure." }, // REVIEW
        { label: "Peroxydes", value: "7.8", unit: "meq/kg", standard: "moy. ~20 meq/kg", description: "Indique la fraîcheur de l'huile. Peroxyde faible = moins d'oxydation." }, // REVIEW
        { label: "K270", value: "0.11", unit: "", standard: "moy. ~0.22", description: "Mesure l'oxydation dans le temps. Des valeurs plus faibles indiquent une huile plus fraîche et mieux conservée." }, // REVIEW
      ],
    },
    polyphenolValue: 400,
    polyphenolLabel: "Nocellara",
    buttonColor: "#ECA948",
  },

  "attimo-extra-virgin-olive-oil-picual-500ml": {
    heroTitle: "PICUAL DE ESPAÑA",
    heroSubtitle: "Huile d'olive vierge extra de spécialité", // REVIEW
    benefits: [
      "100 % d'olives Picual récoltées tôt et pressées à froid en quelques heures", // REVIEW
      "Testée en laboratoire indépendant pour la qualité et la pureté", // REVIEW
      "Issue directement d'un petit verger familial en Andalousie, Espagne", // REVIEW
    ],
    benefitTooltip:
      "Les polyphénols sont des composés naturels présents dans l'huile d'olive qui procurent les bienfaits pour la santé dont vous avez entendu parler — propriétés anti-inflammatoires, soutien à la santé cardiaque et protection antioxydante.", // REVIEW
    labReportUrl: "/lab/Picual2025.pdf",
    sourceLine: "Issue directement d'un petit verger familial en Andalousie, Espagne", // REVIEW
    labelDisclosure:
      "La bouteille présentée arbore notre future étiquette de marque ATTIMO. Votre huile de la récolte 2024/25 vous parviendra sous l'étiquette du producteur d'origine, contenant la même huile de qualité supérieure.", // REVIEW
    labTiles: [
      { key: "polyphenols", label: "POLYPHÉNOLS", value: "675", unit: "mg/kg", avg: "moy. ~180mg/kg", description: "Antioxydants naturels qui confèrent à l'huile d'olive ses bienfaits pour la santé." }, // REVIEW
      { key: "oleocanthal", label: "OLÉOCANTHAL", value: "—", unit: "mg/kg", avg: "moy. 10-30mg/kg", description: "Un puissant composé anti-inflammatoire propre à l'huile d'olive." }, // REVIEW
      { key: "oleacin", label: "OLÉACINE", value: "—", unit: "mg/kg", avg: "moy. <40mg/kg", description: "Un puissant antioxydant associé à la protection cardiovasculaire." }, // REVIEW
      { key: "acidity", label: "ACIDITÉ", value: "0.13", unit: "%", avg: "moy. ~0.8%", description: "Une acidité plus faible signifie des olives plus fraîches et une qualité supérieure." }, // REVIEW
    ],
    tabs: {
      details: {
        origin: "Jaén, Spain",
        olive: "Picual",
        flavor: "Vert et Herbacé", // REVIEW
        store: "tenir à l'abri de la lumière et de la chaleur", // REVIEW
        volume: "500ml",
      },
      flavorProfile: [
        { label: "POIVRÉ", rating: 4 },
        { label: "FRUITÉ", rating: 3 },
        { label: "AMER", rating: 3 },
        { label: "HERBACÉ", rating: 5 },
      ],
      harvest:
        "Les olives sont cueillies tôt en octobre, lorsqu'elles sont jeunes, vertes et riches en polyphénols qui rehaussent la saveur et les bienfaits pour la santé. Extraites à froid dans les heures suivant la récolte pour préserver le caractère vibrant et distinctif de l'huile.", // REVIEW
      uses: "S'utilise idéalement comme touche finale ; arrosez-en vos plats pour ajouter une explosion de saveur vibrante.", // REVIEW
      usesExtra:
        "Excellente sur les légumes grillés, les soupes, les légumineuses et le pain grillé.", // REVIEW
    },
    originStory: {
      headline:
        "La Picual est l'olive la plus expressive et la plus plantée d'Espagne. Elle donne une huile vibrante avec une fraîche pointe verte. Polyvalente en cuisine, avec assez de caractère pour rester intéressante.", // REVIEW
      quickRef: [
        { label: "VARIÉTÉ", value: "100% Picual" },
        { label: "ORIGINE", value: "Jaén, Spain" },
        { label: "SAVEUR", value: "Vert et Herbacé" }, // REVIEW
        { label: "USAGE", value: "arroser les aliments frais" }, // REVIEW
        { label: "CONSERVATION", value: "à l'abri de la lumière et de la chaleur" }, // REVIEW
      ],
      features: [
        {
          title: "Vert et Herbacé", // REVIEW
          description: "Arômes de feuille de tomate fraîche et d'herbe coupée avec une finale nette et affirmée.", // REVIEW
          icon: "/icons/mortar.svg",
        },
        {
          title: "Récolte précoce", // REVIEW
          description: "Cueillies tôt lorsque les olives sont vertes et riches en polyphénols.", // REVIEW
          icon: "/icons/basket-2.svg",
        },
        {
          title: "100% Picual",
          description: "La variété phare de l'Espagne, reconnue pour sa stabilité, son caractère affirmé et sa haute teneur en polyphénols.", // REVIEW
          icon: "/icons/branch-2.svg",
        },
        {
          title: "Pressée à froid", // REVIEW
          description: "Pressée dans les heures suivant la récolte à basse température pour préserver chaque goutte de saveur et de nutrition.", // REVIEW
          icon: "/icons/olive.svg",
        },
        {
          title: "Bonne sur tout", // REVIEW
          description: "assaisonnez légumes et salades, nappez tout ce qui est grillé, relevez les salades, finissez fromage frais et yaourt, essayez avec le chocolat", // REVIEW
          icon: "/icons/bread-2.svg",
        },
      ],
    },
    labTrust: {
      heading: "testée en laboratoire pour la qualité et la pureté", // REVIEW
      subheading:
        "Les allégations santé sans preuves ne sont que du marketing. Nous faisons tester chaque lot de façon indépendante en laboratoire sur des marqueurs de qualité clés que vous pouvez vérifier vous-même.", // REVIEW
      values: [
        { label: "Polyphénols", value: "675", unit: "mg/kg", standard: "moy. ~180 mg/kg", description: "Antioxydants naturels qui confèrent à l'huile d'olive ses bienfaits pour la santé." }, // REVIEW
        { label: "Oléocanthal", value: "—", unit: "mg/kg", standard: "moy. <10 mg/kg", description: "Un puissant composé anti-inflammatoire propre à l'huile d'olive." }, // REVIEW
        { label: "Oléacine", value: "—", unit: "mg/kg", standard: "moy. <40 mg/kg", description: "Un puissant antioxydant associé à la protection cardiovasculaire." }, // REVIEW
        { label: "Acidité", value: "0.13", unit: "%", standard: "moy. ~0.8%", description: "Une acidité plus faible signifie des olives plus fraîches et une qualité supérieure." }, // REVIEW
        { label: "Peroxydes", value: "5.7", unit: "meq/kg", standard: "moy. ~20 meq/kg", description: "Indique la fraîcheur de l'huile. Faible taux de peroxyde = moins d'oxydation." }, // REVIEW
        { label: "K270", value: "—", unit: "", standard: "moy. ~0.22", description: "Mesure l'oxydation au fil du temps. Des valeurs plus faibles indiquent une huile plus fraîche et mieux conservée." }, // REVIEW
      ],
    },
    polyphenolValue: 675,
    polyphenolLabel: "Picual",
    buttonColor: "#B3E58C",
    tileBackground: "#B3E58C",
    tileAccent: "#1B4229",
    originRegion: {
      heading: "Du verger à la bouteille", // REVIEW
      body: "L'ATTIMO Picual est issue directement d'un petit verger familial à Jaén, le cœur de l'Andalousie et la capitale mondiale de l'huile d'olive. Cette seule province produit plus d'huile d'olive que n'importe quel pays entier en dehors de l'Espagne.\n\nLe paysage accidenté de la Sierra, avec ses journées chaudes et ses nuits fraîches, pousse l'olive Picual à concentrer ses défenses naturelles — donnant une huile exceptionnellement riche en polyphénols et conçue pour la stabilité. Récoltée tôt et pressée en quelques heures, le résultat est une huile d'un vert vibrant au caractère structuré.", // REVIEW
      markerLon: -3.79,
      markerLat: 37.77,
      markerLabel: "Jaén",
      centerLon: -3.5,
      centerLat: 39.5,
      mapZoom: 18,
      markerStyle: "pill-only" as const,
    },
  },
};
