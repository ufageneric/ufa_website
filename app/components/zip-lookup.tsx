"use client";

import Link from "next/link";
import { useState } from "react";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const years = Array.from({ length: 2026 - 1990 + 1 }, (_, index) => 2026 - index);

const measures = [
  {
    title: "Default risk",
    body: "How likely loans from that place and time are to go bad.",
  },
  {
    title: "Prepayment risk",
    body: "How fast they’ll pay off or refinance.",
  },
  {
    title: "Home value outlook",
    body: "Where collateral values are headed.",
  },
];

export function ZipLookup() {
  const [zip, setZip] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [error, setError] = useState("");
  const [reading, setReading] = useState<{
    zip: string;
    month: string;
    year: string;
  } | null>(null);

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!/^\d{5}$/.test(zip)) {
      setError("Enter a five-digit ZIP code.");
      setReading(null);
      return;
    }
    if (!month || !year) {
      setError("Choose an origination month and year.");
      setReading(null);
      return;
    }
    setError("");
    setReading({ zip, month, year });
  }

  const contactHref = reading
    ? `/contact?zip=${reading.zip}&month=${reading.month}&year=${reading.year}`
    : "/contact";

  return (
    <div id="lookup" className="scroll-mt-24 border border-line bg-card">
      <form onSubmit={onSubmit} className="grid gap-4 p-5 sm:p-6 lg:grid-cols-[1fr_1fr_0.7fr_auto] lg:items-end">
        <div>
          <label htmlFor="zip" className="text-[11px] font-medium uppercase tracking-[0.16em] text-muted">
            ZIP code
          </label>
          <input
            id="zip"
            name="zip"
            inputMode="numeric"
            autoComplete="postal-code"
            maxLength={5}
            placeholder="48104"
            value={zip}
            onChange={(event) => setZip(event.target.value.replace(/\D/g, "").slice(0, 5))}
            className="mt-2 h-12 w-full border border-line bg-background px-3 text-base outline-none transition-colors placeholder:text-muted/80 focus:border-foreground"
          />
        </div>
        <div>
          <label htmlFor="month" className="text-[11px] font-medium uppercase tracking-[0.16em] text-muted">
            Origination month
          </label>
          <select
            id="month"
            name="month"
            value={month}
            onChange={(event) => setMonth(event.target.value)}
            className="mt-2 h-12 w-full border border-line bg-background px-3 text-base outline-none focus:border-foreground"
          >
            <option value="">Month</option>
            {months.map((name, index) => (
              <option key={name} value={String(index + 1)}>
                {name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="year" className="text-[11px] font-medium uppercase tracking-[0.16em] text-muted">
            Year
          </label>
          <select
            id="year"
            name="year"
            value={year}
            onChange={(event) => setYear(event.target.value)}
            className="mt-2 h-12 w-full border border-line bg-background px-3 text-base outline-none focus:border-foreground"
          >
            <option value="">Year</option>
            {years.map((value) => (
              <option key={value} value={String(value)}>
                {value}
              </option>
            ))}
          </select>
        </div>
        <button
          type="submit"
          className="inline-flex h-12 w-full items-center justify-center bg-foreground px-5 text-sm font-medium text-background transition-colors hover:bg-[#2a3038] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground lg:w-auto"
        >
          Look up
        </button>
      </form>

      {error ? (
        <p className="border-t border-line px-5 py-4 text-sm text-foreground sm:px-6" role="alert">
          {error}
        </p>
      ) : null}

      {reading ? (
        <div className="border-t border-line px-5 py-6 sm:px-6">
          <p className="font-mono text-xs tracking-wide text-muted">
            {reading.zip} · {months[Number(reading.month) - 1]} {reading.year}
          </p>
          <h3 className="mt-3 font-serif text-3xl tracking-tight">
            This reading is available under license.
          </h3>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-muted">
            Enter a ZIP code and origination date and ForeScore returns forward-looking
            indices for the life of the loan, with the historical record and the
            economic and environmental indicators behind them.
          </p>
          <ul className="mt-6 grid gap-4 sm:grid-cols-3">
            {measures.map((measure) => (
              <li key={measure.title} className="border-t border-line pt-3">
                <p className="text-sm font-medium">{measure.title}</p>
                <p className="mt-1 text-sm leading-6 text-muted">{measure.body}</p>
              </li>
            ))}
          </ul>
          <Link
            href={contactHref}
            className="mt-6 inline-flex h-11 items-center bg-foreground px-4 text-sm text-background transition-colors hover:bg-[#2a3038]"
          >
            Request this reading
          </Link>
        </div>
      ) : null}
    </div>
  );
}
