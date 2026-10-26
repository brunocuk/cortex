"use client";

import { FormEvent, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

type Answers = {
  objectType: string;
  phase: string;
  software: string;
  pains: string[];
  name: string;
  business: string;
  email: string;
  phone: string;
  note: string;
};

const OBJECT_TYPES = [
  "Caffe bar",
  "Bistro / fast food",
  "Restoran",
  "Hotel",
  "Više objekata / grupacija",
  "Nešto drugo",
];

const PHASES = [
  "Radimo već duže vrijeme",
  "Nedavno smo otvorili",
  "Otvaramo novi objekt",
  "Preuzimamo ili restrukturiramo postojeći",
];

const SOFTWARE = [
  "Remaris",
  "Neki drugi softver",
  "Nemamo robni softver",
  "Nisam siguran/na",
];

const PAINS = [
  "Inventurne razlike i manjkovi",
  "Food i beverage cost, topljenje marže",
  "Kasni ili netočni izvještaji za knjigovodstvo",
  "Unos primki i administracija",
  "Papirnati HACCP i evidencije",
  "Normativi i kalkulacije nisu ažurni",
  "Otvaranje ili postavljanje novog objekta",
  "Nešto drugo",
];

const STEPS = [
  "Tip objekta",
  "Faza poslovanja",
  "Softver",
  "Bolne točke",
  "Kontakt",
];

const inputClass =
  "w-full rounded-lg border border-line bg-white px-4 py-3 text-[15px] text-navy placeholder:text-muted/60 transition-colors focus:border-teal focus:outline-none";

function OptionButton({
  label,
  selected,
  onClick,
}: {
  label: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      className={`rounded-xl border px-5 py-4 text-left text-[15px] font-medium transition-all ${
        selected
          ? "border-teal bg-teal-soft/50 text-navy shadow-[0_8px_20px_-12px_rgba(13,148,136,0.5)]"
          : "border-line bg-white text-navy hover:border-teal/50"
      }`}
    >
      <span className="flex items-center justify-between gap-3">
        {label}
        <span
          aria-hidden
          className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border transition-colors ${
            selected ? "border-teal bg-teal text-white" : "border-line"
          }`}
        >
          {selected && (
            <svg className="h-3 w-3" viewBox="0 0 20 20" fill="none">
              <path
                d="M4 10.5L8.5 15L16 5.5"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </span>
      </span>
    </button>
  );
}

export default function AnalysisWizard() {
  const reduced = useReducedMotion();
  const [step, setStep] = useState(0);
  const [direction, setDirection] = useState(1);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState("");
  const [answers, setAnswers] = useState<Answers>({
    objectType: "",
    phase: "",
    software: "",
    pains: [],
    name: "",
    business: "",
    email: "",
    phone: "",
    note: "",
  });

  const set = <K extends keyof Answers>(key: K, value: Answers[K]) =>
    setAnswers((a) => ({ ...a, [key]: value }));

  const canProceed = [
    answers.objectType !== "",
    answers.phase !== "",
    answers.software !== "",
    answers.pains.length > 0,
    true,
  ][step];

  // Štiti od submita koji proklizne tijekom tranzicije koraka
  // (gumb postane "submit" prije nego se polja zadnjeg koraka montiraju)
  const lastStepChange = useRef(0);

  const goto = (next: number) => {
    lastStepChange.current = performance.now();
    setDirection(next > step ? 1 : -1);
    setStep(next);
  };

  const advance = () => {
    if (canProceed && step < STEPS.length - 1) goto(step + 1);
  };

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (performance.now() - lastStepChange.current < 500) return;
    if (!answers.name.trim() || !answers.email.trim()) {
      setError("Ispunite obavezna polja: ime i e-mail.");
      setStatus("error");
      return;
    }
    setStatus("sending");
    setError("");

    const message = [
      "Zahtjev za besplatnu analizu zaliha",
      "",
      `Tip objekta: ${answers.objectType}`,
      `Faza poslovanja: ${answers.phase}`,
      `Robni softver: ${answers.software}`,
      `Bolne točke: ${answers.pains.join(", ")}`,
      answers.note ? `Napomena: ${answers.note}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: answers.name,
          business: answers.business,
          email: answers.email,
          phone: answers.phone,
          message,
        }),
      });
      const body = await res.json();
      if (!res.ok) {
        setError(body.error ?? "Slanje nije uspjelo. Pokušajte ponovno.");
        setStatus("error");
        return;
      }
      setStatus("sent");
    } catch {
      setError("Slanje nije uspjelo. Provjerite vezu i pokušajte ponovno.");
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-2xl border border-teal/40 bg-teal-soft/50 p-10 text-center">
        <p className="font-display text-2xl font-bold text-navy">
          Zahtjev je zaprimljen. Hvala!
        </p>
        <p className="mx-auto mt-3 max-w-md text-[15px] leading-relaxed text-muted">
          Pregledat ćemo vaše odgovore i javiti se u roku jednog radnog dana s
          terminom za uvodni razgovor i besplatnu reviziju kalkulacija.
        </p>
      </div>
    );
  }

  const variants = {
    enter: (dir: number) => (reduced ? {} : { x: dir * 56, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => (reduced ? {} : { x: dir * -56, opacity: 0 }),
  };

  return (
    <div className="rounded-2xl border border-line bg-white p-6 shadow-[0_24px_60px_-28px_rgba(11,37,69,0.25)] sm:p-9">
      {/* Progres */}
      <div className="flex items-center justify-between gap-4">
        <span className="font-mono text-xs font-medium uppercase tracking-[0.16em] text-muted">
          Korak {step + 1} / {STEPS.length}
        </span>
        <span className="font-mono hidden text-xs font-medium uppercase tracking-[0.16em] text-teal sm:block">
          {STEPS[step]}
        </span>
      </div>
      <div className="mt-3 h-1 overflow-hidden rounded-full bg-frost">
        <motion.div
          className="h-full rounded-full bg-teal"
          animate={{ width: `${((step + 1) / STEPS.length) * 100}%` }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>

      <form onSubmit={handleSubmit}>
        <div className="relative mt-8 overflow-hidden">
          <AnimatePresence mode="wait" custom={direction} initial={false}>
            <motion.div
              key={step}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              {step === 0 && (
                <fieldset>
                  <legend className="font-display text-xl font-bold text-navy sm:text-2xl">
                    Kakav objekt vodite?
                  </legend>
                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {OBJECT_TYPES.map((type) => (
                      <OptionButton
                        key={type}
                        label={type}
                        selected={answers.objectType === type}
                        onClick={() => set("objectType", type)}
                      />
                    ))}
                  </div>
                </fieldset>
              )}

              {step === 1 && (
                <fieldset>
                  <legend className="font-display text-xl font-bold text-navy sm:text-2xl">
                    U kojoj ste fazi poslovanja?
                  </legend>
                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {PHASES.map((phase) => (
                      <OptionButton
                        key={phase}
                        label={phase}
                        selected={answers.phase === phase}
                        onClick={() => set("phase", phase)}
                      />
                    ))}
                  </div>
                </fieldset>
              )}

              {step === 2 && (
                <fieldset>
                  <legend className="font-display text-xl font-bold text-navy sm:text-2xl">
                    Koji robni softver koristite?
                  </legend>
                  <p className="mt-2 text-sm text-muted">
                    Radimo i u vašem postojećem sustavu, ovo nam samo pomaže u
                    pripremi.
                  </p>
                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {SOFTWARE.map((sw) => (
                      <OptionButton
                        key={sw}
                        label={sw}
                        selected={answers.software === sw}
                        onClick={() => set("software", sw)}
                      />
                    ))}
                  </div>
                </fieldset>
              )}

              {step === 3 && (
                <fieldset>
                  <legend className="font-display text-xl font-bold text-navy sm:text-2xl">
                    Što vas najviše muči?
                  </legend>
                  <p className="mt-2 text-sm text-muted">
                    Odaberite sve što se odnosi na vas.
                  </p>
                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {PAINS.map((pain) => (
                      <OptionButton
                        key={pain}
                        label={pain}
                        selected={answers.pains.includes(pain)}
                        onClick={() =>
                          set(
                            "pains",
                            answers.pains.includes(pain)
                              ? answers.pains.filter((p) => p !== pain)
                              : [...answers.pains, pain]
                          )
                        }
                      />
                    ))}
                  </div>
                </fieldset>
              )}

              {step === 4 && (
                <fieldset>
                  <legend className="font-display text-xl font-bold text-navy sm:text-2xl">
                    Kamo da pošaljemo analizu?
                  </legend>
                  <div className="mt-6 space-y-5">
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label htmlFor="wiz-name" className="mb-1.5 block text-sm font-semibold text-navy">
                          Ime i prezime <span className="text-teal">*</span>
                        </label>
                        <input
                          id="wiz-name"
                          required
                          maxLength={200}
                          autoComplete="name"
                          value={answers.name}
                          onChange={(e) => set("name", e.target.value)}
                          className={inputClass}
                        />
                      </div>
                      <div>
                        <label htmlFor="wiz-business" className="mb-1.5 block text-sm font-semibold text-navy">
                          Naziv lokala / tvrtke
                        </label>
                        <input
                          id="wiz-business"
                          maxLength={200}
                          autoComplete="organization"
                          value={answers.business}
                          onChange={(e) => set("business", e.target.value)}
                          className={inputClass}
                        />
                      </div>
                    </div>
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label htmlFor="wiz-email" className="mb-1.5 block text-sm font-semibold text-navy">
                          E-mail <span className="text-teal">*</span>
                        </label>
                        <input
                          id="wiz-email"
                          type="email"
                          required
                          maxLength={200}
                          autoComplete="email"
                          value={answers.email}
                          onChange={(e) => set("email", e.target.value)}
                          className={inputClass}
                        />
                      </div>
                      <div>
                        <label htmlFor="wiz-phone" className="mb-1.5 block text-sm font-semibold text-navy">
                          Telefon
                        </label>
                        <input
                          id="wiz-phone"
                          type="tel"
                          maxLength={50}
                          autoComplete="tel"
                          value={answers.phone}
                          onChange={(e) => set("phone", e.target.value)}
                          className={inputClass}
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="wiz-note" className="mb-1.5 block text-sm font-semibold text-navy">
                        Napomena (neobavezno)
                      </label>
                      <textarea
                        id="wiz-note"
                        rows={3}
                        maxLength={2000}
                        placeholder="Nešto što bismo trebali znati prije razgovora?"
                        value={answers.note}
                        onChange={(e) => set("note", e.target.value)}
                        className={inputClass}
                      />
                    </div>
                  </div>
                </fieldset>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {status === "error" && (
          <p role="alert" className="mt-5 rounded-lg border border-amber/40 bg-amber/10 px-4 py-3 text-sm font-medium text-navy">
            {error}
          </p>
        )}

        {/* Navigacija */}
        <div className="mt-8 flex items-center justify-between gap-4 border-t border-line pt-6">
          <button
            type="button"
            onClick={() => goto(step - 1)}
            disabled={step === 0}
            className="rounded-full border border-line px-6 py-3 text-sm font-semibold text-navy transition-colors hover:border-teal hover:text-teal disabled:pointer-events-none disabled:opacity-0"
          >
            ← Natrag
          </button>

          {step < STEPS.length - 1 ? (
            <button
              type="button"
              onClick={advance}
              disabled={!canProceed}
              className="rounded-full bg-teal px-7 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-teal-bright disabled:translate-y-0 disabled:opacity-40"
            >
              Dalje →
            </button>
          ) : (
            <button
              type="submit"
              disabled={status === "sending"}
              className="rounded-full bg-teal px-7 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_-12px_rgba(13,148,136,0.7)] transition-all hover:-translate-y-0.5 hover:bg-teal-bright disabled:translate-y-0 disabled:opacity-60"
            >
              {status === "sending" ? "Slanje…" : "Zatražite besplatnu analizu"}
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
