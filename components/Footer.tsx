import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto max-w-6xl px-5 py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <Image
              src="/logo.png"
              alt="Cortex Business Operations"
              width={200}
              height={149}
              className="h-auto w-44 rounded-xl bg-[#061b3a] ring-1 ring-white/10"
            />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
              Robno-materijalno poslovanje, F&amp;B kontroling i digitalizacija
              za kafiće, bistroe, restorane i hotele.
            </p>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-[0.14em] text-teal-bright">
              Navigacija
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link href="/" className="text-white/80 transition-colors hover:text-white">
                  Naslovna
                </Link>
              </li>
              <li>
                <Link href="/usluge" className="text-white/80 transition-colors hover:text-white">
                  Usluge i modeli suradnje
                </Link>
              </li>
              <li>
                <Link href="/o-nama" className="text-white/80 transition-colors hover:text-white">
                  O nama
                </Link>
              </li>
              <li>
                <Link href="/kontakt" className="text-white/80 transition-colors hover:text-white">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-[0.14em] text-teal-bright">
              Kontakt
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-white/80">
              <li>Matej Kobaš, osnivač</li>
              <li>
                <a href="mailto:info@cortex.hr" className="transition-colors hover:text-white">
                  info@cortex.hr
                </a>
              </li>
              <li>Zagreb, Hrvatska</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row sm:justify-between">
          <p>© 2026 Cortex Business Operations. Sva prava pridržana.</p>
          <p>cortex.hr</p>
        </div>
      </div>
    </footer>
  );
}
