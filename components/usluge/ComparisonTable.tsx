"use client";

import { useState } from "react";
import { comparison, packages } from "@/lib/modules";

export default function ComparisonTable() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="overflow-x-auto rounded-2xl border border-line bg-white">
      <table className="w-full min-w-[760px] border-collapse text-sm">
        <thead>
          <tr className="border-b border-line">
            <th className="sticky left-0 bg-white px-5 py-4 text-left font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-muted">
              Funkcionalnost / opseg usluge
            </th>
            {packages.map((pkg, i) => (
              <th
                key={pkg}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                className={`font-display px-4 py-4 text-center text-sm font-bold transition-colors ${
                  pkg === "Premium+" ? "text-teal" : "text-navy"
                } ${hovered === i ? "bg-teal-soft/40" : ""}`}
              >
                {pkg}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {comparison.map((row, r) => (
            <tr
              key={row.feature}
              className={`border-b border-line last:border-b-0 ${
                r % 2 === 1 ? "bg-frost/60" : ""
              }`}
            >
              <td className="sticky left-0 bg-inherit px-5 py-3.5 text-[13px] font-medium text-navy backdrop-blur-sm">
                {row.feature}
              </td>
              {row.included.map((inc, i) => (
                <td
                  key={i}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                  className={`px-4 py-3.5 text-center transition-colors ${
                    hovered === i ? "bg-teal-soft/40" : ""
                  }`}
                >
                  {inc ? (
                    <svg
                      aria-label="Uključeno"
                      role="img"
                      className="mx-auto h-4.5 w-4.5 text-teal"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M4 10.5L8.5 15L16 5.5"
                        stroke="currentColor"
                        strokeWidth="2.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ) : (
                    <span aria-label="Nije uključeno" className="text-line">
                      —
                    </span>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
