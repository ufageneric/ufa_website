"use client";

import Link from "next/link";
import { useState } from "react";

export function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setNotice("");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Enter the email on your UFA account.");
      return;
    }
    if (password.length < 8) {
      setError("Enter your password. It should be at least 8 characters.");
      return;
    }
    setError("");
    setNotice(
      "This site does not verify credentials yet. Request access and UFA will issue a client sign-in.",
    );
  }

  return (
    <form onSubmit={onSubmit} className="mt-10" noValidate>
      <div>
        <label htmlFor="email" className="text-sm">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="mt-2 h-12 w-full border border-line bg-card px-3 text-base outline-none focus:border-foreground"
        />
      </div>
      <div className="mt-5">
        <div className="flex items-center justify-between">
          <label htmlFor="password" className="text-sm">
            Password
          </label>
          <button
            type="button"
            className="text-xs text-muted hover:text-foreground"
            onClick={() => setShowPassword((value) => !value)}
            aria-pressed={showPassword}
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>
        <input
          id="password"
          name="password"
          type={showPassword ? "text" : "password"}
          autoComplete="current-password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          className="mt-2 h-12 w-full border border-line bg-card px-3 text-base outline-none focus:border-foreground"
        />
      </div>
      {error ? (
        <p className="mt-4 text-sm" role="alert">
          {error}
        </p>
      ) : null}
      {notice ? (
        <p className="mt-4 text-sm leading-6 text-muted" role="status">
          {notice}
        </p>
      ) : null}
      <button
        type="submit"
        className="mt-6 inline-flex h-12 w-full items-center justify-center bg-foreground text-sm font-medium text-background transition-colors hover:bg-[#2a3038]"
      >
        Sign in
      </button>
      <p className="mt-6 text-sm text-muted">
        Need an account?{" "}
        <Link href="/contact" className="text-foreground underline decoration-line underline-offset-4">
          Talk to us
        </Link>
      </p>
    </form>
  );
}
