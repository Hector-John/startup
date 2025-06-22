import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const body = await req.json();

  const { name, email, phone, serviceType, message } = body;

  if (!name || !email || !serviceType) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }

  const businessEmailHTML = `
    <div style="font-family: sans-serif;">
      <h2>📥 New Quote Request</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ""}
      <p><strong>Service:</strong> ${serviceType}</p>
      ${
        message
          ? `<p><strong>Message:</strong></p><p style="white-space: pre-wrap;">${message}</p>`
          : ""
      }
    </div>
  `;

  const clientAutoReplyHTML = `
    <div style="font-family: sans-serif;">
      <h2>Hey ${name.split(" ")[0]},</h2>
      <p>Thanks for reaching out to <strong>Kheem Tech</strong> about <strong>${serviceType}</strong>.</p>
      <p>We’ve received your request and will review it shortly. Expect a reply soon.</p>
      <br/>
      <p>— The Kheem Tech Team</p>
    </div>
  `;

  try {
    // Send to Kheem Tech
    await resend.emails.send({
      from: process.env.RESEND_FROM!,
      to: "hakheem67@gmail.com", 
      subject: `New Quote Request — ${serviceType}`,
      html: businessEmailHTML,
    });

    // Send auto-reply to user
    await resend.emails.send({
      from: process.env.RESEND_FROM!,
      to: email,
      subject: `Thanks for contacting Kheem Tech 👋`,
      html: clientAutoReplyHTML,
    });

    return NextResponse.json({ success: true });
  } catch (err: any) {
    console.error("Resend error:", err);
    return NextResponse.json({ error: "Failed to send emails." }, { status: 500 });
  }
}
