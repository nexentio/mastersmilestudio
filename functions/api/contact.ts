// @ts-ignore
import { connect } from 'cloudflare:sockets';

interface ContactPayload {
  name?: string;
  fullName?: string;
  email?: string;
  phone?: string;
  country?: string;
  treatment?: string;
  treatments?: string | string[];
  message?: string;
  notes?: string;
  formType?: string;
  locale?: string;
  pageUrl?: string;
}

const SMTP_HOST = 'smtp.gmail.com';
const SMTP_PORT = 465;
const SMTP_USER = 'nexentiosoft@gmail.com';
const SMTP_PASS = 'irlqsakxfyqelaao';
const TO_EMAIL = 'info@mastersmilestudio.com';
const CC_EMAIL = 'nexentiosoft@gmail.com';

export async function onRequestPost(context: any): Promise<Response> {
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  try {
    let data: ContactPayload = {};
    const contentType = context.request.headers.get('content-type') || '';

    if (contentType.includes('application/json')) {
      data = await context.request.json();
    } else if (contentType.includes('application/x-www-form-urlencoded') || contentType.includes('multipart/form-data')) {
      const formData = await context.request.formData();
      data = Object.fromEntries(formData.entries()) as any;
    }

    const patientName = data.fullName || data.name || 'İsimsiz Ziyaretçi';
    const patientPhone = data.phone || 'Belirtilmedi';
    const patientEmail = data.email || 'Belirtilmedi';
    const patientCountry = data.country || 'Belirtilmedi';
    const patientTreatment = Array.isArray(data.treatments)
      ? data.treatments.join(', ')
      : data.treatment || data.treatments || 'Genel Muayene / Belirtilmedi';
    const patientMessage = data.message || data.notes || 'Mesaj girilmedi';
    const formSource = data.formType || 'Web İletişim Formu';
    const currentLocale = data.locale || 'en';
    const cleanPhone = patientPhone.replace(/[^0-9+]/g, '');
    const whatsappLink = cleanPhone ? `https://wa.me/${cleanPhone.replace('+', '')}` : null;

    const htmlBody = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f8fafc; margin: 0; padding: 24px; color: #1e293b; }
    .card { max-width: 620px; margin: 0 auto; background: #ffffff; border-radius: 16px; border: 1px solid #e2e8f0; overflow: hidden; box-shadow: 0 10px 25px rgba(0,0,0,0.05); }
    .header { background: linear-gradient(135deg, #0c1b4d 0%, #060e28 100%); padding: 28px; text-align: center; color: #ffffff; }
    .header h1 { margin: 0; font-size: 20px; font-weight: 700; letter-spacing: -0.02em; }
    .header p { margin: 6px 0 0 0; font-size: 13px; color: #94a3b8; }
    .badge { display: inline-block; background: #d58936; color: #ffffff; padding: 4px 12px; border-radius: 9999px; font-size: 11px; font-weight: 600; text-transform: uppercase; margin-top: 10px; }
    .content { padding: 28px; }
    .field-group { margin-bottom: 18px; padding-bottom: 14px; border-bottom: 1px solid #f1f5f9; }
    .field-label { font-size: 11px; font-weight: 700; color: #64748b; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 4px; }
    .field-value { font-size: 15px; font-weight: 600; color: #0f172a; }
    .message-box { background: #f8fafc; border-left: 4px solid #d58936; padding: 14px 18px; border-radius: 6px; font-size: 14px; color: #334155; line-height: 1.6; margin-top: 6px; }
    .cta-container { text-align: center; margin: 26px 0 10px 0; }
    .wa-button { display: inline-block; background: #22c55e; color: #ffffff !important; padding: 12px 28px; border-radius: 9999px; text-decoration: none; font-weight: 700; font-size: 14px; box-shadow: 0 4px 12px rgba(34, 197, 94, 0.3); }
    .footer { background: #f8fafc; padding: 16px 28px; text-align: center; font-size: 12px; color: #94a3b8; border-top: 1px solid #f1f5f9; }
  </style>
</head>
<body>
  <div class="card">
    <div class="header">
      <h1>🦷 Master Smile Studio — Yeni Hasta Talebi</h1>
      <p>Web sitesi üzerinden yeni bir konsültasyon formu iletildi.</p>
      <span class="badge">${formSource} • Dil: ${currentLocale.toUpperCase()}</span>
    </div>
    <div class="content">
      <div class="field-group">
        <div class="field-label">Hasta Adı Soyadı</div>
        <div class="field-value">${patientName}</div>
      </div>

      <div class="field-group">
        <div class="field-label">Telefon Numarası (WhatsApp)</div>
        <div class="field-value">${patientPhone}</div>
      </div>

      <div class="field-group">
        <div class="field-label">E-posta Adresi</div>
        <div class="field-value">${patientEmail}</div>
      </div>

      <div class="field-group">
        <div class="field-label">Ülke / Konum</div>
        <div class="field-value">${patientCountry}</div>
      </div>

      <div class="field-group">
        <div class="field-label">İlgilenilen Tedavi</div>
        <div class="field-value" style="color: #d58936;">${patientTreatment}</div>
      </div>

      <div class="field-group" style="border-bottom: none; margin-bottom: 0;">
        <div class="field-label">Hasta Notu / Mesajı</div>
        <div class="message-box">${patientMessage.replace(/\n/g, '<br/>')}</div>
      </div>

      ${
        whatsappLink
          ? `<div class="cta-container">
              <a href="${whatsappLink}" target="_blank" class="wa-button">
                💬 Hastaya WhatsApp'tan Yanıt Ver
              </a>
            </div>`
          : ''
      }
    </div>
    <div class="footer">
      Master Smile Studio Antalya • Form Gönderim Zamanı: ${new Date().toLocaleString('tr-TR', { timeZone: 'Europe/Istanbul' })}
    </div>
  </div>
</body>
</html>
    `;

    await sendSmtpEmail({
      host: SMTP_HOST,
      port: SMTP_PORT,
      user: SMTP_USER,
      pass: SMTP_PASS,
      from: `Master Smile Studio <${SMTP_USER}>`,
      to: TO_EMAIL,
      cc: CC_EMAIL,
      subject: `Yeni Hasta Formu: ${patientName} - ${patientTreatment}`,
      html: htmlBody,
    });

    return new Response(JSON.stringify({ success: true, message: 'Message sent successfully' }), {
      status: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error: any) {
    console.error('Contact form submission error:', error);
    return new Response(
      JSON.stringify({ success: false, error: error.message || 'Failed to send message' }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
}

export async function onRequestOptions(): Promise<Response> {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}

// Cloudflare Worker TLS Socket SMTP Client
async function sendSmtpEmail({
  host,
  port,
  user,
  pass,
  from,
  to,
  cc,
  subject,
  html,
}: {
  host: string;
  port: number;
  user: string;
  pass: string;
  from: string;
  to: string;
  cc?: string;
  subject: string;
  html: string;
}) {
  const socket = connect({ hostname: host, port }, { secureTransport: 'on' });
  const reader = socket.readable.getReader();
  const writer = socket.writable.getWriter();
  const encoder = new TextEncoder();
  const decoder = new TextDecoder();

  async function readLine(): Promise<string> {
    const { value, done } = await reader.read();
    if (done || !value) return '';
    return decoder.decode(value);
  }

  async function sendCommand(cmd: string, expectedCode: string): Promise<string> {
    await writer.write(encoder.encode(cmd + '\r\n'));
    const response = await readLine();
    if (!response.startsWith(expectedCode)) {
      throw new Error(`SMTP Error after "${cmd.slice(0, 10)}...": ${response.trim()}`);
    }
    return response;
  }

  // 1. Read greeting
  const greeting = await readLine();
  if (!greeting.startsWith('220')) {
    throw new Error(`SMTP Greeting failed: ${greeting}`);
  }

  // 2. EHLO
  await sendCommand('EHLO localhost', '250');

  // 3. AUTH LOGIN
  await sendCommand('AUTH LOGIN', '334');

  // 4. Send Base64 Username
  await sendCommand(btoa(user), '334');

  // 5. Send Base64 Password
  await sendCommand(btoa(pass), '235');

  // 6. MAIL FROM
  await sendCommand(`MAIL FROM:<${user}>`, '250');

  // 7. RCPT TO (Primary)
  await sendCommand(`RCPT TO:<${to}>`, '250');

  // 8. RCPT TO (CC if present)
  if (cc) {
    await sendCommand(`RCPT TO:<${cc}>`, '250');
  }

  // 9. DATA
  await sendCommand('DATA', '354');

  // 10. Email content with MIME headers
  const utf8Subject = `=?UTF-8?B?${btoa(unescape(encodeURIComponent(subject)))}?=`;
  const rawEmail = [
    `From: ${from}`,
    `To: ${to}`,
    cc ? `Cc: ${cc}` : '',
    `Subject: ${utf8Subject}`,
    'MIME-Version: 1.0',
    'Content-Type: text/html; charset=UTF-8',
    'Content-Transfer-Encoding: 8bit',
    '',
    html,
    '',
    '.',
  ]
    .filter((line) => line !== null && line !== undefined)
    .join('\r\n');

  await sendCommand(rawEmail, '250');

  // 11. QUIT
  try {
    await writer.write(encoder.encode('QUIT\r\n'));
  } catch {}

  try {
    reader.releaseLock();
    writer.releaseLock();
    await socket.close();
  } catch {}
}
