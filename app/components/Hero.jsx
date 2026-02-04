"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "/images/hero-bg-1.jpeg",
  "/images/hero-bg-2.jpeg",
  "/images/hero-bg-3.jpeg",
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 2000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center text-white overflow-hidden">

      {/* 🔥 Animated Background Images */}
      <AnimatePresence>
        <motion.div
          key={current}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${images[current]})` }}
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1, scale: 1.08 }}   // 👈 Ken Burns effect
          exit={{ opacity: 0 }}
          transition={{ duration: 1.8, ease: "easeInOut" }}
        />
      </AnimatePresence>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/65 z-10" />

      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_50%)] z-10" />

      {/* Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-6 text-center">

        {/* Badge */}
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block mb-6 px-4 py-2 text-sm rounded-full bg-white/10 backdrop-blur-md"
        >
          Trusted Real Estate Platform
        </motion.span>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight"
        >
          BRANDED RESIDENCES{" "}
          <span className="text-emerald-400">
            <br />COMING SOON
          </span>
          <br />
          YAS CANAL, ABU DHABI
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mt-6 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto"
        >
          Discover premium properties, verified listings, and expert guidance —
          all in one place.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button className="px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-black font-semibold rounded-xl transition">
            Explore Properties
          </button>

          <button className="px-8 py-4 border border-white/30 hover:bg-white/10 rounded-xl transition">
            Talk to an Agent
          </button>
        </motion.div>

      </div>
    </section>
  );
}
