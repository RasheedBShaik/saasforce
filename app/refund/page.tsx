import React from 'react'

const RefundPolicy = () => {
  return (
    <div className="min-h-screen py-24 px-6 max-w-5xl mx-auto relative">
      {/* Background Decorative Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-96 bg-cyan-500/5 blur-[120px] pointer-events-none" />

      <div className="relative z-10 space-y-12">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tighter uppercase italic">
            Refund <span className="text-cyan-400">Policy</span>
          </h1>
          <div className="w-24 h-px bg-linear-to-r from-transparent via-cyan-500 to-transparent mx-auto" />
          <p className="mt-6 text-white/40 uppercase tracking-[0.3em] text-[10px] font-bold">
            Last Updated: October 22, 2024
          </p>
        </div>

        {/* Main Content Card */}
        <div className="border border-white/10 bg-white/2 backdrop-blur-md rounded-[2.5rem] p-8 md:p-16 shadow-2xl space-y-12 text-white/70 leading-relaxed font-medium">
          
          {/* Introduction */}
          <section className="space-y-4">
            <p className="text-lg text-white/90">
              Thank you for choosing <span className="text-cyan-400 font-bold">Vanshiv Technologies</span> for your software solutions and services.
            </p>
            <p>
              If, for any reason, you are not completely satisfied with our services, we invite you to review our policy on refunds and returns. This policy ensures transparency in handling cancellations and refunds.
            </p>
          </section>

          {/* Definitions Grid */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-white uppercase tracking-widest border-b border-white/10 pb-2">
              Definitions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              {[
                { label: "Company", desc: "Vanshiv Technologies Pvt. Ltd., Jaipur, Rajasthan, India." },
                { label: "Services", desc: "Software development, integration, and event management solutions." },
                { label: "Orders", desc: "A request by You to procure any of Our Services." },
                { label: "You", desc: "The individual or legal entity accessing the Service." },
              ].map((def, i) => (
                <div key={i} className="bg-white/5 p-5 rounded-2xl border border-white/5 hover:border-cyan-500/20 transition-colors">
                  <strong className="text-cyan-400 block mb-1 uppercase tracking-tighter">{def.label}</strong>
                  <p>{def.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Cancellation Rights */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-white uppercase tracking-widest border-b border-white/10 pb-2">
              Cancellation Rights
            </h2>
            <div className="bg-cyan-500/5 border border-cyan-500/20 p-6 rounded-3xl relative overflow-hidden">
               <div className="absolute -right-4 -top-4 w-20 h-20 bg-cyan-400/10 blur-2xl" />
               <p className="relative z-10">
                You are entitled to cancel Your Order for services within <span className="text-white font-bold">30 days</span>, provided the services have not yet been delivered or substantially completed.
               </p>
            </div>
            <p className="text-sm">We will process refunds within <span className="text-white font-bold">14 days</span> from the day the request is received, using the original payment method.</p>
          </section>

          {/* Conditions Table-like Layout */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-white uppercase tracking-widest border-b border-white/10 pb-2">
              Refund Eligibility
            </h2>
            <div className="space-y-4">
              <div className="flex gap-4 items-start">
                <div className="w-6 h-6 rounded-full bg-cyan-400/20 flex items-center justify-center shrink-0 mt-1">
                  <div className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />
                </div>
                <p>Service delivery must be in its initial stages and not yet completed.</p>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-6 h-6 rounded-full bg-cyan-400/20 flex items-center justify-center shrink-0 mt-1">
                  <div className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />
                </div>
                <p><span className="text-white font-bold">Event Services:</span> Cancellations must be made at least 7 days prior to the event date.</p>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-6 h-6 rounded-full bg-red-400/20 flex items-center justify-center shrink-0 mt-1">
                  <div className="w-2 h-2 rounded-full bg-red-400 shadow-[0_0_8px_#f87171]" />
                </div>
                <p><span className="font-bold text-red-400 uppercase text-xs">No Refunds:</span> Customised software or completed projects are generally not eligible for a refund.</p>
              </div>
            </div>
          </section>

          {/* Contact Footer */}
          <section className="pt-10 border-t border-white/10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
              <div>
                <h2 className="text-2xl font-bold text-white uppercase tracking-widest mb-2">Request a Refund</h2>
                <p className="text-sm text-white/40">Contact our support team to initiate the process.</p>
              </div>
              <div className="flex gap-4 w-full md:w-auto">
                <a href="/#contact-us" className="bg-cyan-500/10 border border-cyan-500/20 px-8 py-4 rounded-2xl flex-1 text-center hover:bg-cyan-500/20 transition-all group">
                  <p className="text-[10px] uppercase font-black text-cyan-400 tracking-widest mb-1">Email Support</p>
                  <p className="text-white text-sm">info@vanshiv.com</p>
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default RefundPolicy