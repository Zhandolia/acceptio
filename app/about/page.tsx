// app/about/page.tsx

import React from "react";
import Link from "next/link";
import styles from "./About.module.css";

const About: React.FC = () => {
  return (
    <div className={styles.aboutContainer}>
      <h1>About Bishop</h1>
      <Link href="/contact" className={styles.contactLink}>
        Contact Us
      </Link>
    </div>
  );
};

export default About;
