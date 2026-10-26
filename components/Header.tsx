"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Logo from "./Logo";

const links = [
  { href: "/usluge", label: "Usluge" },
  { href: "/o-nama", label: "O nama" },
  { href: "/kontakt", label: "Kontakt" },
];

const mobileLinks = [{ href: "/", label: "Naslovna" }, ...links];

function BurgerIcon({ open }: { open: boolean }) {
  return (
    <span className="flex flex-col items-center justify-center gap-1.5">
      <span
        className={`h-0.5 w-6 bg-current transition-transform duration-300 ${
          open ? "translate-y-1 rotate-45" : ""
        }`}
      />
      <span
        className={`h-0.5 w-6 bg-current transition-transform duration-300 ${
          open ? "-translate-y-1 -rotate-45" : ""
        }`}
      />
    </span>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const reduced = useReducedMotion();

  // Zatvori meni pri promjeni rute
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Zaključaj scroll dok je meni otvoren, zatvori na Escape
  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-line bg-white/85 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Logo />

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-teal ${
                pathname === link.href ? "text-teal" : "text-navy"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/analiza"
            className="rounded-full bg-navy px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-teal"
          >
            Besplatna analiza zaliha
          </Link>
        </nav>

        <button
          className="flex h-10 w-10 items-center justify-center text-navy md:hidden"
          onClick={() => setOpen(true)}
          aria-label="Otvori izbornik"
          aria-expanded={open}
        >
          <BurgerIcon open={false} />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            data-lenis-prevent
            className="fixed inset-0 z-[60] flex flex-col overflow-y-auto bg-navy md:hidden"
            initial={reduced ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduced ? undefined : { opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <div className="mx-auto flex h-16 w-full max-w-6xl shrink-0 items-center justify-between px-5">
              <Logo onDark />
              <button
                className="flex h-10 w-10 items-center justify-center text-white"
                onClick={() => setOpen(false)}
                aria-label="Zatvori izbornik"
              >
                <BurgerIcon open />
              </button>
            </div>

            <nav className="flex flex-1 flex-col justify-center px-8 py-10">
              {mobileLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={reduced ? false : { opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.45,
                    delay: 0.12 + i * 0.07,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`group flex items-baseline gap-4 border-b border-white/10 py-5 ${
                      pathname === link.href ? "text-teal-bright" : "text-white"
                    }`}
                  >
                    <span className="font-mono text-xs text-teal-bright">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-display text-3xl font-bold tracking-tight transition-colors group-hover:text-teal-bright">
                      {link.label}
                    </span>
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={reduced ? false : { opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.45,
                  delay: 0.12 + mobileLinks.length * 0.07,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <Link
                  href="/analiza"
                  onClick={() => setOpen(false)}
                  className="mt-8 block rounded-full bg-teal-bright px-6 py-4 text-center text-base font-semibold text-navy transition-colors hover:bg-white"
                >
                  Besplatna analiza zaliha
                </Link>
              </motion.div>
            </nav>

            <motion.div
              initial={reduced ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="shrink-0 px-8 pb-8"
            >
              <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-6 text-sm text-white/60">
                <a
                  href="mailto:info@cortex.hr"
                  className="transition-colors hover:text-white"
                >
                  info@cortex.hr
                </a>
                <span>Zagreb, Hrvatska</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
