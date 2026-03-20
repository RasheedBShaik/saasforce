"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2, Loader2, ChevronDown } from "lucide-react";

export default function ContactSection() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const mapSrc = `https://maps.google.com/maps?q=Anarav%20Technologies%20Kovur%20Nellore&z=17&output=embed`;

  const Location = [
    {
      Country: "India",
      Address:
        "Vanshiv Technologies Pvt. Ltd. Plot No. 25 SFS Circle, New Sanganer Road, GP Colony, Mansarovar, Jaipur, Rajasthan - 302020",
    },
    {
      Country: "AUSTRALIA",
      Address: "344 City Road, Southbank, Vic 3006, Australia",
    },
    {
      Country: "USA",
      Address:
        "5201 Great America Parkway, Suite 320, Santa Clara, CA 95054, United States",
    },
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(e.currentTarget);
    formData.append("access_key", "YOUR_KEY_HERE");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const result = await response.json();
      if (result.success) setIsSubmitted(true);
    } catch (error) {
      alert("Error submitting form.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact-us" className="p-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-16 text-center">
        <h2 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tighter uppercase italic">
          Contact <span className="text-cyan-400">SaasForce</span> Team
        </h2>
        <div className="w-24 h-px bg-linear-to-r from-transparent via-cyan-500 to-transparent mx-auto" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* LEFT: FORM */}
        <div className="lg:col-span-7 relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/2 p-8 md:p-12 shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 blur-[100px]" />

          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="h-full flex flex-col items-center justify-center text-center py-20"
            >
              <div className="w-20 h-20 bg-cyan-500/10 text-cyan-400 rounded-full flex items-center justify-center mb-6 border border-cyan-500/20 shadow-[0_0_20px_rgba(34,211,238,0.2)]">
                <CheckCircle2 size={40} />
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">
                Transmission Successful
              </h3>
              <p className="text-white/40 mb-8">
                Our operatives will reach out within 24 hours.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="text-cyan-400 uppercase text-xs font-bold tracking-widest hover:text-white transition-colors"
              >
                New Inquiry
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-white/30 font-bold ml-2">
                    Name*
                  </label>
                  <input
                    required
                    name="name"
                    type="text"
                    placeholder="Your Name"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white outline-none focus:border-cyan-500/50 focus:bg-cyan-500/5 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-white/30 font-bold ml-2">
                    Email*
                  </label>
                  <input
                    required
                    name="email"
                    type="email"
                    placeholder="email@company.com"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white outline-none focus:border-cyan-500/50 focus:bg-cyan-500/5 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-white/30 font-bold ml-2">
                    Contact Number*
                  </label>
                  <input
                    required
                    name="phone"
                    type="tel"
                    placeholder="+91 00000 00000"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white outline-none focus:border-cyan-500/50 focus:bg-cyan-500/5 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-white/30 font-bold ml-2">
                    Company
                  </label>
                  <input
                    name="company"
                    type="text"
                    placeholder="Company Name"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white outline-none focus:border-cyan-500/50 focus:bg-cyan-500/5 transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.2em] text-white/30 font-bold ml-2">
                  I am interested in discussing about*
                </label>
                <div className="relative">
                  <select
                    required
                    name="interest"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white outline-none focus:border-cyan-500/50 focus:bg-cyan-500/5 transition-all appearance-none cursor-pointer"
                  >
                    <option value="" className="bg-[#0A0A0A]">
                      Select an option
                    </option>
                    <option value="saas-development" className="bg-[#0A0A0A]">
                      SaaS Development
                    </option>
                    <option value="cloud-solutions" className="bg-[#0A0A0A]">
                      Cloud Solutions
                    </option>
                    <option value="ui-ux-design" className="bg-[#0A0A0A]">
                      UI/UX Design
                    </option>
                    <option
                      value="digital-transformation"
                      className="bg-[#0A0A0A]"
                    >
                      Digital Transformation
                    </option>
                    <option value="other" className="bg-[#0A0A0A]">
                      Other Inquiry
                    </option>
                  </select>
                  <ChevronDown
                    className="absolute right-6 top-1/2 -translate-y-1/2 text-white/20 pointer-events-none"
                    size={18}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.2em] text-white/30 font-bold ml-2">
                  Additional Details
                </label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Tell us more..."
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white outline-none resize-none focus:border-cyan-500/50 focus:bg-cyan-500/5 transition-all"
                />
              </div>

              <button
                disabled={isSubmitting}
                type="submit"
                className="w-full bg-cyan-500 hover:bg-cyan-400 text-black font-black py-5 rounded-2xl uppercase tracking-[0.2em] text-xs transition-all flex items-center justify-center gap-3 active:scale-[0.98]"
              >
                {isSubmitting ? (
                  <Loader2 size={18} className="animate-spin" />
                ) : (
                  <>
                    <Send size={18} /> Deploy Message
                  </>
                )}
              </button>
            </form>
          )}
        </div>

        {/* RIGHT: INFO + MAP */}
        <div className="lg:col-span-5 flex flex-col gap-8">
          <div className="border border-white/10 bg-white/2 rounded-[2.5rem] p-8 relative overflow-hidden group">
            <div className="absolute -right-4 -top-4 w-24 h-24 bg-purple-500/10 blur-3xl" />
            <div className="flex flex-col gap-8 relative z-10">
              {Location.map((item, i) => (
                <div key={i} className="space-y-2 group/loc">
                  <p className="text-xs uppercase tracking-[0.3em] text-cyan-400 font-black border-b border-white/10 pb-2 w-full">
                    {item.Country}
                  </p>
                  <p className="text-sm text-white/60 font-medium leading-relaxed group-hover/loc:text-white transition-colors">
                    {item.Address}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="grow rounded-[2.5rem] overflow-hidden border border-white/10 bg-[#0A0A0A] relative min-h-75 group shadow-2xl">
            <iframe
              src={mapSrc}
              width="100%"
              height="100%"
              loading="lazy"
              style={{ border: 0 }}
              className="transition-all duration-1000 ease-in-out scale-110 group-hover:scale-107 p-2"
            />
            <div className="absolute inset-0 pointer-events-none rounded-[2.5rem] shadow-[inset_0_0_60px_rgba(0,0,0,0.8)]" />
            <div className="absolute inset-0 border border-cyan-500/0 group-hover:border-cyan-500/20 transition-colors duration-700 rounded-[2.5rem] pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
