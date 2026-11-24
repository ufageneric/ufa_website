"use client";

import { useState } from "react";
import { stateDefaults } from "../data/state-defaults";
import { statePaths } from "../data/state-paths";

const bands = [
  { id: "very-low", label: "Below 70", name: "Very low", color: "#FFFDF5", max: 0.7 },
  { id: "low", label: "70–89", name: "Low", color: "#FEF3C7", max: 0.9 },
  { id: "baseline", label: "90–109", name: "Near baseline", color: "#FCD34D", max: 1.1 },
  { id: "elevated", label: "110–129", name: "Elevated", color: "#F59E0B", max: 1.3 },
  { id: "high", label: "130–149", name: "High", color: "#D97706", max: 1.5 },
  { id: "very-high", label: "150+", name: "Very high", color: "#9A3412", max: Infinity },
] as const;

const unscored = "#E6E1D6";

function bandFor(score: number) {
  return bands.find((band) => score < band.max) ?? bands[bands.length - 1];
}

function readingFor(fips: string) {
  const state = stateDefaults[fips];
  if (!state || state.score == null) {
    return {
      name: state?.name ?? "Unscored",
      index: null as number | null,
      band: null,
    };
  }
  return {
    name: state.name,
    index: Math.round(state.score * 100),
    band: bandFor(state.score),
  };
}

export function DefaultMap() {
  const [activeFips, setActiveFips] = useState<string | null>(null);
  const [activeBand, setActiveBand] = useState<string | null>(null);
  const active = activeFips ? readingFor(activeFips) : null;

  const counts = Object.fromEntries(
    bands.map((band) => [
      band.id,
      Object.values(stateDefaults).filter(
        (state) => state.score != null && bandFor(state.score).id === band.id,
      ).length,
    ]),
  );

  return (
    <figure className="mt-12 border border-line bg-card">
      <div className="flex items-end justify-between gap-6 border-b border-line px-5 py-4 sm:px-6">
        <div>
          <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-muted">
            {active?.band?.name ?? (active ? "Not scored" : "State")}
          </p>
          <p className="mt-1 font-serif text-2xl tracking-tight">
            {active?.name ?? "Select a state"}
          </p>
        </div>
        {active?.index != null ? (
          <p className="font-serif text-4xl leading-none tracking-tight sm:text-5xl">{active.index}</p>
        ) : null}
      </div>
      <svg
        viewBox="0 0 960 600"
        className="h-auto w-full"
        role="group"
        aria-label="United States map of ForeScore default by state"
      >
        <defs>
          <pattern id="unscored-hatch" width="7" height="7" patternUnits="userSpaceOnUse">
            <rect width="7" height="7" fill={unscored} />
            <path d="M0 7 L7 0" stroke="#D4CEC3" strokeWidth="1" />
          </pattern>
        </defs>
        {statePaths.map((state) => {
          const reading = readingFor(state.fips);
          const color = reading.band?.color ?? "url(#unscored-hatch)";
          const dimmed = activeBand != null && reading.band?.id !== activeBand;
          const selected = activeFips === state.fips;
          const label = reading.index == null
            ? `${reading.name}, not scored`
            : `${reading.name}, ForeScore default ${reading.index}, ${reading.band?.name}`;
          return (
            <path
              key={state.fips}
              d={state.d}
              fill={color}
              fillOpacity={dimmed ? 0.28 : 1}
              stroke={selected ? "#14181D" : "#C9C2B4"}
              strokeWidth={selected ? 1.6 : 0.7}
              vectorEffect="non-scaling-stroke"
              className="cursor-pointer outline-none"
              tabIndex={0}
              role="button"
              aria-label={label}
              onMouseEnter={() => setActiveFips(state.fips)}
              onFocus={() => setActiveFips(state.fips)}
              onClick={() => setActiveFips(state.fips)}
            >
              <title>{label}</title>
            </path>
          );
        })}
      </svg>
      <ul className="grid grid-cols-2 gap-x-4 gap-y-3 border-t border-line px-5 py-5 sm:grid-cols-3 sm:px-6 lg:grid-cols-6">
        {bands.map((band) => (
          <li key={band.id}>
            <button
              type="button"
              className="flex w-full items-start gap-2 text-left"
              onMouseEnter={() => setActiveBand(band.id)}
              onMouseLeave={() => setActiveBand(null)}
              onFocus={() => setActiveBand(band.id)}
              onBlur={() => setActiveBand(null)}
              aria-pressed={activeBand === band.id}
            >
              <span
                className="mt-0.5 h-3.5 w-3.5 shrink-0 border border-line"
                style={{ backgroundColor: band.color }}
              />
              <span>
                <span className="block text-[11px] font-medium uppercase tracking-[0.12em]">
                  {band.label}
                </span>
                <span className="block text-xs text-muted">
                  {band.name} · {counts[band.id]}
                </span>
              </span>
            </button>
          </li>
        ))}
      </ul>
    </figure>
  );
}
