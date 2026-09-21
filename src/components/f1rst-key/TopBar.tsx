import { KeyMark } from "./KeyMark";

export function TopBar({ onHowItWorks }: { onHowItWorks: () => void }) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 flex h-14 items-stretch justify-between bg-ink text-ink-foreground sm:h-16">
      <div className="flex items-stretch">
        <div className="flex items-center px-4 sm:px-6">
          <span className="font-display text-[0.7rem] leading-[0.95] font-extrabold tracking-tight uppercase sm:text-xs">
            F<span className="text-key">1</span>RST
            <br />
            IN SERVICE
            <sup className="ml-0.5 text-[0.5em]">®</sup>
          </span>
        </div>
        <div className="flex items-center gap-2 bg-key px-4 text-key-foreground sm:px-6">
          <KeyMark className="h-4 w-6" />
          <span className="font-display text-base font-extrabold tracking-tight sm:text-lg">F1rst Key</span>
        </div>
      </div>

      <div className="flex items-stretch">
        <button
          type="button"
          onClick={onHowItWorks}
          className="hidden items-center bg-background px-6 font-mono text-[0.7rem] font-semibold tracking-[0.15em] text-foreground uppercase transition-colors hover:bg-key sm:flex"
        >
          How it works
        </button>
        <div className="flex items-center gap-3 px-4 sm:px-6">
          <span className="bg-key px-1.5 py-0.5 font-mono text-[0.6rem] font-semibold tracking-widest text-key-foreground">
            VIC
          </span>
          <span className="hidden text-sm font-medium md:inline">Signed in with F11</span>
        </div>
      </div>
    </header>
  );
}
