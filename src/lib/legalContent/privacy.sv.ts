import type { LegalDoc } from "./types";
import { privacyEn } from "./privacy.en";

// PLACEHOLDER until translated: mirrors English so the build passes.
export const privacySv: LegalDoc = { ...privacyEn, lang: "sv" };
