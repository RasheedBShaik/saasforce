"use client";
import React, { useState } from "react";
import { Cloud, Zap, Globe, Cpu, Database, ShoppingCart, Users } from "lucide-react";

const offeringData = [
  {
    title: "Salesforce Implementation",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
    description: "Tailored CRM solutions built to scale with your business logic and workflow automation.",
    icon: <Cpu size={18} />
  },
  {
    title: "Salesforce Advisory Services",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2340&auto=format&fit=crop",
    description: "Strategic roadmaps and expert consulting to maximize your digital transformation ROI.",
    icon: <Globe size={18} />
  },
  {
    title: "Cloud Implementations",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2340&auto=format&fit=crop",
    description: "Unified customer experiences across Sales, Service, and Experience Clouds.",
    icon: <Cloud size={18} />
  },
  {
    title: "B2B & B2C Commerce",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=2378&auto=format&fit=crop",
    description: "High-performance digital storefronts designed for global conversion and reach.",
    icon: <ShoppingCart size={18} />
  },
  {
    title: "Mulesoft Architecture",
    image: "https://images.unsplash.com/photo-1577375729152-4c8b5fcda381?w=600&auto=format&fit=crop&q=60",
    description: "Seamless API integrations connecting all your enterprise data and legacy systems.",
    icon: <Zap size={18} />
  },
  {
    title: "Workforce Development",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2340&auto=format&fit=crop",
    description: "Mentoring programs delivered by Salesforce experts to empower your internal teams.",
    icon: <Users size={18} />
  },
  {
    title: "Data Engineering Services",
    image: "https://images.unsplash.com/photo-1542744094-3a31f272c490?q=80&w=2000&auto=format&fit=crop",
    description: "Robust data pipelines and advanced cloud infrastructure for real-time analytics.",
    icon: <Database size={18} />
  },
];

const Offerings = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section 
      id="offerings" 
      className="relative min-h-screen w-full py-24 overflow-hidden flex items-center bg-black"
    >
      {/* BACKGROUND IMAGE */}
      <div 
        className="absolute inset-0 z-0 opacity-100 pointer-events-none"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2340&auto=format&fit=crop')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      />
      
      <div className="absolute inset-0 z-0 bg-linear-to-r from-black/90 via-black/30 to-black/70" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* LEFT SIDE: SERVICE LIST */}
        <div className="space-y-8">
          <div className="space-y-2">
            <h2 className="text-5xl font-black text-white tracking-tighter uppercase italic drop-shadow-2xl">
              Our <span className="text-cyan-400">Offerings</span>
            </h2>
            <div className="h-1 w-20 bg-cyan-500 rounded-full shadow-[0_0_10px_#22d3ee]" />
          </div>

          <div className="flex flex-col gap-3">
            {offeringData.map((item, index) => (
              <div 
                key={index}
                onMouseEnter={() => setActiveIndex(index)}
                className={`group flex items-center gap-4 p-5 rounded-2xl border transition-all duration-500 cursor-pointer
                ${activeIndex === index 
                  ? "border-cyan-400 bg-cyan-400/20 backdrop-blur-xl translate-x-6 scale-105 shadow-2xl shadow-cyan-500/20" 
                  : "border-white/10 bg-black/40 backdrop-blur-md hover:border-white/30"}`}
              >
                <div className={`shrink-0 w-10 h-10 rounded-xl flex items-center justify-center border transition-all duration-300
                  ${activeIndex === index 
                    ? "bg-cyan-400 text-black border-cyan-400" 
                    : "bg-white/5 text-cyan-400 border-white/10"}`}>
                  {item.icon}
                </div>
                <p className={`text-base font-bold transition-colors duration-300
                  ${activeIndex === index ? "text-white" : "text-white/50"}`}>
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE: DYNAMIC IMAGE */}
        <div className="relative h-162.5 flex items-center justify-center">
          <div className="relative w-full aspect-4/5 max-w-md group">
            <div className="absolute -inset-10 bg-cyan-500/30 blur-[100px] rounded-full opacity-50" />
            
            <div className="relative h-full border-4 border-white/10 p-2 rounded-[3.5rem] bg-black/20 backdrop-blur-md overflow-hidden shadow-2xl">
              <div className="h-full w-full overflow-hidden rounded-[2.8rem] relative bg-neutral-900">
                
                {/* REMOVED: key={...} 
                  By removing the key, React updates the src attribute of the EXISTING img tag.
                  This prevents the "destroy and recreate" flash.
                */}
                <img 
                  src={offeringData[activeIndex].image} 
                  alt={offeringData[activeIndex].title} 
                  className="w-full h-full object-cover transition-all duration-500 ease-in-out"
                />
                
                <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent opacity-80" />
                
                <div className="absolute bottom-10 left-8 right-8 space-y-3">
                  <p className="text-cyan-400 font-black text-[10px] uppercase tracking-[0.3em]">Module Overview</p>
                  <h3 className="text-2xl font-bold text-white leading-tight transition-all duration-300">
                    {offeringData[activeIndex].title}
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed font-medium italic transition-all duration-300">
                    {offeringData[activeIndex].description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Offerings;