// Dutch product-copy overlay for the /nl/ market. AI-drafted (pending native
// review). Mirrors the structure of productContentMap in productContent.ts
// EXACTLY (same keys, same numeric values, units, lab figures, icon paths,
// colours, coordinates). Only the human-readable strings are translated. Proper
// names (Coratina, Picual, Nocellara), origin tags ("Puglia, Italië" etc.) and
// all numbers are kept verbatim. Founder glossary: "variëteit" (never "ras"),
// informal "je" (never "u"), "monocultivar", "afwerkingsolie", "vroege oogst",
// "koudgeperst"; never "hij" for the oil. All persuasion copy here is // REVIEW.
import type { ProductContent } from "./productContent";

export const productContentNlMap: Record<string, ProductContent> = {
  "attimo-extra-virgin-olive-oil-coratina-500ml": {
    heroTitle: "CORATINA D'ITALIA",
    heroSubtitle: "Biologische specialty extra vierge olijfolie", // REVIEW
    benefits: [
      "100% Coratina-olijven, vroeg geoogst en binnen enkele uren koudgeperst", // REVIEW
      "Door een onafhankelijk lab getest op kwaliteit en zuiverheid", // REVIEW
      "Rechtstreeks van een kleine familie-olijfgaard in Puglia, Italië", // REVIEW
    ],
    benefitTooltip:
      "Polyfenolen zijn natuurlijke verbindingen in olijfolie die zorgen voor de gezondheidsvoordelen waar je over hebt gehoord — ontstekingsremmende eigenschappen, ondersteuning van de hartgezondheid en antioxidantbescherming.", // REVIEW
    labReportUrl: "/lab/Coratina2025.pdf",
    sourceLine: "Rechtstreeks van een kleine familie-olijfgaard in Puglia, Italië", // REVIEW
    labelDisclosure:
      "De afgebeelde fles draagt ons aankomende ATTIMO-merketiket. Jouw olie van de oogst 2024/25 wordt geleverd onder het etiket van de oorspronkelijke producent en bevat dezelfde superieure olie.", // REVIEW
    labTiles: [
      { key: "polyphenols", label: "BIOACTIEVE POLYFENOLEN", value: "847", unit: "mg/kg", avg: "gem. ~180mg/kg", description: "Natuurlijke antioxidanten die zorgen voor de gezondheidsvoordelen van olijfolie." }, // REVIEW
      { key: "oleocanthal", label: "OLEOCANTHAL", value: "471", unit: "mg/kg", avg: "gem. 10-30mg/kg", description: "Een krachtige ontstekingsremmende verbinding die uniek is voor olijfolie." }, // REVIEW
      { key: "oleacin", label: "OLEACEÏNE", value: "336", unit: "mg/kg", avg: "gem. 10-30mg/kg", description: "Een krachtige antioxidant die in verband wordt gebracht met bescherming van hart en bloedvaten." }, // REVIEW
      { key: "acidity", label: "ZUURGRAAD", value: "0.19", unit: "%", avg: "gem. ~0.8%", description: "Een lagere zuurgraad betekent versere olijven en hogere kwaliteit." }, // REVIEW
    ],
    tabs: {
      details: {
        origin: "Puglia, Italië",
        olive: "Coratina",
        flavor: "Krachtig & Pittig", // REVIEW
        store: "beschermd bewaren tegen licht en warmte", // REVIEW
        volume: "500ml",
      },
      flavorProfile: [
        { label: "PEPERIG", rating: 5 },
        { label: "FRUITIG", rating: 4 },
        { label: "BITTER", rating: 5 },
        { label: "KRUIDIG", rating: 3 },
      ],
      harvest:
        "De olijven worden vroeg in oktober geplukt, wanneer ze jong en groen zijn en boordevol polyfenolen zitten die smaak en gezondheidsvoordelen versterken. Binnen enkele uren na de oogst koud geëxtraheerd om het kenmerkende karakter van de olie te bewaren.", // REVIEW
      uses: "Gebruik deze olie het liefst als afwerking; sprenkel over je eten voor een levendig smaakaccent.", // REVIEW
      usesExtra:
        "Perfect bij steak, gegrilde groenten, stevige soepen en bruschetta.", // REVIEW
    },
    originStory: {
      headline:
        "Coratina is een compromisloze olijf, de koningin van de polyfenolen. De variëteit perst een intense, bittere olie met echte grip, het soort olie dat liefhebbers per lepel nemen als dagelijkse longevity-shot.", // REVIEW
      quickRef: [
        { label: "VARIËTEIT", value: "100% Coratina" },
        { label: "HERKOMST", value: "Puglia, Italië" },
        { label: "SMAAK", value: "Krachtig & Pittig" }, // REVIEW
        { label: "GEBRUIK", value: "sprenkel over verse gerechten" }, // REVIEW
        { label: "BEWAREN", value: "beschermd tegen licht en warmte" }, // REVIEW
      ],
      features: [
        {
          title: "Krachtig & Pittig", // REVIEW
          description: "Verse kruiden, artisjok en zwarte peper. Ultrahoog polyfenolgehalte: intense kick en droge afdronk.", // REVIEW
          icon: "/icons/mortar.svg",
        },
        {
          title: "Vroege Oogst", // REVIEW
          description: "Vroeg geoogst wanneer de olijven het rijkst zijn aan polyfenolen die smaak en gezondheidsvoordelen versterken.", // REVIEW
          icon: "/icons/basket-2.svg",
        },
        {
          title: "100% Coratina",
          description: "Een Italiaanse variëteit die bekendstaat om haar uitzonderlijk hoge polyfenolgehalte en krachtige karakter.", // REVIEW
          icon: "/icons/branch-2.svg",
        },
        {
          title: "Koudgeperst", // REVIEW
          description: "Binnen enkele uren na de oogst geperst op lage temperatuur om elke druppel smaak en voedingswaarde te bewaren.", // REVIEW
          icon: "/icons/olive.svg",
        },
        {
          title: "Lekker Op Alles", // REVIEW
          description: "Sprenkel over groenten, werk vlees en vis af, geef soepen een boost, dip met brood, probeer eens op ijs.", // REVIEW
          icon: "/icons/bread-2.svg",
        },
      ],
    },
    labTrust: {
      heading: "labgetest op kwaliteit en zuiverheid", // REVIEW
      subheading:
        "Gezondheidsclaims zonder bewijs zijn gewoon marketing. We laten elke batch onafhankelijk in het lab testen op belangrijke kwaliteitsmarkers die je zelf kunt controleren.", // REVIEW
      values: [
        { label: "Polyfenolen", value: "847", unit: "mg/kg", standard: "gem. ~180 mg/kg", description: "Natuurlijke antioxidanten die zorgen voor de gezondheidsvoordelen van olijfolie." }, // REVIEW
        { label: "Oleocanthal", value: "471", unit: "mg/kg", standard: "gem. <10 mg/kg", description: "Een krachtige ontstekingsremmende verbinding die uniek is voor olijfolie." }, // REVIEW
        { label: "Oleaceïne", value: "336", unit: "mg/kg", standard: "gem. <40 mg/kg", description: "Een krachtige antioxidant die in verband wordt gebracht met bescherming van hart en bloedvaten." }, // REVIEW
        { label: "Zuurgraad", value: "0.19", unit: "%", standard: "gem. ~0.8%", description: "Een lagere zuurgraad betekent versere olijven en hogere kwaliteit." }, // REVIEW
        { label: "Peroxiden", value: "7.2", unit: "meq/kg", standard: "gem. ~20 meq/kg", description: "Laat zien hoe vers de olie is. Lage peroxidewaarde = minder oxidatie." }, // REVIEW
        { label: "K270", value: "0.15", unit: "", standard: "gem. ~0.22", description: "Meet oxidatie in de tijd. Lagere waarden wijzen op een versere, beter bewaarde olie." }, // REVIEW
      ],
    },
    polyphenolValue: 847,
    polyphenolLabel: "Coratina",
    buttonColor: "#B3E58C",
    tileBackground: "#10221B",
    tileAccent: "#B3E58C",
    originRegion: {
      heading: "Van olijfgaard tot fles", // REVIEW
      body: "ATTIMO Coratina komt rechtstreeks van een kleine familie-olijfgaard in Puglia, Italië. De regio is de grootste olijfolieproducent van het land, bekend om haar eeuwenoude bomen en uitzonderlijke kwaliteit.\n\nDe kustvlaktes en het mediterrane klimaat scheppen ideale groeiomstandigheden voor de variëteit Coratina. Lange, zonovergoten dagen concentreren de polyfenolen in de vrucht en bewaren het krachtige, peperige karakter dat deze olie zo uitzonderlijk maakt.", // REVIEW
      markerLon: 16.8,
      markerLat: 41.1,
      markerLabel: "Puglia",
      markerStyle: "pill-only" as const,
    },
  },

  nocellara: {
    heroTitle: "NOCELLARA D'ITALIA",
    heroSubtitle: "Specialty extra vierge olijfolie", // REVIEW
    benefits: [
      "100% Nocellara-olijven, vroeg geoogst en binnen enkele uren koudgeperst", // REVIEW
      "Door een onafhankelijk lab getest op kwaliteit en zuiverheid", // REVIEW
      "Rechtstreeks van een kleine familie-olijfgaard in Italië", // REVIEW
    ],
    benefitTooltip:
      "Polyfenolen zijn natuurlijke verbindingen in olijfolie die zorgen voor de gezondheidsvoordelen waar je over hebt gehoord — ontstekingsremmende eigenschappen, ondersteuning van de hartgezondheid en antioxidantbescherming.", // REVIEW
    labReportUrl: "/lab/Nocellara2025.pdf",
    sourceLine: "Rechtstreeks van een kleine familie-olijfgaard in Italië", // REVIEW
    labelDisclosure:
      "De afgebeelde fles draagt ons aankomende ATTIMO-merketiket. Jouw olie van de oogst 2024/25 wordt geleverd onder het etiket van de oorspronkelijke producent en bevat dezelfde superieure olie.", // REVIEW
    labTiles: [
      { key: "polyphenols", label: "BIOACTIEVE POLYFENOLEN", value: "400", unit: "mg/kg", avg: "gem. ~180mg/kg", description: "Natuurlijke antioxidanten die zorgen voor de gezondheidsvoordelen van olijfolie." }, // REVIEW
      { key: "oleocanthal", label: "OLEOCANTHAL", value: "137", unit: "mg/kg", avg: "gem. <10mg/kg", description: "Een krachtige ontstekingsremmende verbinding die uniek is voor olijfolie." }, // REVIEW
      { key: "oleacin", label: "OLEACEÏNE", value: "209", unit: "mg/kg", avg: "gem. <40mg/kg", description: "een krachtige antioxidant die in verband wordt gebracht met hartgezondheid en een lang leven" }, // REVIEW
      { key: "acidity", label: "ZUURGRAAD", value: "0.21%", unit: "", avg: "gem. ~0.8%", description: "Een lagere zuurgraad betekent versere olijven en hogere kwaliteit." }, // REVIEW
    ],
    tabs: {
      details: {
        origin: "Sicilië, Italië",
        olive: "Nocellara",
        flavor: "Zacht & Fruitig", // REVIEW
        store: "beschermd bewaren tegen licht en warmte", // REVIEW
        volume: "500ml",
      },
      flavorProfile: [
        { label: "FRUITIG", rating: 5 },
        { label: "NOOTACHTIG", rating: 4 },
        { label: "BOTERIG", rating: 4 },
        { label: "PEPERIG", rating: 2 },
      ],
      harvest:
        "De olijven worden vroeg in oktober geplukt, wanneer ze jong en groen zijn en boordevol polyfenolen zitten die smaak en gezondheidsvoordelen versterken. Binnen enkele uren na de oogst koud geëxtraheerd om het kenmerkende zachte, fruitige karakter van de olie te bewaren.", // REVIEW
      uses: "Lekker op alles — sprenkel over verse gerechten voor een zacht smaakaccent.", // REVIEW
      usesExtra:
        "Perfect bij pasta, verrijk eieren, werk zeevruchten af, dresseer bladgroenten — en probeer eens op ijs.", // REVIEW
    },
    originStory: {
      headline:
        "Nocellara di Belice is een gulle Siciliaanse olijf, een van Italiës meest gewaardeerde cultivars. De variëteit perst een zachte olie met fruitige tonen en een fluweelzachte textuur — makkelijk om van te houden en elke dag te gebruiken.", // REVIEW
      quickRef: [
        { label: "VARIËTEIT", value: "100% Nocellara" },
        { label: "HERKOMST", value: "Sicilië, Italië" },
        { label: "SMAAK", value: "Zacht & Fruitig" }, // REVIEW
        { label: "GEBRUIK", value: "sprenkel over verse gerechten" }, // REVIEW
        { label: "BEWAREN", value: "beschermd tegen licht en warmte" }, // REVIEW
      ],
      features: [
        {
          title: "Zacht & Fruitig", // REVIEW
          description: "Verse amandel en groene banaan met een fluweelzachte textuur en ronde afdronk. Perfect voor dagelijks gebruik.", // REVIEW
          icon: "/icons/bread-2.svg",
        },
        {
          title: "Vroege Oogst", // REVIEW
          description: "Vroeg in oktober geplukt wanneer de olijven boordevol polyfenolen zitten die smaak en gezondheidsvoordelen versterken.", // REVIEW
          icon: "/icons/basket-2.svg",
        },
        {
          title: "100% Nocellara",
          description: "Een gulle Siciliaanse olijfvariëteit die bekendstaat om haar zachte karakter en ronde, fruitige tonen.", // REVIEW
          icon: "/icons/branch-2.svg",
        },
        {
          title: "Koudgeperst", // REVIEW
          description: "Binnen enkele uren na de oogst geperst op lage temperatuur om elke druppel smaak en voedingswaarde te bewaren.", // REVIEW
          icon: "/icons/olive.svg",
        },
        {
          title: "Lekker Op Alles", // REVIEW
          description: "Perfect bij pasta, verrijk eieren, werk zeevruchten af, dresseer bladgroenten, probeer eens op ijs.", // REVIEW
          icon: "/icons/bread-2.svg",
        },
      ],
    },
    labTrust: {
      heading: "labgetest op kwaliteit en zuiverheid", // REVIEW
      subheading:
        "Gezondheidsclaims zonder bewijs zijn gewoon marketing. We laten elke batch onafhankelijk in het lab testen op belangrijke kwaliteitsmarkers die je zelf kunt controleren.", // REVIEW
      values: [
        { label: "Polyfenolen", value: "400", unit: "mg/kg", standard: "gem. ~180 mg/kg", description: "Natuurlijke antioxidanten die zorgen voor de gezondheidsvoordelen van olijfolie." }, // REVIEW
        { label: "Oleocanthal", value: "137", unit: "mg/kg", standard: "gem. <10 mg/kg", description: "Een krachtige ontstekingsremmende verbinding die uniek is voor olijfolie." }, // REVIEW
        { label: "Oleaceïne", value: "209", unit: "mg/kg", standard: "gem. <40 mg/kg", description: "Een krachtige antioxidant die in verband wordt gebracht met hartgezondheid en een lang leven." }, // REVIEW
        { label: "Zuurgraad", value: "0.21", unit: "%", standard: "gem. ~0.8%", description: "Een lagere zuurgraad betekent versere olijven en hogere kwaliteit." }, // REVIEW
        { label: "Peroxiden", value: "7.8", unit: "meq/kg", standard: "gem. ~20 meq/kg", description: "Laat zien hoe vers de olie is. Lage peroxidewaarde = minder oxidatie." }, // REVIEW
        { label: "K270", value: "0.11", unit: "", standard: "gem. ~0.22", description: "Meet oxidatie in de tijd. Lagere waarden wijzen op een versere, beter bewaarde olie." }, // REVIEW
      ],
    },
    polyphenolValue: 400,
    polyphenolLabel: "Nocellara",
    buttonColor: "#ECA948",
  },

  "attimo-extra-virgin-olive-oil-picual-500ml": {
    heroTitle: "PICUAL DE ESPAÑA",
    heroSubtitle: "Specialty extra vierge olijfolie", // REVIEW
    benefits: [
      "100% Picual-olijven, vroeg geoogst en binnen enkele uren koudgeperst", // REVIEW
      "Door een onafhankelijk lab getest op kwaliteit en zuiverheid", // REVIEW
      "Rechtstreeks van een kleine familie-olijfgaard in Andalusië, Spanje", // REVIEW
    ],
    benefitTooltip:
      "Polyfenolen zijn natuurlijke verbindingen in olijfolie die zorgen voor de gezondheidsvoordelen waar je over hebt gehoord — ontstekingsremmende eigenschappen, ondersteuning van de hartgezondheid en antioxidantbescherming.", // REVIEW
    labReportUrl: "/lab/Picual2025.pdf",
    sourceLine: "Rechtstreeks van een kleine familie-olijfgaard in Andalusië, Spanje", // REVIEW
    labelDisclosure:
      "De afgebeelde fles draagt ons aankomende ATTIMO-merketiket. Jouw olie van de oogst 2024/25 wordt geleverd onder het etiket van de oorspronkelijke producent en bevat dezelfde superieure olie.", // REVIEW
    labTiles: [
      { key: "polyphenols", label: "POLYFENOLEN", value: "675", unit: "mg/kg", avg: "gem. ~180mg/kg", description: "Natuurlijke antioxidanten die zorgen voor de gezondheidsvoordelen van olijfolie." }, // REVIEW
      { key: "oleocanthal", label: "OLEOCANTHAL", value: "—", unit: "mg/kg", avg: "gem. 10-30mg/kg", description: "Een krachtige ontstekingsremmende verbinding die uniek is voor olijfolie." }, // REVIEW
      { key: "oleacin", label: "OLEACEÏNE", value: "—", unit: "mg/kg", avg: "gem. <40mg/kg", description: "Een krachtige antioxidant die in verband wordt gebracht met bescherming van hart en bloedvaten." }, // REVIEW
      { key: "acidity", label: "ZUURGRAAD", value: "0.13", unit: "%", avg: "gem. ~0.8%", description: "Een lagere zuurgraad betekent versere olijven en hogere kwaliteit." }, // REVIEW
    ],
    tabs: {
      details: {
        origin: "Jaén, Spanje",
        olive: "Picual",
        flavor: "Groen & Grassig", // REVIEW
        store: "beschermd bewaren tegen licht en warmte", // REVIEW
        volume: "500ml",
      },
      flavorProfile: [
        { label: "PEPERIG", rating: 4 },
        { label: "FRUITIG", rating: 3 },
        { label: "BITTER", rating: 3 },
        { label: "KRUIDIG", rating: 5 },
      ],
      harvest:
        "De olijven worden vroeg in oktober geplukt, wanneer ze jong en groen zijn en boordevol polyfenolen zitten die smaak en gezondheidsvoordelen versterken. Binnen enkele uren na de oogst koud geëxtraheerd om het kenmerkende levendige karakter van de olie te bewaren.", // REVIEW
      uses: "Gebruik deze olie het liefst als afwerking; sprenkel over je eten voor een levendig smaakaccent.", // REVIEW
      usesExtra:
        "Heerlijk op gegrilde groenten, soepen, peulvruchten en geroosterd brood.", // REVIEW
    },
    originStory: {
      headline:
        "Picual is de meest expressieve en meest aangeplante olijf van Spanje. De variëteit perst een levendige olie met een frisse groene beet. Een allrounder in de keuken, met genoeg karakter om interessant te blijven.", // REVIEW
      quickRef: [
        { label: "VARIËTEIT", value: "100% Picual" },
        { label: "HERKOMST", value: "Jaén, Spanje" },
        { label: "SMAAK", value: "Groen & Grassig" }, // REVIEW
        { label: "GEBRUIK", value: "sprenkel over verse gerechten" }, // REVIEW
        { label: "BEWAREN", value: "beschermd tegen licht en warmte" }, // REVIEW
      ],
      features: [
        {
          title: "Groen & Grassig", // REVIEW
          description: "Aroma's van vers tomatenblad en versgemaaid gras met een zuivere, uitgesproken afdronk.", // REVIEW
          icon: "/icons/mortar.svg",
        },
        {
          title: "Vroege Oogst", // REVIEW
          description: "Vroeg geplukt wanneer de olijven groen zijn en boordevol polyfenolen zitten.", // REVIEW
          icon: "/icons/basket-2.svg",
        },
        {
          title: "100% Picual",
          description: "De vlaggenschipvariëteit van Spanje, bekend om haar stabiliteit, krachtige karakter en hoge polyfenolgehalte.", // REVIEW
          icon: "/icons/branch-2.svg",
        },
        {
          title: "Koudgeperst", // REVIEW
          description: "Binnen enkele uren na de oogst geperst op lage temperatuur om elke druppel smaak en voedingswaarde te bewaren.", // REVIEW
          icon: "/icons/olive.svg",
        },
        {
          title: "Lekker Op Alles", // REVIEW
          description: "dresseer groenten & salades, top alles van de grill, fris salades op, werk verse kaas & yoghurt af, probeer met chocolade", // REVIEW
          icon: "/icons/bread-2.svg",
        },
      ],
    },
    labTrust: {
      heading: "labgetest op kwaliteit en zuiverheid", // REVIEW
      subheading:
        "Gezondheidsclaims zonder bewijs zijn gewoon marketing. We laten elke batch onafhankelijk in het lab testen op belangrijke kwaliteitsmarkers die je zelf kunt controleren.", // REVIEW
      values: [
        { label: "Polyfenolen", value: "675", unit: "mg/kg", standard: "gem. ~180 mg/kg", description: "Natuurlijke antioxidanten die zorgen voor de gezondheidsvoordelen van olijfolie." }, // REVIEW
        { label: "Oleocanthal", value: "—", unit: "mg/kg", standard: "gem. <10 mg/kg", description: "Een krachtige ontstekingsremmende verbinding die uniek is voor olijfolie." }, // REVIEW
        { label: "Oleaceïne", value: "—", unit: "mg/kg", standard: "gem. <40 mg/kg", description: "Een krachtige antioxidant die in verband wordt gebracht met bescherming van hart en bloedvaten." }, // REVIEW
        { label: "Zuurgraad", value: "0.13", unit: "%", standard: "gem. ~0.8%", description: "Een lagere zuurgraad betekent versere olijven en hogere kwaliteit." }, // REVIEW
        { label: "Peroxiden", value: "5.7", unit: "meq/kg", standard: "gem. ~20 meq/kg", description: "Laat zien hoe vers de olie is. Lage peroxidewaarde = minder oxidatie." }, // REVIEW
        { label: "K270", value: "—", unit: "", standard: "gem. ~0.22", description: "Meet oxidatie in de tijd. Lagere waarden wijzen op een versere, beter bewaarde olie." }, // REVIEW
      ],
    },
    polyphenolValue: 675,
    polyphenolLabel: "Picual",
    buttonColor: "#B3E58C",
    tileBackground: "#B3E58C",
    tileAccent: "#1B4229",
    originRegion: {
      heading: "Van olijfgaard tot fles", // REVIEW
      body: "ATTIMO Picual komt rechtstreeks van een kleine familie-olijfgaard in Jaén, het hart van Andalusië en de olijfoliehoofdstad van de wereld. Deze provincie alleen produceert meer olijfolie dan welk heel land buiten Spanje ook.\n\nHet ruige Sierra-landschap, met hete dagen en koele nachten, dwingt de Picual-olijf om natuurlijke afweerstoffen te concentreren — het resultaat is een olie die uitzonderlijk rijk is aan polyfenolen en gebouwd voor stabiliteit. Vroeg geoogst en binnen enkele uren geperst, met als resultaat een levendig groene olie met een gestructureerd karakter.", // REVIEW
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
