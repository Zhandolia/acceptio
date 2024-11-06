// components/Navbar/Navbar.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <Link href="/" className={styles.logo}>
          Bishop
        </Link>
        <div className={`${styles.navLinks} ${isOpen ? styles.active : ""}`}>
          <Link href="/about" className={styles.navLink}>
            About
          </Link>
          <Link href="/features" className={styles.navLink}>
            Features
          </Link>
          <Link href="/pricing" className={styles.navLink}>
            Pricing
          </Link>
          <Link href="/contact" className={styles.navLink}>
            Contact
          </Link>
          <Link href="/auth/signup" className={`${styles.navLink} ${styles.signupBtn}`}>
            Get Started
          </Link>
        </div>
        <button className={styles.menuButton} onClick={toggleMenu} aria-label="Toggle Menu">
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
