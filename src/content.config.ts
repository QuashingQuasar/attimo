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

export const collections = { certificates };
