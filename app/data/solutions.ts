export type Solution = {
  slug: string;
  title: string;
  body: string;
  applications: string[];
};

export const solutions: Solution[] = [
  {
    slug: "residential-credit",
    title: "Mortgage REITs & Credit Funds",
    body: "Evaluate residential credit investments with greater visibility into future geographic risk.",
    applications: ["Portfolio valuation", "Investment selection", "Concentration risk"],
  },
  {
    slug: "whole-loan-investors",
    title: "Whole-Loan Buyers & Aggregators",
    body: "Incorporate forward-looking location intelligence into loan acquisition and pricing decisions.",
    applications: ["Due diligence", "Loan pricing", "Pool selection"],
  },
  {
    slug: "banks-credit-unions",
    title: "Banks & Credit Unions",
    body: "Enhance credit risk assessment and monitor emerging risks across mortgage portfolios.",
    applications: ["CECL", "Stress testing", "Portfolio monitoring"],
  },
  {
    slug: "rmbs-structured-finance",
    title: "Investment Banks & RMBS Platforms",
    body: "Incorporate geographic mortgage risk into securitization and structured credit analysis.",
    applications: ["RMBS valuation", "Structuring", "Cash-flow modeling"],
  },
  {
    slug: "insurance-servicing",
    title: "Mortgage Insurers & Servicers",
    body: "Identify emerging geographic risk and anticipate changes in mortgage performance.",
    applications: ["Loss forecasting", "Exposure monitoring", "MSR analysis"],
  },
  {
    slug: "rating-agencies",
    title: "Rating Agencies & Regulators",
    body: "Access standardized, independent geographic mortgage risk intelligence.",
    applications: ["Credit assessment", "Market surveillance", "Risk benchmarking"],
  },
];

export function getSolution(slug: string) {
  return solutions.find((solution) => solution.slug === slug);
}
