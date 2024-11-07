// components/Footer/Footer.tsx

import React from "react";
import Link from "next/link";
import styles from "./Footer.module.css";
import { FaTwitter, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerLinks}>
          <Link href="/privacy" className={styles.footerLink}>
            Privacy Policy
          </Link>
          <Link href="/terms" className={styles.footerLink}>
            Terms of Service
          </Link>
          <Link href="/faq" className={styles.footerLink}>
            FAQ
          </Link>
          <Link href="/support" className={styles.footerLink}>
            Support
          </Link>
        </div>
        <div className={styles.socialIcons}>
          {/* External Links should use <a> tags */}
          <a href="https://twitter.com/bishop" className={styles.socialLink} aria-label="Twitter" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <a href="https://facebook.com/bishop" className={styles.socialLink} aria-label="Facebook" target="_blank" rel="noopener noreferrer">
            <FaFacebookF />
          </a>
          <a href="https://linkedin.com/company/bishop" className={styles.socialLink} aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn />
          </a>
        </div>
        <p className={styles.copyRight}>© {new Date().getFullYear()} Bishop. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
