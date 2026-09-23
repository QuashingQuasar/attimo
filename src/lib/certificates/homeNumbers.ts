// Serialisable per-oil figures for the homepage lab block. Built server-side
// from the certificates collection and handed to the React island as a prop,
// so the homepage carries no lab number of its own.
import { getCertificateMap, labShort, OIL_ORDER, OIL_NAMES, certificatePath, type Oil } from "./index";

export interface HomeLabOil {
  key: Oil;
  name: string;
  /** Beverly Drive line after the name, e.g. "d'Italia · Puglia". */
  script: string;
  organic: boolean;
  harvest: string;
  total: number | null;
  totalUnit: string;
  /** "HPLC, IOC method · Chemiservice, ISO/IEC 17025" */
  methodLine: string;
  oleocanthal: number | null;
  oleacein: number | null;
  certificateHref: string;
}

const SCRIPT: Record<Oil, string> = {
  coratina: "d'Italia · Puglia",
  nocellara: "di Sicilia",
  picual: "de España · Jaén",
};

export async function getHomeLabNumbers(): Promise<HomeLabOil[]> {
  const map = await getCertificateMap();
  return OIL_ORDER.flatMap((oil) => {
    const c = map[oil];
    if (!c) return [];
    const method =
      c.method.name === "HPLC"
        ? "HPLC, IOC method"
        : c.method.name === "Folin-Ciocalteu"
          ? "Folin-Ciocalteu, caffeic acid eq."
          : c.method.name;
    const lab = c.certificate.iso_17025
      ? `${labShort(c)}, ISO/IEC 17025`
      : [labShort(c), c.certificate.lab_city].filter(Boolean).join(", ");
    const num = (v: number | string | null) => (typeof v === "number" ? v : null);
    return [
      {
        key: oil,
        name: OIL_NAMES[oil],
        script: SCRIPT[oil],
        organic: c.organic === true,
        harvest: c.harvest,
        total: c.phenolics.total,
        totalUnit: c.phenolics.unit.startsWith("mg") ? "mg/kg" : c.phenolics.unit,
        methodLine: `${method} · ${lab}`,
        oleocanthal: num(c.phenolics.oleocanthal),
        oleacein: num(c.phenolics.oleacein),
        certificateHref: certificatePath(c.id),
      },
    ];
  });
}
