import type { Metadata } from "next";
import { SignInForm } from "../components/sign-in-form";
import { SiteShell } from "../components/site-shell";

export const metadata: Metadata = {
  title: "Sign in",
  description: "Client sign-in for ForeScore readings and data feeds.",
};

export default function SignInPage() {
  return (
    <SiteShell>
      <div className="grid lg:min-h-[calc(100dvh-4rem)] lg:grid-cols-2">
        <aside className="flex flex-col justify-between bg-foreground px-5 py-14 text-background sm:px-8 lg:px-14 lg:py-20">
          <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-background/55">
            Client access
          </p>
          <h1 className="mt-10 max-w-[12ch] font-serif text-4xl leading-[1.08] tracking-[-0.02em] sm:text-5xl lg:mt-0 lg:text-6xl">
            Know your collateral, <span className="italic">not just your borrower.</span>
          </h1>
          <p className="mt-10 text-sm text-background/60 lg:mt-0">
            University Financial Associates · Ann Arbor
          </p>
        </aside>
        <div className="flex items-center px-5 py-16 sm:px-8 lg:px-16">
          <div className="w-full max-w-md">
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
              Sign in
            </p>
            <h2 className="mt-4 font-serif text-4xl tracking-tight">ForeScore</h2>
            <p className="mt-3 text-sm leading-6 text-muted">
              Readings, historical series, and portfolio feeds for licensed clients.
            </p>
            <SignInForm />
          </div>
        </div>
      </div>
    </SiteShell>
  );
}
