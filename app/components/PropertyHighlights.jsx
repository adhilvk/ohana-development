"use client";

import { motion } from "framer-motion";

const leftVariant = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0 },
};

const centerVariant = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 },
};

const rightVariant = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0 },
};

export default function PropertyHighlights() {
  return (
    <section className="bg-black text-white border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-center text-center divide-y md:divide-y-0 md:divide-x divide-zinc-800">

          {/* Unit Type — FROM LEFT */}
          <motion.div
            variants={leftVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.4 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex-1 py-4 md:py-0 md:px-6"
          >
            <p className="text-sm text-zinc-400 mb-1">Unit Type</p>
            <h3 className="text-xl font-semibold">
              Townhouse, 4BR Villa, 5BR Villa
            </h3>
          </motion.div>

          {/* Starting From — CENTER */}
          <motion.div
            variants={centerVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.4 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
            className="flex-1 py-4 md:py-0 md:px-6"
          >
            <p className="text-sm text-zinc-400 mb-1">Starting From</p>
            <h3 className="text-xl font-semibold text-emerald-400">
              AED 4,500,000
            </h3>
          </motion.div>

          {/* Payment Plan — FROM RIGHT */}
          <motion.div
            variants={rightVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.4 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
            className="flex-1 py-4 md:py-0 md:px-6"
          >
            <p className="text-sm text-zinc-400 mb-1">Payment Plan</p>
            <h3 className="text-xl font-semibold">
              50/50, 75/25
            </h3>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
