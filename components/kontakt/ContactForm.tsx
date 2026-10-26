"use client";

import { FormEvent, useState } from "react";

type Status = "idle" | "sending" | "sent" | "error";

const inputClass =
  "w-full rounded-lg border border-line bg-white px-4 py-3 text-[15px] text-navy placeholder:text-muted/60 transition-colors focus:border-teal focus:outline-none";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const body = await res.json();
      if (!res.ok) {
        setError(body.error ?? "Slanje nije uspjelo. Pokušajte ponovno.");
        setStatus("error");
        return;
      }
      setStatus("sent");
      form.reset();
    } catch {
      setError("Slanje nije uspjelo. Provjerite vezu i pokušajte ponovno.");
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-2xl border border-teal/40 bg-teal-soft/50 p-8 text-center">
        <p className="font-display text-xl font-bold text-navy">
          Upit je zaprimljen. Hvala!
        </p>
        <p className="mt-2 text-[15px] text-muted">
          Javljamo se u roku jednog radnog dana da dogovorimo uvodni razgovor.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-5 text-sm font-semibold text-teal hover:underline"
        >
          Pošaljite novi upit
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-semibold text-navy">
            Ime i prezime <span className="text-teal">*</span>
          </label>
          <input
            id="name"
            name="name"
            required
            maxLength={200}
            autoComplete="name"
            placeholder="npr. Ivan Horvat"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="business" className="mb-1.5 block text-sm font-semibold text-navy">
            Naziv lokala / tvrtke
          </label>
          <input
            id="business"
            name="business"
            maxLength={200}
            autoComplete="organization"
            placeholder="npr. Caffe bar Centar"
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-navy">
            E-mail <span className="text-teal">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            maxLength={200}
            autoComplete="email"
            placeholder="vi@primjer.hr"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-semibold text-navy">
            Telefon
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            maxLength={50}
            autoComplete="tel"
            placeholder="+385 9x xxx xxxx"
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-navy">
          Poruka <span className="text-teal">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          maxLength={5000}
          rows={5}
          placeholder="Ukratko opišite svoj objekt (tip, veličina, softver koji koristite) i što vas najviše muči."
          className={inputClass}
        />
      </div>

      {status === "error" && (
        <p role="alert" className="rounded-lg border border-amber/40 bg-amber/10 px-4 py-3 text-sm font-medium text-navy">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full rounded-full bg-teal px-7 py-4 text-sm font-semibold text-white shadow-[0_12px_30px_-12px_rgba(13,148,136,0.7)] transition-all hover:-translate-y-0.5 hover:bg-teal-bright disabled:translate-y-0 disabled:opacity-60 sm:w-auto"
      >
        {status === "sending" ? "Slanje…" : "Pošaljite upit"}
      </button>
    </form>
  );
}
