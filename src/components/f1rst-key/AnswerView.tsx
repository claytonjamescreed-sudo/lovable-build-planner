import { useEffect, useState } from "react";
import { ArrowRight, Flag } from "lucide-react";
import { KeyMark } from "./KeyMark";
import type { Answer } from "@/data/f1rst-key";

type Filter = "all" | "preferred" | "advisors" | "f11";

const filters: { id: Filter; label: string }[] = [
  { id: "preferred", label: "Preferred only" },
  { id: "advisors", label: "Just what advisors said" },
  { id: "f11", label: "Just F11" },
];

export function AnswerView({ answer, query }: { answer: Answer | null; query: string }) {
  const [filter, setFilter] = useState<Filter>("all");
  const [flagOpen, setFlagOpen] = useState(false);
  const [flagSent, setFlagSent] = useState(false);

  useEffect(() => {
    setFilter("all");
    setFlagOpen(false);
    setFlagSent(false);
  }, [answer?.id]);

  if (!answer) {
    return (
      <section id="your-answer" className="scroll-mt-20 bg-background pb-20">
        <div className="mx-auto w-full max-w-[1100px] px-5 sm:px-10">
          <p className="font-mono text-[0.7rem] font-semibold tracking-[0.25em] text-foreground uppercase">
            Your answer
          </p>
          <h2 className="mt-4 max-w-3xl font-display text-[clamp(1.6rem,4.5vw,2.75rem)] leading-[1.05] font-black tracking-[-0.02em] text-foreground">
            {query ? `"${query}"` : "Ask a question to see an answer."}
          </h2>
          <div className="mt-7 border-t-2 border-foreground pt-7">
            <p className="max-w-2xl text-lg leading-relaxed text-foreground">
              Nothing on F11 and nothing in the channels has been checked on this yet. Ask it in the Global channel and
              it will be here next time.
            </p>
          </div>
        </div>
      </section>
    );
  }

  const showF11 = filter === "all" || filter === "f11" || filter === "preferred";
  const showAdvisors = filter === "all" || filter === "advisors";
  const f11 = filter === "preferred" ? answer.f11.filter((r) => r.label === "preferred") : answer.f11;

  return (
    <section id="your-answer" className="scroll-mt-20 bg-background pb-20">
      <div className="mx-auto w-full max-w-[1100px] px-5 sm:px-10">
        <p className="font-mono text-[0.7rem] font-semibold tracking-[0.25em] text-foreground uppercase">Your answer</p>
        <h2 className="mt-4 max-w-2xl font-display text-[clamp(1.6rem,4.5vw,2.75rem)] leading-[1.05] font-black tracking-[-0.02em] text-foreground">
          {answer.question}
        </h2>

        <div className="mt-7 max-w-3xl border-t-2 border-foreground pt-8">
          <p className="text-lg leading-relaxed text-foreground sm:text-xl">{answer.summary}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            {filters.map((f) => (
              <button
                key={f.id}
                type="button"
                onClick={() => setFilter(filter === f.id ? "all" : f.id)}
                className={`border px-4 py-2.5 text-sm font-medium transition-colors ${
                  filter === f.id
                    ? "border-foreground bg-key text-key-foreground"
                    : "border-foreground text-foreground hover:bg-paper"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          {showF11 && (
            <div className="mt-12">
              <div className="flex items-end justify-between border-b border-foreground pb-2">
                <h3 className="font-mono text-xs font-semibold tracking-[0.2em] text-foreground uppercase">On F11</h3>
                <span className="font-mono text-xs text-muted-foreground">
                  {f11.length} {f11.length === 1 ? "result" : "results"}
                </span>
              </div>
              {f11.map((r) => (
                <article key={r.name} className="border-b border-rule py-7">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <h4 className="text-lg font-bold text-foreground sm:text-xl">{r.name}</h4>
                    {r.label === "preferred" ? (
                      <span className="flex items-center gap-2 bg-key px-3 py-1.5 font-mono text-[0.7rem] font-semibold tracking-[0.15em] text-key-foreground uppercase">
                        <KeyMark className="h-3 w-5" /> F1S Preferred
                      </span>
                    ) : (
                      <span className="border border-foreground px-3 py-1.5 font-mono text-[0.7rem] font-semibold tracking-[0.15em] text-foreground uppercase">
                        Not vetted
                      </span>
                    )}
                  </div>
                  <p className="mt-2 font-mono text-xs text-muted-foreground sm:text-sm">{r.breadcrumb}</p>
                  <p className="mt-3 text-base text-foreground">{r.description}</p>
                  <button
                    type="button"
                    className="mt-4 flex items-center gap-2 font-mono text-[0.7rem] font-semibold tracking-[0.15em] text-foreground uppercase"
                  >
                    Open on F11
                    <span className="grid size-6 place-items-center rounded-full border border-foreground">
                      <ArrowRight className="size-3" />
                    </span>
                  </button>
                </article>
              ))}
            </div>
          )}

          {showAdvisors && (
            <div className="mt-12">
              <div className="flex items-end justify-between border-b border-foreground pb-2">
                <h3 className="font-mono text-xs font-semibold tracking-[0.2em] text-foreground uppercase">
                  What advisors said
                </h3>
                <span className="font-mono text-xs text-muted-foreground">
                  {answer.messages.length} messages · in full
                </span>
              </div>

              <div className="mt-7 border-l border-rule pl-5">
                {answer.messages.map((m, i) => (
                  <div key={i} className="relative pb-7">
                    <span
                      className={`absolute top-1.5 -left-[1.42rem] size-2.5 ${
                        m.isQuestion ? "bg-foreground" : "border border-foreground bg-background"
                      }`}
                    />
                    <p className="flex flex-wrap items-baseline gap-3">
                      <span className="font-bold text-foreground">{m.author}</span>
                      <span className="font-mono text-xs text-muted-foreground sm:text-sm">{m.channel}</span>
                      {m.translated && (
                        <span className="font-mono text-[0.65rem] tracking-[0.1em] text-muted-foreground uppercase">
                          translated from Spanish
                        </span>
                      )}
                    </p>
                    <p className="mt-2 text-base leading-relaxed text-foreground sm:text-lg">{m.quote}</p>
                  </div>
                ))}
              </div>

              <p className="mt-2 text-base text-muted-foreground">
                Advisor tips aren't vetted by F1S. If it isn't on F11, book at your own risk.
              </p>
            </div>
          )}

          <div className="mt-10 flex flex-col gap-5 border-t border-rule pt-7 sm:flex-row sm:items-start sm:justify-between">
            <p className="max-w-md font-mono text-xs leading-relaxed text-muted-foreground">{answer.checked}</p>
            <button
              type="button"
              onClick={() => setFlagOpen((o) => !o)}
              className="flex shrink-0 items-center gap-2 border border-foreground px-4 py-3 font-mono text-[0.7rem] font-semibold tracking-[0.15em] text-foreground uppercase transition-colors hover:bg-key"
            >
              <Flag className="size-4" /> Something wrong? Flag it
            </button>
          </div>

          {flagOpen && (
            <div className="mt-6 border border-foreground p-5">
              {flagSent ? (
                <p className="text-base text-foreground">
                  Thank you. The community team will look at this answer.
                </p>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setFlagSent(true);
                  }}
                >
                  <label className="font-mono text-[0.7rem] font-semibold tracking-[0.15em] text-foreground uppercase">
                    What's wrong with this answer?
                  </label>
                  <textarea
                    rows={3}
                    required
                    className="mt-3 w-full border border-rule p-3 text-base text-foreground outline-none focus:border-foreground"
                    placeholder="The commission changed in August…"
                  />
                  <button
                    type="submit"
                    className="mt-3 bg-ink px-5 py-3 font-mono text-[0.7rem] font-semibold tracking-[0.15em] text-ink-foreground uppercase transition-colors hover:bg-key hover:text-key-foreground"
                  >
                    Send flag
                  </button>
                </form>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
