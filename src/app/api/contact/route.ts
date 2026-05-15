import { NextResponse } from 'next/server';
import { resolveMx } from 'node:dns/promises';
import nodemailer from 'nodemailer';

export const runtime = 'nodejs';

const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const hasMailExchange = async (email: string) => {
  const domain = email.split('@')[1];

  if (!domain) {
    return false;
  }

  try {
    const records = await resolveMx(domain);
    return records.length > 0;
  } catch {
    return false;
  }
};

export async function POST(request: Request) {
  try {
    const { senderEmail, message } = await request.json();

    if (typeof senderEmail !== 'string' || !isValidEmail(senderEmail)) {
      return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 });
    }

    if (!(await hasMailExchange(senderEmail))) {
      return NextResponse.json({ error: 'Please enter an email address with a valid mail domain.' }, { status: 400 });
    }

    if (typeof message !== 'string' || message.trim().length < 5) {
      return NextResponse.json({ error: 'Please enter a message with at least 10 characters.' }, { status: 400 });
    }

    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const contactEmail = process.env.CONTACT_EMAIL || process.env.NEXT_PUBLIC_CONTACT_EMAIL || smtpUser;

    if (!smtpUser || !smtpPass || !contactEmail) {
      return NextResponse.json({ error: 'Email service is not configured yet.' }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: Number(process.env.SMTP_PORT || 465),
      secure: process.env.SMTP_SECURE ? process.env.SMTP_SECURE === 'true' : true,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    await transporter.sendMail({
      from: process.env.SMTP_FROM || `"Portfolio Contact" <${smtpUser}>`,
      to: contactEmail,
      replyTo: senderEmail,
      subject: 'Portfolio inquiry',
      text: `From: ${senderEmail}\n\n${message.trim()}`,
    });

    return NextResponse.json({ message: 'Message sent successfully.' });
  } catch {
    return NextResponse.json({ error: 'Unable to send your message right now.' }, { status: 500 });
  }
}
