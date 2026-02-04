"use client";

import Image from "next/image";
import styles from "./RegisterInterest.module.css";

export default function RegisterInterest() {
  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        {/* LEFT : Always-in-motion brand showcase */}
        <div className={styles.brandCard}>
          <div className={styles.slideshow}>
            <Image
              src="/images/endimg.jpeg"
              alt="End image"
              fill
              className={styles.slideImage}
              priority={false}
            />

            <Image
              src="/images/slide1.jpeg"
              alt="5 Bedroom Villa"
              fill
              className={styles.slideImage}
              priority={false}
            />

            <Image
              src="/images/slide2.jpeg"
              alt="4 Bedroom Villa"
              fill
              className={styles.slideImage}
              priority={false}
            />

            <Image
              src="/images/slide3.jpeg"
              alt="Twin Villa"
              fill
              className={styles.slideImage}
              priority={false}
            />

            <Image
              src="/images/endlogo.jpeg"
              alt="Ohana Development"
              fill
              className={`${styles.slideImage} ${styles.logoImage}`}
              priority={false}
            />
          </div>
        </div>

        {/* RIGHT : Register form */}
        <div className={styles.formCard}>
          <h2 className={styles.heading}>Register Your Interest</h2>
          <p className={styles.subtext}>
            Be the first to receive exclusive updates and floor plans.
          </p>

          <form className={styles.form}>
            <input
              type="text"
              placeholder="Full Name"
              className={styles.input}
            />

            <input
              type="email"
              placeholder="Email Address"
              className={styles.input}
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className={styles.input}
            />

            <button type="submit" className={styles.button}>
              Register
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
