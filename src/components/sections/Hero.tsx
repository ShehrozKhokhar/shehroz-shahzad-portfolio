"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { PERSONAL } from "@/data/personal";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { FloatingParticles } from "@/components/animations/FloatingParticles";
import { staggerContainer, fadeInUp } from "@/constants/animations";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-16"
    >
      <div className="bg-gradient-glow absolute inset-0" aria-hidden="true" />
      <FloatingParticles />

      <Container className="relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2"
        >
          <div className="flex flex-col gap-6">
            <motion.div variants={fadeInUp}>
              <Badge className="gap-2">
                <span className="relative flex h-2 w-2" aria-hidden="true">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-green opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-green" />
                </span>
                Available for freelance &amp; contract work
              </Badge>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="font-display text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl"
            >
              <HighlightedHeadline text={PERSONAL.headline} highlight={PERSONAL.headlineHighlight} />
            </motion.h1>

            <motion.p variants={fadeInUp} className="max-w-xl text-base text-muted sm:text-lg">
              {PERSONAL.subheadline}
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-4 pt-2">
              <Button href="#contact">
                Hire Me
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Button>
              <Button href="#projects" variant="secondary">
                View My Work
              </Button>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex flex-wrap gap-2 pt-6">
              {PERSONAL.trustBadges.map((badge) => (
                <Badge key={badge}>{badge}</Badge>
              ))}
            </motion.div>
          </div>

          <motion.div variants={fadeInUp} className="relative mx-auto w-full max-w-md">
            <HeroGraphic />
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}

function HeroGraphic() {
  return (
    <div className="relative">
      <div
        className="absolute -inset-8 rounded-full bg-gradient-brand-soft blur-3xl"
        aria-hidden="true"
      />
      <div className="glass glow-border relative rounded-2xl p-6 shadow-2xl">
        <div className="flex items-center gap-2 border-b border-border pb-4">
          <span className="h-3 w-3 rounded-full bg-red-400/70" />
          <span className="h-3 w-3 rounded-full bg-yellow-400/70" />
          <span className="h-3 w-3 rounded-full bg-green-400/70" />
          <span className="ml-2 text-xs text-muted">theme.liquid</span>
        </div>
        <div className="mt-4 flex flex-col gap-2 font-mono text-xs sm:text-sm">
          <CodeLine indent={0} tokens={[{ t: "export", c: "text-accent-green" }, { t: " function ", c: "text-foreground" }, { t: "ProductCard", c: "text-accent-green-bright" }, { t: "() {", c: "text-foreground" }]} />
          <CodeLine indent={1} tokens={[{ t: "return", c: "text-accent-green" }, { t: " (", c: "text-foreground" }]} />
          <CodeLine indent={2} tokens={[{ t: "<Section", c: "text-accent-green-bright" }, { t: " optimised", c: "text-accent-green" }, { t: " />", c: "text-accent-green-bright" }]} />
          <CodeLine indent={1} tokens={[{ t: ")", c: "text-foreground" }]} />
          <CodeLine indent={0} tokens={[{ t: "}", c: "text-foreground" }]} />
          <div className="mt-3 flex items-center gap-2 rounded-lg bg-surface-2 px-3 py-2">
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-green opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-green" />
            </span>
            <span className="text-xs text-muted">Core Web Vitals: Passing</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function HighlightedHeadline({ text, highlight }: { text: string; highlight: string }) {
  const index = text.indexOf(highlight);
  if (index === -1) return <>{text}</>;

  const before = text.slice(0, index);
  const after = text.slice(index + highlight.length);

  return (
    <>
      {before}
      <span className="text-gradient">{highlight}</span>
      {after}
    </>
  );
}

interface CodeToken {
  t: string;
  c: string;
}

function CodeLine({ indent, tokens }: { indent: number; tokens: CodeToken[] }) {
  return (
    <div style={{ paddingLeft: `${indent * 1}rem` }}>
      {tokens.map((token, index) => (
        <span key={index} className={token.c}>
          {token.t}
        </span>
      ))}
    </div>
  );
}
