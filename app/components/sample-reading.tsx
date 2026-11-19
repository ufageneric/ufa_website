const readings = [
  {
    label: "Default risk",
    value: "118",
    note: "Above the base of 100",
    width: "74%",
  },
  {
    label: "Prepayment risk",
    value: "86",
    note: "Below the base of 100",
    width: "54%",
  },
  {
    label: "Home value outlook",
    value: "94",
    note: "Below the base of 100",
    width: "59%",
  },
];

export function SampleReading() {
  return (
    <figure className="border border-line bg-card shadow-[0_24px_60px_rgba(20,24,29,0.06)]">
      <figcaption className="flex items-center justify-between border-b border-line px-5 py-3 sm:px-6">
        <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-muted">
          Sample layout
        </span>
        <span className="font-mono text-[11px] text-muted">Base 100</span>
      </figcaption>
      <div className="px-5 py-6 sm:px-6">
        <p className="font-mono text-xs tracking-wide text-muted">48104 · March 2006</p>
        <p className="mt-2 font-serif text-[1.65rem] leading-none tracking-tight">
          Illustrative reading
        </p>
        <p className="mt-3 text-sm leading-6 text-muted">
          Not a live score. Live indices are licensed.
        </p>
        <dl className="mt-8 space-y-6">
          {readings.map((reading) => (
            <div key={reading.label}>
              <div className="flex items-baseline justify-between gap-4">
                <dt className="text-sm">{reading.label}</dt>
                <dd className="font-serif text-3xl leading-none tracking-tight">
                  {reading.value}
                </dd>
              </div>
              <div className="mt-3 h-[2px] bg-line" aria-hidden="true">
                <div className="h-[2px] bg-foreground" style={{ width: reading.width }} />
              </div>
              <p className="mt-2 text-xs text-muted">{reading.note}</p>
            </div>
          ))}
        </dl>
      </div>
      <div className="border-t border-line px-5 py-3 text-[11px] uppercase tracking-[0.14em] text-muted sm:px-6">
        Life of loan · Historical · Prospective
      </div>
    </figure>
  );
}
