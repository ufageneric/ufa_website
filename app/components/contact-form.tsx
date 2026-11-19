"use client";

import { useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const audiences = [
  "Bank or credit union",
  "Investor or MBS buyer",
  "Acquirer",
  "Regulator or rating agency",
  "Other",
];

export function ContactForm() {
  const params = useSearchParams();
  const zip = params.get("zip") ?? "";
  const month = params.get("month") ?? "";
  const year = params.get("year") ?? "";
  const origin =
    zip && month && year && months[Number(month) - 1]
      ? `${zip}, originated ${months[Number(month) - 1]} ${year}`
      : zip;

  const [name, setName] = useState("");
  const [organization, setOrganization] = useState("");
  const [email, setEmail] = useState("");
  const [audience, setAudience] = useState(audiences[0]);
  const [note, setNote] = useState(
    origin ? `I would like a ForeScore reading for ${origin}.` : "",
  );
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

  const mailto = useMemo(() => {
    const subject = origin ? `ForeScore reading for ${origin}` : "ForeScore conversation";
    const body = [
      `Name: ${name}`,
      `Organization: ${organization}`,
      `Email: ${email}`,
      `Role: ${audience}`,
      origin ? `ZIP: ${origin}` : "",
      "",
      note,
    ]
      .filter(Boolean)
      .join("\n");
    return `mailto:info@ufanet.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }, [audience, email, name, note, organization, origin]);

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!name.trim() || !organization.trim()) {
      setError("Add your name and organization.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Enter a work email so we can reply.");
      return;
    }
    setError("");
    setSent(true);
    window.location.href = mailto;
  }

  return (
    <form onSubmit={onSubmit} className="border border-line bg-card p-5 sm:p-8" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" id="name">
          <input
            id="name"
            name="name"
            autoComplete="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="field"
          />
        </Field>
        <Field label="Organization" id="organization">
          <input
            id="organization"
            name="organization"
            autoComplete="organization"
            value={organization}
            onChange={(event) => setOrganization(event.target.value)}
            className="field"
          />
        </Field>
        <Field label="Work email" id="email">
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="field"
          />
        </Field>
        <Field label="I am with" id="audience">
          <select
            id="audience"
            name="audience"
            value={audience}
            onChange={(event) => setAudience(event.target.value)}
            className="field"
          >
            {audiences.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </Field>
      </div>
      <Field label="What you need" id="note" className="mt-5">
        <textarea
          id="note"
          name="note"
          rows={5}
          value={note}
          onChange={(event) => setNote(event.target.value)}
          className="field min-h-32 py-3"
        />
      </Field>
      {origin ? (
        <p className="mt-4 text-sm text-muted">Attached to this note: {origin}.</p>
      ) : null}
      {error ? (
        <p className="mt-4 text-sm" role="alert">
          {error}
        </p>
      ) : null}
      {sent ? (
        <p className="mt-4 text-sm leading-6 text-muted" role="status">
          Your email app should open a note to info@ufanet.com. If it does not, send
          the same details there directly.
        </p>
      ) : null}
      <button
        type="submit"
        className="mt-6 inline-flex h-12 items-center bg-foreground px-5 text-sm font-medium text-background transition-colors hover:bg-[#2a3038]"
      >
        Get started
      </button>
    </form>
  );
}

function Field({
  label,
  id,
  children,
  className = "",
}: {
  label: string;
  id: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <label htmlFor={id} className="text-sm">
        {label}
      </label>
      <div className="mt-2">{children}</div>
    </div>
  );
}
