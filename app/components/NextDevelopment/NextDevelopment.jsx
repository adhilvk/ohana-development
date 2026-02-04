"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./NextDevelopment.module.css";

export default function NextDevelopment() {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Where Ohana Builds Next</h2>

      <div className={styles.mapWrapper}>
        {/* LEFT */}
        <motion.div
          className={styles.left}
          initial={{ x: -300, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
        >
          <div className={styles.imageHolder}>
            <Image
              src="/images/map.png"
              alt="Next development map left"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className={styles.mapImage}
            />
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          className={styles.right}
          initial={{ x: 300, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            duration: 1.4,
            delay: 0.08,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{ once: true }}
        >
          <div className={styles.imageHolder}>
            <Image
              src="/images/mapp.png"
              alt="Next development map right"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className={styles.mapImage}
            />
          </div>
        </motion.div>

        <div className={styles.glassOverlay} />
      </div>
    </section>
  );
}
