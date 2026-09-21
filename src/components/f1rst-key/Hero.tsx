import { useState } from "react";
import { ArrowRight, Search } from "lucide-react";
import heroLake from "@/assets/hero-lake.jpg";

const tries = [
  "What do we have in Argentina?",
  "What should I know this week?",
  "Do we have a deal with Virgin Hotels?",
];

export function Hero({ onAsk }: { onAsk: (q: string) => void }) {
  const [value, setValue] = useState("");

  return (
    <section className="relative isolate min-h-[100svh] w-full overflow-hidden">
      <img
        src={heroLake}
        alt="A wooden boat on a turquoise mountain lake"
        width={1920}
        height={1088}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/25 to-transparent" />

      <div className="relative mx-auto flex min-h-[100svh] w-full max-w-[1400px] flex-col justify-center px-5 pt-28 pb-16 sm:px-10">
        <div className="max-w-3xl">
          <p className="inline-block border-b-2 border-key pb-2 font-mono text-[0.7rem] font-semibold tracking-[0.3em] text-key uppercase">
            F1rst Key
          </p>

          <h1 className="mt-8 font-display text-[clamp(2.75rem,10vw,7rem)] leading-[0.88] font-black tracking-[-0.03em] text-white uppercase">
            One key.
            <br />
            <span className="text-key">Many doors.</span>
          </h1>

          <p className="mt-8 max-w-xl text-base leading-relaxed text-white/90 sm:text-lg">
            Ask the way you'd ask a colleague. One answer from everything in Partnerships on F11 and everything
            advisors are sharing in the channels.
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              onAsk(value);
            }}
            className="mt-10 flex w-full max-w-2xl"
          >
            <div className="flex flex-1 items-center gap-3 bg-background px-4 py-4 sm:px-5">
              <Search className="size-5 shrink-0 text-foreground" strokeWidth={2.5} />
              <input
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="What should I know this week?"
                aria-label="Ask F1rst Key"
                className="w-full bg-transparent text-base text-foreground outline-none placeholder:text-muted-foreground sm:text-lg"
              />
            </div>
            <button
              type="submit"
              className="flex items-center gap-2 bg-ink px-5 font-mono text-xs font-semibold tracking-[0.2em] text-ink-foreground uppercase transition-colors hover:bg-key hover:text-key-foreground sm:px-8 sm:text-sm"
            >
              Ask <ArrowRight className="size-4" />
            </button>
          </form>

          <div className="mt-5 flex flex-wrap items-center gap-2">
            <span className="mr-1 text-sm text-white/80">Try</span>
            {tries.map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => {
                  setValue(t);
                  onAsk(t);
                }}
                className="border border-white/40 bg-white/15 px-3 py-2 text-sm text-white backdrop-blur-sm transition-colors hover:bg-key hover:text-key-foreground"
              >
                {t}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
