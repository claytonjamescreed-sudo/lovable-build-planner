import { useState } from "react";
import { Play } from "lucide-react";
import videoStill from "@/assets/video-still.jpg";
import { chapters } from "@/data/f1rst-key";

const TOTAL = 92;

export function StartHere() {
  const [at, setAt] = useState(0);

  const fmt = (s: number) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;

  return (
    <section id="how-it-works" className="scroll-mt-16 bg-paper py-16 sm:py-24">
      <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <h2 className="font-display text-[clamp(2rem,6vw,3.5rem)] leading-none font-black tracking-[-0.03em] text-foreground uppercase">
            Start here
          </h2>
          <p className="max-w-sm font-serif text-lg italic text-muted-foreground">
            Ninety seconds on what to ask, where the answers come from, and what the labels mean.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-4xl">
          <div className="relative isolate aspect-[16/10] w-full overflow-hidden bg-ink">
            <img
              src={videoStill}
              alt="Aerial view of a tropical bay"
              loading="lazy"
              width={1600}
              height={912}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/10" />
            <div className="relative flex h-full items-end justify-between gap-6 p-6 sm:p-10">
              <div>
                <p className="font-mono text-[0.7rem] font-semibold tracking-[0.3em] text-key uppercase">F1rst Key</p>
                <h3 className="mt-3 font-display text-[clamp(1.75rem,5vw,3.25rem)] leading-none font-black tracking-[-0.02em] text-white uppercase">
                  How it works
                </h3>
                <p className="mt-3 font-mono text-xs text-white/85 sm:text-sm">
                  1:32 · Five chapters · Captions on
                </p>
              </div>
              <button
                type="button"
                aria-label="Play the explainer (placeholder)"
                className="grid size-16 shrink-0 place-items-center rounded-full bg-key text-key-foreground transition-transform hover:scale-105 sm:size-24"
              >
                <Play className="size-6 fill-current sm:size-9" />
              </button>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-ink px-4 py-3 text-ink-foreground sm:px-6">
            <Play className="size-4 shrink-0 fill-current" />
            <span className="font-mono text-xs">{fmt(at)}</span>
            <div className="relative h-px flex-1 bg-white/40">
              <div className="absolute inset-y-0 left-0 bg-key" style={{ width: `${(at / TOTAL) * 100}%` }} />
              {chapters.map((c) => (
                <span
                  key={c.n}
                  className="absolute top-1/2 h-3 w-px -translate-y-1/2 bg-white/70"
                  style={{ left: `${(c.seconds / TOTAL) * 100}%` }}
                />
              ))}
            </div>
            <span className="font-mono text-xs">1:32</span>
            <span className="border border-white/70 px-1.5 py-0.5 font-mono text-[0.65rem] tracking-widest">CC</span>
          </div>

          <div className="mt-px grid grid-cols-1 border-t-2 border-foreground sm:grid-cols-3 lg:grid-cols-5">
            {chapters.map((c) => (
              <button
                key={c.n}
                type="button"
                onClick={() => setAt(c.seconds)}
                className={`border-b border-rule px-4 py-4 text-left transition-colors hover:bg-key lg:border-b-0 lg:border-r lg:last:border-r-0 ${
                  at === c.seconds ? "bg-key" : ""
                }`}
              >
                <p className="font-mono text-[0.7rem] tracking-[0.15em] text-muted-foreground">
                  {c.n} · {c.time}
                </p>
                <p className="mt-1 font-sans text-sm font-bold text-foreground sm:text-base">{c.title}</p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
