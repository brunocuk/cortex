import Link from "next/link";
import Reveal from "@/components/Reveal";

const modules = [
  {
    name: "Basic",
    desc: "Operativna robna administracija — primke, kalkulacije, normativi i mjesečni izvještaji za knjigovodstvo.",
  },
  {
    name: "Medium",
    desc: "Sve iz Basica + obrada inventura, analiza viškova i manjkova te rad s osobljem na točnosti evidencije.",
  },
  {
    name: "Premium",
    desc: "Sve iz Mediuma + cjeloviti F&B kontroling, digitalizacija procesa i inženjering jelovnika.",
  },
  {
    name: "Premium+",
    desc: "Sve iz Premiuma + mjesečni operativni P&L, pregovori s dobavljačima i strateško vođenje.",
    featured: true,
  },
  {
    name: "Ključ u ruke",
    desc: "Kompletno postavljanje poslovanja za nove objekte ili restrukturiranje postojećih — od nule do otvaranja.",
  },
];

export default function Modules() {
  return (
    <section className="bg-frost">
      <div className="mx-auto max-w-6xl px-5 py-20 lg:py-28">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-teal">
                Modeli suradnje
              </p>
              <h2 className="font-display mt-4 max-w-xl text-3xl font-bold tracking-tight text-navy sm:text-4xl">
                Od robne administracije do eksternog direktora poslovanja.
              </h2>
            </div>
            <Link
              href="/usluge"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-teal"
            >
              Usporedite sve module
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {modules.map((mod, i) => (
            <Reveal key={mod.name} delay={i * 0.07} className="h-full">
              <Link
                href="/usluge"
                className={`flex h-full flex-col rounded-2xl border p-6 transition-all hover:-translate-y-1 hover:shadow-[0_20px_40px_-20px_rgba(11,37,69,0.3)] ${
                  mod.featured
                    ? "border-teal bg-navy text-white"
                    : "border-line bg-white"
                }`}
              >
                <span
                  className={`font-mono text-[11px] uppercase tracking-[0.16em] ${
                    mod.featured ? "text-teal-bright" : "text-muted"
                  }`}
                >
                  Modul {String(i + 1).padStart(2, "0")}
                </span>
                <h3
                  className={`font-display mt-3 text-xl font-bold ${
                    mod.featured ? "text-white" : "text-navy"
                  }`}
                >
                  {mod.name}
                </h3>
                <p
                  className={`mt-3 flex-1 text-[13px] leading-relaxed ${
                    mod.featured ? "text-white/75" : "text-muted"
                  }`}
                >
                  {mod.desc}
                </p>
                <span
                  className={`mt-5 text-xs font-semibold ${
                    mod.featured ? "text-teal-bright" : "text-teal"
                  }`}
                >
                  Saznajte više →
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
