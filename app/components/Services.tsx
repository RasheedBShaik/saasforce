"use client";
import React from "react";
import { Mail, Award } from "lucide-react";

const ServicesSection = () => {
  return (
    <section id="services" className="relative w-full bg-black overflow-hidden">
      
      {/* BACKGROUND IMAGE - Vibrant Digital Mesh */}
      <div 
        className="absolute inset-0 z-0 opacity-50"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2340&auto=format&fit=crop')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Gradient Overlays for readability and "extra space" removal */}
      <div className="absolute inset-0 z-0 bg-linear-to-b from-black via-transparent to-black" />
      <div className="absolute inset-0 z-0 bg-black/40 backdrop-blur-[2px]" />

      <div className="max-w-5xl mx-auto relative z-10 text-center py-20 px-6 space-y-6">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 backdrop-blur-md">
          <Award size={14} className="text-cyan-400" />
          <span className="text-cyan-400 text-[10px] font-black uppercase tracking-[0.2em]">
            Since 2007
          </span>
        </div>
        
        {/* Title */}
        <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase italic drop-shadow-2xl">
          Our <span className="text-cyan-400">Services</span>
        </h2>
        
        {/* Content Body */}
        <div className="max-w-3xl mx-auto space-y-6">
          <p className="text-base md:text-lg text-white/80 leading-relaxed font-medium">
            Vanshiv was founded by industry veterans and experts who were 
            <span className="text-cyan-400"> early adopters of cloud technologies. </span> 
            Prominent in the Salesforce space for over 16 years, we have successfully executed 
            <span className="text-white font-bold"> 200+ projects </span> 
            of varying complexity across multiple global domains.
          </p>

          <p className="text-sm text-white/60 italic font-light">
            Partnering with businesses to drive digital transformation through deep technical expertise and strategic cloud advisory.
          </p>
        </div>

        {/* CTA Button */}
        <div className="pt-4">
          <a 
            href="mailto:sales@vanshiv.com"
            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-black rounded-xl hover:bg-cyan-400 transition-all duration-300 group shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-cyan-500/50"
          >
            <Mail size={18} />
            TALK TO AN EXPERT
            <span className="hidden md:block opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-xs font-bold border-l border-black/20 pl-2">
              sales@vanshiv.com
            </span>
          </a>
        </div>
      </div>

    </section>
  );
};

export default ServicesSection;