import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "../components/site-shell";

export const metadata: Metadata = {
  title: "ForeScore",
  description:
    "ZIP-level default, prepayment and home-value forecasts for the life of a mortgage.",
};

const measures = [
  {
    index: "01",
    title: "Default risk",
    body: "Anticipate geographic differences in mortgage default risk across loan vintages, housing markets and economic cycles.",
  },
  {
    index: "02",
    title: "Prepayment risk",
    body: "Forecast location-specific mortgage prepayment behavior and its implications for portfolio cash flows, investment returns and duration.",
  },
  {
    index: "03",
    title: "Home value outlook",
    body: "Assess future collateral values and local housing market trajectories using forward-looking economic intelligence.",
  },
];

export default function ForeScorePage() {
  return (
    <SiteShell>
      <article className="mx-auto max-w-[1120px] px-5 py-16 sm:px-8 sm:py-24">
        <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
          ForeScore
        </p>
        <h1 className="mt-5 max-w-3xl font-serif text-4xl leading-[1.1] tracking-[-0.02em] text-balance sm:text-5xl">
          Forward-looking intelligence for the life of every mortgage.
        </h1>
        <div className="mt-8 max-w-2xl space-y-4 text-lg leading-8 text-muted">
          <p>
            ForeScore quantifies location-specific mortgage risk at the ZIP code level,
            differentiated by loan origination date and extending across the full 30-year life
            of a mortgage.
          </p>
          <p>Three complementary measures provide a view of geographic mortgage risk.</p>
        </div>
        <ol className="mt-14 grid border border-line lg:grid-cols-3">
          {measures.map((measure) => (
            <li
              key={measure.index}
              className="border-b border-line p-7 last:border-b-0 sm:p-8 lg:border-b-0 lg:border-r lg:last:border-r-0"
            >
              <p className="font-mono text-xs text-muted">{measure.index}</p>
              <h2 className="mt-4 font-serif text-3xl tracking-tight">{measure.title}</h2>
              <p className="mt-4 text-base leading-7 text-muted">{measure.body}</p>
            </li>
          ))}
        </ol>
        <div className="mt-14 flex flex-col gap-4 sm:flex-row sm:items-center">
          <Link
            href="/#lookup"
            className="inline-flex h-12 items-center justify-center bg-foreground px-5 text-sm font-medium text-background transition-colors hover:bg-[#2a3038]"
          >
            Look up a ZIP code
          </Link>
          <Link
            href="/contact"
            className="inline-flex text-sm underline decoration-line underline-offset-4 hover:decoration-foreground"
          >
            Talk to us
          </Link>
        </div>
      </article>
    </SiteShell>
  );
}
