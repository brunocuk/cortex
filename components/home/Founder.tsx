import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export default function Founder() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-5 py-20 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <div className="relative mx-auto max-w-sm">
              <div className="absolute -left-4 -top-4 h-full w-full rounded-2xl border border-teal/40" />
              <Image
                src="/matej.png"
                alt="Matej Kobaš, osnivač Cortex Business Operations"
                width={560}
                height={746}
                className="relative rounded-2xl object-cover"
              />
              <div className="absolute -bottom-5 left-6 right-6 rounded-xl border border-line bg-white px-5 py-3.5 shadow-[0_16px_40px_-16px_rgba(11,37,69,0.35)]">
                <p className="font-display text-sm font-bold text-navy">Matej Kobaš</p>
                <p className="text-xs text-muted">Osnivač &amp; glavni operativni savjetnik</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-teal">
              Iza sustava stoji operativno iskustvo, a ne teorija
            </p>
            <blockquote className="font-display mt-6 text-2xl font-medium leading-snug text-navy sm:text-[1.7rem]">
              „Ugostiteljski biznis uspijeva ili propada na operativnoj
              disciplini. CBO je nastao kako bi vlasnicima lokala omogućio
              miran san, a investitorima potpunu zaštitu kapitala.“
            </blockquote>
            <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-muted">
              Više od 15 godina na pozicijama operativnog direktora grupacije
              Rougemarin i direktora sektora ugostiteljstva u Atalianu.
              Upravljanje timovima od 50+ djelatnika, otvaranja hotela i
              restorana, produkcija vodećih gastronomskih manifestacija.
            </p>
            <Link
              href="/o-nama"
              className="group mt-7 inline-flex items-center gap-2 text-sm font-semibold text-teal"
            >
              Upoznajte Mateja i metodologiju
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
