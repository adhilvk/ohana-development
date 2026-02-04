"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <header className="absolute top-0 left-0 w-full z-50">
      <div className="px-2 pt-0.5 pb-0 flex items-center justify-between">
        
        {/* Logo – left corner */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Image
  src="/images/logoo.jpeg"
  alt="logoo"
  width={130}
  height={35}
  priority
  className="object-contain"
  style={{
    borderRadius: "18px 18px 0 0",
    clipPath: "polygon(0 0, 100% 0, 100% 80%, 50% 100%, 0 80%)",
  }}
/>

        </motion.div>

        {/* Register button – right corner */}
        <motion.button
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="mr-6 px-6 py-3 border border-white/40 text-sm tracking-wide uppercase rounded-full hover:bg-white hover:text-black transition"
        >
          Register
        </motion.button>

      </div>
    </header>
  );
}
