"use client";
import { useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const navItems = [
  "Home",
  "About",
  "Customers & Partners",
  "Offerings",
  "Services",
  "Contact us",
];

const Navbar = () => {
  const container = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  useGSAP(
    () => {
      const tl = gsap.timeline();

      tl.from(".nav-container", {
        y: -20,
        duration: 1,
        ease: "power4.out",
      });

      tl.from(
        ".nav-link",
        {
          x: 20,
          duration: 0.8,
          stagger: 0.05,
          ease: "power3.out",
        },
        "-=0.5",
      );

      gsap.to(".nav-logo-shimmer", {
        backgroundPosition: "200% center",
        duration: 4,
        ease: "none",
        repeat: -1,
      });
    },
    { scope: container },
  );

  // Helper to ensure links always point to the root domain ID
  const getHref = (item: string) => {
    const id = item.toLowerCase().replace(/ /g, "-");
    if (item === "Home") return "/#home";
    return `/#${id}`;
  };

  return (
    <nav
      ref={container}
      className="nav-container fixed top-0 w-full z-100 flex justify-between items-center px-6 md:px-12 py-6 border-b border-white/5 backdrop-blur-md bg-black/10 text-white"
    >
      {/* Logo - Always points to root home */}
      <a href="/#home" className="z-110">
        <div className="nav-logo-shimmer text-2xl font-black tracking-tighter uppercase italic cursor-pointer">
          Saas<span>Force</span>
        </div>
      </a>

      {/* Desktop Navigation - FIXED: Now uses getHref */}
      <div className="hidden lg:flex gap-10 items-center">
        {navItems.map((item) => (
          <a
            key={item}
            href={getHref(item)}
            className="nav-link text-[10px] uppercase tracking-[0.3em] font-bold text-white/70 hover:text-cyan-400 transition-all duration-300"
          >
            {item}
          </a>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <div
        className="lg:hidden flex flex-col justify-start gap-1.5 cursor-pointer z-110 p-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className={`h-px bg-cyan-400 shadow-[0_0_8px_#22d3ee] transition-all duration-300 ${isOpen ? "w-6 rotate-45 translate-y-2" : "w-6"}`} />
        <div className={`h-px bg-white transition-all duration-300 ${isOpen ? "opacity-0" : "w-4"}`} />
        <div className={`h-px bg-white transition-all duration-300 ${isOpen ? "w-6 -rotate-45 -translate-y-1" : "w-4"}`} />
      </div>

      {/* Mobile Overlay */}
      <div
        className={`absolute top-full left-0 w-full bg-black/95 backdrop-blur-2xl border-b border-white/5 flex flex-col items-center py-12 gap-6 transition-all duration-500 lg:hidden z-90 overflow-hidden
        ${isOpen ? "translate-y-0 opacity-100 pointer-events-auto" : "-translate-y-4 opacity-0 pointer-events-none"}`}
      >
        {navItems.map((item, idx) => (
          <a
            key={item}
            href={getHref(item)}
            onClick={() => setIsOpen(false)}
            className={`text-lg uppercase tracking-[0.3em] font-bold text-white/70 hover:text-cyan-400 transition-all duration-300 transform 
            ${isOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
            style={{ transitionDelay: isOpen ? `${idx * 40}ms` : "0ms" }}
          >
            {item}
          </a>
        ))}
      </div>

      <style jsx>{`
        .nav-logo-shimmer {
          background: linear-gradient(
            90deg,
            #00d2ff 0%,
            #fff 50%,
            #00d2ff 100%
          );
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          filter: drop-shadow(0 0 8px rgba(0, 210, 255, 0.5));
        }
        .nav-link::after {
          content: "";
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0%;
          height: 1px;
          background: #00d2ff;
          box-shadow: 0 0 10px #00d2ff;
          transition: width 0.3s ease;
        }
        .nav-link:hover::after {
          width: 100%;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;