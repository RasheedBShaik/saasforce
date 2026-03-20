
const Terms = () => {
  return (
    <div className="min-h-screen py-24 px-6 max-w-5xl mx-auto relative">
      {/* Background Decorative Glow - Matches Privacy Page */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-96 bg-purple-500/5 blur-[120px] pointer-events-none" />

      <div className="relative z-10 space-y-12">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tighter uppercase italic">
            Terms & <span className="text-cyan-400">Conditions</span>
          </h1>
          <div className="w-24 h-px bg-linear-to-r from-transparent via-cyan-500 to-transparent mx-auto" />
          <p className="mt-6 text-white/40 uppercase tracking-[0.3em] text-[10px] font-bold">
            Effective Date: March 20, 2026
          </p>
        </div>

        {/* Main Content Card */}
        <div className="border border-white/10 bg-white/2 backdrop-blur-md rounded-[2.5rem] p-8 md:p-16 shadow-2xl space-y-12 text-white/70 leading-relaxed font-medium">
          
          {/* Acknowledgment */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white uppercase tracking-widest border-b border-white/10 pb-2">
              Acknowledgment
            </h2>
            <div className="space-y-4 text-sm md:text-base">
              <p>These are the Terms and Conditions governing the use of this Service and the agreement that operates between You and the Company. These Terms and Conditions set out the rights and obligations of all users regarding the use of the Service.</p>
              <p>Your access to and use of the Service is conditioned on Your acceptance of and compliance with these Terms and Conditions. These Terms apply to all visitors, users, and others who access or use the Service.</p>
              <div className="bg-cyan-500/5 border-l-2 border-cyan-400 p-4 italic text-white/90">
                "By accessing or using the Service, You agree to be bound by these Terms and Conditions. If You disagree with any part of these Terms, You may not access the Service."
              </div>
              <p>You represent that You are <span className="text-white font-bold underline decoration-cyan-500">over the age of 18</span>. The Company does not permit those under 18 to use the Service.</p>
            </div>
          </section>

          {/* Links & Termination Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <section className="space-y-4">
              <h3 className="text-xl font-bold  uppercase tracking-wider text-cyan-400">Links to Other Websites</h3>
              <p className="text-sm">Our Service may contain links to third-party websites or services that are not owned or controlled by the Company. We have no control over, and are not responsible for, the content or privacy policies of any third-party sites.</p>
            </section>
            <section className="space-y-4">
              <h3 className="text-xl font-bold uppercase tracking-wider text-cyan-400">Termination</h3>
              <p className="text-sm">We may terminate or suspend Your access immediately, without prior notice or liability, for any reason, including if You breach these Terms and Conditions.</p>
            </section>
          </div>

          {/* Liability & Disclaimer */}
          <section className="space-y-6">
             <h2 className="text-2xl font-bold text-white uppercase tracking-widest border-b border-white/10 pb-2">
              Legal Disclaimers
            </h2>
            <div className="grid grid-cols-1 gap-6">
                <div className="bg-white/5 p-6 rounded-2xl border border-white/5">
                    <h4 className="text-cyan-400 font-bold mb-2 uppercase text-xs tracking-widest">Limitation of Liability</h4>
                    <p className="text-sm italic">To the maximum extent permitted by law, the Company's total liability shall not exceed the amount paid by You for using the Service, or $100 USD if no purchase has been made.</p>
                </div>
                <div className="bg-white/5 p-6 rounded-2xl border border-white/5">
                    <h4 className="text-cyan-400 font-bold mb-2 uppercase text-xs tracking-widest">"AS IS" Disclaimer</h4>
                    <p className="text-sm italic">The Service is provided to You on an "AS IS" and "AS AVAILABLE" basis without warranties of any kind, either express or implied.</p>
                </div>
            </div>
          </section>

          {/* Governing Law & Disputes */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white uppercase tracking-widest border-b border-white/10 pb-2">
              Governing Law
            </h2>
            <p>These Terms are governed by and construed in accordance with the laws of the <span className="text-white">Country</span>. In the event of any dispute, You agree to first attempt to resolve it informally by contacting the Company.</p>
          </section>

          {/* Contact Section - Clickable Navigation to Home Form */}
          <section className="pt-10 border-t border-white/10">
            <h2 className="text-2xl font-bold text-white uppercase tracking-widest mb-6">
              Questions?
            </h2>
            <div className="flex flex-wrap gap-4">
              <a href="/#contact-us" className="bg-cyan-500/10 border border-cyan-500/20 px-6 py-4 rounded-2xl flex-1 min-w-[200px] hover:bg-cyan-500/20 transition-all duration-300 group">
                <p className="text-[10px] uppercase font-black text-cyan-400 tracking-widest mb-1">Email Support</p>
                <p className="text-white group-hover:text-cyan-200">info@vanshiv.com</p>
              </a>
              <a href="/#contact-us" className="bg-white/5 border border-white/10 px-6 py-4 rounded-2xl flex-1 min-w-50 hover:border-white/20 transition-all">
                <p className="text-[10px] uppercase font-black text-white/40 tracking-widest mb-1">Direct Line</p>
                <p className="text-white">+91-7894561230</p>
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Terms