"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion, useAnimation, useMotionValue } from "framer-motion";
import { 
  Cpu, Layers, Figma, Github, Framer, Database, Globe, Zap, Command 
} from "lucide-react";

const logoIcons = [
  { name: "Core", Icon: Cpu },
  { name: "Stacks", Icon: Layers },
  { name: "Design", Icon: Figma },
  { name: "Source", Icon: Github },
  { name: "Motion", Icon: Framer },
  { name: "Data", Icon: Database },
  { name: "Global", Icon: Globe },
  { name: "Turbo", Icon: Zap },
  { name: "Control", Icon: Command },
];

const Carousel = () => {
  const duplicatedIcons = [...logoIcons, ...logoIcons, ...logoIcons];
  const containerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const x = useMotionValue(0);
  const [width, setWidth] = useState(0);

  const BASE_DURATION = 30; // Consistent speed

  useEffect(() => {
    if (containerRef.current) {
      // Calculate 1/3 of the width (since we tripled the list for safety)
      setWidth(containerRef.current.scrollWidth / 3);
    }
  }, []);

  const startInfiniteScroll = (currentX: number) => {
    const distanceRemaining = Math.abs(-width - currentX);
    const totalDistance = width;
    const remainingDuration = (distanceRemaining / totalDistance) * BASE_DURATION;

    controls.start({
      x: -width,
      transition: {
        duration: remainingDuration,
        ease: "linear",
        onComplete: () => {
          x.set(0);
          controls.start({
            x: -width,
            transition: {
              duration: BASE_DURATION,
              ease: "linear",
              repeat: Infinity,
            },
          });
        },
      },
    });
  };

  useEffect(() => {
    if (width > 0) {
      startInfiniteScroll(0);
    }
  }, [width]);

  return (
    <div className="relative w-full py-12 overflow-hidden bg-transparent cursor-grab active:cursor-grabbing">
      {/* Side Fades - Corrected for standard Tailwind support */}
      <div className="absolute inset-y-0 left-0 w-32 bg-linear-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-linear-to-l from-[#050505] to-transparent z-10 pointer-events-none" />

      <motion.div
        ref={containerRef}
        className="flex whitespace-nowrap gap-12 md:gap-20 w-max"
        style={{ x }}
        animate={controls}
        drag="x"
        dragConstraints={{ left: -width, right: 0 }}
        onDragStart={() => controls.stop()}
        onUpdate={(latest) => {
          const xPos = typeof latest.x === 'number' ? latest.x : parseFloat(latest.x as string);
          // Seamless wrap-around logic
          if (xPos <= -width) {
            x.set(0);
          } else if (xPos > 0) {
            x.set(-width);
          }
        }}
        onDragEnd={() => {
          // Resumes at the correct speed immediately
          startInfiniteScroll(x.get());
        }}
      >
        {duplicatedIcons.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center gap-6 select-none shrink-0 group/item"
          >
            <div className="relative p-6 md:p-8 rounded-4xl border transition-all duration-500 group-hover/item:border-cyan-500/40 group-hover/item:bg-cyan-500/10 group-hover/item:-translate-y-2">
              
              <item.Icon
                strokeWidth={1}
                className="w-10 h-10 md:w-16 md:h-16 transition-all duration-500 text-cyan-300 group-hover/item:text-cyan-400 group-hover/item:drop-shadow-[0_0_15px_rgba(34,211,238,0.4)]"
              />

              {/* Glow Layer */}
              <div className="absolute inset-0 rounded-4xl bg-[radial-gradient(circle,rgba(34,211,238,0.15)_0%,transparent_70%)] opacity-0 blur-2xl transition-all duration-500 group-hover/item:opacity-100" />
            </div>

            <span className="text-[9px] uppercase tracking-[0.5em] font-bold text-white/50 transition-all duration-500 group-hover/item:text-cyan-400/60 group-hover/item:tracking-[0.6em]">
              {item.name}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Carousel;