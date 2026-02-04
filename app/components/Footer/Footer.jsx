"use client";

import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        {/* Brand Text */}
        <h3 className={styles.brand}>OHANA DEVELOPMENT</h3>

        {/* Social icons */}
        <div className={styles.socials}>
          <a href="#" aria-label="Facebook">
            <i className="ri-facebook-fill" />
          </a>
          <a href="#" aria-label="Instagram">
            <i className="ri-instagram-line" />
          </a>
        </div>

        {/* Careers */}
        <p className={styles.careers}>Careers at Ohana</p>

        {/* Legal */}
        <div className={styles.links}>
          <a href="#">Privacy Notice</a>
          <span>•</span>
          <a href="#">Terms of Use</a>
          <span>•</span>
          <a href="#">Cookie Notice</a>
        </div>

        <p className={styles.copy}>© 2025 Ohana Development</p>
      </div>
    </footer>
  );
}
