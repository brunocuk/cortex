const terms = [
  "Inventure",
  "Normativi",
  "Food cost",
  "Beverage cost",
  "Primke i e-računi",
  "Kalkulacije",
  "Digitalni HACCP",
  "Operativni P&L",
  "Inženjering menija",
  "Kontrola marže",
];

function Row() {
  return (
    <div className="marquee-row flex shrink-0 items-center" aria-hidden="true">
      {terms.map((term) => (
        <span key={term} className="flex items-center">
          <span className="font-display px-6 text-sm font-semibold uppercase tracking-[0.18em] text-white/85">
            {term}
          </span>
          <span className="h-1.5 w-1.5 rounded-full bg-teal-bright" />
        </span>
      ))}
    </div>
  );
}

export default function Marquee() {
  return (
    <div
      className="marquee flex overflow-hidden border-y border-navy-800 bg-navy py-4"
      role="marquee"
      aria-label="Područja koja pokrivamo: inventure, normativi, food cost, beverage cost, primke, kalkulacije, digitalni HACCP, operativni P&L, inženjering menija, kontrola marže"
    >
      <Row />
      <Row />
      <Row />
    </div>
  );
}
