import type { LegalDoc } from "./types";
import { privacyEn } from "./privacy.en";

// PLACEHOLDER until translated: mirrors English so the build passes.
export const privacyDa: LegalDoc = { ...privacyEn, lang: "da" };
