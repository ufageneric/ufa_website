import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteShell } from "../../components/site-shell";
import { SolutionIcon } from "../../components/solution-icon";
import { getSolution, solutions } from "../../data/solutions";

export const instant = false;

export function generateStaticParams() {
  return solutions.map((solution) => ({ slug: solution.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/solutions/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const solution = getSolution(slug);
  if (!solution) return {};
  return {
    title: solution.title,
    description: solution.body,
  };
}

export default async function SolutionPage({ params }: PageProps<"/solutions/[slug]">) {
  const { slug } = await params;
  const solution = getSolution(slug);
  if (!solution) notFound();

  return (
    <SiteShell>
      <article className="mx-auto max-w-[1120px] px-5 py-16 sm:px-8 sm:py-24">
        <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
          Institutional solutions
        </p>
        <div className="mt-8 flex items-start gap-5">
          <span className="mt-1 text-foreground">
            <SolutionIcon slug={solution.slug} />
          </span>
          <h1 className="max-w-3xl font-serif text-4xl leading-[1.1] tracking-[-0.02em] text-balance sm:text-5xl">
            {solution.title}
          </h1>
        </div>
        <p className="mt-8 max-w-2xl text-lg leading-8 text-muted">{solution.body}</p>
        <div className="mt-12 max-w-xl border-t border-line pt-8">
          <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-muted">
            Key applications
          </p>
          <ul className="mt-5 space-y-3">
            {solution.applications.map((application) => (
              <li key={application} className="text-base leading-7">
                {application}
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-14 flex flex-col gap-4 sm:flex-row sm:items-center">
          <Link
            href="/contact"
            className="inline-flex h-12 items-center justify-center bg-foreground px-5 text-sm font-medium text-background transition-colors hover:bg-[#2a3038]"
          >
            Talk to us
          </Link>
          <Link
            href="/#clients"
            className="inline-flex text-sm underline decoration-line underline-offset-4 hover:decoration-foreground"
          >
            All solutions
          </Link>
        </div>
      </article>
    </SiteShell>
  );
}
