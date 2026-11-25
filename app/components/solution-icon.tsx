const paths: Record<string, string> = {
  "residential-credit": "M4 19V9l8-5 8 5v10M9 19v-6h6v6",
  "whole-loan-investors": "M7 4h8l4 4v12H7zM15 4v4h4M9 12h6M9 16h4",
  "banks-credit-unions": "M4 10l8-6 8 6M6 10v8M10 10v8M14 10v8M18 10v8M4 18h16",
  "rmbs-structured-finance": "M5 16l7-4 7 4M5 12l7-4 7 4M5 8l7-4 7 4",
  "insurance-servicing": "M12 3l7 3v6c0 4.2-2.8 7.2-7 9-4.2-1.8-7-4.8-7-9V6z",
  "rating-agencies": "M12 4v16M6 8h12M8 8l-2 8h4l-2-8M16 8l-2 8h4l-2-8",
};

export function SolutionIcon({ slug }: { slug: string }) {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
      <path
        d={paths[slug]}
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="square"
        strokeLinejoin="miter"
      />
    </svg>
  );
}
