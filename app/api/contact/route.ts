import { NextResponse } from "next/server";
import { Resend } from "resend";

type ContactPayload = {
  name?: string;
  business?: string;
  email?: string;
  phone?: string;
  message?: string;
};

const escapeHtml = (s: string) =>
  s
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");

export async function POST(request: Request) {
  let payload: ContactPayload;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Neispravan zahtjev." }, { status: 400 });
  }

  const name = payload.name?.trim() ?? "";
  const business = payload.business?.trim() ?? "";
  const email = payload.email?.trim() ?? "";
  const phone = payload.phone?.trim() ?? "";
  const message = payload.message?.trim() ?? "";

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Ime, e-mail i poruka su obavezni." },
      { status: 400 }
    );
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { error: "Unesite ispravnu e-mail adresu." },
      { status: 400 }
    );
  }
  if (name.length > 200 || business.length > 200 || phone.length > 50 || message.length > 5000) {
    return NextResponse.json({ error: "Poruka je predugačka." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    // Demo način rada dok domena i API ključ nisu postavljeni
    console.log("[kontakt] Upit (demo, e-mail nije poslan):", {
      name,
      business,
      email,
      phone,
      message,
    });
    return NextResponse.json({ ok: true, demo: true });
  }

  const resend = new Resend(apiKey);
  const to = process.env.CONTACT_TO ?? "info@cortex.hr";
  const from = process.env.CONTACT_FROM ?? "Cortex web <web@cortex.hr>";

  const html = `
    <h2>Novi upit s cortex.hr</h2>
    <p><strong>Ime:</strong> ${escapeHtml(name)}</p>
    <p><strong>Lokal / tvrtka:</strong> ${escapeHtml(business || "—")}</p>
    <p><strong>E-mail:</strong> ${escapeHtml(email)}</p>
    <p><strong>Telefon:</strong> ${escapeHtml(phone || "—")}</p>
    <p><strong>Poruka:</strong></p>
    <p>${escapeHtml(message).replaceAll("\n", "<br/>")}</p>
  `;

  const { error } = await resend.emails.send({
    from,
    to,
    replyTo: email,
    subject: `Upit s weba — ${name}${business ? ` (${business})` : ""}`,
    html,
  });

  if (error) {
    console.error("[kontakt] Resend greška:", error);
    return NextResponse.json(
      { error: "Slanje nije uspjelo. Pokušajte ponovno ili nam pišite izravno." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
