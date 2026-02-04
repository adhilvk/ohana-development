"use client";

import React, { useEffect, useRef } from "react";
import "./StickyBgScroll.css";

const StickyBgScroll = () => {
  const sectionRef = useRef(null);

 useEffect(() => {
  if (!sectionRef.current) return;

  const contentSections =
    sectionRef.current.querySelectorAll(".sticky-content");
  const bgSections =
    sectionRef.current.querySelectorAll(".sticky-bg");

  // Content observer (text + image)
  const contentObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    },
    { threshold: 0.3 }
  );

  contentSections.forEach((el) => contentObserver.observe(el));

  // Background label observer
  const bgObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    },
    { threshold: 0.6 }
  );

  bgSections.forEach((bg) => bgObserver.observe(bg));

  return () => {
    contentObserver.disconnect();
    bgObserver.disconnect();
  };
}, []);


  return (
    <section className="sticky-wrapper" ref={sectionRef}>
      {/* BG 1 */}
      <div className="sticky-bg bg-1">
        <div className="bg-label">WATERSPORTS CLUB</div>
      </div>

      <div className="sticky-content">
        <div className="content-text">
          <h2>Watersports Experience</h2>
          <p>
            A lifestyle shaped by water, movement, and open horizons.
          </p>
        </div>

        <div className="content-image watersports-img"></div>
      </div>

      {/* BG 2 */}
      <div className="sticky-bg bg-2">
        <div className="bg-label">RECOVERY PIER</div>
      </div>

      <div className="sticky-content">
        <div className="content-text">
          <h2>Wellness & Recovery</h2>
          <p>
            Spaces designed for calm, restoration, and balance.
          </p>
        </div>

        <div className="content-image recovery-img"></div>
      </div>

      {/* BG 3 */}
      <div className="sticky-bg bg-3">
        <div className="bg-label">FINE DINING ORGANIC</div>
      </div>

      <div className="sticky-content">
        <div className="content-text">
          <h2>Organic Dining</h2>
          <p>
            Culinary experiences rooted in freshness and sustainability.
          </p>
        </div>

        <div className="content-image dining-img"></div>
      </div>
    </section>
  );
};

export default StickyBgScroll;
