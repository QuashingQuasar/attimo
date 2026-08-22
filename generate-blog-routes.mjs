// Generate /fr/blog, /se/blog, /dk/blog route dirs from the /de/blog ones by
// swapping the language-specific tokens. Run once; safe to re-run (overwrites).
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";

const SRC = "/Users/gillesdc/attimo/src/pages/de/blog";
const slugTpl = readFileSync(`${SRC}/[slug].astro`, "utf8");
const idxTpl = readFileSync(`${SRC}/index.astro`, "utf8");

const LANGS = [
  { lang: "nl", slug: "nl", bcp: "nl-NL", suffix: "ATTIMO Specialiteits-Olijfolie",
    desc: "Verhalen, wetenschap en herkomst achter polyfenolrijke extra vierge olijfolie.",
    empty: "Nog geen artikelen — kom snel terug.", noImage: "Geen afbeelding",
    back: "Terug naar alle artikelen", keepReading: "Lees verder", morePosts: "Meer artikelen",
    readMore: "Lees meer", newsletter: "Ontvang ATTIMO-verhalen, kennis en updates in je inbox" },
  { lang: "fr", slug: "fr", bcp: "fr-FR", suffix: "ATTIMO Huile d'Olive de Spécialité",
    desc: "Histoires, science et origine derrière l'huile d'olive extra vierge riche en polyphénols.",
    empty: "Pas encore d'articles — revenez bientôt.", noImage: "Pas d'image",
    back: "Retour à tous les articles", keepReading: "À lire aussi", morePosts: "Plus d'articles",
    readMore: "Lire la suite", newsletter: "Recevez les histoires, le savoir et les nouveautés d'ATTIMO dans votre boîte mail" },
  { lang: "sv", slug: "se", bcp: "sv-SE", suffix: "ATTIMO Specialolivolja",
    desc: "Berättelser, vetenskap och ursprung bakom polyfenolrik extra jungfruolivolja.",
    empty: "Inga inlägg än — kom tillbaka snart.", noImage: "Ingen bild",
    back: "Tillbaka till alla inlägg", keepReading: "Läs vidare", morePosts: "Fler inlägg",
    readMore: "Läs mer", newsletter: "Få ATTIMO-berättelser, kunskap och nyheter i din inkorg" },
  { lang: "da", slug: "dk", bcp: "da-DK", suffix: "ATTIMO Specialolivenolie",
    desc: "Historier, videnskab og oprindelse bag polyfenolrig ekstra jomfruolivenolie.",
    empty: "Ingen indlæg endnu — kom snart tilbage.", noImage: "Intet billede",
    back: "Tilbage til alle indlæg", keepReading: "Læs videre", morePosts: "Flere indlæg",
    readMore: "Læs mere", newsletter: "Få ATTIMO-historier, viden og nyheder i din indbakke" },
];

const all = (s, a, b) => s.split(a).join(b);

for (const L of LANGS) {
  // ---- [slug].astro ----
  let f = slugTpl;
  f = all(f, 'const LANG = "de";', `const LANG = "${L.lang}";`);
  f = all(f, 'SLUG_TO_LOCALE["de"]', `SLUG_TO_LOCALE["${L.slug}"]`);
  f = all(f, 'getPostsByLang("de")', `getPostsByLang("${L.lang}")`);
  f = all(f, 'inLanguage: "de"', `inLanguage: "${L.lang}"`);
  f = all(f, 'htmlLang="de"', `htmlLang="${L.lang}"`);
  f = all(f, "/de/blog", `/${L.slug}/blog`);
  f = all(f, "de-DE", L.bcp);
  f = all(f, "ATTIMO Spezialitäten-Olivenöl", L.suffix);
  f = all(f, "Zurück zu allen Beiträgen", L.back);
  f = all(f, "\n            Weiterlesen\n          </h2>", `\n            ${L.keepReading}\n          </h2>`);
  f = all(f, "\n                    Weiterlesen\n                    <svg", `\n                    ${L.readMore}\n                    <svg`);
  f = all(f, "Mehr Beiträge", L.morePosts);
  f = all(f, ">Kein Bild<", `>${L.noImage}<`);
  f = all(f, "ATTIMO-Geschichten, Wissen und Neuigkeiten in deinem Postfach", L.newsletter);

  // ---- index.astro ----
  let g = idxTpl;
  g = all(g, 'SLUG_TO_LOCALE["de"]', `SLUG_TO_LOCALE["${L.slug}"]`);
  g = all(g, 'getPostsByLang("de")', `getPostsByLang("${L.lang}")`);
  g = all(g, 'htmlLang="de"', `htmlLang="${L.lang}"`);
  g = all(g, "/de/blog", `/${L.slug}/blog`);
  g = all(g, "de-DE", L.bcp);
  g = all(g, "Geschichten, Wissenschaft und Herkunft hinter polyphenolreichem nativem Olivenöl extra.", L.desc);
  g = all(g, "Noch keine Beiträge — schau bald wieder vorbei.", L.empty);
  g = all(g, ">Kein Bild<", `>${L.noImage}<`);

  const dir = `/Users/gillesdc/attimo/src/pages/${L.slug}/blog`;
  mkdirSync(dir, { recursive: true });
  writeFileSync(`${dir}/[slug].astro`, f);
  writeFileSync(`${dir}/index.astro`, g);
  // sanity checks
  const leftDe = (f.match(/"de"|de-DE|\/de\/blog|Weiterlesen|Kein Bild|Beiträge/g) || []);
  console.log(`${L.slug}: written. residual-de-tokens in [slug]: ${leftDe.length ? leftDe.join(",") : "none"}`);
}
