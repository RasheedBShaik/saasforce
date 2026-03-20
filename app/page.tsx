import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import CustomersAndPartners from "./components/CustomersAndPartners";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import Offerings from "./components/Offerings";
import ServicesSection from "./components/Services";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SaasForce | Reimagine the Future of Business",
  description: "High-end digital solutions and SaaS agency.",
};

// app/page.tsx
export default function Home() {
  return (
    <div>
      <Hero />
      <CustomersAndPartners />
      <About />
      <Offerings />
      <ServicesSection/>
      <ContactSection />
    </div>
  );
}
