import type { APIRoute } from "astro";

// Force server-rendering for this single route while the rest of the build
// stays static (matches the convention used by /api/contact.ts).
export const prerender = false;

const BREVO_ENDPOINT = "https://api.brevo.com/v3/contacts";

// Per-product restock lists in Brevo. Keys are the `polyphenolLabel` values
// NotifyMeForm posts as `product` — proper names, identical across every locale
// map, so this also works on /de/, /fr/, /se/ and /dk/.
//
// A NEW product needs its own Brevo list AND an entry here. Without one the
// signup is rejected loudly rather than filed into another product's list —
// which is exactly the bug this replaces: every restock signup used to go to
// list 6 ("Coratina Restock") no matter which oil the visitor asked about.
const BREVO_LIST_BY_PRODUCT: Record<string, number> = {
  Coratina: 6, // "Coratina Restock"
  Nocellara: 9, // "Nocellara Restock"
  Picual: 3, // "Picual Waitlist"
};

export const POST: APIRoute = async ({ request }) => {
  const apiKey = import.meta.env.BREVO_API_KEY;
  if (!apiKey) {
    console.error("[/api/notify] BREVO_API_KEY is not set");
    return Response.json(
      { error: "Notify service not configured" },
      { status: 500 },
    );
  }

  let body: { email?: string; product?: string };
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const email = (body.email || "").trim();
  const product = (body.product || "").trim();

  if (!email || !product) {
    return Response.json(
      { error: "email and product are required" },
      { status: 400 },
    );
  }
  if (email.length > 300 || product.length > 100) {
    return Response.json({ error: "Input too long" }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json({ error: "Invalid email" }, { status: 400 });
  }

  const listId = BREVO_LIST_BY_PRODUCT[product];
  if (!listId) {
    console.error(`[/api/notify] no Brevo list mapped for product ${JSON.stringify(product)}`);
    return Response.json({ error: "Unknown product" }, { status: 400 });
  }

  let brevoResp: Response;
  try {
    brevoResp = await fetch(BREVO_ENDPOINT, {
      method: "POST",
      headers: {
        "api-key": apiKey,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        email,
        listIds: [listId],
        updateEnabled: true,
      }),
    });
  } catch (err) {
    console.error("[/api/notify] Brevo network error:", err);
    return Response.json({ error: "Failed to reach notify provider" }, { status: 502 });
  }

  // Brevo returns 201 for new contacts, 204 for updates (with updateEnabled).
  if (brevoResp.ok) {
    return Response.json({ ok: true });
  }

  // Surface Brevo's error to the server log but never to the client.
  let detail: unknown = null;
  try {
    detail = await brevoResp.json();
  } catch {
    /* ignore */
  }
  console.error("[/api/notify] Brevo error:", brevoResp.status, detail);
  return Response.json({ error: "Failed to subscribe" }, { status: 502 });
};
