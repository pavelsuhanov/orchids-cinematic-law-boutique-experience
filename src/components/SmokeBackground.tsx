"use client";

import { motion } from "framer-motion";

export function SmokeBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        animate={{
          x: [-20, 20, -20],
          y: [-10, 10, -10],
          scale: [1, 1.1, 1],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -bottom-1/4 -left-1/4 w-[150%] h-[150%] bg-[radial-gradient(circle_at_center,rgba(22,8,10,0.8)_0%,transparent_70%)] blur-[100px] opacity-60"
      />
      <motion.div
        animate={{
          x: [20, -20, 20],
          y: [10, -10, 10],
          scale: [1.1, 1, 1.1],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -bottom-1/2 -right-1/4 w-[150%] h-[150%] bg-[radial-gradient(circle_at_center,rgba(22,8,10,0.5)_0%,transparent_70%)] blur-[120px] opacity-40"
      />
    </div>
  );
}
