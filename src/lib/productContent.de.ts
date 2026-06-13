// German product copy — overlay for the /de/ market. Mirrors the structure of
// productContentMap in productContent.ts EXACTLY (same keys, same numeric
// values, units, lab figures, icon paths, colours, coordinates). Only the
// human-readable strings are translated. Proper names (Coratina, Picual,
// Nocellara), origin tags ("Puglia, Italy" etc.) and all numbers are kept
// verbatim. All persuasion copy here is // REVIEW — drafted for a native pass.
import type { ProductContent } from "./productContent";

export const productContentDeMap: Record<string, ProductContent> = {
  "attimo-extra-virgin-olive-oil-coratina-500ml": {
    heroTitle: "CORATINA D'ITALIA",
    heroSubtitle: "Bio natives Olivenöl extra – Spezialität", // REVIEW
    benefits: [
      "100 % Coratina-Oliven, früh geerntet und innerhalb von Stunden kalt gepresst", // REVIEW
      "Im unabhängigen Labor auf Qualität und Reinheit geprüft", // REVIEW
      "Direkt von einem kleinen Familienhain in Apulien, Italien", // REVIEW
    ],
    benefitTooltip:
      "Polyphenole sind natürliche Verbindungen im Olivenöl, die die Vorteile liefern, von denen Sie gehört haben – entzündungshemmende Eigenschaften, Unterstützung der Herzgesundheit und antioxidativer Schutz.", // REVIEW
    labReportUrl: "/lab/Coratina2025.pdf",
    sourceLine: "Direkt von einem kleinen Familienhain in Apulien, Italien", // REVIEW
    labelDisclosure:
      "Die abgebildete Flasche trägt unser kommendes ATTIMO-Markenetikett. Ihr Öl der Ernte 2024/25 kommt unter dem Etikett des ursprünglichen Erzeugers an und enthält dasselbe hochwertige Öl.", // REVIEW
    labTiles: [
      { key: "polyphenols", label: "BIOAKTIVE POLYPHENOLE", value: "847", unit: "mg/kg", avg: "Durchschn. ~180mg/kg", description: "Natürliche Antioxidantien, die dem Olivenöl seine gesundheitlichen Vorteile verleihen." }, // REVIEW
      { key: "oleocanthal", label: "OLEOCANTHAL", value: "471", unit: "mg/kg", avg: "Durchschn. 10-30mg/kg", description: "Eine starke entzündungshemmende Verbindung, die nur in Olivenöl vorkommt." }, // REVIEW
      { key: "oleacin", label: "OLEACEIN", value: "336", unit: "mg/kg", avg: "Durchschn. 10-30mg/kg", description: "Ein starkes Antioxidans, das mit dem Schutz des Herz-Kreislauf-Systems in Verbindung gebracht wird." }, // REVIEW
      { key: "acidity", label: "SÄUREGRAD", value: "0.19", unit: "%", avg: "Durchschn. ~0.8%", description: "Ein niedrigerer Säuregrad bedeutet frischere Oliven und höhere Qualität." }, // REVIEW
    ],
    tabs: {
      details: {
        origin: "Puglia, Italy",
        olive: "Coratina",
        flavor: "Kräftig & Intensiv", // REVIEW
        store: "vor Licht und Hitze schützen", // REVIEW
        volume: "500ml",
      },
      flavorProfile: [
        { label: "PFEFFRIG", rating: 5 },
        { label: "FRUCHTIG", rating: 4 },
        { label: "BITTER", rating: 5 },
        { label: "KRÄUTRIG", rating: 3 },
      ],
      harvest:
        "Die Oliven werden früh im Oktober gepflückt, wenn sie jung, grün und reich an Polyphenolen sind, die Geschmack und gesundheitlichen Nutzen steigern. Innerhalb von Stunden nach der Ernte kalt extrahiert, um den unverwechselbaren Charakter des Öls zu bewahren.", // REVIEW
      uses: "Am besten als finaler Akzent verwenden; träufeln Sie sie über Speisen für einen lebendigen Geschmacksschub.", // REVIEW
      usesExtra:
        "Perfekt zu Steak, gegrilltem Gemüse, kräftigen Suppen und Bruschetta.", // REVIEW
    },
    originStory: {
      headline:
        "Coratina ist eine kompromisslose Olive, die Königin der Polyphenole. Sie presst ein intensives, bitteres Öl mit echtem Grip – die Sorte, die Liebhaber löffelweise als tägliche Longevity-Dosis zu sich nehmen.", // REVIEW
      quickRef: [
        { label: "SORTE", value: "100% Coratina" },
        { label: "HERKUNFT", value: "Puglia, Italy" },
        { label: "GESCHMACK", value: "Kräftig & Intensiv" }, // REVIEW
        { label: "VERWENDUNG", value: "über frische Speisen träufeln" }, // REVIEW
        { label: "LAGERUNG", value: "vor Licht und Hitze schützen" }, // REVIEW
      ],
      features: [
        {
          title: "Kräftig & Intensiv", // REVIEW
          description: "Frische Kräuter, Artischocke und schwarzer Pfeffer. Sehr reich an Polyphenolen: intensiver Kick und trockener Abgang.", // REVIEW
          icon: "/icons/mortar.svg",
        },
        {
          title: "Frühe Ernte", // REVIEW
          description: "Früh geerntet, wenn die Oliven am reichsten an Polyphenolen sind, die Geschmack und gesundheitlichen Nutzen steigern.", // REVIEW
          icon: "/icons/basket-2.svg",
        },
        {
          title: "100% Coratina",
          description: "Eine italienische Sorte, bekannt für ihren außergewöhnlich hohen Polyphenolgehalt und ihren kräftigen Charakter.", // REVIEW
          icon: "/icons/branch-2.svg",
        },
        {
          title: "Kalt Gepresst", // REVIEW
          description: "Innerhalb von Stunden nach der Ernte bei niedriger Temperatur gepresst, um jeden Tropfen Geschmack und Nährstoffe zu bewahren.", // REVIEW
          icon: "/icons/olive.svg",
        },
        {
          title: "Auf Allem Gut", // REVIEW
          description: "Über Gemüse träufeln, Fleisch und Fisch vollenden, Suppen aufpeppen, Brot eintunken, auf Eis probieren.", // REVIEW
          icon: "/icons/bread-2.svg",
        },
      ],
    },
    labTrust: {
      heading: "im Labor auf Qualität und Reinheit geprüft", // REVIEW
      subheading:
        "Gesundheitsversprechen ohne Belege sind bloßes Marketing. Wir lassen jede Charge unabhängig im Labor auf zentrale Qualitätsmarker prüfen, die Sie selbst nachprüfen können.", // REVIEW
      values: [
        { label: "Polyphenole", value: "847", unit: "mg/kg", standard: "Durchschn. ~180 mg/kg", description: "Natürliche Antioxidantien, die dem Olivenöl seine gesundheitlichen Vorteile verleihen." }, // REVIEW
        { label: "Oleocanthal", value: "471", unit: "mg/kg", standard: "Durchschn. <10 mg/kg", description: "Eine starke entzündungshemmende Verbindung, die nur in Olivenöl vorkommt." }, // REVIEW
        { label: "Oleacein", value: "336", unit: "mg/kg", standard: "Durchschn. <40 mg/kg", description: "Ein starkes Antioxidans, das mit dem Schutz des Herz-Kreislauf-Systems in Verbindung gebracht wird." }, // REVIEW
        { label: "Säuregrad", value: "0.19", unit: "%", standard: "Durchschn. ~0.8%", description: "Ein niedrigerer Säuregrad bedeutet frischere Oliven und höhere Qualität." }, // REVIEW
        { label: "Peroxide", value: "7.2", unit: "meq/kg", standard: "Durchschn. ~20 meq/kg", description: "Zeigt, wie frisch das Öl ist. Niedriger Peroxidwert = weniger Oxidation." }, // REVIEW
        { label: "K270", value: "0.15", unit: "", standard: "Durchschn. ~0.22", description: "Misst die Oxidation im Laufe der Zeit. Niedrigere Werte deuten auf ein frischeres, besser konserviertes Öl hin." }, // REVIEW
      ],
    },
    polyphenolValue: 847,
    polyphenolLabel: "Coratina",
    buttonColor: "#B3E58C",
    tileBackground: "#10221B",
    tileAccent: "#B3E58C",
    originRegion: {
      heading: "Vom Hain in die Flasche", // REVIEW
      body: "ATTIMO Coratina stammt direkt von einem kleinen Familienhain in Apulien, Italien. Die Region ist der größte Olivenöl-Produzent des Landes, bekannt für ihre jahrhundertealten Bäume und außergewöhnliche Qualität.\n\nDie Küstenebenen und das mediterrane Klima schaffen ideale Wachstumsbedingungen für die Sorte Coratina. Lange, sonnenverwöhnte Tage konzentrieren die Polyphenole der Frucht und bewahren den kräftigen, pfeffrigen Charakter, der dieses Öl außergewöhnlich macht.", // REVIEW
      markerLon: 16.8,
      markerLat: 41.1,
      markerLabel: "Puglia",
      markerStyle: "pill-only" as const,
    },
  },

  nocellara: {
    heroTitle: "NOCELLARA D'ITALIA",
    heroSubtitle: "Natives Olivenöl extra der Extraklasse", // REVIEW
    benefits: [
      "100 % Nocellara-Oliven, früh geerntet und innerhalb von Stunden kalt gepresst", // REVIEW
      "Im unabhängigen Labor auf Qualität und Reinheit geprüft", // REVIEW
      "Direkt von einem kleinen Familienhain in Italien", // REVIEW
    ],
    benefitTooltip:
      "Polyphenole sind natürliche Verbindungen im Olivenöl, die die gesundheitlichen Vorteile liefern, von denen Sie gehört haben: entzündungshemmende Eigenschaften, Unterstützung der Herzgesundheit und antioxidativer Schutz.", // REVIEW
    labReportUrl: "/lab/Nocellara2025.pdf",
    sourceLine: "Direkt von einem kleinen Familienhain in Italien", // REVIEW
    labelDisclosure:
      "Die abgebildete Flasche trägt unser kommendes ATTIMO-Markenetikett. Ihr Öl der Ernte 2024/25 kommt unter dem Etikett des ursprünglichen Erzeugers an und enthält dasselbe hochwertige Öl.", // REVIEW
    labTiles: [
      { key: "polyphenols", label: "BIOAKTIVE POLYPHENOLE", value: "400", unit: "mg/kg", avg: "Durchschn. ~180mg/kg", description: "Natürliche Antioxidantien, die dem Olivenöl seine gesundheitlichen Vorteile verleihen." }, // REVIEW
      { key: "oleocanthal", label: "OLEOCANTHAL", value: "137", unit: "mg/kg", avg: "Durchschn. <10mg/kg", description: "Eine starke entzündungshemmende Verbindung, die nur in Olivenöl vorkommt." }, // REVIEW
      { key: "oleacin", label: "OLEACEIN", value: "209", unit: "mg/kg", avg: "Durchschn. <40mg/kg", description: "ein starkes Antioxidans, das mit Herzgesundheit und Langlebigkeit in Verbindung gebracht wird" }, // REVIEW
      { key: "acidity", label: "SÄUREGRAD", value: "0.21%", unit: "", avg: "Durchschn. ~0.8%", description: "Ein niedrigerer Säuregrad bedeutet frischere Oliven und höhere Qualität." }, // REVIEW
    ],
    tabs: {
      details: {
        origin: "Sicily, Italy",
        olive: "Nocellara",
        flavor: "Mild & Fruchtig", // REVIEW
        store: "vor Licht und Hitze schützen", // REVIEW
        volume: "500ml",
      },
      flavorProfile: [
        { label: "FRUCHTIG", rating: 5 },
        { label: "NUSSIG", rating: 4 },
        { label: "BUTTRIG", rating: 4 },
        { label: "PFEFFRIG", rating: 2 },
      ],
      harvest:
        "Die Oliven werden früh im Oktober gepflückt, wenn sie jung, grün und reich an Polyphenolen sind, die Geschmack und gesundheitlichen Nutzen steigern. Innerhalb von Stunden nach der Ernte kalt extrahiert, um den unverwechselbar milden, fruchtigen Charakter des Öls zu bewahren.", // REVIEW
      uses: "Auf allem köstlich – träufeln Sie sie über frische Speisen für eine sanfte Geschmacksnote.", // REVIEW
      usesExtra:
        "Perfekt für Pasta, zum Verfeinern von Eiern, zum Vollenden von Meeresfrüchten, zum Anmachen von Blattgemüse – und probieren Sie sie auf Eis.", // REVIEW
    },
    originStory: {
      headline:
        "Die Nocellara di Belice ist eine großzügige sizilianische Olive, eine der angesehensten Sorten Italiens. Sie presst ein mildes Öl mit fruchtigen Noten und samtiger Textur, das man leicht mag und täglich verwendet.", // REVIEW
      quickRef: [
        { label: "SORTE", value: "100% Nocellara" },
        { label: "HERKUNFT", value: "Sicily, Italy" },
        { label: "GESCHMACK", value: "Mild & Fruchtig" }, // REVIEW
        { label: "VERWENDUNG", value: "über frische Speisen träufeln" }, // REVIEW
        { label: "LAGERUNG", value: "vor Licht und Hitze schützen" }, // REVIEW
      ],
      features: [
        {
          title: "Mild & Fruchtig", // REVIEW
          description: "Frische Mandel und grüne Banane mit samtiger Textur und rundem Abgang. Perfekt für den vielseitigen Einsatz.", // REVIEW
          icon: "/icons/bread-2.svg",
        },
        {
          title: "Frühe Ernte", // REVIEW
          description: "Früh im Oktober gepflückt, wenn die Oliven reich an Polyphenolen sind, die Geschmack und gesundheitlichen Nutzen steigern.", // REVIEW
          icon: "/icons/basket-2.svg",
        },
        {
          title: "100% Nocellara",
          description: "Eine großzügige sizilianische Olivensorte, bekannt für ihren milden Charakter und ihre runden, fruchtigen Noten.", // REVIEW
          icon: "/icons/branch-2.svg",
        },
        {
          title: "Kalt Gepresst", // REVIEW
          description: "Innerhalb von Stunden nach der Ernte bei niedriger Temperatur gepresst, um jeden Tropfen Geschmack und Nährstoffe zu bewahren.", // REVIEW
          icon: "/icons/olive.svg",
        },
        {
          title: "Auf Allem Köstlich", // REVIEW
          description: "Perfekt für Pasta, zum Verfeinern von Eiern, zum Vollenden von Meeresfrüchten, zum Anmachen von Blattgemüse, auf Eis probieren.", // REVIEW
          icon: "/icons/bread-2.svg",
        },
      ],
    },
    labTrust: {
      heading: "im Labor auf Qualität und Reinheit geprüft", // REVIEW
      subheading:
        "Gesundheitsversprechen ohne Belege sind bloßes Marketing. Wir lassen jede Charge unabhängig im Labor auf zentrale Qualitätsmarker prüfen, die Sie selbst nachprüfen können.", // REVIEW
      values: [
        { label: "Polyphenole", value: "400", unit: "mg/kg", standard: "Durchschn. ~180 mg/kg", description: "Natürliche Antioxidantien, die dem Olivenöl seine gesundheitlichen Vorteile verleihen." }, // REVIEW
        { label: "Oleocanthal", value: "137", unit: "mg/kg", standard: "Durchschn. <10 mg/kg", description: "Eine starke entzündungshemmende Verbindung, die nur in Olivenöl vorkommt." }, // REVIEW
        { label: "Oleacein", value: "209", unit: "mg/kg", standard: "Durchschn. <40 mg/kg", description: "Ein starkes Antioxidans, das mit Herzgesundheit und Langlebigkeit in Verbindung gebracht wird." }, // REVIEW
        { label: "Säuregrad", value: "0.21", unit: "%", standard: "Durchschn. ~0.8%", description: "Ein niedrigerer Säuregrad bedeutet frischere Oliven und höhere Qualität." }, // REVIEW
        { label: "Peroxide", value: "7.8", unit: "meq/kg", standard: "Durchschn. ~20 meq/kg", description: "Zeigt, wie frisch das Öl ist. Niedriger Peroxidwert = weniger Oxidation." }, // REVIEW
        { label: "K270", value: "0.11", unit: "", standard: "Durchschn. ~0.22", description: "Misst die Oxidation im Laufe der Zeit. Niedrigere Werte deuten auf ein frischeres, besser konserviertes Öl hin." }, // REVIEW
      ],
    },
    polyphenolValue: 400,
    polyphenolLabel: "Nocellara",
    buttonColor: "#ECA948",
  },

  "attimo-extra-virgin-olive-oil-picual-500ml": {
    heroTitle: "PICUAL DE ESPAÑA",
    heroSubtitle: "Natives Olivenöl extra – Spezialität", // REVIEW
    benefits: [
      "100 % Picual-Oliven, früh geerntet und innerhalb von Stunden kalt gepresst", // REVIEW
      "Im unabhängigen Labor auf Qualität und Reinheit geprüft", // REVIEW
      "Direkt von einem kleinen Familienhain in Andalusien, Spanien", // REVIEW
    ],
    benefitTooltip:
      "Polyphenole sind natürliche Verbindungen im Olivenöl, die die gesundheitlichen Vorteile liefern, von denen Sie gehört haben – entzündungshemmende Eigenschaften, Unterstützung der Herzgesundheit und antioxidativer Schutz.", // REVIEW
    labReportUrl: "/lab/Picual2025.pdf",
    sourceLine: "Direkt von einem kleinen Familienhain in Andalusien, Spanien", // REVIEW
    labelDisclosure:
      "Die abgebildete Flasche trägt unser kommendes ATTIMO-Markenetikett. Ihr Öl der Ernte 2024/25 kommt unter dem Etikett des ursprünglichen Erzeugers an und enthält dasselbe hochwertige Öl.", // REVIEW
    labTiles: [
      { key: "polyphenols", label: "POLYPHENOLE", value: "675", unit: "mg/kg", avg: "Durchschn. ~180mg/kg", description: "Natürliche Antioxidantien, die dem Olivenöl seine gesundheitlichen Vorteile verleihen." }, // REVIEW
      { key: "oleocanthal", label: "OLEOCANTHAL", value: "—", unit: "mg/kg", avg: "Durchschn. 10-30mg/kg", description: "Eine starke entzündungshemmende Verbindung, die nur in Olivenöl vorkommt." }, // REVIEW
      { key: "oleacin", label: "OLEACEIN", value: "—", unit: "mg/kg", avg: "Durchschn. <40mg/kg", description: "Ein starkes Antioxidans, das mit dem Schutz des Herz-Kreislauf-Systems in Verbindung gebracht wird." }, // REVIEW
      { key: "acidity", label: "SÄUREGRAD", value: "0.13", unit: "%", avg: "Durchschn. ~0.8%", description: "Ein niedrigerer Säuregrad bedeutet frischere Oliven und höhere Qualität." }, // REVIEW
    ],
    tabs: {
      details: {
        origin: "Jaén, Spain",
        olive: "Picual",
        flavor: "Grün & Grasig", // REVIEW
        store: "vor Licht und Hitze schützen", // REVIEW
        volume: "500ml",
      },
      flavorProfile: [
        { label: "PFEFFRIG", rating: 4 },
        { label: "FRUCHTIG", rating: 3 },
        { label: "BITTER", rating: 3 },
        { label: "KRÄUTRIG", rating: 5 },
      ],
      harvest:
        "Die Oliven werden früh im Oktober gepflückt, wenn sie jung, grün und reich an Polyphenolen sind, die Geschmack und gesundheitlichen Nutzen steigern. Innerhalb von Stunden nach der Ernte kalt extrahiert, um den lebendigen, unverwechselbaren Charakter des Öls zu bewahren.", // REVIEW
      uses: "Am besten als finaler Akzent verwenden; träufeln Sie sie über Speisen für einen lebendigen Geschmacksschub.", // REVIEW
      usesExtra:
        "Hervorragend zu gegrilltem Gemüse, Suppen, Hülsenfrüchten und geröstetem Brot.", // REVIEW
    },
    originStory: {
      headline:
        "Picual ist die ausdrucksstärkste und meistgepflanzte Olive Spaniens. Sie presst ein lebendiges Öl mit frischer grüner Note. Ein Allrounder in der Küche, mit genug Charakter, um interessant zu bleiben.", // REVIEW
      quickRef: [
        { label: "SORTE", value: "100% Picual" },
        { label: "HERKUNFT", value: "Jaén, Spain" },
        { label: "GESCHMACK", value: "Grün & Grasig" }, // REVIEW
        { label: "VERWENDUNG", value: "über frische Speisen träufeln" }, // REVIEW
        { label: "LAGERUNG", value: "vor Licht und Hitze schützen" }, // REVIEW
      ],
      features: [
        {
          title: "Grün & Grasig", // REVIEW
          description: "Aromen von frischem Tomatenblatt und geschnittenem Gras mit einem klaren, bestimmten Abgang.", // REVIEW
          icon: "/icons/mortar.svg",
        },
        {
          title: "Frühe Ernte", // REVIEW
          description: "Früh gepflückt, wenn die Oliven grün und reich an Polyphenolen sind.", // REVIEW
          icon: "/icons/basket-2.svg",
        },
        {
          title: "100% Picual",
          description: "Spaniens Vorzeigesorte, bekannt für ihre Stabilität, ihren kräftigen Charakter und ihren hohen Polyphenolgehalt.", // REVIEW
          icon: "/icons/branch-2.svg",
        },
        {
          title: "Kalt Gepresst", // REVIEW
          description: "Innerhalb von Stunden nach der Ernte bei niedriger Temperatur gepresst, um jeden Tropfen Geschmack und Nährstoffe zu bewahren.", // REVIEW
          icon: "/icons/olive.svg",
        },
        {
          title: "Auf Allem Gut", // REVIEW
          description: "Gemüse und Salate anmachen, alles Gegrillte krönen, Salate beleben, Frischkäse & Joghurt vollenden, mit Schokolade probieren", // REVIEW
          icon: "/icons/bread-2.svg",
        },
      ],
    },
    labTrust: {
      heading: "im Labor auf Qualität und Reinheit geprüft", // REVIEW
      subheading:
        "Gesundheitsversprechen ohne Belege sind bloßes Marketing. Wir lassen jede Charge unabhängig im Labor auf zentrale Qualitätsmarker prüfen, die Sie selbst nachprüfen können.", // REVIEW
      values: [
        { label: "Polyphenole", value: "675", unit: "mg/kg", standard: "Durchschn. ~180 mg/kg", description: "Natürliche Antioxidantien, die dem Olivenöl seine gesundheitlichen Vorteile verleihen." }, // REVIEW
        { label: "Oleocanthal", value: "—", unit: "mg/kg", standard: "Durchschn. <10 mg/kg", description: "Eine starke entzündungshemmende Verbindung, die nur in Olivenöl vorkommt." }, // REVIEW
        { label: "Oleacein", value: "—", unit: "mg/kg", standard: "Durchschn. <40 mg/kg", description: "Ein starkes Antioxidans, das mit dem Schutz des Herz-Kreislauf-Systems in Verbindung gebracht wird." }, // REVIEW
        { label: "Säuregrad", value: "0.13", unit: "%", standard: "Durchschn. ~0.8%", description: "Ein niedrigerer Säuregrad bedeutet frischere Oliven und höhere Qualität." }, // REVIEW
        { label: "Peroxide", value: "5.7", unit: "meq/kg", standard: "Durchschn. ~20 meq/kg", description: "Zeigt, wie frisch das Öl ist. Niedriger Peroxidwert = weniger Oxidation." }, // REVIEW
        { label: "K270", value: "—", unit: "", standard: "Durchschn. ~0.22", description: "Misst die Oxidation im Laufe der Zeit. Niedrigere Werte deuten auf ein frischeres, besser konserviertes Öl hin." }, // REVIEW
      ],
    },
    polyphenolValue: 675,
    polyphenolLabel: "Picual",
    buttonColor: "#B3E58C",
    tileBackground: "#B3E58C",
    tileAccent: "#1B4229",
    originRegion: {
      heading: "Vom Hain in die Flasche", // REVIEW
      body: "ATTIMO Picual stammt direkt von einem kleinen Familienhain in Jaén, dem Herzen Andalusiens und der Welthauptstadt des Olivenöls. Allein diese Provinz produziert mehr Olivenöl als jedes ganze Land außerhalb Spaniens.\n\nDie raue Sierra-Landschaft mit ihren heißen Tagen und kühlen Nächten treibt die Picual-Olive dazu, ihre natürlichen Abwehrkräfte zu konzentrieren – das Ergebnis ist ein Öl, das außergewöhnlich reich an Polyphenolen und auf Stabilität ausgelegt ist. Früh geerntet und innerhalb von Stunden gepresst, entsteht ein leuchtend grünes Öl mit strukturiertem Charakter.", // REVIEW
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
