import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen py-24 px-6 max-w-5xl mx-auto relative">
      {/* Background Decorative Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-96 bg-cyan-500/5 blur-[120px] pointer-events-none" />

      <div className="relative z-10 space-y-12">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tighter uppercase italic">
            Privacy <span className="text-cyan-400">Policy</span>
          </h1>
          <div className="w-24 h-px bg-linear-to-r from-transparent via-cyan-500 to-transparent mx-auto" />
          <p className="mt-6 text-white/40 uppercase tracking-[0.3em] text-[10px] font-bold">
            Last Updated: March 20, 2026
          </p>
        </div>

        {/* Main Content Card */}
        <div className="border border-white/10 bg-white/2 backdrop-blur-md rounded-[2.5rem] p-8 md:p-16 shadow-2xl space-y-10 text-white/70 leading-relaxed font-medium">
          {/* Section 1 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white uppercase tracking-widest border-b border-white/10 pb-2">
              Interpretation and Definitions
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-cyan-400 font-bold mb-2">Interpretation</h3>
                <p>
                  The words in which the initial letter is capitalised have
                  meanings defined under the following conditions. These
                  definitions shall have the same meaning regardless of whether
                  they appear in singular or plural.
                </p>
              </div>
              <div>
                <h3 className="text-cyan-400 font-bold mb-4">Definitions</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  {[
                    {
                      label: "Account",
                      desc: "A unique account created for You to access our Service.",
                    },
                    {
                      label: "Company",
                      desc: "Refers to Vanshiv Technologies Pvt. Ltd., Jaipur, Rajasthan, India.",
                    },
                    {
                      label: "Cookies",
                      desc: "Small files placed on Your device to store browsing history.",
                    },
                    {
                      label: "Personal Data",
                      desc: "Information relating to an identified or identifiable individual.",
                    },
                    {
                      label: "Service",
                      desc: "Refers to the Website operated by Vanshiv Technologies.",
                    },
                    {
                      label: "You",
                      desc: "The individual or legal entity accessing the Service.",
                    },
                  ].map((def, i) => (
                    <li
                      key={i}
                      className="bg-white/5 p-4 rounded-2xl border border-white/5"
                    >
                      <strong className="text-white block mb-1">
                        {def.label}:
                      </strong>{" "}
                      {def.desc}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white uppercase tracking-widest border-b border-white/10 pb-2">
              Collecting Your Data
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <h3 className="text-cyan-400 font-bold">Personal Data</h3>
                <p>
                  While using Our Service, We may ask You for personally
                  identifiable information:
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Email address</li>
                  <li>First and Last name</li>
                  <li>Phone number</li>
                  <li>Usage Data</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="text-cyan-400 font-bold">Usage Data</h3>
                <p>Usage Data is collected automatically and may include:</p>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Device IP address</li>
                  <li>Browser type & version</li>
                  <li>Time spent on pages</li>
                  <li>Unique device identifiers</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white uppercase tracking-widest border-b border-white/10 pb-2">
              Use of Your Personal Data
            </h2>
            <p>The Company may use Personal Data for the following purposes:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              {[
                "To provide and maintain our Service",
                "To manage Your Account registration",
                "To contact You via email/SMS for updates",
                "For corporate business transfers",
                "For marketing and promotions",
                "For data analysis and Service improvement",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Contact Section */}
          <section className="pt-10 border-t border-white/10">
            <h2 className="text-2xl font-bold text-white uppercase tracking-widest mb-6">
              Contact Us
            </h2>
            <div className="flex flex-wrap gap-6">
              {/* Email Card - Navigates to Form */}
              <a
                href="/#contact-us"
                className="bg-cyan-500/10 border border-cyan-500/20 px-6 py-4 rounded-2xl flex-1 min-w-50 hover:bg-cyan-500/20 transition-all duration-300 group"
              >
                <p className="text-[10px] uppercase font-black text-cyan-400 tracking-widest mb-1">
                  Email
                </p>
                <p className="text-white group-hover:text-cyan-200 transition-colors">
                  info@vanshiv.com
                </p>
              </a>

              {/* Phone Card - Navigates to Form */}
              <a
                href="/#contact-us"
                className="bg-white/5 border border-white/10 px-6 py-4 rounded-2xl flex-1 min-w-50 hover:border-white/20 hover:bg-white/10 transition-all duration-300 group"
              >
                <p className="text-[10px] uppercase font-black text-white/40 tracking-widest mb-1">
                  Phone
                </p>
                <p className="text-white group-hover:text-cyan-400 transition-colors">
                  +91-7894561230
                </p>
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
