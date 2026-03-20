"use client";
import React from "react";
import Carousel from "./Carousel";
import { motion } from "framer-motion";

const CustomersAndPartners = () => {
  // Example partner data - replace icons/names as needed
  
  return (
    <section className="py-6 px-6 mx-auto " id="customers-&-partners">
      {/* Header Section */}
      <div className="mb-16 text-center">
        <h2 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tighter uppercase italic">
          Our <span className="text-cyan-400">Customers</span> &{" "}
          <span className="text-cyan-400">Partners</span>
        </h2>
        <div className="w-24 h-px bg-linear-to-r from-transparent via-cyan-500 to-transparent mx-auto" />
      </div>

      {/* Intro Text */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <p className="text-lg md:text-xl text-white/60 leading-relaxed tracking-wide font-light">
          Vanshiv is proud to partner with these organizations.
          <span className="text-white block font-bold mt-2 italic">
            Your success is our ultimate production metric.
          </span>
        </p>
      </div>

      {/* Logo Carousel */}
      <div>
        <Carousel />
      </div>
      {/* Brand & SWAT Team Story Card */}
      
    </section>
  );
};

export default CustomersAndPartners;
