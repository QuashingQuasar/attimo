// Swedish product-copy overlay for the /se/ market. AI-drafted (pending native
// review). Mirrors the structure of productContentMap in productContent.ts
// EXACTLY (same keys, same numeric values, units, lab figures, icon paths,
// colours, coordinates). Only the human-readable strings are translated. Proper
// names (Coratina, Picual, Nocellara), origin tags ("Puglia, Italien" etc.) and
// all numbers are kept verbatim. All persuasion copy here is // REVIEW.
import type { ProductContent } from "./productContent";

export const productContentSvMap: Record<string, ProductContent> = {
  "attimo-extra-virgin-olive-oil-coratina-500ml": {
    heroTitle: "CORATINA D'ITALIA",
    heroSubtitle: "Ekologisk extra jungfruolivolja – specialitet", // REVIEW
    benefits: [
      "100 % Coratina-oliver, tidigt skördade och kallpressade inom några timmar", // REVIEW
      "Testad av oberoende laboratorium för kvalitet och renhet", // REVIEW
      "Direkt från en liten familjelund i Puglia, Italien", // REVIEW
    ],
    benefitTooltip:
      "Polyfenoler är naturliga föreningar i olivolja som ger de hälsofördelar du har hört talas om – antiinflammatoriska egenskaper, stöd för hjärthälsan och antioxidativt skydd.", // REVIEW
    labReportUrl: "/lab/Coratina2025.pdf",
    sourceLine: "Direkt från en liten familjelund i Puglia, Italien", // REVIEW
    labelDisclosure:
      "Flaskan på bilden bär vår kommande ATTIMO-varumärkesetikett. Din olja från skörden 2024/25 levereras under den ursprungliga producentens etikett och innehåller samma högkvalitativa olja.", // REVIEW
    labTiles: [
      { key: "polyphenols", label: "BIOAKTIVA POLYFENOLER", value: "847", unit: "mg/kg", avg: "genomsn. ~180mg/kg", description: "Naturliga antioxidanter som ger olivoljan dess hälsofördelar." }, // REVIEW
      { key: "oleocanthal", label: "OLEOCANTHAL", value: "471", unit: "mg/kg", avg: "genomsn. 10-30mg/kg", description: "En kraftfull antiinflammatorisk förening som är unik för olivolja." }, // REVIEW
      { key: "oleacin", label: "OLEACEIN", value: "336", unit: "mg/kg", avg: "genomsn. 10-30mg/kg", description: "En kraftfull antioxidant kopplad till skydd av hjärt-kärlsystemet." }, // REVIEW
      { key: "acidity", label: "SYRA", value: "0.19", unit: "%", avg: "genomsn. ~0.8%", description: "Lägre syra betyder färskare oliver och högre kvalitet." }, // REVIEW
    ],
    tabs: {
      details: {
        origin: "Puglia, Italien",
        olive: "Coratina",
        flavor: "Kraftig & Intensiv", // REVIEW
        store: "skydda mot ljus och värme", // REVIEW
        volume: "500ml",
      },
      flavorProfile: [
        { label: "PEPPRIG", rating: 5 },
        { label: "FRUKTIG", rating: 4 },
        { label: "BITTER", rating: 5 },
        { label: "ÖRTIG", rating: 3 },
      ],
      harvest:
        "Oliverna plockas tidigt i oktober när de är unga, gröna och fulla av polyfenoler som förstärker smak och hälsofördelar. Kallextraherade inom några timmar efter skörd för att bevara oljans särpräglade karaktär.", // REVIEW
      uses: "Används bäst som en avslutande touch; ringla över maten för att tillföra en livfull smakexplosion.", // REVIEW
      usesExtra:
        "Perfekt till biff, grillade grönsaker, matiga soppor och bruschetta.", // REVIEW
    },
    originStory: {
      headline:
        "Coratina är en kompromisslös oliv, polyfenolernas drottning. Den pressar en intensiv, bitter olja med verkligt grepp – sorten som entusiaster tar skedvis som en daglig longevity-dos.", // REVIEW
      quickRef: [
        { label: "SORT", value: "100% Coratina" },
        { label: "URSPRUNG", value: "Puglia, Italien" },
        { label: "SMAK", value: "Kraftig & Intensiv" }, // REVIEW
        { label: "ANVÄNDNING", value: "ringla över färsk mat" }, // REVIEW
        { label: "FÖRVARING", value: "skydda mot ljus och värme" }, // REVIEW
      ],
      features: [
        {
          title: "Kraftig & Intensiv", // REVIEW
          description: "Färska örter, kronärtskocka och svartpeppar. Extremt hög halt av polyfenoler: intensiv kick och torr eftersmak.", // REVIEW
          icon: "/icons/mortar.svg",
        },
        {
          title: "Tidig skörd", // REVIEW
          description: "Skördad tidigt när oliverna har som högst halt av polyfenoler som förstärker smak och hälsofördelar.", // REVIEW
          icon: "/icons/basket-2.svg",
        },
        {
          title: "100% Coratina",
          description: "En italiensk sort känd för sin exceptionellt höga polyfenolhalt och kraftfulla karaktär.", // REVIEW
          icon: "/icons/branch-2.svg",
        },
        {
          title: "Kallpressad", // REVIEW
          description: "Pressad inom några timmar efter skörd vid låga temperaturer för att bevara varje droppe smak och näring.", // REVIEW
          icon: "/icons/olive.svg",
        },
        {
          title: "Gott På Allt", // REVIEW
          description: "Ringla över grönsaker, fullborda kött och fisk, piffa upp soppor, doppa med bröd, prova på glass.", // REVIEW
          icon: "/icons/bread-2.svg",
        },
      ],
    },
    labTrust: {
      heading: "labbtestad för kvalitet och renhet", // REVIEW
      subheading:
        "Hälsopåståenden utan bevis är bara marknadsföring. Vi låter varje sats testas oberoende i labb på centrala kvalitetsmarkörer som du själv kan verifiera.", // REVIEW
      values: [
        { label: "Polyfenoler", value: "847", unit: "mg/kg", standard: "genomsn. ~180 mg/kg", description: "Naturliga antioxidanter som ger olivoljan dess hälsofördelar." }, // REVIEW
        { label: "Oleocanthal", value: "471", unit: "mg/kg", standard: "genomsn. <10 mg/kg", description: "En kraftfull antiinflammatorisk förening som är unik för olivolja." }, // REVIEW
        { label: "Oleacein", value: "336", unit: "mg/kg", standard: "genomsn. <40 mg/kg", description: "En kraftfull antioxidant kopplad till skydd av hjärt-kärlsystemet." }, // REVIEW
        { label: "Syra", value: "0.19", unit: "%", standard: "genomsn. ~0.8%", description: "Lägre syra betyder färskare oliver och högre kvalitet." }, // REVIEW
        { label: "Peroxider", value: "7.2", unit: "meq/kg", standard: "genomsn. ~20 meq/kg", description: "Visar hur färsk oljan är. Låg peroxidhalt = mindre oxidation." }, // REVIEW
        { label: "K270", value: "0.15", unit: "", standard: "genomsn. ~0.22", description: "Mäter oxidation över tid. Lägre värden tyder på en färskare, bättre bevarad olja." }, // REVIEW
      ],
    },
    polyphenolValue: 847,
    polyphenolLabel: "Coratina",
    buttonColor: "#B3E58C",
    tileBackground: "#10221B",
    tileAccent: "#B3E58C",
    originRegion: {
      heading: "Från lund till flaska", // REVIEW
      body: "ATTIMO Coratina kommer direkt från en liten familjelund i Puglia, Italien. Regionen är landets största producent av olivolja, känd för sina hundraåriga träd och exceptionella kvalitet.\n\nKustslätterna och medelhavsklimatet skapar idealiska odlingsförhållanden för sorten Coratina. Långa, solindränkta dagar koncentrerar fruktens polyfenoler och bevarar den kraftfulla, peppriga karaktär som gör denna olja exceptionell.", // REVIEW
      markerLon: 16.8,
      markerLat: 41.1,
      markerLabel: "Puglia",
      markerStyle: "pill-only" as const,
    },
  },

  nocellara: {
    heroTitle: "NOCELLARA D'ITALIA",
    heroSubtitle: "Extra jungfruolivolja – specialitet", // REVIEW
    benefits: [
      "100 % Nocellara-oliver, tidigt skördade och kallpressade inom några timmar", // REVIEW
      "Testad av oberoende laboratorium för kvalitet och renhet", // REVIEW
      "Direkt från en liten familjelund i Italien", // REVIEW
    ],
    benefitTooltip:
      "Polyfenoler är naturliga föreningar i olivolja som ger de hälsofördelar du har hört talas om: antiinflammatoriska egenskaper, stöd för hjärthälsan och antioxidativt skydd.", // REVIEW
    labReportUrl: "/lab/Nocellara2025.pdf",
    sourceLine: "Direkt från en liten familjelund i Italien", // REVIEW
    labelDisclosure:
      "Flaskan på bilden bär vår kommande ATTIMO-varumärkesetikett. Din olja från skörden 2024/25 levereras under den ursprungliga producentens etikett och innehåller samma högkvalitativa olja.", // REVIEW
    labTiles: [
      { key: "polyphenols", label: "BIOAKTIVA POLYFENOLER", value: "400", unit: "mg/kg", avg: "genomsn. ~180mg/kg", description: "Naturliga antioxidanter som ger olivoljan dess hälsofördelar." }, // REVIEW
      { key: "oleocanthal", label: "OLEOCANTHAL", value: "137", unit: "mg/kg", avg: "genomsn. <10mg/kg", description: "En kraftfull antiinflammatorisk förening som är unik för olivolja." }, // REVIEW
      { key: "oleacin", label: "OLEACEIN", value: "209", unit: "mg/kg", avg: "genomsn. <40mg/kg", description: "en kraftfull antioxidant kopplad till hjärthälsa och lång livslängd" }, // REVIEW
      { key: "acidity", label: "SYRA", value: "0.21%", unit: "", avg: "genomsn. ~0.8%", description: "Lägre syra betyder färskare oliver och högre kvalitet." }, // REVIEW
    ],
    tabs: {
      details: {
        origin: "Sicilien, Italien",
        olive: "Nocellara",
        flavor: "Mjuk & Fruktig", // REVIEW
        store: "skydda mot ljus och värme", // REVIEW
        volume: "500ml",
      },
      flavorProfile: [
        { label: "FRUKTIG", rating: 5 },
        { label: "NÖTIG", rating: 4 },
        { label: "SMÖRIG", rating: 4 },
        { label: "PEPPRIG", rating: 2 },
      ],
      harvest:
        "Oliverna plockas tidigt i oktober när de är unga, gröna och fulla av polyfenoler som förstärker smak och hälsofördelar. Kallextraherade inom några timmar efter skörd för att bevara oljans särpräglade mjuka, fruktiga karaktär.", // REVIEW
      uses: "Gott på allt – ringla över färsk mat för att tillföra en mjuk smaknyans.", // REVIEW
      usesExtra:
        "Perfekt till pasta, för att förädla ägg, fullborda skaldjur, dressa bladgrönsaker – och prova på glass.", // REVIEW
    },
    originStory: {
      headline:
        "Nocellara di Belice är en generös siciliansk oliv, en av Italiens mest uppskattade sorter. Den pressar en mjuk olja med fruktiga toner och en sammetslen textur, lätt att tycka om och använda varje dag.", // REVIEW
      quickRef: [
        { label: "SORT", value: "100% Nocellara" },
        { label: "URSPRUNG", value: "Sicilien, Italien" },
        { label: "SMAK", value: "Mjuk & Fruktig" }, // REVIEW
        { label: "ANVÄNDNING", value: "ringla över färsk mat" }, // REVIEW
        { label: "FÖRVARING", value: "skydda mot ljus och värme" }, // REVIEW
      ],
      features: [
        {
          title: "Mjuk & Fruktig", // REVIEW
          description: "Färsk mandel och grön banan med sammetslen textur och rund eftersmak. Perfekt för allsidig användning.", // REVIEW
          icon: "/icons/bread-2.svg",
        },
        {
          title: "Tidig skörd", // REVIEW
          description: "Plockad tidigt i oktober när oliverna är fulla av polyfenoler som förstärker smak och hälsofördelar.", // REVIEW
          icon: "/icons/basket-2.svg",
        },
        {
          title: "100% Nocellara",
          description: "En generös siciliansk olivsort känd för sin mjuka karaktär och runda, fruktiga toner.", // REVIEW
          icon: "/icons/branch-2.svg",
        },
        {
          title: "Kallpressad", // REVIEW
          description: "Pressad inom några timmar efter skörd vid låga temperaturer för att bevara varje droppe smak och näring.", // REVIEW
          icon: "/icons/olive.svg",
        },
        {
          title: "Gott På Allt", // REVIEW
          description: "Perfekt till pasta, för att förädla ägg, fullborda skaldjur, dressa bladgrönsaker, prova på glass.", // REVIEW
          icon: "/icons/bread-2.svg",
        },
      ],
    },
    labTrust: {
      heading: "labbtestad för kvalitet och renhet", // REVIEW
      subheading:
        "Hälsopåståenden utan bevis är bara marknadsföring. Vi låter varje sats testas oberoende i labb på centrala kvalitetsmarkörer som du själv kan verifiera.", // REVIEW
      values: [
        { label: "Polyfenoler", value: "400", unit: "mg/kg", standard: "genomsn. ~180 mg/kg", description: "Naturliga antioxidanter som ger olivoljan dess hälsofördelar." }, // REVIEW
        { label: "Oleocanthal", value: "137", unit: "mg/kg", standard: "genomsn. <10 mg/kg", description: "En kraftfull antiinflammatorisk förening som är unik för olivolja." }, // REVIEW
        { label: "Oleacein", value: "209", unit: "mg/kg", standard: "genomsn. <40 mg/kg", description: "En kraftfull antioxidant kopplad till hjärthälsa och lång livslängd." }, // REVIEW
        { label: "Syra", value: "0.21", unit: "%", standard: "genomsn. ~0.8%", description: "Lägre syra betyder färskare oliver och högre kvalitet." }, // REVIEW
        { label: "Peroxider", value: "7.8", unit: "meq/kg", standard: "genomsn. ~20 meq/kg", description: "Visar hur färsk oljan är. Låg peroxidhalt = mindre oxidation." }, // REVIEW
        { label: "K270", value: "0.11", unit: "", standard: "genomsn. ~0.22", description: "Mäter oxidation över tid. Lägre värden tyder på en färskare, bättre bevarad olja." }, // REVIEW
      ],
    },
    polyphenolValue: 400,
    polyphenolLabel: "Nocellara",
    buttonColor: "#ECA948",
  },

  "attimo-extra-virgin-olive-oil-picual-500ml": {
    heroTitle: "PICUAL DE ESPAÑA",
    heroSubtitle: "Extra jungfruolivolja – specialitet", // REVIEW
    benefits: [
      "100 % Picual-oliver, tidigt skördade och kallpressade inom några timmar", // REVIEW
      "Testad av oberoende laboratorium för kvalitet och renhet", // REVIEW
      "Direkt från en liten familjelund i Andalusien, Spanien", // REVIEW
    ],
    benefitTooltip:
      "Polyfenoler är naturliga föreningar i olivolja som ger de hälsofördelar du har hört talas om – antiinflammatoriska egenskaper, stöd för hjärthälsan och antioxidativt skydd.", // REVIEW
    labReportUrl: "/lab/Picual2025.pdf",
    sourceLine: "Direkt från en liten familjelund i Andalusien, Spanien", // REVIEW
    labelDisclosure:
      "Flaskan på bilden bär vår kommande ATTIMO-varumärkesetikett. Din olja från skörden 2024/25 levereras under den ursprungliga producentens etikett och innehåller samma högkvalitativa olja.", // REVIEW
    labTiles: [
      { key: "polyphenols", label: "POLYFENOLER", value: "675", unit: "mg/kg", avg: "genomsn. ~180mg/kg", description: "Naturliga antioxidanter som ger olivoljan dess hälsofördelar." }, // REVIEW
      { key: "oleocanthal", label: "OLEOCANTHAL", value: "—", unit: "mg/kg", avg: "genomsn. 10-30mg/kg", description: "En kraftfull antiinflammatorisk förening som är unik för olivolja." }, // REVIEW
      { key: "oleacin", label: "OLEACEIN", value: "—", unit: "mg/kg", avg: "genomsn. <40mg/kg", description: "En kraftfull antioxidant kopplad till skydd av hjärt-kärlsystemet." }, // REVIEW
      { key: "acidity", label: "SYRA", value: "0.13", unit: "%", avg: "genomsn. ~0.8%", description: "Lägre syra betyder färskare oliver och högre kvalitet." }, // REVIEW
    ],
    tabs: {
      details: {
        origin: "Jaén, Spanien",
        olive: "Picual",
        flavor: "Grön & Gräsig", // REVIEW
        store: "skydda mot ljus och värme", // REVIEW
        volume: "500ml",
      },
      flavorProfile: [
        { label: "PEPPRIG", rating: 4 },
        { label: "FRUKTIG", rating: 3 },
        { label: "BITTER", rating: 3 },
        { label: "ÖRTIG", rating: 5 },
      ],
      harvest:
        "Oliverna plockas tidigt i oktober när de är unga, gröna och fulla av polyfenoler som förstärker smak och hälsofördelar. Kallextraherade inom några timmar efter skörd för att bevara oljans livfulla, särpräglade karaktär.", // REVIEW
      uses: "Används bäst som en avslutande touch; ringla över maten för att tillföra en livfull smakexplosion.", // REVIEW
      usesExtra:
        "Utmärkt till grillade grönsaker, soppor, baljväxter och rostat bröd.", // REVIEW
    },
    originStory: {
      headline:
        "Picual är Spaniens mest uttrycksfulla och mest odlade oliv. Den pressar en livfull olja med en frisk grön ton. En allroundare i köket, med tillräckligt med karaktär för att förbli intressant.", // REVIEW
      quickRef: [
        { label: "SORT", value: "100% Picual" },
        { label: "URSPRUNG", value: "Jaén, Spanien" },
        { label: "SMAK", value: "Grön & Gräsig" }, // REVIEW
        { label: "ANVÄNDNING", value: "ringla över färsk mat" }, // REVIEW
        { label: "FÖRVARING", value: "skydda mot ljus och värme" }, // REVIEW
      ],
      features: [
        {
          title: "Grön & Gräsig", // REVIEW
          description: "Aromer av färskt tomatblad och nyklippt gräs med en ren, bestämd eftersmak.", // REVIEW
          icon: "/icons/mortar.svg",
        },
        {
          title: "Tidig skörd", // REVIEW
          description: "Plockad tidigt när oliverna är gröna och fulla av polyfenoler.", // REVIEW
          icon: "/icons/basket-2.svg",
        },
        {
          title: "100% Picual",
          description: "Spaniens flaggskeppssort, känd för sin stabilitet, kraftfulla karaktär och höga polyfenolhalt.", // REVIEW
          icon: "/icons/branch-2.svg",
        },
        {
          title: "Kallpressad", // REVIEW
          description: "Pressad inom några timmar efter skörd vid låga temperaturer för att bevara varje droppe smak och näring.", // REVIEW
          icon: "/icons/olive.svg",
        },
        {
          title: "Gott På Allt", // REVIEW
          description: "Dressa grönsaker och sallader, toppa allt grillat, liva upp sallader, fullborda färskost och yoghurt, prova med choklad", // REVIEW
          icon: "/icons/bread-2.svg",
        },
      ],
    },
    labTrust: {
      heading: "labbtestad för kvalitet och renhet", // REVIEW
      subheading:
        "Hälsopåståenden utan bevis är bara marknadsföring. Vi låter varje sats testas oberoende i labb på centrala kvalitetsmarkörer som du själv kan verifiera.", // REVIEW
      values: [
        { label: "Polyfenoler", value: "675", unit: "mg/kg", standard: "genomsn. ~180 mg/kg", description: "Naturliga antioxidanter som ger olivoljan dess hälsofördelar." }, // REVIEW
        { label: "Oleocanthal", value: "—", unit: "mg/kg", standard: "genomsn. <10 mg/kg", description: "En kraftfull antiinflammatorisk förening som är unik för olivolja." }, // REVIEW
        { label: "Oleacein", value: "—", unit: "mg/kg", standard: "genomsn. <40 mg/kg", description: "En kraftfull antioxidant kopplad till skydd av hjärt-kärlsystemet." }, // REVIEW
        { label: "Syra", value: "0.13", unit: "%", standard: "genomsn. ~0.8%", description: "Lägre syra betyder färskare oliver och högre kvalitet." }, // REVIEW
        { label: "Peroxider", value: "5.7", unit: "meq/kg", standard: "genomsn. ~20 meq/kg", description: "Visar hur färsk oljan är. Låg peroxidhalt = mindre oxidation." }, // REVIEW
        { label: "K270", value: "—", unit: "", standard: "genomsn. ~0.22", description: "Mäter oxidation över tid. Lägre värden tyder på en färskare, bättre bevarad olja." }, // REVIEW
      ],
    },
    polyphenolValue: 675,
    polyphenolLabel: "Picual",
    buttonColor: "#B3E58C",
    tileBackground: "#B3E58C",
    tileAccent: "#1B4229",
    originRegion: {
      heading: "Från lund till flaska", // REVIEW
      body: "ATTIMO Picual kommer direkt från en liten familjelund i Jaén, hjärtat av Andalusien och världens olivoljehuvudstad. Enbart denna provins producerar mer olivolja än något helt land utanför Spanien.\n\nDet karga Sierra-landskapet, med sina heta dagar och svala nätter, driver Picual-oliven att koncentrera sina naturliga försvar – resultatet är en olja som är exceptionellt rik på polyfenoler och byggd för stabilitet. Tidigt skördad och pressad inom några timmar blir resultatet en lysande grön olja med strukturerad karaktär.", // REVIEW
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
