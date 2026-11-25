import Link from "next/link";
import { DefaultMap } from "./components/default-map";
import { SampleReading } from "./components/sample-reading";
import { SiteShell } from "./components/site-shell";
import { SolutionIcon } from "./components/solution-icon";
import { ZipLookup } from "./components/zip-lookup";
import { solutions } from "./data/solutions";

const comparison = [
  ["Borrower & collateral", "Location & economic outlook"],
  ["FICO, LTV and DTI", "Default, prepayment and home value outlook"],
  ["Primarily point-in-time assessment", "Forward-looking risk intelligence"],
  ["Borrower financial characteristics", "Local economic and housing conditions"],
  ["Traditional credit risk assessment", "Life-of-loan geographic risk assessment"],
];

const accessRows = [
  "Best for",
  "Geographic coverage",
  "Data access",
  "Origination dates",
  "Risk measures",
] as const;

const accessOptions = [
  {
    title: "On-demand access",
    href: "/#lookup",
    action: "Look up a ZIP code",
    values: [
      "Individual analysis and product exploration",
      "Individual ZIP codes",
      "Web-based lookup",
      "Selected loan vintages",
      "Default, prepayment and home value",
    ],
  },
  {
    title: "Enterprise data licensing",
    href: "/contact",
    action: "Talk to us",
    values: [
      "Institutional portfolios and proprietary risk models",
      "Comprehensive licensed datasets",
      "Bulk data delivery",
      "Historical and prospective coverage",
      "Comprehensive risk measures and supporting indicators",
    ],
  },
] as const;

const workflow = [
  { index: "01", title: "Access", body: "Obtain ForeScore data" },
  { index: "02", title: "Match", body: "Match by ZIP code and loan origination date" },
  { index: "03", title: "Integrate", body: "Incorporate risk indices into existing models" },
  { index: "04", title: "Analyze", body: "Evaluate portfolio risk and performance" },
];

const measures = [
  {
    index: "01",
    title: "Default risk",
    body: "Anticipate geographic differences in mortgage default risk across loan vintages, housing markets and economic cycles.",
    applications: [
      "Credit risk assessment",
      "Whole-loan and RMBS valuation",
      "Expected credit loss and CECL estimation",
      "Portfolio risk monitoring",
    ],
  },
  {
    index: "02",
    title: "Prepayment risk",
    body: "Forecast location-specific mortgage prepayment behavior and its implications for portfolio cash flows, investment returns and duration.",
    applications: [
      "Mortgage cash-flow forecasting",
      "RMBS investment analysis",
      "Mortgage servicing rights valuation",
      "Portfolio duration management",
    ],
  },
  {
    index: "03",
    title: "Home value outlook",
    body: "Assess future collateral values and local housing market trajectories using forward-looking economic intelligence.",
    applications: [
      "Collateral valuation",
      "Loss severity estimation",
      "Geographic concentration analysis",
      "Portfolio stress testing",
    ],
  },
];

type Milestone = {
  label: string;
  title: string;
  body: string;
  href?: string;
  source?: string;
};

const priorResearch = {
  label: "Late 1980s",
  title: "Academic default research",
  body: "Research preceding the firm identified rising mortgage default risk ahead of the late-1980s housing downturn.",
};

const proof: Milestone[] = [
  {
    label: "1990",
    title: "Research-driven foundation",
    body: "UFA was established by finance academics to advance mortgage risk analytics through local economic research.",
  },
  {
    label: "1990s–2000s",
    title: "Geographic risk modeling",
    body: "Development of econometric models linking local housing and economic conditions to mortgage performance.",
    href: "https://doi.org/10.1111/1540-6229.00731",
    source: "Mortgage Default in Local Markets, Real Estate Economics, 1997",
  },
  {
    label: "2006",
    title: "Institutional integration",
    body: "ForeScore became integrated into Fitch Ratings’ mortgage credit risk analytics.",
  },
  {
    label: "2006–2008",
    title: "Housing market stress",
    body: "UFA’s research identified emerging mortgage credit risks during the housing market cycle.",
    href: "https://doi.org/10.1016/j.jhe.2011.04.005",
    source: "The Great Surge in Mortgage Defaults 2006–2009, Journal of Housing Economics, 2011",
  },
  {
    label: "Today",
    title: "Institutional mortgage intelligence",
    body: "ForeScore delivers location-specific mortgage risk intelligence to support investment, valuation and risk management.",
    href: "https://ufanet.com/research",
    source: "UFA research library",
  },
];

const scale = [
  { figure: "100M+", label: "Predictive risk scores" },
  { figure: "30 Years", label: "Forecast horizon" },
  { figure: "ZIP-Level", label: "Geographic precision" },
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
        <div className="mt-12 grid items-stretch gap-12 lg:grid-cols-[minmax(0,1fr)_400px] lg:gap-16">
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
            <div className="mt-12 border-t border-line pt-8 lg:mt-14">
              <dl className="grid grid-cols-3 gap-x-4 gap-y-6 sm:gap-x-8">
                {scale.map((item) => (
                  <div key={item.figure}>
                    <dt className="font-serif text-[1.65rem] leading-none tracking-[-0.02em] sm:text-4xl">
                      {item.figure}
                    </dt>
                    <dd className="mt-3 max-w-[12rem] text-sm leading-5 text-muted">{item.label}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-8 max-w-md text-sm leading-6 text-muted">
                Supporting Fitch Ratings’ mortgage credit risk analytics since 2006.
              </p>
            </div>
          </div>
          <SampleReading />
        </div>
        <div className="mt-14 sm:mt-16">
          <ZipLookup />
        </div>
      </section>

      <section id="advantage" className="mx-auto max-w-[1120px] px-5 py-20 sm:px-8 sm:py-28">
        <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
          The ForeScore advantage
        </p>
        <h2 className="mt-5 max-w-4xl font-serif text-4xl leading-[1.12] tracking-[-0.02em] sm:text-5xl">
          Your model knows the borrower.
          <br />
          <span className="italic">ForeScore knows the market.</span>
        </h2>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
          Traditional underwriting metrics capture borrower creditworthiness and collateral
          leverage. But they don’t fully capture where local housing markets and economic
          conditions are headed.
        </p>
        <p className="mt-6 max-w-2xl text-lg leading-8">
          Employment shocks, housing supply, migration patterns and home price cycles vary
          significantly across local markets. Historical data reveals where risk has been.
          ForeScore predicts where it is going.
        </p>
        <div className="mt-12 border border-line md:grid md:grid-cols-2">
          <p className="border-b border-line px-7 py-6 text-[11px] font-medium uppercase tracking-[0.16em] text-muted sm:px-10 md:border-r">
            Traditional underwriting
          </p>
          <p className="border-b border-line bg-foreground px-7 py-6 text-[11px] font-medium uppercase tracking-[0.16em] text-background/60 sm:px-10 md:border-background/20">
            ForeScore intelligence
          </p>
          {comparison.map(([traditional, forescore], index) => {
            const last = index === comparison.length - 1;
            return (
              <div key={traditional} className="contents">
                <p
                  className={`border-line px-7 py-4 text-base leading-7 sm:px-10 md:border-r ${last ? "" : "border-b"}`}
                >
                  {traditional}
                </p>
                <p
                  className={`bg-foreground px-7 py-4 text-base leading-7 text-background/85 sm:px-10 ${last ? "" : "border-b border-line md:border-background/20"}`}
                >
                  {forescore}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      <section id="map" className="border-t border-line">
        <div className="mx-auto max-w-[1120px] px-5 py-20 sm:px-8 sm:py-28">
          <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            Default outlook
          </p>
          <div className="mt-5 grid items-end gap-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
            <h2 className="max-w-xl font-serif text-4xl leading-[1.12] tracking-[-0.02em] text-balance sm:text-5xl">
              Where default risk sits.
            </h2>
            <p className="max-w-md text-lg leading-8 text-muted lg:justify-self-end">
              ForeScore default by state, indexed to 100. Color runs from very low, below
              70, to very high, 150 and above.
            </p>
          </div>
          <DefaultMap />
        </div>
      </section>

      <section id="measures" className="border-t border-line">
        <div className="mx-auto max-w-[1120px] px-5 py-20 sm:px-8 sm:py-28">
          <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            What ForeScore delivers
          </p>
          <div className="mt-5 grid items-end gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
            <h2 className="max-w-xl font-serif text-4xl leading-[1.12] tracking-[-0.02em] text-balance sm:text-5xl">
              Forward-looking intelligence for the life of every mortgage.
            </h2>
            <div className="max-w-md space-y-4 text-lg leading-8 text-muted lg:justify-self-end">
              <p>
                ForeScore quantifies location-specific mortgage risk at the ZIP code level,
                differentiated by loan origination date and extending across the full 30-year
                life of a mortgage.
              </p>
              <p>Three complementary measures provide a comprehensive view of geographic mortgage risk.</p>
            </div>
          </div>
          <ol className="mt-14 grid border border-line lg:grid-cols-3">
            {measures.map((measure) => (
              <li
                key={measure.index}
                className="flex flex-col border-b border-line p-7 last:border-b-0 sm:p-8 lg:border-b-0 lg:border-r lg:last:border-r-0"
              >
                <p className="font-mono text-xs text-muted">{measure.index}</p>
                <h3 className="mt-4 font-serif text-3xl tracking-tight">{measure.title}</h3>
                <p className="mt-4 text-base leading-7 text-muted">{measure.body}</p>
                <div className="mt-8 border-t border-line pt-5 lg:mt-auto lg:pt-6">
                  <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-muted">
                    Key applications
                  </p>
                  <ul className="mt-4 space-y-2.5">
                    {measure.applications.map((application) => (
                      <li key={application} className="text-sm leading-6">
                        {application}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
          <p className="mt-10 max-w-3xl font-serif text-2xl leading-snug tracking-[-0.02em] text-balance sm:text-[1.75rem]">
            One analytical framework. Three complementary risk measures. A more complete view
            of mortgage performance.
          </p>
        </div>
      </section>

      <section id="proof" className="border-t border-line">
        <div className="mx-auto max-w-[1120px] px-5 py-20 sm:px-8 sm:py-28">
          <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            Our track record
          </p>
          <div className="mt-5 grid items-end gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
            <h2 className="max-w-xl font-serif text-4xl leading-[1.12] tracking-[-0.02em] text-balance sm:text-5xl">
              Decades of research.
              <br />
              <span className="italic">Institutional trust.</span>
            </h2>
            <p className="max-w-md text-lg leading-8 text-muted lg:justify-self-end">
              Built on academic research. Refined through economic cycles. Applied to
              institutional mortgage risk models.
            </p>
          </div>
          <div className="mt-14 border border-line bg-card px-7 py-7 sm:px-8">
            <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-muted">
              Before the firm
            </p>
            <div className="mt-5 grid gap-3 md:grid-cols-12 md:gap-8">
              <p className="font-mono text-sm text-muted md:col-span-3 md:pt-1">
                {priorResearch.label}
              </p>
              <div className="md:col-span-9">
                <h3 className="font-serif text-2xl tracking-tight">{priorResearch.title}</h3>
                <p className="mt-2 max-w-2xl text-base leading-7 text-muted">{priorResearch.body}</p>
              </div>
            </div>
          </div>
          <ol className="mt-10 border-t border-line">
            {proof.map((item) => (
              <li
                key={item.label}
                className="grid gap-3 border-b border-line py-8 md:grid-cols-12 md:gap-8"
              >
                <p className="font-mono text-sm text-muted md:col-span-3 md:pt-1">{item.label}</p>
                <div className="md:col-span-9">
                  <h3 className="font-serif text-2xl tracking-tight">{item.title}</h3>
                  <p className="mt-2 max-w-2xl text-base leading-7 text-muted">{item.body}</p>
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`View research: ${item.source}`}
                      className="mt-4 inline-flex text-sm underline decoration-line underline-offset-4 hover:decoration-foreground"
                    >
                      View research →
                    </a>
                  ) : null}
                </div>
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
            Institutional solutions
          </p>
          <div className="mt-5 grid items-end gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
            <h2 className="max-w-xl font-serif text-4xl leading-[1.12] tracking-[-0.02em] text-balance sm:text-5xl">
              Built for institutions that manage mortgage risk.
            </h2>
            <p className="max-w-md text-lg leading-8 text-muted lg:justify-self-end">
              From individual loan acquisitions to multibillion-dollar portfolios, ForeScore
              delivers forward-looking geographic intelligence across the residential mortgage
              investment lifecycle.
            </p>
          </div>
          <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {solutions.map((solution) => (
              <li key={solution.slug}>
                <Link
                  href={`/solutions/${solution.slug}`}
                  className="group flex h-full flex-col border border-line bg-background p-7 transition duration-200 hover:border-foreground hover:bg-card motion-safe:hover:-translate-y-0.5"
                >
                  <SolutionIcon slug={solution.slug} />
                  <h3 className="mt-6 font-serif text-2xl leading-tight tracking-tight">
                    {solution.title}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-muted">{solution.body}</p>
                  <p className="mt-8 text-[11px] font-medium uppercase tracking-[0.16em] text-muted">
                    Key applications
                  </p>
                  <ul className="mt-3 space-y-1.5">
                    {solution.applications.map((application) => (
                      <li key={application} className="text-sm leading-6">
                        {application}
                      </li>
                    ))}
                  </ul>
                  <span className="mt-8 text-sm underline decoration-line underline-offset-4 group-hover:decoration-foreground">
                    View solution
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="access" className="border-t border-line">
        <div className="mx-auto max-w-[1120px] px-5 py-20 sm:px-8 sm:py-28">
          <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            Flexible data access
          </p>
          <div className="mt-5 grid items-end gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
            <h2 className="max-w-xl font-serif text-4xl leading-[1.12] tracking-[-0.02em] text-balance sm:text-5xl">
              From a single ZIP code to your entire portfolio.
            </h2>
            <p className="max-w-md text-lg leading-8 text-muted lg:justify-self-end">
              Access ForeScore through individual geographic queries or enterprise data
              licensing designed around your institution&apos;s analytical requirements.
            </p>
          </div>

          <div className="mt-14 hidden border border-line md:block">
            <table className="w-full border-collapse text-left">
              <caption className="sr-only">
                On-demand access compared with enterprise data licensing
              </caption>
              <thead>
                <tr>
                  <th className="w-[24%] border-b border-line p-6" scope="col">
                    <span className="sr-only">Comparison</span>
                  </th>
                  {accessOptions.map((option) => (
                    <th
                      key={option.title}
                      scope="col"
                      className="border-b border-l border-line p-6 align-bottom font-normal last:bg-card"
                    >
                      <span className="block font-serif text-2xl tracking-tight text-foreground">
                        {option.title}
                      </span>
                      <Link
                        href={option.href}
                        className="mt-4 inline-flex text-sm underline decoration-line underline-offset-4 hover:decoration-foreground"
                      >
                        {option.action}
                      </Link>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {accessRows.map((label, index) => (
                  <tr key={label}>
                    <th
                      scope="row"
                      className="border-t border-line px-6 py-5 text-[11px] font-medium uppercase tracking-[0.16em] text-muted"
                    >
                      {label}
                    </th>
                    {accessOptions.map((option) => (
                      <td
                        key={option.title}
                        className="border-t border-l border-line px-6 py-5 text-sm leading-6 last:bg-card"
                      >
                        {option.values[index]}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-12 grid gap-4 md:hidden">
            {accessOptions.map((option) => (
              <article
                key={option.title}
                className="border border-line p-7 last:bg-card"
              >
                <h3 className="font-serif text-2xl tracking-tight">{option.title}</h3>
                <dl className="mt-6 space-y-5">
                  {accessRows.map((label, index) => (
                    <div key={label}>
                      <dt className="text-[11px] font-medium uppercase tracking-[0.16em] text-muted">
                        {label}
                      </dt>
                      <dd className="mt-1.5 text-sm leading-6">{option.values[index]}</dd>
                    </div>
                  ))}
                </dl>
                <Link
                  href={option.href}
                  className="mt-8 inline-flex text-sm underline decoration-line underline-offset-4 hover:decoration-foreground"
                >
                  {option.action}
                </Link>
              </article>
            ))}
          </div>

          <div className="mt-16">
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
              Enterprise workflow
            </p>
            <ol className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {workflow.map((step) => (
                <li key={step.index} className="border border-line p-7">
                  <p className="font-mono text-xs text-muted">{step.index}</p>
                  <h3 className="mt-4 font-serif text-2xl tracking-tight">{step.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted">{step.body}</p>
                </li>
              ))}
            </ol>
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
