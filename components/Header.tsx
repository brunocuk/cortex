"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Logo from "./Logo";

const links = [
  { href: "/usluge", label: "Usluge" },
  { href: "/o-nama", label: "O nama" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
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
            href="/kontakt"
            className="rounded-full bg-navy px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-teal"
          >
            Besplatna analiza zaliha
          </Link>
        </nav>

        <button
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Zatvori izbornik" : "Otvori izbornik"}
          aria-expanded={open}
        >
          <span
            className={`h-0.5 w-6 bg-navy transition-transform ${
              open ? "translate-y-1 rotate-45" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-navy transition-transform ${
              open ? "-translate-y-1 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {open && (
        <nav className="border-t border-line bg-white px-5 py-4 md:hidden">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-base font-medium text-navy"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/kontakt"
            onClick={() => setOpen(false)}
            className="mt-2 block rounded-full bg-navy px-5 py-3 text-center text-sm font-semibold text-white"
          >
            Besplatna analiza zaliha
          </Link>
        </nav>
      )}
    </header>
  );
}
