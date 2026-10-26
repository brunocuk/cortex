import Reveal from "@/components/Reveal";

const pains = [
  {
    title: "Knjigovodstvo kasni, a papiri se ne slažu",
    text: "Vaš financijski knjigovođa nema vremena unositi svaku primku niti ga zanimaju normativi. Rezultat su fiktivni viškovi i manjak na papiru.",
  },
  {
    title: "Tihi gubici na normativima",
    text: "Dobavljači podižu cijene bez najave. Ako normativi i kalkulacije nisu ažurirani istog dana, marža se topi dok vi mislite da radite s profitom.",
  },
  {
    title: "Inventura je noćna mora",
    text: "Popisi se rade na papirićima, nitko ne zna tko je kriv za razlike, a kalo i prolijevanje se otpisuju „od oka“.",
  },
  {
    title: "Previše aplikacija, premalo reda",
    text: "Papirnati HACCP koji nitko ne ispunjava na vrijeme, neusklađeni rasporedi smjena i kasa koja ne komunicira s kuhinjom.",
  },
];

export default function PainPoints() {
  return (
    <section className="bg-frost">
      <div className="mx-auto max-w-6xl px-5 py-20 lg:py-28">
        <Reveal>
          <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-amber">
            Zvuči li vam ovo poznato?
          </p>
          <h2 className="font-display mt-4 max-w-2xl text-3xl font-bold tracking-tight text-navy sm:text-4xl">
            Većina lokala ne gubi novac na prometu, nego u skladištu i šanku.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
          {pains.map((pain, i) => (
            <Reveal key={pain.title} delay={i * 0.08} className="bg-white">
              <div className="group h-full p-7 transition-colors hover:bg-frost lg:p-9">
                <h3 className="font-display text-lg font-semibold text-navy">
                  {pain.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-muted">
                  {pain.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
