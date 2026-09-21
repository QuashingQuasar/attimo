import type { APIRoute } from "astro";
import { getCertificates, toExport } from "@/lib/certificates";

// Every certificate, each in the §3 schema.
export const GET: APIRoute = async () => {
  const certs = await getCertificates();
  return new Response(JSON.stringify(certs.map(toExport), null, 2), {
    headers: { "Content-Type": "application/json; charset=utf-8" },
  });
};
