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

    const patientName = data.fullName || data.name || 'Belirtilmedi';
    const patientPhone = data.phone || 'Belirtilmedi';
    const patientEmail = data.email || 'Belirtilmedi';
    const patientCountry = data.country || 'Belirtilmedi';
    const patientTreatment = Array.isArray(data.treatments)
      ? data.treatments.join(', ')
      : data.treatment || data.treatments || 'Genel Muayene / Belirtilmedi';
    const patientMessage = data.message || data.notes || 'Mesaj girilmedi';
    const formSource = data.formType || 'Web İletişim Formu';
    const currentLocale = (data.locale || 'en').toUpperCase();
    const cleanPhone = patientPhone.replace(/[^0-9+]/g, '');
    const whatsappLink = cleanPhone ? `https://wa.me/${cleanPhone.replace('+', '')}` : null;
    const formattedDate = new Date().toLocaleString('tr-TR', { timeZone: 'Europe/Istanbul' });

    const htmlBody = `
<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Master Smile Studio - Hasta Talebi</title>
</head>
<body style="margin: 0; padding: 24px; background-color: #f1f5f9; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #0f172a; line-height: 1.5;">
  <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; border: 1px solid #cbd5e1; overflow: hidden;">
    <!-- Header -->
    <tr>
      <td style="background-color: #0c1b4d; padding: 24px 28px; border-bottom: 3px solid #d58936;">
        <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0">
          <tr>
            <td>
              <div style="font-size: 11px; font-weight: 700; color: #d58936; letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 4px;">
                MASTER SMILE STUDIO ANTALYA
              </div>
              <h1 style="margin: 0; font-size: 18px; font-weight: 600; color: #ffffff;">
                Yeni Hasta Konsültasyon Talebi
              </h1>
            </td>
            <td align="right" style="vertical-align: middle;">
              <span style="display: inline-block; background-color: rgba(255, 255, 255, 0.12); color: #f8fafc; font-size: 12px; font-weight: 600; padding: 4px 10px; border-radius: 4px; border: 1px solid rgba(255, 255, 255, 0.2);">
                ${currentLocale}
              </span>
            </td>
          </tr>
        </table>
      </td>
    </tr>

    <!-- Body Content -->
    <tr>
      <td style="padding: 28px;">
        <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="border-collapse: collapse;">
          <!-- Ad Soyad -->
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-size: 13px; font-weight: 600; color: #64748b; width: 140px;">
              Hasta Adı Soyadı
            </td>
            <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-size: 14px; font-weight: 600; color: #0f172a;">
              ${patientName}
            </td>
          </tr>

          <!-- Telefon -->
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-size: 13px; font-weight: 600; color: #64748b;">
              Telefon (WhatsApp)
            </td>
            <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-size: 14px; font-weight: 600; color: #0f172a;">
              ${patientPhone}
            </td>
          </tr>

          <!-- E-posta -->
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-size: 13px; font-weight: 600; color: #64748b;">
              E-posta Adresi
            </td>
            <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-size: 14px; color: #0f172a;">
              ${patientEmail !== 'Belirtilmedi' ? `<a href="mailto:${patientEmail}" style="color: #0284c7; text-decoration: none;">${patientEmail}</a>` : 'Belirtilmedi'}
            </td>
          </tr>

          <!-- Ülke -->
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-size: 13px; font-weight: 600; color: #64748b;">
              Ülke / Konum
            </td>
            <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-size: 14px; color: #0f172a;">
              ${patientCountry}
            </td>
          </tr>

          <!-- Tedavi -->
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-size: 13px; font-weight: 600; color: #64748b;">
              Talep Edilen Tedavi
            </td>
            <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-size: 14px; font-weight: 600; color: #0c1b4d;">
              ${patientTreatment}
            </td>
          </tr>

          <!-- Form Kaynağı -->
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-size: 13px; font-weight: 600; color: #64748b;">
              Form Kaynağı
            </td>
            <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-size: 13px; color: #475569;">
              ${formSource}
            </td>
          </tr>

          <!-- Mesaj / Notlar -->
          <tr>
            <td colspan="2" style="padding-top: 16px;">
              <div style="font-size: 13px; font-weight: 600; color: #64748b; margin-bottom: 6px;">
                Hasta Mesajı / Klinik Not:
              </div>
              <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-left: 3px solid #0c1b4d; padding: 12px 14px; border-radius: 4px; font-size: 13px; color: #334155; line-height: 1.6;">
                ${patientMessage.replace(/\n/g, '<br/>')}
              </div>
            </td>
          </tr>
        </table>

        <!-- WhatsApp Action Button -->
        ${
          whatsappLink
            ? `
        <div style="margin-top: 24px; text-align: center;">
          <a href="${whatsappLink}" target="_blank" style="display: inline-block; background-color: #16a34a; color: #ffffff; text-decoration: none; padding: 11px 24px; border-radius: 6px; font-size: 14px; font-weight: 600; letter-spacing: -0.01em;">
            WhatsApp ile İletişime Geç
          </a>
        </div>`
            : ''
        }
      </td>
    </tr>

    <!-- Footer -->
    <tr>
      <td style="background-color: #f8fafc; padding: 14px 28px; border-top: 1px solid #e2e8f0; text-align: center; font-size: 12px; color: #94a3b8;">
        Master Smile Studio • Form Kayıt Zamanı: ${formattedDate}
      </td>
    </tr>
  </table>
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
      subject: `Yeni Hasta Formu: ${patientName} (${patientTreatment})`,
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
