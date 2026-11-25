import type { Metadata } from "next";
import { SiteShell } from "../components/site-shell";

export const metadata: Metadata = {
  title: "Research",
  description:
    "Academic research and institutional work behind ForeScore geographic mortgage risk.",
};

const papers = [
  {
    label: "1990s–2000s",
    title: "Geographic risk modeling",
    body: "Development of econometric models linking local housing and economic conditions to mortgage performance.",
    href: "https://doi.org/10.1111/1540-6229.00731",
    source: "Mortgage Default in Local Markets, Real Estate Economics, 1997",
  },
  {
    label: "2006–2008",
    title: "Housing market stress",
    body: "UFA’s research identified emerging mortgage credit risks during the housing market cycle.",
    href: "https://doi.org/10.1016/j.jhe.2011.04.005",
    source: "The Great Surge in Mortgage Defaults 2006–2009, Journal of Housing Economics, 2011",
  },
];

export default function ResearchPage() {
  return (
    <SiteShell>
      <article className="mx-auto max-w-[1120px] px-5 py-16 sm:px-8 sm:py-24">
        <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
          Research
        </p>
        <h1 className="mt-5 max-w-3xl font-serif text-4xl leading-[1.1] tracking-[-0.02em] text-balance sm:text-5xl">
          Decades of research. <span className="italic">Institutional trust.</span>
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-8 text-muted">
          Built on academic research. Refined through economic cycles. Applied to
          institutional mortgage risk models.
        </p>

        <div className="mt-14 border border-line bg-card p-7 sm:p-8">
          <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-muted">
            Before the firm
          </p>
          <p className="mt-4 font-mono text-xs text-muted">Late 1980s</p>
          <h2 className="mt-3 font-serif text-2xl tracking-tight">Academic default research</h2>
          <p className="mt-3 max-w-2xl text-base leading-7 text-muted">
            Research preceding the firm identified rising mortgage default risk ahead of the
            late-1980s housing downturn.
          </p>
        </div>

        <ol className="mt-10 border-t border-line">
          <li className="border-b border-line py-8">
            <p className="font-mono text-xs text-muted">1990</p>
            <h2 className="mt-3 font-serif text-2xl tracking-tight">Research-driven foundation</h2>
            <p className="mt-3 max-w-2xl text-base leading-7 text-muted">
              UFA was established by finance academics to advance mortgage risk analytics
              through local economic research.
            </p>
          </li>
          <li className="border-b border-line py-8">
            <p className="font-mono text-xs text-muted">{papers[0].label}</p>
            <h2 className="mt-3 font-serif text-2xl tracking-tight">{papers[0].title}</h2>
            <p className="mt-3 max-w-2xl text-base leading-7 text-muted">{papers[0].body}</p>
            <a
              href={papers[0].href}
              target="_blank"
              rel="noreferrer"
              aria-label={`View research: ${papers[0].source}`}
              className="mt-4 inline-flex text-sm underline decoration-line underline-offset-4 hover:decoration-foreground"
            >
              View research
            </a>
          </li>
          <li className="border-b border-line py-8">
            <p className="font-mono text-xs text-muted">2006</p>
            <h2 className="mt-3 font-serif text-2xl tracking-tight">Institutional integration</h2>
            <p className="mt-3 max-w-2xl text-base leading-7 text-muted">
              ForeScore became integrated into Fitch Ratings’ mortgage credit risk analytics.
            </p>
          </li>
          <li className="border-b border-line py-8">
            <p className="font-mono text-xs text-muted">{papers[1].label}</p>
            <h2 className="mt-3 font-serif text-2xl tracking-tight">{papers[1].title}</h2>
            <p className="mt-3 max-w-2xl text-base leading-7 text-muted">{papers[1].body}</p>
            <a
              href={papers[1].href}
              target="_blank"
              rel="noreferrer"
              aria-label={`View research: ${papers[1].source}`}
              className="mt-4 inline-flex text-sm underline decoration-line underline-offset-4 hover:decoration-foreground"
            >
              View research
            </a>
          </li>
          <li className="py-8">
            <p className="font-mono text-xs text-muted">Today</p>
            <h2 className="mt-3 font-serif text-2xl tracking-tight">
              Institutional mortgage intelligence
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-7 text-muted">
              ForeScore delivers location-specific mortgage risk intelligence to support
              investment, valuation and risk management.
            </p>
            <a
              href="https://ufanet.com/research"
              target="_blank"
              rel="noreferrer"
              aria-label="View research: UFA research library"
              className="mt-4 inline-flex text-sm underline decoration-line underline-offset-4 hover:decoration-foreground"
            >
              View research
            </a>
          </li>
        </ol>
      </article>
    </SiteShell>
  );
}
