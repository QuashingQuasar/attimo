// Explanations shown on hover (or tap) next to the figures on oil cards and in
// the buying-guide table. English first; other languages are added once the
// English is approved. A language without an entry shows no info buttons.

export type OilTips = {
  label: string; // accessible name of the info button, "{x}" = what it explains
  total: string;
  compounds: string;
  value: string;
  score: string; // "{breakdown}" = the oil's points per check
  scoreLine: string; // one check in the breakdown: "{name}: {got} of {max}"
  scoreHead?: string; // the score column header
  checks: { report: string; delivery: string; method: string; origin: string };
  method: Record<string, string>;
};

export const OIL_TIPS: Record<string, OilTips> = {
  en: {
    label: "What is {x}?",
    total:
      "All the polyphenols the lab counted, in milligrams per kilo of oil. Each test method counts a different set of compounds, so a total only compares with totals from the same method.",
    compounds:
      "Oleocanthal and oleacein added together: the two best-studied polyphenols in olive oil. Oleocanthal causes the peppery catch in your throat. Labs measure both the same way, so this figure compares across test methods.",
    value:
      "The price of the bottle divided by the milligrams of oleocanthal and oleacein in it. The lower the figure, the more of the two compounds you get for your money.",
    score:
      "Out of 10, from four checks on what the producer publishes: {breakdown}.",
    scoreLine: "{name} {got} of {max}",
    scoreHead: "Out of 10, from four checks on what the producer publishes: lab report 3 points, delivery 3, test method 2, harvest date and variety 2. Hover over an oil's score to see its points.",
    checks: { report: "Lab report", delivery: "Delivery", method: "Test method", origin: "Harvest date and variety" },
    method: {
      HPLC: "HPLC separates the oil and measures each compound one by one. It reads lower totals than NMR on the same oil.",
      COI: "The International Olive Council's method, a form of HPLC used by accredited food labs. It reads low totals by design.",
      NMR: "NMR counts a long list of phenolic compounds at once, heavy ones included. It reads higher totals than HPLC on the same oil.",
      "LC-MS/MS": "Mass spectrometry: it identifies and measures each compound separately, like HPLC.",
      "Folin-Ciocalteu": "A colour test that estimates all phenolic compounds together. It names no single compound, so it gives no oleocanthal or oleacein figure.",
      "not stated": "The producer doesn't say how the figure was measured.",
    },
  },
  nl: {
    "label": "Wat is {x}?",
    "total": "Alle polyfenolen die het lab telde, in milligram per kilo olie. Elke meetmethode telt een andere reeks stoffen. Een totaal kun je dus alleen vergelijken met totalen van dezelfde methode.",
    "compounds": "Oleocanthal en oleaceïne samengeteld: de twee best onderzochte polyfenolen in olijfolie. Oleocanthal geeft de peperige prikkel in je keel. Labs meten beide op dezelfde manier, dus dit getal kun je ongeacht de meetmethode vergelijken.",
    "value": "De prijs van de fles gedeeld door het aantal milligram oleocanthal en oleaceïne erin. Hoe lager het getal, hoe meer van die twee stoffen je voor je geld krijgt.",
    "score": "Op 10 punten, op basis van vier controles op wat de producent publiceert: {breakdown}.",
    "scoreLine": "{name} {got} van {max}",
    "scoreHead": "Op 10 punten, op basis van vier controles op wat de producent publiceert: labrapport 3 punten, verzending 3, meetmethode 2, oogstdatum en variëteit 2.",
    "checks": {
      "report": "Labrapport",
      "delivery": "Verzending",
      "method": "Meetmethode",
      "origin": "Oogstdatum en variëteit"
    },
    "method": {
      "HPLC": "HPLC scheidt de olie en meet elke stof afzonderlijk. Voor dezelfde olie geeft het lagere totalen dan NMR.",
      "COI": "De methode van de Internationale Olijfolieraad, een vorm van HPLC die geaccrediteerde voedingslabs gebruiken. Door de opzet geeft ze lage totalen.",
      "NMR": "NMR telt een lange lijst fenolische stoffen in één keer, ook de zware. Voor dezelfde olie geeft het hogere totalen dan HPLC.",
      "LC-MS/MS": "Massaspectrometrie: identificeert en meet elke stof afzonderlijk, zoals HPLC.",
      "Folin-Ciocalteu": "Een kleurtest die alle fenolische stoffen samen schat. De test benoemt geen afzonderlijke stoffen, dus er komt geen getal voor oleocanthal of oleaceïne uit.",
      "not stated": "De producent zegt niet hoe het getal gemeten is."
    }
  },
  fr: {
    "label": "Que signifie {x} ?",
    "total": "Tous les polyphénols comptés par le laboratoire, en milligrammes par kilo d'huile. Chaque méthode de mesure compte un ensemble différent de composés : un total ne se compare donc qu'avec des totaux obtenus par la même méthode.",
    "compounds": "L'oléocanthal et l'oléacéine additionnés : les deux polyphénols les mieux étudiés de l'huile d'olive. L'oléocanthal provoque le picotement poivré dans la gorge. Les laboratoires mesurent les deux de la même façon, donc ce chiffre se compare d'une méthode à l'autre.",
    "value": "Le prix de la bouteille divisé par les milligrammes d'oléocanthal et d'oléacéine qu'elle contient. Plus le chiffre est bas, plus vous obtenez de ces deux composés pour votre argent.",
    "score": "Sur 10, d'après quatre vérifications de ce que le producteur publie : {breakdown}.",
    "scoreLine": "{name} {got} sur {max}",
    "scoreHead": "Sur 10, d'après quatre vérifications de ce que le producteur publie : rapport de laboratoire 3 points, livraison 3, méthode de mesure 2, date de récolte et variété 2. Survolez le score d'une huile pour voir ses points.",
    "checks": {
      "report": "Rapport de laboratoire",
      "delivery": "Livraison",
      "method": "Méthode de mesure",
      "origin": "Date de récolte et variété"
    },
    "method": {
      "HPLC": "La HPLC sépare l'huile et mesure chaque composé un par un. Elle donne des totaux plus bas que la NMR pour la même huile.",
      "COI": "La méthode du Conseil oléicole international, une forme de HPLC utilisée par les laboratoires alimentaires accrédités. Elle donne, par construction, des totaux bas.",
      "NMR": "La NMR compte en une fois une longue liste de composés phénoliques, y compris les plus lourds. Elle donne des totaux plus élevés que la HPLC pour la même huile.",
      "LC-MS/MS": "Spectrométrie de masse : elle identifie et mesure chaque composé séparément, comme la HPLC.",
      "Folin-Ciocalteu": "Un test colorimétrique qui estime l'ensemble des composés phénoliques à la fois. Il ne nomme aucun composé en particulier et ne donne donc aucun chiffre d'oléocanthal ou d'oléacéine.",
      "not stated": "Le producteur n'indique pas comment le chiffre a été mesuré."
    }
  },
  de: {
    "label": "Was bedeutet {x}?",
    "total": "Alle Polyphenole, die das Labor gezählt hat, in Milligramm pro Kilo Öl. Jede Messmethode zählt andere Stoffe. Ein Gesamtwert lässt sich deshalb nur mit Gesamtwerten derselben Methode vergleichen.",
    "compounds": "Oleocanthal und Oleacein zusammengezählt: die zwei am besten erforschten Polyphenole im Olivenöl. Oleocanthal sorgt für das pfeffrige Kratzen im Hals. Labore messen beide auf dieselbe Weise, deshalb lässt sich dieser Wert über Messmethoden hinweg vergleichen.",
    "value": "Der Flaschenpreis geteilt durch die Milligramm Oleocanthal und Oleacein darin. Je niedriger der Wert, desto mehr von beiden Stoffen bekommst du für dein Geld.",
    "score": "Von 10 möglichen Punkten, aus vier Prüfungen der Angaben des Herstellers: {breakdown}.",
    "scoreLine": "{name} {got} von {max}",
    "scoreHead": "Von 10 möglichen Punkten, aus vier Prüfungen der Angaben des Herstellers: Laborbericht 3 Punkte, Lieferung 3, Messmethode 2, Erntedatum und Sorte 2.",
    "checks": {
      "report": "Laborbericht",
      "delivery": "Lieferung",
      "method": "Messmethode",
      "origin": "Erntedatum und Sorte"
    },
    "method": {
      "HPLC": "HPLC trennt das Öl auf und misst jeden Stoff einzeln. Für dasselbe Öl liefert sie niedrigere Gesamtwerte als NMR.",
      "COI": "Die Methode des Internationalen Olivenrats, eine Form der HPLC, die akkreditierte Lebensmittellabore verwenden. Ihre Gesamtwerte fallen methodenbedingt niedrig aus.",
      "NMR": "NMR zählt eine lange Liste phenolischer Verbindungen auf einmal, schwere eingeschlossen. Für dasselbe Öl liefert sie höhere Gesamtwerte als HPLC.",
      "LC-MS/MS": "Massenspektrometrie: Sie erkennt und misst jeden Stoff einzeln, wie HPLC.",
      "Folin-Ciocalteu": "Ein Farbtest, der alle phenolischen Verbindungen zusammen schätzt. Er benennt keinen einzelnen Stoff und liefert deshalb keinen Wert für Oleocanthal oder Oleacein.",
      "not stated": "Der Hersteller gibt nicht an, wie der Wert gemessen wurde."
    }
  },
  da: {
    "label": "Hvad er {x}?",
    "total": "Alle de polyfenoler, laboratoriet har talt, i milligram pr. kilo olie. Hver målemetode tæller forskellige stoffer, så en total kan kun sammenlignes med totaler fra samme metode.",
    "compounds": "Oleocanthal og oleacein lagt sammen: de to bedst undersøgte polyfenoler i olivenolie. Oleocanthal giver den pebrede kradsen i halsen. Laboratorier måler begge på samme måde, så tallet kan sammenlignes på tværs af målemetoder.",
    "value": "Flaskens pris divideret med antallet af milligram oleocanthal og oleacein i den. Jo lavere tallet er, jo mere af de to stoffer får du for pengene.",
    "score": "Ud af 10, fra fire tjek af det, producenten offentliggør: {breakdown}.",
    "scoreLine": "{name} {got} af {max}",
    "scoreHead": "Ud af 10, fra fire tjek af det, producenten offentliggør: laboratorierapport 3 point, levering 3, målemetode 2, høstdato og sort 2. Hold musen over en olies score for at se dens point.",
    "checks": {
      "report": "Laboratorierapport",
      "delivery": "Levering",
      "method": "Målemetode",
      "origin": "Høstdato og sort"
    },
    "method": {
      "HPLC": "HPLC adskiller olien og måler hvert stof for sig. Den giver lavere totaler end NMR for den samme olie.",
      "COI": "Det Internationale Olivenråds metode, en form for HPLC, som akkrediterede fødevarelaboratorier bruger. Den er udformet, så den giver lave totaler.",
      "NMR": "NMR tæller en lang liste af fenoliske stoffer på én gang, også de tunge. Den giver højere totaler end HPLC for den samme olie.",
      "LC-MS/MS": "Massespektrometri: den identificerer og måler hvert stof for sig, ligesom HPLC.",
      "Folin-Ciocalteu": "En farvetest, der anslår alle fenoliske stoffer samlet. Den navngiver ikke enkelte stoffer, så den giver intet tal for oleocanthal eller oleacein.",
      "not stated": "Producenten oplyser ikke, hvordan tallet er målt."
    }
  },
  sv: {
    "label": "Vad är {x}?",
    "total": "Alla polyfenoler som labbet räknade, i milligram per kilo olja. Varje testmetod räknar en annan uppsättning ämnen, så en total går bara att jämföra med totaler från samma metod.",
    "compounds": "Oleocanthal och oleacein sammanlagt: de två mest studerade polyfenolerna i olivolja. Oleocanthal ger det peppriga stinget i halsen. Labb mäter båda på samma sätt, så värdet går att jämföra mellan testmetoder.",
    "value": "Flaskans pris delat med antalet milligram oleocanthal och oleacein i den. Ju lägre värde, desto mer av de två ämnena får du för pengarna.",
    "score": "Av 10, utifrån fyra kontroller av vad producenten publicerar: {breakdown}.",
    "scoreLine": "{name} {got} av {max}",
    "scoreHead": "Av 10, utifrån fyra kontroller av vad producenten publicerar: labbrapport 3 poäng, leverans 3, testmetod 2, skördedatum och sort 2.",
    "checks": {
      "report": "Labbrapport",
      "delivery": "Leverans",
      "method": "Testmetod",
      "origin": "Skördedatum och sort"
    },
    "method": {
      "HPLC": "HPLC separerar oljan och mäter varje ämne för sig. Den ger lägre totaler än NMR på samma olja.",
      "COI": "Internationella olivrådets metod, en form av HPLC som används av ackrediterade livsmedelslabb. Den ger låga totaler till följd av hur den är utformad.",
      "NMR": "NMR räknar en lång lista fenoliska ämnen på en gång, tunga ämnen inräknade. Den ger högre totaler än HPLC på samma olja.",
      "LC-MS/MS": "Masspektrometri. Den identifierar och mäter varje ämne för sig, som HPLC.",
      "Folin-Ciocalteu": "Ett färgtest som uppskattar alla fenoliska ämnen tillsammans. Det namnger inget enskilt ämne, så det ger inget värde för oleocanthal eller oleacein.",
      "not stated": "Producenten anger inte hur värdet mättes."
    }
  },
};

export const tipsFor = (lang: string): OilTips | null => OIL_TIPS[lang] ?? null;
