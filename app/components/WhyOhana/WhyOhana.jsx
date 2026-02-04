"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedLine from "./AnimatedLine";

export default function WhyOhana() {
  const lines = [
    { text: "A developer known for uncompromising quality and precision.", from: "left" },
    { text: "Thoughtfully designed spaces that balance luxury and comfort.", from: "right" },
    { text: "Strategic locations chosen for long-term value and lifestyle.", from: "left" },
    { text: "A proven track record of on-time delivery and trust.", from: "right" },
  ];

  return (
    <section className="py-32 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* LEFT CARD */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ amount: 0.3 }}
          className="
            group
            relative
             h-full
            bg-[#0b0b0b]
            rounded-3xl
            p-12
            space-y-6
            border border-white/5
            cursor-pointer
            transition-all
            duration-500
            ease-out
            hover:-translate-y-5
            hover:shadow-[0_40px_80px_rgba(0,0,0,0.9)]
            overflow-hidden
          "
        >
          {/* GLASS POPUP — SLIDES FROM BOTTOM */}
          <div
            className="
              pointer-events-none
    absolute
    inset-0
    flex
    items-center
    justify-center
    backdrop-blur-md
    bg-white/5

    transform
    translate-y-full
    group-hover:translate-y-0

    opacity-0
    group-hover:opacity-100

    transition-all
    duration-500
    ease-out
            "
          >
            <span className="text-white text-sm tracking-widest uppercase">
              Click for more details
            </span>
          </div>

          {/* CONTENT */}
          <h2 className="font-playfair text-3xl md:text-4xl text-white">
            Why Ohana Development?
          </h2>

          {lines.map((line, index) => (
            <AnimatedLine
              key={index}
              text={line.text}
              from={line.from}
              delay={index * 0.2}
            />
          ))}
        </motion.div>

        {/* RIGHT IMAGE */}
       <motion.div
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.9, ease: "easeOut" }}
  viewport={{ amount: 0.3 }}
  className="
    relative
    h-full
    bg-[#0b0b0b]
    rounded-3xl
    overflow-hidden
    border border-white/5
    transition-all
    duration-500
    ease-out
    hover:-translate-y-5
    hover:shadow-[0_40px_80px_rgba(0,0,0,0.9)]
  "
>
  <Image
    src="/images/ohana-development.png"
    alt="Ohana Development"
    fill
    className="object-cover"
    priority={false}
  />
</motion.div>


      </div>
    </section>
  );
}
