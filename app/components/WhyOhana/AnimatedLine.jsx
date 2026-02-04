"use client";

import { motion } from "framer-motion";

export default function AnimatedLine({ text, from, delay }) {
  return (
    <motion.p
      initial={{ opacity: 0, x: from === "left" ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      viewport={{ once: true }}
      className="text-[17px] text-gray-400 leading-relaxed"
    >
      {text}
    </motion.p>
  );
}
