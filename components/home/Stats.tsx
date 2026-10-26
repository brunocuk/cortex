import Reveal from "@/components/Reveal";
import CountUp from "@/components/CountUp";

const stats = [
  {
    value: <CountUp to={15} suffix="+" />,
    label: "godina operativnog iskustva u F&B sektoru",
  },
  {
    value: <CountUp to={100} suffix="+" />,
    label: "djelatnika u timovima kojima smo upravljali",
  },
  {
    value: <CountUp to={5} />,
    label: "modela suradnje, od Basica do Ključa u ruke",
  },
  {
    value: <CountUp to={0} decimals={2} suffix=" €" />,
    label: "neobjašnjene inventurne razlike: naš cilj svaki mjesec",
  },
];

export default function Stats() {
  return (
    <section className="border-y border-line">
      <div className="mx-auto grid max-w-6xl gap-px overflow-hidden bg-line px-0 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 0.08} className="bg-white">
            <div className="flex h-full flex-col gap-3 px-7 py-10">
              <span className="font-mono text-4xl font-semibold text-navy">
                {stat.value}
              </span>
              <span className="text-sm leading-relaxed text-muted">
                {stat.label}
              </span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
