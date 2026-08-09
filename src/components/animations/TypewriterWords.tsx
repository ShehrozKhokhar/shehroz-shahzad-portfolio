"use client";

import { useEffect, useState } from "react";
import { cn } from "@/utils/cn";

interface TypewriterWordsProps {
  words: string[];
  className?: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
}

export function TypewriterWords({
  words,
  className,
  typingSpeed = 70,
  deletingSpeed = 40,
  pauseDuration = 1800,
}: TypewriterWordsProps) {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [phase, setPhase] = useState<"typing" | "pausing" | "deleting">("typing");

  useEffect(() => {
    const currentWord = words[wordIndex];

    if (phase === "typing") {
      if (text.length < currentWord.length) {
        const timeout = setTimeout(
          () => setText(currentWord.slice(0, text.length + 1)),
          typingSpeed,
        );
        return () => clearTimeout(timeout);
      }
      const timeout = setTimeout(() => setPhase("pausing"), pauseDuration);
      return () => clearTimeout(timeout);
    }

    if (phase === "pausing") {
      const timeout = setTimeout(() => setPhase("deleting"), pauseDuration);
      return () => clearTimeout(timeout);
    }

    if (text.length > 0) {
      const timeout = setTimeout(() => setText(text.slice(0, -1)), deletingSpeed);
      return () => clearTimeout(timeout);
    }
    setWordIndex((wordIndex + 1) % words.length);
    setPhase("typing");
  }, [text, phase, wordIndex, words, typingSpeed, deletingSpeed, pauseDuration]);

  return (
    <span className={cn("text-gradient", className)}>
      {text}
      <span className="typewriter-cursor border-r-[3px] border-accent-green" aria-hidden="true" />
    </span>
  );
}
