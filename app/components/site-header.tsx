"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/forescore", label: "ForeScore" },
  { href: "/research", label: "Research" },
  { href: "/blog", label: "Blog" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-background">
      <div className="mx-auto flex h-16 max-w-[1120px] items-center justify-between px-5 sm:px-8">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="font-serif text-[1.45rem] leading-none tracking-[-0.03em]">
            UFA
          </span>
          <span className="hidden h-4 w-px bg-line sm:block" aria-hidden="true" />
          <span className="hidden text-[11px] font-medium uppercase tracking-[0.18em] text-muted sm:block">
            ForeScore
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={pathname === link.href ? "page" : undefined}
              className={`text-sm transition-colors hover:text-foreground ${
                pathname === link.href ? "text-foreground" : "text-foreground/80"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/sign-in"
            className="inline-flex h-9 items-center px-3 text-sm text-foreground transition-colors hover:bg-foreground/[0.04]"
          >
            Sign in
          </Link>
          <Link
            href="/contact"
            className="hidden h-9 items-center bg-foreground px-3.5 text-sm text-background transition-colors hover:bg-[#2a3038] sm:inline-flex"
          >
            Talk to us
          </Link>
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center text-foreground md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <span className="flex w-4 flex-col gap-[5px]" aria-hidden="true">
              <span className="h-px w-full bg-foreground" />
              <span className="h-px w-full bg-foreground" />
              <span className="h-px w-full bg-foreground" />
            </span>
          </button>
        </div>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          className="border-t border-line bg-background px-5 py-4 md:hidden"
          aria-label="Mobile"
        >
          <ul className="flex flex-col">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={pathname === link.href ? "page" : undefined}
                  className="block py-3 text-base"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link
                href="/contact"
                className="inline-flex h-11 items-center bg-foreground px-4 text-sm text-background"
                onClick={() => setOpen(false)}
              >
                Talk to us
              </Link>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
