import type { LegalDoc } from "./types";
import { privacyEn } from "./privacy.en";
import { termsEn } from "./terms.en";
import { privacyDe } from "./privacy.de";
import { privacyFr } from "./privacy.fr";
import { privacySv } from "./privacy.sv";
import { privacyDa } from "./privacy.da";
import { privacyNl } from "./privacy.nl";
import { termsDe } from "./terms.de";
import { termsFr } from "./terms.fr";
import { termsSv } from "./terms.sv";
import { termsDa } from "./terms.da";
import { termsNl } from "./terms.nl";
export type { LegalDoc, LegalBlock, LegalSection } from "./types";

export const PRIVACY: Record<string, LegalDoc> = { en: privacyEn, de: privacyDe, fr: privacyFr, sv: privacySv, da: privacyDa, nl: privacyNl };
export const TERMS: Record<string, LegalDoc> = { en: termsEn, de: termsDe, fr: termsFr, sv: termsSv, da: termsDa, nl: termsNl };
