"use client";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const Hero = () => {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // 1. Entrance
      gsap.from(".hero-text", {
        y: 40,
        autoAlpha: 0,
        duration: 1.8,
        stagger: 0.15,
        ease: "power3.out",
      });

      // 2. NEON FLOW (Continuous)
      gsap.to(".future-neon", {
        backgroundPosition: "-200% center",
        duration: 12,
        repeat: -1,
        ease: "none",
      });

      // 3. THE FIX: Targeting the WRAPPER for all text
      const handleMove = (e: MouseEvent | TouchEvent) => {
        let clientX, clientY;
        if ("touches" in e) {
          clientX = e.touches[0].clientX;
          clientY = e.touches[0].clientY;
        } else {
          clientX = (e as MouseEvent).clientX;
          clientY = (e as MouseEvent).clientY;
        }

        const xPct = (clientX / window.innerWidth - 0.5);
        const yPct = (clientY / window.innerHeight - 0.5);

        // This moves EVERYTHING inside the wrapper (Reimagine + Future)
        gsap.to(".interactive-content", {
          rotationY: xPct * 20, // Increased intensity
          rotationX: yPct * -20,
          transformPerspective: 1200,
          duration: 1.2,
          ease: "power2.out",
          // Force hardware acceleration
          z: 1, 
          overwrite: true
        });

        // Subtle background orb drift
        gsap.to(".orb", {
          x: xPct * -50,
          y: yPct * -25,
          duration: 2,
          ease: "power2.out",
        });
      };

      window.addEventListener("mousemove", handleMove);
      window.addEventListener("touchmove", handleMove, { passive: true });

      return () => {
        window.removeEventListener("mousemove", handleMove);
        window.removeEventListener("touchmove", handleMove);
      };
    },
    { scope: container }
  );

  return (
    <section
      ref={container}
      className=" w-full h-screen flex flex-col justify-center items-center px-6 bg-[#050505] overflow-hidden text-white"
      style={{ perspective: "1200px" }}
      id="home"
    >
      {/* --- LAYER 1: Ambient Glow --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="orb absolute top-0 left-0 w-full h-full opacity-20 bg-[radial-gradient(circle_at_20%_30%,#22d3ee_0%,transparent_50%)]" />
        <div className="orb absolute top-0 left-0 w-full h-full opacity-20 bg-[radial-gradient(circle_at_80%_70%,#a855f7_0%,transparent_50%)]" />
      </div>

      {/* --- LAYER 2: THE WRAPPER (This is what tilts) --- */}
      <div className="interactive-content relative z-10 flex flex-col items-center text-center select-none p-10 md:p-20">
        
        <p className="hero-text uppercase tracking-[0.8em] text-[10px] md:text-xs font-bold mb-8 opacity-60">
          Next-Gen SaaS Force
        </p>

        <div className="flex flex-col gap-2 pointer-events-none">
          <h1 className="hero-text text-5xl md:text-8xl lg:text-[150px] leading-none font-black uppercase tracking-tighter">
            REIMAGINE
          </h1>
          <h1 className="hero-text text-5xl md:text-8xl lg:text-[150px] leading-none font-black uppercase tracking-tighter">
            THE <span className="future-neon inline-block">FUTURE</span>
          </h1>
        </div>

      </div>

      <style jsx>{`
        .interactive-content {
          transform-style: preserve-3d;
          will-change: transform;
        }

        .hero-text {
          /* Ensures the browser doesn't flatten individual text elements */
          transform-style: preserve-3d;
          backface-visibility: hidden;
        }

        .future-neon {
          background: linear-gradient(
            to right,
            #22d3ee,
            #a855f7,
            #ffffff,
            #22d3ee,
            #a855f7
          );
          background-size: 200% auto;
          background-position: 0% center;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          filter: drop-shadow(0 0 15px rgba(34, 211, 238, 0.4));
          will-change: background-position;
        }
      `}</style>
    </section>
  );
};

export default Hero;