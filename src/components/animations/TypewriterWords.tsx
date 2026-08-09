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
  typingSpeed = 85,
  deletingSpeed = 45,
  pauseDuration = 1500,
}: TypewriterWordsProps) {
  const [wordIndex, setWordIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];

    if (!deleting && subIndex === currentWord.length) {
      const timeout = setTimeout(() => setDeleting(true), pauseDuration);
      return () => clearTimeout(timeout);
    }

    if (deleting && subIndex === 0) {
      setDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(
      () => setSubIndex((prev) => prev + (deleting ? -1 : 1)),
      deleting ? deletingSpeed : typingSpeed,
    );
    return () => clearTimeout(timeout);
  }, [subIndex, deleting, wordIndex, words, typingSpeed, deletingSpeed, pauseDuration]);

  return (
    <span className={cn("inline-flex items-baseline", className)}>
      {words[wordIndex].substring(0, subIndex)}
      <span className="typewriter-cursor ml-0.5 inline-block h-[1em] w-[2px] bg-current" aria-hidden="true" />
      <span className="sr-only">{words[0]}</span>
    </span>
  );
}
