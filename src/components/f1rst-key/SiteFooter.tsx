export function SiteFooter() {
  return (
    <footer className="bg-ink py-14 text-ink-foreground sm:py-20">
      <div className="mx-auto grid w-full max-w-[1400px] gap-10 px-5 sm:px-10 md:grid-cols-2">
        <div>
          <p className="font-display text-2xl leading-none font-black tracking-tight uppercase sm:text-3xl">
            F<span className="text-key">1</span>RST IN SERVICE
            <sup className="ml-1 text-[0.4em]">®</sup>
          </p>
          <p className="mt-6 max-w-md text-base leading-relaxed text-white/80">
            F1rst Key is open to F1S VIC and VICE advisors, and reads only what F11 already lets you see. Entertainment
            pages stay with the Entertainment team.
          </p>
        </div>
        <p className="max-w-md text-base leading-relaxed text-white/80 md:justify-self-end">
          Prototype for review, 12 September 2026. The advisor messages shown are real. The F1S Preferred labels are
          examples until F1rst Key is connected to F11.
        </p>
      </div>
    </footer>
  );
}
