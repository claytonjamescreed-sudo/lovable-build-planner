import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { TopBar } from "@/components/f1rst-key/TopBar";
import { Hero } from "@/components/f1rst-key/Hero";
import { StartHere } from "@/components/f1rst-key/StartHere";
import { QuestionList } from "@/components/f1rst-key/QuestionList";
import { AnswerView } from "@/components/f1rst-key/AnswerView";
import { SiteFooter } from "@/components/f1rst-key/SiteFooter";
import { answers, findAnswer, type Answer } from "@/data/f1rst-key";

const title = "F1rst Key — One key. Many doors.";
const description =
  "Ask in plain language and get one answer from everything in Partnerships on F11 and everything advisors are sharing in the channels.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [answer, setAnswer] = useState<Answer | null>(answers[0] ?? null);
  const [query, setQuery] = useState("");

  const scrollToAnswer = () => {
    document.getElementById("your-answer")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleAsk = (q: string) => {
    setQuery(q);
    setAnswer(findAnswer(q));
    requestAnimationFrame(scrollToAnswer);
  };

  return (
    <div className="min-h-screen bg-background font-sans">
      <TopBar
        onHowItWorks={() =>
          document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth", block: "start" })
        }
      />
      <main>
        <Hero onAsk={handleAsk} />
        <StartHere />
        <QuestionList
          activeId={answer?.id ?? null}
          onPick={(id) => {
            const picked = answers.find((a) => a.id === id) ?? null;
            setAnswer(picked);
            setQuery(picked?.question ?? "");
            requestAnimationFrame(scrollToAnswer);
          }}
        />
        <AnswerView answer={answer} query={query} />
      </main>
      <SiteFooter />
    </div>
  );
}
