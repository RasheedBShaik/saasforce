import React from "react";
import { Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="px-6 pb-12">
      <section className="flex flex-col md:flex-row w-full mx-auto justify-between items-center gap-8 rounded-4xl border border-white/10 bg-white/2 backdrop-blur-md p-8 md:p-10 relative overflow-hidden group">
        {/* Subtle Background Glow */}
        <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-cyan-500/5 blur-3xl pointer-events-none" />

        {/* LOGO SECTION */}
        <a href="/#home" className="z-110">
          <div className="nav-logo-shimmer text-2xl font-black tracking-tighter uppercase italic cursor-pointer">
            Saas<span>Force</span>
          </div>
        </a>

        {/* LEGAL PAGES */}
        <div className="flex gap-6 z-10">
          {[
            { name: "Privacy Policy", short: "Privacy" },
            { name: "Terms & Conditions", short: "Terms" },
            { name: "Refund Policy", short: "Refund" },
          ].map((link) => (
            <a
              key={link.short}
              href={`${link.short.toLowerCase()}`}
              className="text-[10px] font-bold uppercase tracking-widest text-white/40 hover:text-cyan-400 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* SOCIAL LINKS */}
        <div className="flex gap-4 z-10">
          <div className="flex flex-col items-center gap-2">
            <div className="flex gap-6">
              <a
                href="#"
                className="p-2 rounded-full border border-white/5 bg-white/5 hover:bg-cyan-500/10 hover:border-cyan-500/30 text-white/40 hover:text-cyan-400 transition-all"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="p-2 rounded-full border border-white/5 bg-white/5 hover:bg-cyan-500/10 hover:border-cyan-500/30 text-white/40 hover:text-cyan-400 transition-all"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="#"
                className="p-2 rounded-full border border-white/5 bg-white/5 hover:bg-cyan-500/10 hover:border-cyan-500/30 text-white/40 hover:text-cyan-400 transition-all"
              >
                <Twitter size={18} />
              </a>
            </div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/20 mt-2 font-bold text-center md:text-left">
              © 2026 Vanshiv Tech
            </p>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
