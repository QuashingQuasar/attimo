import { en, type HarvestContent, type StepState } from "./en";

export type { HarvestContent, StepState };

export const HARVEST_SLUGS = { en: "/harvest-2026" } as const;
export const HARVEST_CONTENT: Record<keyof typeof HARVEST_SLUGS, HarvestContent> = { en };
