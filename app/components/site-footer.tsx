import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto grid max-w-[1120px] gap-10 px-5 py-14 sm:px-8 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="font-serif text-2xl tracking-tight">UFA</p>
          <p className="mt-3 max-w-xs text-sm leading-6 text-muted">
            University Financial Associates. Location risk for the life of a mortgage.
          </p>
        </div>
        <div className="text-sm leading-7 text-muted">
          <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-foreground">
            Office
          </p>
          <p className="mt-3">
            555 East William Street, Suite 101
            <br />
            Ann Arbor, MI 48104
          </p>
          <p className="mt-3">
            <a className="hover:text-foreground" href="tel:+17349983314">
              (734) 998-3314
            </a>
            <br />
            <a className="hover:text-foreground" href="mailto:info@ufanet.com">
              info@ufanet.com
            </a>
          </p>
        </div>
        <div className="text-sm leading-7">
          <p className="text-[11px] font-medium uppercase tracking-[0.16em]">ForeScore</p>
          <ul className="mt-3 text-muted">
            <li>
              <Link className="hover:text-foreground" href="/forescore">
                ForeScore
              </Link>
            </li>
            <li>
              <Link className="hover:text-foreground" href="/research">
                Research
              </Link>
            </li>
            <li>
              <Link className="hover:text-foreground" href="/blog">
                Blog
              </Link>
            </li>
            <li>
              <Link className="hover:text-foreground" href="/#lookup">
                Look up a ZIP code
              </Link>
            </li>
            <li>
              <Link className="hover:text-foreground" href="/contact">
                Talk to us
              </Link>
            </li>
            <li>
              <Link className="hover:text-foreground" href="/sign-in">
                Sign in
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-line">
        <p className="mx-auto max-w-[1120px] px-5 py-5 text-xs text-muted sm:px-8">
          © 2026 University Financial Associates
        </p>
      </div>
    </footer>
  );
}
