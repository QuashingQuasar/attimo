import type { LegalDoc } from "./types";
import { termsEn } from "./terms.en";

// PLACEHOLDER until translated: mirrors English so the build passes.
export const termsFr: LegalDoc = { ...termsEn, lang: "fr" };
