import type { APIRoute } from "astro";
import { getCertificates, toExport, type Certificate } from "@/lib/certificates";

// One certificate in the §3 schema — the record the register will ingest.
export async function getStaticPaths() {
  const certs = await getCertificates();
  return certs.map((c) => ({ params: { id: c.id }, props: { cert: c } }));
}

export const GET: APIRoute = ({ props }) => {
  const cert = props.cert as Certificate;
  return new Response(JSON.stringify(toExport(cert), null, 2), {
    headers: { "Content-Type": "application/json; charset=utf-8" },
  });
};
