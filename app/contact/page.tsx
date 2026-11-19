import type { Metadata } from "next";
import { Suspense } from "react";
import { ContactForm } from "../components/contact-form";
import { SiteShell } from "../components/site-shell";

export const metadata: Metadata = {
  title: "Talk to us",
  description:
    "Look up individual ZIP codes on demand, or license full ForeScore data feeds for your portfolio and models.",
};

export default function ContactPage() {
  return (
    <SiteShell>
      <section className="mx-auto grid max-w-[1120px] gap-12 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div>
          <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            Talk to us
          </p>
          <h1 className="mt-5 font-serif text-4xl leading-[1.1] tracking-[-0.02em] sm:text-5xl">
            Get a reading, or license the feed.
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted">
            Look up individual ZIP codes on demand, or license full data feeds for your
            portfolio and models.
          </p>
          <dl className="mt-10 space-y-5 text-sm leading-6">
            <div>
              <dt className="text-[11px] font-medium uppercase tracking-[0.16em] text-muted">
                Email
              </dt>
              <dd className="mt-1">
                <a className="underline decoration-line underline-offset-4" href="mailto:info@ufanet.com">
                  info@ufanet.com
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-[11px] font-medium uppercase tracking-[0.16em] text-muted">
                Phone
              </dt>
              <dd className="mt-1">
                <a className="underline decoration-line underline-offset-4" href="tel:+17349983314">
                  (734) 998-3314
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-[11px] font-medium uppercase tracking-[0.16em] text-muted">
                Office
              </dt>
              <dd className="mt-1 text-muted">
                555 East William Street, Suite 101
                <br />
                Ann Arbor, MI 48104
              </dd>
            </div>
          </dl>
        </div>
        <Suspense fallback={<div className="h-96 border border-line bg-card" />}>
          <ContactForm />
        </Suspense>
      </section>
    </SiteShell>
  );
}
