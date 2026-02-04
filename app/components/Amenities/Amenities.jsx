"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import "./Amenities.css";

const amenities = [
  {
    id: 1,
    src: "/images/amenity1.jpeg",
    label: "LIFESTYLE & SPORTS",
  },
  {
    id: 2,
    src: "/images/amenity2.jpeg",
    label: "SIGNATURE",
  },
  {
    id: 3,
    src: "/images/amenity3.jpeg",
    label: "WATERFRONT & OUTDOOR",
  },
  {
    id: 4,
    src: "/images/amenity4.jpeg",
    label: "WELLNESS & RECOVERY",
  },
];

const Amenities = () => {
  const sectionRef = useRef(null);

 useEffect(() => {
  const section = sectionRef.current;
  const cards = section.querySelectorAll(".amenity-card");

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        cards.forEach((card, index) => {
          setTimeout(() => {
            card.classList.add("show");
          }, index * 180); // one by one
        });
      } else {
        // reset so animation plays again next time
        cards.forEach((card) => {
          card.classList.remove("show");
        });
      }
    },
    { threshold: 0.25 }
  );

  observer.observe(section);
  return () => observer.disconnect();
}, []);


  return (
    <section className="amenities-section" ref={sectionRef}>
      <h2 className="amenities-title">Amenities</h2>

      <div className="amenities-slider">
        {amenities.map((item) => (
          <div className="amenity-card" key={item.id}>
            <Image
              src={item.src}
              alt={item.label}
              fill
              sizes="(max-width: 768px) 90vw, 25vw"
              className="amenity-image"
            />

            <div className="amenity-overlay">
              <span>{item.label}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Amenities;
