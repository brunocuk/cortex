import Reveal from "@/components/Reveal";

const benefits = [
  {
    title: "Čisto stanje od nultog dana",
    tag: "Clean Start pristup",
    text: "Postavljamo vašu bazu artikala, skladišta i normativa od nule. Brišemo povijesni nered, krive jedinice mjere i zaboravljene šifre. Od prvog dana znate točno stanje svakog decilitra i grama.",
  },
  {
    title: "Rasterećenje od administracije",
    tag: "Primke i e-računi",
    text: "Zaboravite na sate provedene uz kalkulator i račune. Mi unosimo sve ulazne račune, e-račune i maloprodajne račune. Vaš financijski servis svakog 1. u mjesecu dobiva proknjižene i matematički egzaktne izvještaje.",
  },
  {
    title: "Cjelovita digitalizacija radnih procesa",
    tag: "HACCP · smjene · narudžbe",
    text: "Uvodimo red u radnu svakodnevicu vašeg tima: digitalni HACCP sustav, digitalno planiranje smjena i evidenciju rada te povezivanje mobilnih narudžbi i kuhinjskih ekrana.",
  },
  {
    title: "F&B kontroling i zaštita marže",
    tag: "Food & Beverage Cost",
    text: "Ne gledamo samo što je ušlo, nego kamo je otišlo. Analiziramo vaš stvarni F&B Cost, upozoravamo vas čim ulazna cijena sirovine ugrozi prodajnu cijenu i radimo inženjering jelovnika.",
  },
  {
    title: "Mjesečni operativni P&L",
    tag: "Račun dobiti i gubitka",
    text: "Ne čekajte porezne bilance krajem godine. Svakog mjeseca dobivate jasan upravljački P&L: promet, stvarni trošak robe, trošak rada, režije i operativna marža.",
  },
];

export default function Benefits() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-5 py-20 lg:py-28">
        <Reveal>
          <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-teal">
            Što dobivate s Cortexom?
          </p>
          <h2 className="font-display mt-4 max-w-2xl text-3xl font-bold tracking-tight text-navy sm:text-4xl">
            Ne prodajemo vam još jedan program. Donosimo operativni red.
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-muted">
            15+ godina iskustva vođenja najvećih ugostiteljskih sustava — u
            vašem lokalu.
          </p>
        </Reveal>

        <div className="mt-14 space-y-0">
          {benefits.map((benefit, i) => (
            <Reveal key={benefit.title} delay={0.05}>
              <div className="keyline grid gap-3 py-8 sm:grid-cols-[88px_1fr] lg:grid-cols-[88px_1fr_220px] lg:gap-8">
                <span className="font-mono text-sm font-medium text-teal">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-xl font-semibold text-navy">
                    {benefit.title}
                  </h3>
                  <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-muted">
                    {benefit.text}
                  </p>
                </div>
                <span className="font-mono text-xs uppercase tracking-[0.14em] text-muted lg:text-right">
                  {benefit.tag}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
