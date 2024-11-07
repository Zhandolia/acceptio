// app/features/page.tsx

import React from "react";
import styles from "./Features.module.css"; // Correct import
import Image from "next/image";
import Button from "../../src/components/Button/Button";

const Features: React.FC = () => {
  const featureList = [
    {
      title: "Personalized Guidance",
      description:
        "Receive tailored advice from experienced admissions consultants to craft a standout application.",
      icon: "/images/feature1.svg",
    },
    {
      title: "Comprehensive Resources",
      description:
        "Access a wealth of materials, including essay templates, test prep guides, and application checklists.",
      icon: "/images/feature2.svg",
    },
    {
      title: "Application Tracking",
      description:
        "Stay organized with our intuitive system that keeps you updated on every step of the admissions process.",
      icon: "/images/feature3.svg",
    },
  ];

  return (
    <div className={styles.featuresContainer}>
      <section className={styles.featuresSection}>
        <h1 className={styles.sectionTitle}>Our Features</h1>
        <p className={styles.sectionSubtitle}>
          Discover how Bishop can help you navigate the college admissions journey with ease.
        </p>
        <div className={styles.featuresGrid}>
          {featureList.map((feature, index) => (
            <div key={index} className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <Image src={feature.icon} alt={`${feature.title} Icon`} width={64} height={64} />
              </div>
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.featureDescription}>{feature.description}</p>
            </div>
          ))}
        </div>
        <div className={styles.ctaButton}>
          <Button text="Get Started" href="/auth/signup" />
        </div>
      </section>
    </div>
  );
};

export default Features;
