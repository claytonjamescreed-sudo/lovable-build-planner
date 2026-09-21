export function KeyMark({ className = "h-4 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 14" fill="none" className={className} aria-hidden="true">
      <circle cx="6" cy="7" r="4.6" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="4.4" cy="5.6" r="0.7" fill="currentColor" />
      <circle cx="7.4" cy="5.6" r="0.7" fill="currentColor" />
      <path
        d="M10.6 7h12M17 7v3.4M21 7v2.6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="square"
      />
    </svg>
  );
}
