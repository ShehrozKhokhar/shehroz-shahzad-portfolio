"use client";

import { motion } from "framer-motion";

interface Shape {
  size: number;
  top: string;
  left: string;
  z: number;
  tint: "green" | "white";
  duration: number;
  delay: number;
}

const SHAPES: Shape[] = [
  { size: 220, top: "8%", left: "62%", z: -80, tint: "green", duration: 22, delay: 0 },
  { size: 140, top: "52%", left: "78%", z: -40, tint: "white", duration: 26, delay: 1 },
  { size: 260, top: "58%", left: "8%", z: -120, tint: "green", duration: 30, delay: 2 },
  { size: 100, top: "14%", left: "20%", z: -20, tint: "white", duration: 18, delay: 0.5 },
];

/**
 * Purely decorative, aria-hidden. Uses CSS 3D transforms (perspective +
 * rotateX/rotateY) rather than WebGL, so it stays lightweight and respects
 * prefers-reduced-motion via MotionConfig at the app root.
 */
export function Hero3DBackground() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      style={{ perspective: 1400 }}
      aria-hidden="true"
    >
      {SHAPES.map((shape, index) => (
        <motion.div
          key={index}
          className="absolute rounded-[32px] border border-white/10"
          style={{
            width: shape.size,
            height: shape.size,
            top: shape.top,
            left: shape.left,
            translateZ: shape.z,
            background:
              shape.tint === "green"
                ? "linear-gradient(135deg, rgba(48,217,135,0.14), rgba(48,217,135,0.02))"
                : "linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.01))",
            backdropFilter: "blur(2px)",
          }}
          animate={{
            rotateX: [0, 25, -15, 0],
            rotateY: [0, -30, 20, 0],
            y: [0, -24, 12, 0],
          }}
          transition={{
            duration: shape.duration,
            delay: shape.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
