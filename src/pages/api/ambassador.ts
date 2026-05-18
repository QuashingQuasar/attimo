import type { APIRoute } from "astro";
import { Resend } from "resend";

export const prerender = false;

const RECIPIENT = "gilles@attimo-oil.com";
const FROM = import.meta.env.RESEND_FROM || "ATTIMO Ambassadors <ambassadors@send.attimo-oil.com>";

export const POST: APIRoute = async ({ request }) => {
  const apiKey = import.meta.env.RESEND_API_KEY;
  if (!apiKey) {
    return Response.json({ error: "Email service not configured" }, { status: 500 });
  }

  let body: { name?: string; handle?: string; message?: string };
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const name = (body.name || "").trim();
  const handle = (body.handle || "").trim();
  const message = (body.message || "").trim();

  if (!name || !message) {
    return Response.json({ error: "Name and message are required" }, { status: 400 });
  }
  if (name.length > 200 || handle.length > 300 || message.length > 5000) {
    return Response.json({ error: "Input too long" }, { status: 400 });
  }

  const esc = (s: string) =>
    s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

  const html = `
    <h2>New ambassador application</h2>
    <p><strong>Name:</strong> ${esc(name)}</p>
    <p><strong>Instagram / website:</strong> ${esc(handle) || "—"}</p>
    <p><strong>Message:</strong></p>
    <p style="white-space: pre-wrap">${esc(message)}</p>
  `;

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from: FROM,
    to: RECIPIENT,
    subject: `New ambassador application — ${name}`,
    html,
    replyTo: handle.includes("@") && !handle.startsWith("@") ? handle : undefined,
  });

  if (error) {
    console.error("Resend error:", error);
    return Response.json({ error: "Failed to send" }, { status: 502 });
  }

  return Response.json({ ok: true });
};
