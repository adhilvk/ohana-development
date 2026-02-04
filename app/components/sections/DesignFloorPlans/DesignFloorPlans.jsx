"use client";

import Image from "next/image";
import styles from "./DesignFloorPlans.module.css";

export default function DesignFloorPlans() {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Design & Floor Plans</h2>

      <div className={styles.container}>
  {/* Slide 1 */}
  <div className={styles.item}>
    <div className={`${styles.card} ${styles.fromLeft}`}>
      <Image
        src="/images/slide1.jpeg"
        alt="5 Bedroom Villa"
        fill
        className={styles.image}
      />

      <div className={styles.hover}>
        <Image
          src="/images/slide10.png"
          alt="Floor plan 1"
          fill
          className={styles.hoverImage}
        />
        <span className={styles.label}>Plan 01</span>
      </div>
    </div>

    <p className={styles.cardName}>5 BEDROOM VILLA</p>
  </div>

  {/* Slide 2 */}
  <div className={styles.item}>
    <div className={styles.card}>
      <Image
        src="/images/slide2.jpeg"
        alt="4 Bedroom Villa"
        fill
        className={styles.image}
      />

      <div className={styles.hover}>
        <Image
          src="/images/slide20.png"
          alt="Floor plan 2"
          fill
          className={styles.hoverImage}
        />
        <span className={styles.label}>Plan 02</span>
      </div>
    </div>

    <p className={styles.cardName}>4 BEDROOM VILLA</p>
  </div>

  {/* Slide 3 */}
  <div className={styles.item}>
    <div className={`${styles.card} ${styles.fromRight}`}>
      <Image
        src="/images/slide3.jpeg"
        alt="Twin Villa"
        fill
        className={styles.image}
      />

      <div className={styles.hover}>
        <Image
          src="/images/slide30.jpeg"
          alt="Floor plan 3"
          fill
          className={styles.hoverImage}
        />
        <span className={styles.label}>Plan 03</span>
      </div>
    </div>

    <p className={styles.cardName}>TWIN VILLA</p>
  </div>
</div>

    </section>
  );
}
