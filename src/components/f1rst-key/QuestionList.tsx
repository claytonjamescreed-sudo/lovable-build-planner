import { ArrowRight } from "lucide-react";
import { answers } from "@/data/f1rst-key";

export function QuestionList({
  activeId,
  onPick,
}: {
  activeId: string | null;
  onPick: (id: string) => void;
}) {
  return (
    <section className="bg-background py-16 sm:py-24">
      <div className="mx-auto w-full max-w-[1100px] px-5 sm:px-10">
        <h2 className="font-display text-[clamp(2rem,6vw,3.5rem)] leading-none font-black tracking-[-0.03em] text-foreground uppercase">
          Try one of these
        </h2>
        <p className="mt-5 text-base text-foreground sm:text-lg">
          Real questions advisors ask each other. Pick one and see what comes back.
        </p>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
          Sample answers. The advisor messages are real. The F1S Preferred labels are examples until F1rst Key is
          connected to F11.
        </p>

        <ul className="mt-10 border-t-2 border-foreground">
          {answers.map((a) => {
            const active = a.id === activeId;
            return (
              <li key={a.id} className={active ? "" : "border-b border-rule"}>
                <button
                  type="button"
                  onClick={() => onPick(a.id)}
                  className={`flex w-full items-center justify-between gap-6 px-4 py-6 text-left transition-colors sm:px-6 ${
                    active ? "bg-key" : "hover:bg-paper"
                  }`}
                >
                  <span className="font-sans text-lg font-bold text-foreground sm:text-xl">{a.question}</span>
                  <span
                    className={`grid size-8 shrink-0 place-items-center rounded-full ${
                      active ? "bg-ink text-ink-foreground" : "border border-foreground text-foreground"
                    }`}
                  >
                    <ArrowRight className="size-4" />
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
