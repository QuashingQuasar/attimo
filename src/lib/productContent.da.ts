// Danish product-copy overlay for the /dk/ market. AI-drafted (pending native
// review). Mirrors the structure of productContentMap in productContent.ts
// EXACTLY (same keys, same numeric values, units, lab figures, icon paths,
// colours, coordinates). Only the human-readable strings are translated into
// Danish. Proper names (Coratina, Picual, Nocellara), origin tags ("Puglia,
// Italy" etc.) and all numbers are kept verbatim.
import type { ProductContent } from "./productContent";

export const productContentDaMap: Record<string, ProductContent> = {
  "attimo-extra-virgin-olive-oil-coratina-500ml": {
    heroTitle: "CORATINA D'ITALIA",
    heroSubtitle: "Økologisk ekstra jomfruolivenolie – specialitet",
    benefits: [
      "100 % Coratina-oliven, tidligt høstet og koldpresset inden for få timer",
      "Testet af uafhængigt laboratorium for kvalitet og renhed",
      "Direkte fra en lille familielund i Puglia, Italien",
    ],
    benefitTooltip:
      "Polyfenoler er naturlige forbindelser i olivenolie, som giver de fordele, du har hørt om – antiinflammatoriske egenskaber, støtte til hjertesundheden og antioxidant beskyttelse.",
    labReportUrl: "/lab/Coratina2025.pdf",
    sourceLine: "Direkte fra en lille familielund i Puglia, Italien",
    labelDisclosure:
      "Flasken på billedet bærer vores kommende ATTIMO-mærkeetiket. Din olie fra høsten 2024/25 ankommer under den oprindelige producents etiket og indeholder den samme olie af høj kvalitet.",
    labTiles: [
      { key: "polyphenols", label: "BIOAKTIVE POLYFENOLER", value: "847", unit: "mg/kg", avg: "gns. ~180mg/kg", description: "Naturlige antioxidanter, der giver olivenolien dens sundhedsmæssige fordele." },
      { key: "oleocanthal", label: "OLEOCANTHAL", value: "471", unit: "mg/kg", avg: "gns. 10-30mg/kg", description: "En stærk antiinflammatorisk forbindelse, der kun findes i olivenolie." },
      { key: "oleacin", label: "OLEACEIN", value: "336", unit: "mg/kg", avg: "gns. 10-30mg/kg", description: "En kraftfuld antioxidant, der forbindes med beskyttelse af hjerte-kar-systemet." },
      { key: "acidity", label: "SYRE", value: "0.19", unit: "%", avg: "gns. ~0.8%", description: "Lavere syre betyder friskere oliven og højere kvalitet." },
    ],
    tabs: {
      details: {
        origin: "Puglia, Italien",
        olive: "Coratina",
        flavor: "Kraftig & Intens",
        store: "beskyt mod lys og varme",
        volume: "500ml",
      },
      flavorProfile: [
        { label: "PEBERAGTIG", rating: 5 },
        { label: "FRUGTIG", rating: 4 },
        { label: "BITTER", rating: 5 },
        { label: "URTEAGTIG", rating: 3 },
      ],
      harvest:
        "Olivenerne plukkes tidligt i oktober, når de er unge, grønne og fyldt med polyfenoler, der forstærker smag og sundhedsmæssige fordele. Koldekstraheret inden for få timer efter høst for at bevare oliens karakteristiske karakter.",
      uses: "Bruges bedst som et sidste pift; dryp den over maden for et livligt strejf af smag.",
      usesExtra:
        "Perfekt til bøf, grillede grøntsager, kraftige supper og bruschetta.",
    },
    originStory: {
      headline:
        "Coratina er en kompromisløs oliven, polyfenolernes dronning. Den presser en intens, bitter olie med rigtigt greb – den slags kendere tager skefuldvis som en daglig longevity-dosis.",
      quickRef: [
        { label: "SORT", value: "100% Coratina" },
        { label: "OPRINDELSE", value: "Puglia, Italien" },
        { label: "SMAG", value: "Kraftig & Intens" },
        { label: "ANVENDELSE", value: "dryppes over friske retter" },
        { label: "OPBEVARING", value: "beskyt mod lys og varme" },
      ],
      features: [
        {
          title: "Kraftig & Intens",
          description: "Friske urter, artiskok og sort peber. Meget rig på polyfenoler: intenst kick og tør afslutning.",
          icon: "/icons/mortar.svg",
        },
        {
          title: "Tidlig høst",
          description: "Tidligt høstet, når olivenerne er rigest på polyfenoler, der forstærker smag og sundhedsmæssige fordele.",
          icon: "/icons/basket-2.svg",
        },
        {
          title: "100% Coratina",
          description: "En italiensk sort kendt for sit usædvanligt høje indhold af polyfenoler og sin kraftfulde karakter.",
          icon: "/icons/branch-2.svg",
        },
        {
          title: "Koldpresset",
          description: "Presset inden for få timer efter høst ved lav temperatur for at bevare hver dråbe smag og næring.",
          icon: "/icons/olive.svg",
        },
        {
          title: "God På Alt",
          description: "Dryp over grøntsager, fuldend kød og fisk, giv supper et løft, dyp med brød, prøv på is.",
          icon: "/icons/bread-2.svg",
        },
      ],
    },
    labTrust: {
      heading: "laboratorietestet for kvalitet og renhed",
      subheading:
        "Sundhedspåstande uden dokumentation er bare markedsføring. Vi får hver batch uafhængigt laboratorietestet på centrale kvalitetsmarkører, som du selv kan efterprøve.",
      values: [
        { label: "Polyfenoler", value: "847", unit: "mg/kg", standard: "gns. ~180 mg/kg", description: "Naturlige antioxidanter, der giver olivenolien dens sundhedsmæssige fordele." },
        { label: "Oleocanthal", value: "471", unit: "mg/kg", standard: "gns. <10 mg/kg", description: "En stærk antiinflammatorisk forbindelse, der kun findes i olivenolie." },
        { label: "Oleacein", value: "336", unit: "mg/kg", standard: "gns. <40 mg/kg", description: "En kraftfuld antioxidant, der forbindes med beskyttelse af hjerte-kar-systemet." },
        { label: "Syre", value: "0.19", unit: "%", standard: "gns. ~0.8%", description: "Lavere syre betyder friskere oliven og højere kvalitet." },
        { label: "Peroxider", value: "7.2", unit: "meq/kg", standard: "gns. ~20 meq/kg", description: "Viser, hvor frisk olien er. Lavt peroxidtal = mindre oxidation." },
        { label: "K270", value: "0.15", unit: "", standard: "gns. ~0.22", description: "Måler oxidation over tid. Lavere værdier tyder på en friskere, bedre konserveret olie." },
      ],
    },
    polyphenolValue: 847,
    polyphenolLabel: "Coratina",
    buttonColor: "#B3E58C",
    tileBackground: "#10221B",
    tileAccent: "#B3E58C",
    originRegion: {
      heading: "Fra lund til flaske",
      body: "ATTIMO Coratina kommer direkte fra en lille familielund i Puglia, Italien. Regionen er landets største producent af olivenolie, kendt for sine århundredgamle træer og enestående kvalitet.\n\nKystsletterne og det middelhavsklima skaber ideelle vækstbetingelser for Coratina-sorten. Lange, solfyldte dage koncentrerer frugtens polyfenoler og bevarer den kraftige, peberagtige karakter, der gør denne olie enestående.",
      markerLon: 16.8,
      markerLat: 41.1,
      markerLabel: "Puglia",
      markerStyle: "pill-only" as const,
    },
  },

  nocellara: {
    heroTitle: "NOCELLARA D'ITALIA",
    heroSubtitle: "Ekstra jomfruolivenolie i topklasse",
    benefits: [
      "100 % Nocellara-oliven, tidligt høstet og koldpresset inden for få timer",
      "Testet af uafhængigt laboratorium for kvalitet og renhed",
      "Direkte fra en lille familielund i Italien",
    ],
    benefitTooltip:
      "Polyfenoler er naturlige forbindelser i olivenolie, som giver de sundhedsmæssige fordele, du har hørt om: antiinflammatoriske egenskaber, støtte til hjertesundheden og antioxidant beskyttelse.",
    labReportUrl: "/lab/Nocellara2025.pdf",
    sourceLine: "Direkte fra en lille familielund i Italien",
    labelDisclosure:
      "Flasken på billedet bærer vores kommende ATTIMO-mærkeetiket. Din olie fra høsten 2024/25 ankommer under den oprindelige producents etiket og indeholder den samme olie af høj kvalitet.",
    labTiles: [
      { key: "polyphenols", label: "BIOAKTIVE POLYFENOLER", value: "400", unit: "mg/kg", avg: "gns. ~180mg/kg", description: "Naturlige antioxidanter, der giver olivenolien dens sundhedsmæssige fordele." },
      { key: "oleocanthal", label: "OLEOCANTHAL", value: "137", unit: "mg/kg", avg: "gns. <10mg/kg", description: "En stærk antiinflammatorisk forbindelse, der kun findes i olivenolie." },
      { key: "oleacin", label: "OLEACEIN", value: "209", unit: "mg/kg", avg: "gns. <40mg/kg", description: "en stærk antioxidant, der forbindes med hjertesundhed og længere levetid" },
      { key: "acidity", label: "SYRE", value: "0.21%", unit: "", avg: "gns. ~0.8%", description: "Lavere syre betyder friskere oliven og højere kvalitet." },
    ],
    tabs: {
      details: {
        origin: "Sicilien, Italien",
        olive: "Nocellara",
        flavor: "Mild & Frugtig",
        store: "beskyt mod lys og varme",
        volume: "500ml",
      },
      flavorProfile: [
        { label: "FRUGTIG", rating: 5 },
        { label: "NØDDEAGTIG", rating: 4 },
        { label: "SMØRAGTIG", rating: 4 },
        { label: "PEBERAGTIG", rating: 2 },
      ],
      harvest:
        "Olivenerne plukkes tidligt i oktober, når de er unge, grønne og fyldt med polyfenoler, der forstærker smag og sundhedsmæssige fordele. Koldekstraheret inden for få timer efter høst for at bevare oliens karakteristiske milde, frugtige karakter.",
      uses: "Lækker på alt – dryp den over friske retter for et blidt strejf af smag.",
      usesExtra:
        "Perfekt til pasta, til at forfine æg, til at fuldende skaldyr, til at vende bladgrøntsager – og prøv den på is.",
    },
    originStory: {
      headline:
        "Nocellara di Belice er en generøs siciliansk oliven, en af Italiens mest ansete sorter. Den presser en mild olie med frugtige noter og en fløjlsblød tekstur, som er let at holde af og bruge hver dag.",
      quickRef: [
        { label: "SORT", value: "100% Nocellara" },
        { label: "OPRINDELSE", value: "Sicilien, Italien" },
        { label: "SMAG", value: "Mild & Frugtig" },
        { label: "ANVENDELSE", value: "dryppes over friske retter" },
        { label: "OPBEVARING", value: "beskyt mod lys og varme" },
      ],
      features: [
        {
          title: "Mild & Frugtig",
          description: "Frisk mandel og grøn banan med en fløjlsblød tekstur og rund afslutning. Perfekt til alsidig brug.",
          icon: "/icons/bread-2.svg",
        },
        {
          title: "Tidlig høst",
          description: "Plukket tidligt i oktober, når olivenerne er rige på polyfenoler, der forstærker smag og sundhedsmæssige fordele.",
          icon: "/icons/basket-2.svg",
        },
        {
          title: "100% Nocellara",
          description: "En generøs siciliansk olivensort kendt for sin milde karakter og sine runde, frugtige noter.",
          icon: "/icons/branch-2.svg",
        },
        {
          title: "Koldpresset",
          description: "Presset inden for få timer efter høst ved lav temperatur for at bevare hver dråbe smag og næring.",
          icon: "/icons/olive.svg",
        },
        {
          title: "Lækker På Alt",
          description: "Perfekt til pasta, til at forfine æg, til at fuldende skaldyr, til at vende bladgrøntsager, prøv på is.",
          icon: "/icons/bread-2.svg",
        },
      ],
    },
    labTrust: {
      heading: "laboratorietestet for kvalitet og renhed",
      subheading:
        "Sundhedspåstande uden dokumentation er bare markedsføring. Vi får hver batch uafhængigt laboratorietestet på centrale kvalitetsmarkører, som du selv kan efterprøve.",
      values: [
        { label: "Polyfenoler", value: "400", unit: "mg/kg", standard: "gns. ~180 mg/kg", description: "Naturlige antioxidanter, der giver olivenolien dens sundhedsmæssige fordele." },
        { label: "Oleocanthal", value: "137", unit: "mg/kg", standard: "gns. <10 mg/kg", description: "En stærk antiinflammatorisk forbindelse, der kun findes i olivenolie." },
        { label: "Oleacein", value: "209", unit: "mg/kg", standard: "gns. <40 mg/kg", description: "En stærk antioxidant, der forbindes med hjertesundhed og længere levetid." },
        { label: "Syre", value: "0.21", unit: "%", standard: "gns. ~0.8%", description: "Lavere syre betyder friskere oliven og højere kvalitet." },
        { label: "Peroxider", value: "7.8", unit: "meq/kg", standard: "gns. ~20 meq/kg", description: "Viser, hvor frisk olien er. Lavt peroxidtal = mindre oxidation." },
        { label: "K270", value: "0.11", unit: "", standard: "gns. ~0.22", description: "Måler oxidation over tid. Lavere værdier tyder på en friskere, bedre konserveret olie." },
      ],
    },
    polyphenolValue: 400,
    polyphenolLabel: "Nocellara",
    buttonColor: "#ECA948",
  },

  "attimo-extra-virgin-olive-oil-picual-500ml": {
    heroTitle: "PICUAL DE ESPAÑA",
    heroSubtitle: "Ekstra jomfruolivenolie – specialitet",
    benefits: [
      "100 % Picual-oliven, tidligt høstet og koldpresset inden for få timer",
      "Testet af uafhængigt laboratorium for kvalitet og renhed",
      "Direkte fra en lille familielund i Andalusien, Spanien",
    ],
    benefitTooltip:
      "Polyfenoler er naturlige forbindelser i olivenolie, som giver de sundhedsmæssige fordele, du har hørt om – antiinflammatoriske egenskaber, støtte til hjertesundheden og antioxidant beskyttelse.",
    labReportUrl: "/lab/Picual2025.pdf",
    sourceLine: "Direkte fra en lille familielund i Andalusien, Spanien",
    labelDisclosure:
      "Flasken på billedet bærer vores kommende ATTIMO-mærkeetiket. Din olie fra høsten 2024/25 ankommer under den oprindelige producents etiket og indeholder den samme olie af høj kvalitet.",
    labTiles: [
      { key: "polyphenols", label: "POLYFENOLER", value: "675", unit: "mg/kg", avg: "gns. ~180mg/kg", description: "Naturlige antioxidanter, der giver olivenolien dens sundhedsmæssige fordele." },
      { key: "oleocanthal", label: "OLEOCANTHAL", value: "—", unit: "mg/kg", avg: "gns. 10-30mg/kg", description: "En stærk antiinflammatorisk forbindelse, der kun findes i olivenolie." },
      { key: "oleacin", label: "OLEACEIN", value: "—", unit: "mg/kg", avg: "gns. <40mg/kg", description: "En kraftfuld antioxidant, der forbindes med beskyttelse af hjerte-kar-systemet." },
      { key: "acidity", label: "SYRE", value: "0.13", unit: "%", avg: "gns. ~0.8%", description: "Lavere syre betyder friskere oliven og højere kvalitet." },
    ],
    tabs: {
      details: {
        origin: "Jaén, Spanien",
        olive: "Picual",
        flavor: "Grøn & Græsagtig",
        store: "beskyt mod lys og varme",
        volume: "500ml",
      },
      flavorProfile: [
        { label: "PEBERAGTIG", rating: 4 },
        { label: "FRUGTIG", rating: 3 },
        { label: "BITTER", rating: 3 },
        { label: "URTEAGTIG", rating: 5 },
      ],
      harvest:
        "Olivenerne plukkes tidligt i oktober, når de er unge, grønne og fyldt med polyfenoler, der forstærker smag og sundhedsmæssige fordele. Koldekstraheret inden for få timer efter høst for at bevare oliens livlige, karakteristiske karakter.",
      uses: "Bruges bedst som et sidste pift; dryp den over maden for et livligt strejf af smag.",
      usesExtra:
        "Fremragende til grillede grøntsager, supper, bælgfrugter og ristet brød.",
    },
    originStory: {
      headline:
        "Picual er Spaniens mest udtryksfulde og mest plantede oliven. Den presser en livlig olie med et frisk grønt bid. En allrounder i køkkenet, med karakter nok til at forblive interessant.",
      quickRef: [
        { label: "SORT", value: "100% Picual" },
        { label: "OPRINDELSE", value: "Jaén, Spanien" },
        { label: "SMAG", value: "Grøn & Græsagtig" },
        { label: "ANVENDELSE", value: "dryppes over friske retter" },
        { label: "OPBEVARING", value: "beskyt mod lys og varme" },
      ],
      features: [
        {
          title: "Grøn & Græsagtig",
          description: "Aromaer af friskt tomatblad og nyslået græs med en ren, bestemt afslutning.",
          icon: "/icons/mortar.svg",
        },
        {
          title: "Tidlig høst",
          description: "Tidligt plukket, når olivenerne er grønne og rige på polyfenoler.",
          icon: "/icons/basket-2.svg",
        },
        {
          title: "100% Picual",
          description: "Spaniens flagskibssort, kendt for sin stabilitet, sin kraftfulde karakter og sit høje indhold af polyfenoler.",
          icon: "/icons/branch-2.svg",
        },
        {
          title: "Koldpresset",
          description: "Presset inden for få timer efter høst ved lav temperatur for at bevare hver dråbe smag og næring.",
          icon: "/icons/olive.svg",
        },
        {
          title: "God På Alt",
          description: "Vend grøntsager og salater, kron alt grillet, giv salater liv, fuldend frisk ost og yoghurt, prøv med chokolade",
          icon: "/icons/bread-2.svg",
        },
      ],
    },
    labTrust: {
      heading: "laboratorietestet for kvalitet og renhed",
      subheading:
        "Sundhedspåstande uden dokumentation er bare markedsføring. Vi får hver batch uafhængigt laboratorietestet på centrale kvalitetsmarkører, som du selv kan efterprøve.",
      values: [
        { label: "Polyfenoler", value: "675", unit: "mg/kg", standard: "gns. ~180 mg/kg", description: "Naturlige antioxidanter, der giver olivenolien dens sundhedsmæssige fordele." },
        { label: "Oleocanthal", value: "—", unit: "mg/kg", standard: "gns. <10 mg/kg", description: "En stærk antiinflammatorisk forbindelse, der kun findes i olivenolie." },
        { label: "Oleacein", value: "—", unit: "mg/kg", standard: "gns. <40 mg/kg", description: "En kraftfuld antioxidant, der forbindes med beskyttelse af hjerte-kar-systemet." },
        { label: "Syre", value: "0.13", unit: "%", standard: "gns. ~0.8%", description: "Lavere syre betyder friskere oliven og højere kvalitet." },
        { label: "Peroxider", value: "5.7", unit: "meq/kg", standard: "gns. ~20 meq/kg", description: "Viser, hvor frisk olien er. Lavt peroxidtal = mindre oxidation." },
        { label: "K270", value: "—", unit: "", standard: "gns. ~0.22", description: "Måler oxidation over tid. Lavere værdier tyder på en friskere, bedre konserveret olie." },
      ],
    },
    polyphenolValue: 675,
    polyphenolLabel: "Picual",
    buttonColor: "#B3E58C",
    tileBackground: "#B3E58C",
    tileAccent: "#1B4229",
    originRegion: {
      heading: "Fra lund til flaske",
      body: "ATTIMO Picual kommer direkte fra en lille familielund i Jaén, hjertet af Andalusien og verdens hovedstad for olivenolie. Denne provins alene producerer mere olivenolie end noget helt land uden for Spanien.\n\nDet barske Sierra-landskab med sine varme dage og kølige nætter tvinger Picual-olivenen til at koncentrere sit naturlige forsvar – resultatet er en olie, der er usædvanligt rig på polyfenoler og bygget til stabilitet. Tidligt høstet og presset inden for få timer opstår en klart grøn olie med en struktureret karakter.",
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
