// Page-level data for a certificate page in any language: meta title, the
// quotable sentence, JSON-LD. The body component renders the rest.
import { getCertificates, certificateDate, certificateJsonPath, labShort, oilTitle, qualityRowsFor, summarySentenceFor, OIL_NAMES, OIL_ORDER, SITE, type Certificate, type Oil } from "./certificates";
import { CERT_CONTENT, CERT_SLUGS, certHrefFor, certIndexHrefFor, fillT, type CertLang } from "./certificatesContent";

export async function buildCertificatePage(c: Certificate, lang: CertLang) {
  const t = CERT_CONTENT[lang];
  const all = await getCertificates();
  const p = c.phenolics;
  const title = oilTitle(c);
  const canonical = `${SITE}${certHrefFor(lang, c.id)}`;
  const sentence = summarySentenceFor(c, t);
  const quality = qualityRowsFor(c, t);
  const numeric = (v: number | string | null) => (typeof v === "number" ? v : null);

  const prop = (name: string, value: number | string, unitText: string | null, technique: string) => ({
    "@type": "PropertyValue", name, value, ...(unitText ? { unitText } : {}), measurementTechnique: technique,
  });
  const primaryTechnique = `${c.method.name}${c.method.reference ? ` (${c.method.reference})` : ""}`;
  const secondaryTechnique = c.secondary_method ? `${c.secondary_method.name}` : primaryTechnique;
  const primary: { name: string; value: number | string | null }[] = [
    ...(p.total !== null ? [{ name: `Total phenols${p.total_expressed_as ? ` (${p.total_expressed_as} equivalents)` : ""}`, value: p.total }] : []),
    ...(["hydroxytyrosol", "tyrosol", "oleocanthal", "oleacein"] as const).filter((k) => c.method.applies_to.includes(k) && p[k] !== null).map((k) => ({ name: k[0].toUpperCase() + k.slice(1), value: p[k] })),
    ...p.other.map((o) => ({ name: `${o.name}${o.abbreviation ? ` (${o.abbreviation})` : ""}`, value: o.value })),
  ];
  const secondary = c.secondary_method
    ? (["oleocanthal", "oleacein"] as const).filter((k) => c.secondary_method!.applies_to.includes(k) && p[k] !== null).map((k) => ({ name: k[0].toUpperCase() + k.slice(1), value: p[k] }))
    : [];
  const additionalProperty = [
    ...primary.filter((r) => r.value !== null).map((r) => prop(r.name, r.value!, p.unit, primaryTechnique)),
    ...secondary.filter((r) => r.value !== null).map((r) => prop(r.name, r.value!, p.unit, secondaryTechnique)),
    ...quality.map((q) => prop(q.label, q.value, q.unit, "IOC/EU official method as stated on the report")),
  ];
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Product",
      name: title,
      brand: { "@type": "Brand", name: "ATTIMO" },
      url: `${SITE}${c.product_url}`,
      category: "Extra virgin olive oil",
      description: sentence,
      inLanguage: t.lang,
      additionalProperty,
      subjectOf: {
        "@type": "DigitalDocument",
        name: `${c.certificate.report_type ?? "Test report"} ${c.certificate.report_number}`,
        url: `${SITE}${c.certificate.pdf}`,
        encodingFormat: "application/pdf",
        dateCreated: c.certificate.report_date,
        publisher: { "@type": "Organization", name: c.certificate.lab_name, address: [c.certificate.lab_city, c.certificate.lab_country].filter(Boolean).join(", ") },
        sha256: c.pdf_sha256,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: t.breadcrumb, item: `${SITE}${certIndexHrefFor(lang)}` },
        { "@type": "ListItem", position: 2, name: title, item: canonical },
      ],
    },
  ];
  const metaTitle = p.total !== null
    ? fillT(t.detail.metaTitle, { title, total: p.total, unit: p.unit, method: c.method.name })
    : fillT(t.detail.metaTitleNoTotal, { title, method: c.method.name });
  void numeric; void labShort; void certificateJsonPath; void CERT_SLUGS;
  return { t, all, title, canonical, sentence, quality, jsonLd, metaTitle };
}

export async function buildCertificatesIndexPage(lang: CertLang) {
  const t = CERT_CONTENT[lang];
  const certs = await getCertificates();
  const canonical = `${SITE}${certIndexHrefFor(lang)}`;
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "ATTIMO laboratory certificates",
      inLanguage: t.lang,
      itemListOrder: "https://schema.org/ItemListOrderDescending",
      numberOfItems: certs.length,
      itemListElement: certs.map((c, i) => ({ "@type": "ListItem", position: i + 1, name: oilTitle(c), url: `${SITE}${certHrefFor(lang, c.id)}` })),
    },
    {
      "@context": "https://schema.org",
      "@type": "Dataset",
      name: "ATTIMO olive oil laboratory certificates",
      description: t.index.metaDescription,
      url: canonical,
      inLanguage: t.lang,
      license: "https://creativecommons.org/licenses/by/4.0/",
      creator: { "@type": "Organization", name: "ATTIMO", url: SITE },
      distribution: [{ "@type": "DataDownload", encodingFormat: "application/json", contentUrl: `${SITE}/certificates/index.json` }],
    },
  ];
  return { t, certs, canonical, jsonLd };
}

/** "25/26" → "2025/2026", the way the harvest is printed on the bottle. */
export const harvestLong = (h: string) => {
  const m = /^(\d{2})\/(\d{2})$/.exec(h);
  return m ? `20${m[1]}/20${m[2]}` : h;
};
/** Anchor for one harvest tab, e.g. "#harvest-2025-2026". */
export const harvestAnchor = (h: string) => `harvest-${harvestLong(h).replace("/", "-")}`;

/** Oils with at least one certificate get a per-oil page with a tab per harvest. */
export async function getCertificateOils(): Promise<{ oil: Oil; certs: Certificate[] }[]> {
  const all = await getCertificates();
  return OIL_ORDER.map((oil) => ({ oil, certs: all.filter((c) => c.oil === oil) })).filter((x) => x.certs.length > 0);
}

/**
 * Page data for /certificates/{oil}: one tab per harvest, newest first. When a
 * harvest has more than one report, its tab shows the most recent one (the
 * series chart inside still links the others).
 */
export async function buildOilPage(oil: Oil, lang: CertLang) {
  const t = CERT_CONTENT[lang];
  const all = await getCertificates();
  const mine = all.filter((c) => c.oil === oil);
  const harvests = [...new Set(mine.map((c) => c.harvest))].sort((a, b) => b.localeCompare(a));
  const tabs = await Promise.all(
    harvests.map(async (h) => {
      const cert = mine.filter((c) => c.harvest === h).sort((a, b) => (certificateDate(b) ?? "").localeCompare(certificateDate(a) ?? ""))[0];
      const page = await buildCertificatePage(cert, lang);
      return { harvest: h, label: fillT(t.oil.tab, { h: harvestLong(h) }), anchor: harvestAnchor(h), cert, sentence: page.sentence, quality: page.quality, jsonLd: page.jsonLd };
    }),
  );
  const name = `ATTIMO ${OIL_NAMES[oil]}`;
  const canonical = `${SITE}${certHrefFor(lang, oil)}`;
  const jsonLd = [
    tabs[0].jsonLd[0],
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: t.breadcrumb, item: `${SITE}${certIndexHrefFor(lang)}` },
        { "@type": "ListItem", position: 2, name, item: canonical },
      ],
    },
  ];
  return {
    t, all, tabs, canonical, jsonLd,
    metaTitle: fillT(t.oil.metaTitle, { name: OIL_NAMES[oil] }),
    metaDescription: fillT(t.oil.metaDescription, { name: OIL_NAMES[oil] }),
  };
}

/**
 * Oils on sale or about to be, whose first report is not in yet. Each gets a
 * per-oil page with an empty tab for the harvest, so a QR code can point at
 * it before the lab results land. Drop the entry once its YAML exists.
 */
export interface PendingOil { slug: string; name: string; harvest: string }
export const PENDING_OILS: PendingOil[] = [{ slug: "peranzana", name: "Peranzana", harvest: "26/27" }];

export async function getPendingOils(): Promise<PendingOil[]> {
  const have = new Set<string>((await getCertificates()).map((c) => c.oil));
  return PENDING_OILS.filter((p) => !have.has(p.slug));
}

export function buildPendingOilPage(p: PendingOil, lang: CertLang) {
  const t = CERT_CONTENT[lang];
  const name = `ATTIMO ${p.name}`;
  const canonical = `${SITE}${certHrefFor(lang, p.slug)}`;
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: t.breadcrumb, item: `${SITE}${certIndexHrefFor(lang)}` },
        { "@type": "ListItem", position: 2, name, item: canonical },
      ],
    },
  ];
  return {
    t, canonical, jsonLd,
    tab: { harvest: p.harvest, long: harvestLong(p.harvest), label: fillT(t.oil.tab, { h: harvestLong(p.harvest) }), anchor: harvestAnchor(p.harvest), name },
    metaTitle: fillT(t.oil.metaTitle, { name: p.name }),
    metaDescription: fillT(t.oil.pendingBody, { h: harvestLong(p.harvest) }),
  };
}
