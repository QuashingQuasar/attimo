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
        htmlContent: `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"></head>
<body style="margin:0;padding:0;background-color:rgb(27,66,41);font-family:'Helvetica Neue',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:rgb(27,66,41);padding:60px 20px;">
    <tr><td align="center">
      <table width="100%" style="max-width:480px;" cellpadding="0" cellspacing="0">
        <tr><td style="text-align:center;padding-bottom:32px;">
          <p style="color:rgba(255,255,255,0.35);font-size:12px;letter-spacing:4px;text-transform:uppercase;margin:0;font-weight:600;">ATTIMO</p>
        </td></tr>
        <tr><td style="text-align:center;padding-bottom:36px;">
          <p style="color:rgba(255,255,255,0.7);font-size:16px;line-height:1.6;margin:0;">Here's your 15% off code for your first order.</p>
        </td></tr>
        <tr><td style="text-align:center;padding-bottom:36px;">
          <p style="color:#f5f0e8;font-size:32px;font-weight:700;letter-spacing:6px;margin:0;font-family:'Courier New',Courier,monospace;">FIRSTPRESS</p>
        </td></tr>
        <tr><td style="text-align:center;padding-bottom:40px;">
          <a href="https://attimo-oil.com" style="display:inline-block;background-color:#CDDB2D;color:#1B4229;font-size:15px;font-weight:600;text-decoration:none;padding:14px 36px;border-radius:8px;">Shop Now</a>
        </td></tr>
        <tr><td style="text-align:center;">
          <p style="color:rgba(255,255,255,0.3);font-size:12px;margin:0;line-height:1.5;">Apply at checkout. Valid for your first order.</p>
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
