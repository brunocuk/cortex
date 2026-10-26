import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export default function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-navy">
      <Image
        src="/img/interijer.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover opacity-20"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-navy via-navy/60 to-navy"
      />
      <div className="relative mx-auto max-w-6xl px-5 py-20 lg:py-24">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Zaustavite gubitke u skladištu{" "}
              <span className="text-teal-bright">prije idućeg vikenda.</span>
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-white/70">
              Javite nam se za uvodni razgovor i besplatnu reviziju ulaznih
              kalkulacija za vaša najprodavanija pića i jela.
            </p>
            <Link
              href="/kontakt"
              className="mt-9 inline-block rounded-full bg-teal-bright px-8 py-4 text-sm font-semibold text-navy transition-all hover:-translate-y-0.5 hover:bg-white"
            >
              Zatražite neobvezujući sastanak
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
