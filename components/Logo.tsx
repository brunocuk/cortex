import Link from "next/link";

export default function Logo({ onDark = false }: { onDark?: boolean }) {
  return (
    <Link href="/" className="group flex items-center gap-3">
      <span
        className={`font-display text-2xl font-bold tracking-tight ${
          onDark ? "text-white" : "text-navy"
        }`}
      >
        C<span className="text-teal-bright">BO</span>
      </span>
      <span
        className={`hidden sm:block text-[11px] leading-tight font-medium uppercase tracking-[0.14em] ${
          onDark ? "text-white/70" : "text-muted"
        }`}
      >
        Cortex Business
        <br />
        Operations
      </span>
    </Link>
  );
}
