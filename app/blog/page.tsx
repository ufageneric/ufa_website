import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "../components/site-shell";

export const metadata: Metadata = {
  title: "Blog",
  description: "Notes on geographic mortgage risk and how institutions use ForeScore.",
};

const notes = [
  {
    title: "What a ZIP-level reading describes",
    body: "A ForeScore reading is tied to a ZIP code and a loan origination date. It describes default risk, prepayment risk, and the home value outlook across the life of the mortgage.",
    href: "/forescore",
    action: "About ForeScore",
  },
  {
    title: "From one ZIP code to a portfolio feed",
    body: "On-demand access covers individual ZIP codes through the site. Enterprise licensing delivers bulk data for portfolios and proprietary models, matched by ZIP code and origination date.",
    href: "/contact",
    action: "Talk to us",
  },
  {
    title: "Where the research record starts",
    body: "UFA was established in 1990 to advance mortgage risk analytics through local economic research. Published work covers local default markets and the housing stress of 2006–2008, and ForeScore has supported Fitch Ratings’ mortgage credit risk analytics since 2006.",
    href: "/research",
    action: "Read the research",
  },
];

export default function BlogPage() {
  return (
    <SiteShell>
      <article className="mx-auto max-w-[1120px] px-5 py-16 sm:px-8 sm:py-24">
        <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-muted">Blog</p>
        <h1 className="mt-5 max-w-3xl font-serif text-4xl leading-[1.1] tracking-[-0.02em] text-balance sm:text-5xl">
          Notes on geographic mortgage risk.
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-8 text-muted">
          Short notes on the measures, the data, and the research behind ForeScore.
        </p>
        <ol className="mt-14 border-t border-line">
          {notes.map((note, index) => (
            <li key={note.title} className="border-b border-line py-8">
              <p className="font-mono text-xs text-muted">0{index + 1}</p>
              <h2 className="mt-3 font-serif text-2xl tracking-tight">{note.title}</h2>
              <p className="mt-3 max-w-2xl text-base leading-7 text-muted">{note.body}</p>
              <Link
                href={note.href}
                className="mt-4 inline-flex text-sm underline decoration-line underline-offset-4 hover:decoration-foreground"
              >
                {note.action}
              </Link>
            </li>
          ))}
        </ol>
      </article>
    </SiteShell>
  );
}
