import Link from "next/link";
import { SampleReading } from "./components/sample-reading";
import { SiteShell } from "./components/site-shell";
import { ZipLookup } from "./components/zip-lookup";

const measures = [
  {
    index: "01",
    title: "Default risk",
    body: "How likely loans from that place and time are to go bad.",
  },
  {
    index: "02",
    title: "Prepayment risk",
    body: "How fast they’ll pay off or refinance.",
  },
  {
    index: "03",
    title: "Home value outlook",
    body: "Where collateral values are headed.",
  },
];

const proof = [
  {
    label: "1990",
    body: "Founded by Dennis Capozza, finance professor at the University of Michigan.",
  },
  {
    label: "1980s · 2008",
    body: "Flagged rising mortgage defaults years ahead of the late-1980s downturn and the 2006–2008 crisis.",
  },
  {
    label: "2006",
    body: "Embedded in Fitch Ratings’ credit risk ratings since 2006.",
  },
];

const clients = [
  {
    title: "Banks and credit unions",
    body: "Price and monitor portfolio loans, strengthen CECL forecasts, and enter new markets with confidence.",
  },
  {
    title: "Investors and MBS buyers",
    body: "Evaluate pools by geography before you buy.",
  },
  {
    title: "Acquirers",
    body: "Value a loan book you didn’t underwrite.",
  },
  {
    title: "Regulators and rating agencies",
    body: "Independent, location-based risk benchmarks.",
  },
];

export default function Home() {
  return (
    <SiteShell>
      <section className="mx-auto max-w-[1120px] px-5 pb-8 pt-16 sm:px-8 sm:pt-20">
        <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
          ForeScore · location risk
        </p>
        <h1 className="mt-5 max-w-[11em] font-serif text-[2.45rem] leading-[1.05] tracking-[-0.03em] sm:max-w-none sm:text-6xl lg:text-[4.35rem] lg:leading-[1.02]">
          See the next credit cycle
          <br />
          <span className="italic">before it hits your portfolio.</span>
        </h1>
        <div className="mt-12 grid items-start gap-12 lg:grid-cols-[minmax(0,1fr)_400px] lg:gap-16">
          <div>
            <p className="max-w-xl text-lg leading-8 text-muted">
              ZIP-level default, prepayment and home-value forecasts for every loan —
              built on 35 years of mortgage research.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#lookup"
                className="inline-flex h-12 items-center justify-center bg-foreground px-5 text-sm font-medium text-background transition-colors hover:bg-[#2a3038]"
              >
                Look up a ZIP code
              </a>
              <Link
                href="/contact"
                className="inline-flex h-12 items-center justify-center border border-line bg-transparent px-5 text-sm font-medium transition-colors hover:border-foreground"
              >
                Talk to us
              </Link>
            </div>
          </div>
          <SampleReading />
        </div>
        <div className="mt-14 sm:mt-16">
          <ZipLookup />
        </div>
      </section>

      <section id="problem" className="mx-auto max-w-[1120px] px-5 py-20 sm:px-8 sm:py-28">
        <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
          The problem
        </p>
        <h2 className="mt-5 max-w-4xl font-serif text-4xl leading-[1.12] tracking-[-0.02em] text-balance sm:text-5xl">
          FICO, LTV, and DTI are backward-looking and borrower-centric.
        </h2>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
          UFA is forward-looking and location-centric, and it has 35+ years of research
          behind it. Credit scores tell a lender about the borrower. ForeScore tells them
          about the collateral and the local economy that will drive defaults, prepayments,
          and home values over the life of the loan.
        </p>
        <p className="mt-6 max-w-2xl text-lg leading-8">
          Credit scores describe the borrower on the day the loan closed. They don’t tell
          you what happens to the house, the neighborhood, or the local economy over the
          next ten years. That’s where most mortgage losses come from.
        </p>
        <div className="mt-12 grid border border-line md:grid-cols-2">
          <div className="border-b border-line p-7 sm:p-10 md:border-b-0 md:border-r">
            <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-muted">
              Borrower
            </p>
            <p className="mt-5 font-serif text-3xl tracking-tight sm:text-4xl">
              The day the loan closed
            </p>
            <ul className="mt-8 space-y-2 text-sm leading-6 text-muted">
              <li>FICO, LTV, and DTI</li>
              <li>Backward-looking</li>
              <li>Describes the person who borrowed</li>
            </ul>
          </div>
          <div className="bg-foreground p-7 text-background sm:p-10">
            <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-background/60">
              Place
            </p>
            <p className="mt-5 font-serif text-3xl tracking-tight sm:text-4xl">
              The life of the loan
            </p>
            <ul className="mt-8 space-y-2 text-sm leading-6 text-background/75">
              <li>Default, prepayment, and home value</li>
              <li>Forward-looking</li>
              <li>Describes the collateral and the local economy</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="measures" className="border-t border-line">
        <div className="mx-auto max-w-[1120px] px-5 py-20 sm:px-8 sm:py-28">
          <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            What UFA does
          </p>
          <h2 className="mt-5 max-w-3xl font-serif text-4xl leading-[1.12] tracking-[-0.02em] text-balance sm:text-5xl">
            UFA scores the location behind every loan.
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
            Enter a ZIP code and origination date and get forward-looking indices for
            default, prepayment, and home value.
          </p>
          <ol className="mt-12 border-t border-line">
            {measures.map((measure) => (
              <li
                key={measure.index}
                className="grid gap-3 border-b border-line py-8 md:grid-cols-12 md:gap-8 md:py-10"
              >
                <p className="font-mono text-xs text-muted md:col-span-2">{measure.index}</p>
                <h3 className="font-serif text-3xl tracking-tight md:col-span-4">
                  {measure.title}
                </h3>
                <p className="text-lg leading-8 text-muted md:col-span-6 md:pt-1">
                  {measure.body}
                </p>
              </li>
            ))}
          </ol>
          <p className="mt-8 max-w-3xl text-base leading-7 text-muted">
            All three come as life-of-loan, historical, and prospective measures, alongside
            the economic and environmental indicators behind them.
          </p>
        </div>
      </section>

      <section id="proof" className="border-t border-line">
        <div className="mx-auto max-w-[1120px] px-5 py-20 sm:px-8 sm:py-28">
          <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            Proof
          </p>
          <h2 className="mt-5 max-w-3xl font-serif text-4xl leading-[1.12] tracking-[-0.02em] sm:text-5xl">
            Thirty-five years of calling the cycle.
          </h2>
          <ol className="mt-12 border-t border-line">
            {proof.map((item) => (
              <li
                key={item.label}
                className="grid gap-3 border-b border-line py-8 md:grid-cols-12 md:items-baseline md:gap-8"
              >
                <p className="font-mono text-sm text-muted md:col-span-3">{item.label}</p>
                <p className="text-lg leading-8 md:col-span-9">{item.body}</p>
              </li>
            ))}
          </ol>
          <figure className="mt-16 grid border border-line lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)]">
            <figcaption className="border-b border-line p-7 sm:p-10 lg:border-b-0 lg:border-r">
              <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
                Fitch Ratings
              </p>
              <h3 className="mt-5 font-serif text-3xl leading-[1.15] tracking-tight text-balance sm:text-4xl">
                Embedded in Fitch Ratings.
              </h3>
              <div className="mt-6 space-y-4 text-base leading-7 text-muted">
                <p>
                  Through its collaboration with Fitch Ratings, ForeScore was developed to
                  provide standardized metrics that their life-of-loan default model demanded.
                </p>
                <p>
                  That relationship shaped the product — translating three decades of mortgage
                  research into a practical metric for measuring the local economic components
                  of future mortgage risk.
                </p>
                <p>It is now available to institutional investors for the first time.</p>
              </div>
            </figcaption>
            <blockquote className="flex flex-col justify-between bg-foreground px-7 py-8 text-background sm:px-10 sm:py-10 lg:px-12 lg:py-12">
              <p className="font-serif text-[1.55rem] italic leading-[1.38] tracking-[-0.02em] text-balance sm:text-[1.8rem]">
                “UFA has been a strategic partner to Fitch Ratings for over 20 years. In
                addition to providing ForeScores for default, they have consistently
                demonstrated transparency and a solutions-oriented approach. Their insights
                have helped inform our responses to residential mortgage market changes.”
              </p>
              <footer className="mt-10 border-t border-background/20 pt-5">
                <p className="text-[11px] font-medium uppercase tracking-[0.18em]">G. Bailey</p>
                <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-background/55">
                  Fitch Ratings
                </p>
              </footer>
            </blockquote>
          </figure>
        </div>
      </section>

      <section id="clients" className="border-t border-line">
        <div className="mx-auto max-w-[1120px] px-5 py-20 sm:px-8 sm:py-28">
          <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            Who it’s for
          </p>
          <h2 className="mt-5 max-w-3xl font-serif text-4xl leading-[1.12] tracking-[-0.02em] sm:text-5xl">
            Anyone who has to live with the loan after it closes.
          </h2>
          <ul className="mt-12 border-t border-line">
            {clients.map((client) => (
              <li
                key={client.title}
                className="grid gap-3 border-b border-line py-8 md:grid-cols-12 md:gap-8"
              >
                <h3 className="font-serif text-2xl tracking-tight md:col-span-5">
                  {client.title}
                </h3>
                <p className="text-lg leading-8 text-muted md:col-span-7">{client.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto max-w-[1120px] px-5 py-20 sm:px-8 sm:py-28">
          <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            How to get it
          </p>
          <h2 className="mt-5 max-w-3xl font-serif text-4xl leading-[1.12] tracking-[-0.02em] sm:text-5xl">
            A single ZIP, or the whole book.
          </h2>
          <div className="mt-12 grid border border-line md:grid-cols-2">
            <div className="border-b border-line p-7 sm:p-10 md:border-b-0 md:border-r">
              <h3 className="font-serif text-3xl tracking-tight">On demand</h3>
              <p className="mt-4 text-base leading-7 text-muted">
                Look up individual ZIP codes on demand.
              </p>
              <a
                href="#lookup"
                className="mt-8 inline-flex text-sm underline decoration-line underline-offset-4 hover:decoration-foreground"
              >
                Look up a ZIP code
              </a>
            </div>
            <div className="p-7 sm:p-10">
              <h3 className="font-serif text-3xl tracking-tight">Data feeds</h3>
              <p className="mt-4 text-base leading-7 text-muted">
                License full data feeds for your portfolio and models.
              </p>
              <Link
                href="/contact"
                className="mt-8 inline-flex text-sm underline decoration-line underline-offset-4 hover:decoration-foreground"
              >
                Talk to us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-foreground text-background">
        <div className="mx-auto flex max-w-[1120px] flex-col items-start gap-8 px-5 py-20 sm:px-8 sm:py-28 md:flex-row md:items-end md:justify-between">
          <h2 className="max-w-[16ch] font-serif text-4xl leading-[1.08] tracking-[-0.02em] sm:text-6xl">
            Know your collateral, not just your borrower.
          </h2>
          <Link
            href="/contact"
            className="inline-flex h-12 shrink-0 items-center bg-background px-5 text-sm font-medium text-foreground transition-colors hover:bg-[#e7e2d8]"
          >
            Get started
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}
