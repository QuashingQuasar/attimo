import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const BREVO_API_KEY = Deno.env.get('BREVO_API_KEY');
    if (!BREVO_API_KEY) {
      throw new Error('BREVO_API_KEY is not configured');
    }

    const { email } = await req.json();
    if (!email || typeof email !== 'string') {
      return new Response(JSON.stringify({ error: 'Valid email is required' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // Send transactional email via Brevo SMTP API
    const response = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'api-key': BREVO_API_KEY,
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        to: [{ email }],
        sender: { name: 'ATTIMO', email: 'hello@attimo-oil.com' },
        subject: 'Your 15% discount code from ATTIMO',
        htmlContent: `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"></head>
<body style="margin:0;padding:0;background-color:#f5f3ee;font-family:'Helvetica Neue',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f5f3ee;padding:40px 20px;">
    <tr><td align="center">
      <table width="100%" style="max-width:520px;background-color:#1B4229;border-radius:12px;padding:40px 32px;" cellpadding="0" cellspacing="0">
        <tr><td style="text-align:center;">
          <h1 style="color:#ffffff;font-size:24px;margin:0 0 8px;font-weight:700;">Welcome to ATTIMO</h1>
          <p style="color:hsl(45,25%,80%);font-size:15px;margin:0 0 28px;line-height:1.5;">
            Here's 15% off on your first order.
          </p>
          <div style="background-color:hsl(122,42%,25%);border-radius:8px;padding:20px;margin-bottom:24px;">
            <p style="color:hsl(45,25%,80%);font-size:13px;margin:0 0 6px;">Your discount code</p>
            <p style="color:#ffffff;font-size:28px;font-weight:700;letter-spacing:4px;margin:0;">FIRSTPRESS</p>
          </div>
          <a href="https://attimo-oil.com" style="display:inline-block;background-color:#CDDB2D;color:#1B4229;font-size:15px;font-weight:600;text-decoration:none;padding:14px 32px;border-radius:8px;">
            Shop Now
          </a>
          <p style="color:hsl(45,25%,55%);font-size:12px;margin:28px 0 0;line-height:1.5;">
            Apply the code at checkout. Valid for your first order.
          </p>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`,
      }),
    });

    const data = await response.text();

    if (!response.ok) {
      console.error(`Brevo transactional email error [${response.status}]:`, data);
      return new Response(JSON.stringify({ error: 'Failed to send email', details: data }), {
        status: response.status,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error in send-discount-email:', error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
