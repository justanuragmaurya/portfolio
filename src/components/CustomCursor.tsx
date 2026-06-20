"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export default function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false);
  const observerRef = useRef<MutationObserver | null>(null);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const dotX = useSpring(mouseX, { stiffness: 600, damping: 40, mass: 0.3 });
  const dotY = useSpring(mouseY, { stiffness: 600, damping: 40, mass: 0.3 });
  const ringX = useSpring(mouseX, { stiffness: 100, damping: 18, mass: 0.8 });
  const ringY = useSpring(mouseY, { stiffness: 100, damping: 18, mass: 0.8 });

  useEffect(() => {
    setMounted(true);
    setIsDesktop(window.matchMedia("(pointer: fine)").matches);
  }, []);

  useEffect(() => {
    if (!isDesktop) return;

    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!visible) setVisible(true);
    };

    const attachListeners = () => {
      document
        .querySelectorAll("a, button, [role='button'], input, textarea, select, label, [data-cursor-hover]")
        .forEach((el) => {
          el.addEventListener("mouseenter", () => setHovered(true));
          el.addEventListener("mouseleave", () => setHovered(false));
        });
    };

    window.addEventListener("mousemove", onMove);
    attachListeners();

    // Re-attach on DOM mutations (dynamic content)
    observerRef.current = new MutationObserver(attachListeners);
    observerRef.current.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", onMove);
      observerRef.current?.disconnect();
    };
  }, [isDesktop, mouseX, mouseY, visible]);

  if (!mounted || !isDesktop) return null;

  return (
    <>
      {/* Dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
          backgroundColor: "var(--accent)",
          width: 6,
          height: 6,
          opacity: visible ? 1 : 0,
        }}
      />

      {/* Ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] rounded-full"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
          border: "1px solid var(--accent)",
        }}
        animate={{
          width: hovered ? 48 : 28,
          height: hovered ? 48 : 28,
          opacity: hovered ? 0.55 : 0.22,
          scale: hovered ? 1 : 1,
        }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      />
    </>
  );
}
