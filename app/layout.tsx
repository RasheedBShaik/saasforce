import type { Metadata } from "next";


import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "SaasForce | Reimagine the Future",
  description: "High-end digital solutions for Salesforce, MuleSoft, and Google Cloud.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="antialiased bg-[#050505] text-white selection:bg-cyan-500/30 selection:text-cyan-400 min-h-screen flex flex-col relative">
        
        {/* GLOBAL NOISE TEXTURE - Stays on top of everything */}
        <div className="fixed inset-0 z-9999 pointer-events-none opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-100 contrast-150" />

        {/* 1. Fixed Navbar at the top */}
        <Navbar />

        {/* 2. Main content grows to fill space */}
        <main className="relative z-10 grow">
          {children}
        </main>

        {/* 3. Footer at the very bottom */}
        <Footer />

        {/* Custom Scrollbar Styles (Server Component Safe) */}
        <style dangerouslySetInnerHTML={{ __html: `
          ::-webkit-scrollbar { width: 8px; }
          ::-webkit-scrollbar-track { background: #050505; }
          ::-webkit-scrollbar-thumb { 
            background: rgba(255, 255, 255, 0.1); 
            border-radius: 20px; 
            border: 2px solid #050505; 
          }
          ::-webkit-scrollbar-thumb:hover { background: rgba(34, 211, 238, 0.4); }
          body { text-rendering: optimizeLegibility; -webkit-font-smoothing: antialiased; }
        `}} />
      </body>
    </html>
  );
}