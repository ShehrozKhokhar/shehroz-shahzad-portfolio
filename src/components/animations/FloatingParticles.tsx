"use client";

import { motion } from "framer-motion";

const PARTICLES = [
  { size: 6, top: "18%", left: "12%", duration: 9, delay: 0 },
  { size: 4, top: "32%", left: "82%", duration: 11, delay: 1.2 },
  { size: 8, top: "68%", left: "20%", duration: 13, delay: 0.4 },
  { size: 5, top: "78%", left: "70%", duration: 10, delay: 2 },
  { size: 3, top: "12%", left: "55%", duration: 8, delay: 0.8 },
  { size: 7, top: "48%", left: "38%", duration: 12, delay: 1.6 },
  { size: 4, top: "58%", left: "88%", duration: 9.5, delay: 0.6 },
];

/**
 * Purely decorative — aria-hidden so it never reaches assistive tech,
 * and respects prefers-reduced-motion via the global CSS override.
 */
export function FloatingParticles() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {PARTICLES.map((particle, index) => (
        <motion.span
          key={index}
          className="absolute rounded-full bg-gradient-brand opacity-40 blur-[1px]"
          style={{
            width: particle.size,
            height: particle.size,
            top: particle.top,
            left: particle.left,
          }}
          animate={{
            y: [0, -24, 0],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
