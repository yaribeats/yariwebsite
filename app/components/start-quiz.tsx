"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { track } from "../lib/track";
import { bookingUrl, leasePriceFrom } from "../site-data";
import { BuyLink } from "./buy-link";

type Goal = "buy" | "custom" | "production" | "talk";
type Option = { value: string; label: string; hint?: string };
type Step = { id: string; question: string; options: Option[] };

const goalStep: Step = {
  id: "goal",
  question: "What are you here for?",
  options: [
    { value: "buy", label: "Buy a beat right now", hint: `Leases from $${leasePriceFrom}, instant download` },
    { value: "custom", label: "A custom beat made for me", hint: "Built from your reference" },
    { value: "production", label: "Produce or finish my song", hint: "Beat, arrangement, direction" },
    { value: "talk", label: "Just talk to Yari", hint: "Questions, collabs, ideas" },
  ],
};

const soundStep: Step = {
  id: "sound",
  question: "What's your sound?",
  options: [
    { value: "playboi-carti", label: "Rage", hint: "Carti, Ken Carson, Destroy Lonely, OSAMASON" },
    { value: "nettspend", label: "Plugg / hazy", hint: "Nettspend, Tezzus, Diamond, LUCKI" },
    { value: "detroit", label: "Detroit / Flint", hint: "Rio Da Yung OG, Babyface Ray" },
    { value: "lil-baby", label: "Melodic street trap", hint: "Lil Baby, YTB Fatt" },
    { value: "underground", label: "Something else / not sure", hint: "Show me everything" },
  ],
};

const useStep: Step = {
  id: "use",
  question: "Where is the song going?",
  options: [
    { value: "MP3 Lease", label: "Demo or SoundCloud", hint: "Cheapest way in" },
    { value: "WAV Lease", label: "Spotify and Apple Music", hint: "Clean release files" },
    { value: "Premium Lease", label: "A real rollout", hint: "Stems for your engineer" },
    { value: "Exclusive", label: "It has to be mine only", hint: "Beat comes off the store" },
  ],
};

const budgetStep: Step = {
  id: "budget",
  question: "What budget are you working with?",
  options: [
    { value: "Under $100", label: "Under $100" },
    { value: "$100 to $300", label: "$100 to $300" },
    { value: "$300 to $750", label: "$300 to $750" },
    { value: "$750+", label: "$750+" },
  ],
};

const timeStep: Step = {
  id: "timeline",
  question: "When do you need it?",
  options: [
    { value: "ASAP", label: "ASAP" },
    { value: "This month", label: "This month" },
    { value: "Just exploring", label: "Just exploring" },
  ],
};

function stepsFor(goal?: Goal): Step[] {
  if (goal === "buy") return [goalStep, soundStep, useStep];
  return [goalStep, soundStep, budgetStep, timeStep];
}

const goalLabel: Record<Goal, string> = {
  buy: "Buy a beat",
  custom: "Custom beat",
  production: "Song production",
  talk: "Talk to Yari",
};

export function StartQuiz() {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [index, setIndex] = useState(0);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const started = useRef(false);
  const reported = useRef("");

  const goal = answers.goal as Goal | undefined;
  const steps = stepsFor(goal);
  const done = index >= steps.length;
  const step = steps[Math.min(index, steps.length - 1)];
  const soundOption = soundStep.options.find((o) => o.value === answers.sound);

  useEffect(() => {
    if (index > 0) headingRef.current?.focus();
  }, [index]);

  useEffect(() => {
    if (!done) return;
    const key = JSON.stringify(answers);
    if (reported.current === key) return;
    reported.current = key;
    const payload = {
      content_name: "Start questionnaire",
      content_category: goal ?? "unknown",
      sound: answers.sound,
      budget: answers.budget,
      timeline: answers.timeline,
      license: answers.use,
    };
    track("QuizComplete", payload, true);
    if (goal && goal !== "buy") track("Lead", payload);
  }, [done, goal, answers]);

  const choose = (value: string) => {
    if (!started.current) {
      started.current = true;
      track("QuizStart", { content_name: "Start questionnaire" }, true);
    }
    setAnswers((current) => {
      const next = { ...current, [step.id]: value };
      if (step.id === "goal") {
        delete next.use;
        delete next.budget;
        delete next.timeline;
      }
      return next;
    });
    setIndex((current) => current + 1);
  };

  const summaryLines = [
    goal ? goalLabel[goal] : "",
    soundOption ? `Sound: ${soundOption.label} (${soundOption.hint})` : "",
    answers.budget ? `Budget: ${answers.budget}` : "",
    answers.timeline ? `Timeline: ${answers.timeline}` : "",
  ].filter(Boolean);

  const calendlyHref = `${bookingUrl}?a1=${encodeURIComponent(summaryLines.join(" | "))}`;
  const lanePath = answers.sound ? `/type-beats/${answers.sound}` : "/type-beats";

  return (
    <div className="quiz" aria-live="polite">
      <div className="quiz-progress" aria-hidden="true">
        {steps.map((s, i) => (
          <span key={s.id} className={i < index ? "is-done" : i === index ? "is-current" : ""} />
        ))}
      </div>

      {!done ? (
        <fieldset className="quiz-step" key={step.id}>
          <legend>
            <span className="quiz-count">
              {index + 1} / {steps.length}
            </span>
            <h2 ref={headingRef} tabIndex={-1}>
              {step.question}
            </h2>
          </legend>
          <div className="quiz-options">
            {step.options.map((option) => (
              <button
                key={option.value}
                type="button"
                className={`quiz-option ${answers[step.id] === option.value ? "is-selected" : ""}`}
                onClick={() => choose(option.value)}
              >
                <strong>{option.label}</strong>
                {option.hint ? <span>{option.hint}</span> : null}
              </button>
            ))}
          </div>
          {index > 0 ? (
            <button type="button" className="quiz-back" onClick={() => setIndex((i) => i - 1)}>
              ← Back
            </button>
          ) : null}
        </fieldset>
      ) : goal === "buy" ? (
        <div className="quiz-result">
          <p className="quiz-count">Your match</p>
          <h2 ref={headingRef} tabIndex={-1}>
            Grab the {answers.use ?? "lease"}.
          </h2>
          <p>
            {soundOption ? `${soundOption.label} beats` : "Yari's beats"} are on Traktrain right now. Pick a beat,
            choose the <strong>{answers.use ?? "MP3 Lease"}</strong>, and the files download right after checkout.
          </p>
          <div className="quiz-actions">
            <BuyLink
              placement={`quiz_${answers.sound ?? "any"}`}
              beat={soundOption?.label}
              className="button button-buy button-xl"
            >
              Buy beats · from ${leasePriceFrom}
            </BuyLink>
            <Link className="text-link" href={lanePath}>
              Hear the {soundOption?.label ?? "type"} beats first →
            </Link>
          </div>
          <button type="button" className="quiz-back" onClick={() => setIndex(0)}>
            Start over
          </button>
        </div>
      ) : (
        <div className="quiz-result">
          <p className="quiz-count">You&apos;re a fit</p>
          <h2 ref={headingRef} tabIndex={-1}>
            Book a time with Yari.
          </h2>
          <p>Pick a slot. Your answers come with you, so the call starts on your music, not small talk.</p>
          <ul className="quiz-summary">
            {summaryLines.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
          <div className="quiz-actions">
            <a
              className="button button-orange button-xl"
              href={calendlyHref}
              target="_blank"
              rel="noopener"
              onClick={() => track("Schedule", { content_name: "Production call", content_category: goal })}
            >
              Book the production call
            </a>
            <BuyLink placement="quiz_talk_fallback" className="text-link">
              Or buy a beat now from ${leasePriceFrom} →
            </BuyLink>
          </div>
          <button type="button" className="quiz-back" onClick={() => setIndex(0)}>
            Start over
          </button>
        </div>
      )}
    </div>
  );
}
