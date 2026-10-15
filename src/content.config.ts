import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// One file per lab certificate. This schema is the certificate record the
// future register will ingest, so every field is either printed on the
// document or null. Nothing here is estimated or back-filled.
//
// Values printed as "<LOQ" (e.g. "<3") are kept as the printed string so the
// certificate is quoted, never rounded to zero.
const printedValue = z.union([z.number(), z.string()]).nullable();

const measured = z
  .object({
    value: z.number(),
    uncertainty: z.number().nullable().default(null),
  })
  .nullable();

const certificates = defineCollection({
  loader: glob({ pattern: "*.yaml", base: "./src/content/certificates" }),
  schema: z.object({
    id: z.string(),
    oil: z.enum(["coratina", "nocellara", "picual"]),
    product_url: z.string(),
    cultivar: z.string(),
    origin: z.string(),
    organic: z.boolean().nullable(),
    // Who pressed the oil. Whether it renders is a separate decision
    // (RENDER_PRODUCER in src/lib/certificates/index.ts).
    producer: z.string().nullable(),
    // The party named on the report as having commissioned the test.
    commissioned_by: z.string().nullable(),
    harvest: z.string(),

    certificate: z.object({
      lab_name: z.string(),
      lab_city: z.string().nullable(),
      lab_country: z.string(),
      accreditation_body: z.string().nullable(),
      accreditation_number: z.string().nullable(),
      iso_17025: z.boolean().nullable(),
      // Other recognitions printed on the report, verbatim.
      recognitions: z.array(z.string()).default([]),
      report_type: z.string().nullable(),
      report_number: z.string(),
      lab_reference: z.string().nullable(),
      sample_reference: z.string().nullable(),
      sample_description: z.string().nullable(),
      sample_volume_ml: z.number().nullable(),
      // Date the sample was drawn. Neither Chemiservice nor Tello print one
      // ("sampling by the client"), so this is null on every current record.
      sample_date: z.string().nullable(),
      sample_received_date: z.string().nullable(),
      tests_started_date: z.string().nullable(),
      tests_completed_date: z.string().nullable(),
      report_date: z.string(),
      signed_by: z.string().nullable(),
      pdf: z.string(),
      thumbnail: z.string(),
    }),

    method: z.object({
      name: z.enum(["HPLC", "qNMR", "Folin-Ciocalteu", "LC-MS/MS"]),
      reference: z.string().nullable(),
      // Which values on this record the method produced.
      applies_to: z.array(z.string()),
    }),
    // A second assay on the same report (Chemiservice runs oleocanthal and
    // oleacein on an internal method alongside the IOC HPLC panel).
    secondary_method: z
      .object({
        name: z.string(),
        reference: z.string().nullable(),
        technique: z.string().nullable(),
        applies_to: z.array(z.string()),
      })
      .nullable(),

    phenolics: z.object({
      unit: z.string(),
      total: z.number().nullable(),
      total_uncertainty: z.number().nullable(),
      total_expressed_as: z.string().nullable(),
      total_loq: z.number().nullable(),
      oleocanthal: printedValue,
      oleacein: printedValue,
      hydroxytyrosol: printedValue,
      tyrosol: printedValue,
      // Only if the certificate states this figure itself. Drives the EFSA
      // block; never derived from `total`.
      hydroxytyrosol_and_derivatives: z.number().nullable(),
      other: z
        .array(
          z.object({
            name: z.string(),
            abbreviation: z.string().nullable(),
            value: printedValue,
            loq: z.number().nullable().default(null),
          }),
        )
        .default([]),
    }),

    quality: z
      .object({
        free_acidity: measured,
        peroxide_value: measured,
        k232: measured,
        k268_or_k270: measured,
        k_wavelength: z.enum(["K268", "K270"]).nullable(),
        delta_k: measured,
        limits_reference_printed: z.string().nullable(),
      })
      .nullable(),

    supersedes: z.string().nullable(),
    notes: z.string().nullable(),
  }),
});

// One file per producer in the Polyphenol Index. Figures are copied verbatim
// from the producer's own page or certificate; ATTIMO's entry carries no
// figures and is filled from the certificates collection at build time.
const polyphenolIndex = defineCollection({
  loader: glob({ pattern: "*.yaml", base: "./src/content/polyphenol-index" }),
  schema: z.object({
    id: z.string(),
    brand: z.string(),
    oil: z.string(),
    variety: z.string().nullable(),
    origin: z.string(),
    country: z.string(),
    harvest: z.string(),
    harvest_note: z.string().nullable(),
    method: z.enum(["NMR", "HPLC", "COI", "LC-MS/MS", "Folin-Ciocalteu", "not stated"]),
    lab: z.string().nullable(),
    total: z.number().nullable(),
    total_secondary: z
      .object({ value: z.number(), method: z.string(), note: z.string().nullable().default(null) })
      .nullable(),
    oleocanthal: z.number().nullable(),
    oleacein: z.number().nullable(),
    // The D1 figure as printed on the certificate, when the lab sums the
    // unrounded compound values and the printed sum differs from the sum of
    // the printed (rounded) compounds. Null means: use the sum.
    compounds_printed: z.number().nullable().default(null),
    report: z.object({
      status: z.enum(["viewable", "none"]),
      url: z.string(),
      label: z.string(),
    }),
    source_url: z.string(),
    price: z.string().nullable(),
    // Structured price for the value metric: amount, currency and the size it buys.
    price_amount: z.number().nullable().default(null),
    price_currency: z.enum(["EUR", "USD", "GBP"]).nullable().default(null),
    price_ml: z.number().nullable().default(null),
    // Where the oil can be bought, from the seller's own stated shipping (EU = ships within Europe).
    regions: z.array(z.enum(["EU", "UK", "US"])).default([]),
    availability: z.string().nullable(),
    note: z.string(),
    also: z.string().nullable(),
    attimo_certificate: z.string().nullable(),
    verified: z.string(),
  }),
});

export const collections = { certificates, polyphenolIndex };
