import React from 'react'

const certificationBadges = [
  { name: "Salesforce Partner", level: "Summit" },
  { name: "MuleSoft", level: "Certified" },
  { name: "Google Cloud", level: "Professional" },
  { name: "Trailblazer", level: "Instructor" },
];

const About = () => {
  return (
    <section className='scroll-mt-4' id='about'>
      {/* Main Container */}
      <div className="relative rounded-[3rem] border border-white/20 bg-white/2 p-8 md:p-12 lg:p-16 overflow-hidden mb-12">
        
        {/* Decorative Background Glows */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 blur-[120px] translate-x-1/2 translate-y-1/2 pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          {/* Left Side: Image */}
          <div className="col-span-1 lg:col-span-3 flex justify-center order-1">
            <img
              className="max-h-60 lg:max-h-75 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
              src="/c&pleft.png"
              alt="client"
            />
          </div>

          {/* Center: The Core Message */}
          <div className="col-span-1 lg:col-span-6 space-y-8 lg:text-left order-1 lg:order-2">
            <h1 className="text-2xl md:text-4xl font-black text-white leading-tight uppercase tracking-tighter">
              Looking for a partner for your{" "}
              <span className="text-cyan-400">
                Salesforce / MuleSoft / Google Cloud
              </span>{" "}
              implementation? — Talk to us!
            </h1>

            <div className="space-y-6 text-sm md:text-base text-white/50 leading-relaxed font-medium">
              <p>
                Vanshiv is a premium consulting and training company focused on
                multi-cloud expertise across the{" "}
                <span className="text-white">
                  United States, Australia, and India
                </span>
                . We have assembled a{" "}
                <span className="text-cyan-400 font-bold uppercase tracking-widest text-[10px] px-2 py-1 bg-cyan-400/10 rounded-lg border border-cyan-400/20">
                  SWAT team
                </span>{" "}
                of the best minds to support our customers.
              </p>
              <p>
                Conceptualised and Founded by{" "}
                <a
                  href="#"
                  className="text-cyan-400 font-bold uppercase tracking-widest text-[10px] py-1 border-b border-cyan-400/30 hover:border-cyan-400 transition-all"
                >
                  Gaurav Kheterpal
                </a>
                , who's a Salesforce MVP Hall of Fame, MuleSoft Ambassador,{" "}
                <a
                  href="#"
                  className="text-cyan-400 font-bold uppercase tracking-widest text-[10px] py-1 border-b border-cyan-400/30 hover:border-cyan-400 transition-all"
                >
                  Trailblazer
                </a>{" "}
                and a Certified Instructor - Vanshiv works on the core values of
                trust, integrity and transparency.
              </p>
            </div>
          </div>

          {/* Right Side: Image */}
          <div className="col-span-1 lg:col-span-3 flex justify-center order-3">
            <img
              className="max-h-60 lg:max-h-75 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
              src="/c&pright.png"
              alt="client"
            />
          </div>
        </div>

        {/* --- Integrated Bottom Certifications Grid --- */}
        <div className="mt-16 pt-12 border-t border-white/10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto md:gap-6">
            {certificationBadges.map((badge, idx) => (
              <div
                key={idx}
                className="group relative p-6 rounded-2xl border border-white/5 bg-white/1 flex flex-col items-center justify-center gap-3 transition-all hover:border-cyan-500/40 hover:bg-white/3 hover:-translate-y-1"
              >
                {/* Badge Glow Effect */}
                <div className="absolute inset-0 bg-radial-gradient(circle,rgba(34,211,238,0.1)_0%,transparent_70%) opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-cyan-400 mb-1 group-hover:scale-110 transition-transform">
                   <div className="w-5 h-5 border-2 border-current rounded-sm rotate-45" />
                </div>

                <div className="text-center relative z-10">
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/90">
                    {badge.name}
                  </p>
                  <p className="text-[9px] font-bold uppercase tracking-widest text-cyan-400/50 mt-1">
                    {badge.level}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About