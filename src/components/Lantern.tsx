"use client";

import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export function Lantern() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  
  const springX = useSpring(0, { stiffness: 50, damping: 20 });
  const springY = useSpring(0, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    springX.set(mousePos.x);
    springY.set(mousePos.y);
  }, [mousePos, springX, springY]);

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-[50]"
      style={{
        background: `radial-gradient(circle 400px at var(--x) var(--y), rgba(194, 163, 94, 0.05) 0%, transparent 100%)`,
        // @ts-ignore
        "--x": springX.get() + "px",
        "--y": springY.get() + "px",
      }}
    />
  );
}
