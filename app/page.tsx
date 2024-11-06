// app/page.tsx

import React from "react";
import Image from "next/image";
import Button from "../components/Button/Button";
import styles from "./page.module.css";

const Home: React.FC = () => {
  return (
    <div className={styles.homeContainer}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Unlock Your Future with Bishop</h1>
          <p className={styles.heroSubtitle}>
            Affordable, Comprehensive, and Personalized College Admissions Support.
          </p>
          <div className={styles.heroButtons}>
            <Button text="Get Started" href="/auth/signup" />
            <Button text="Learn More" href="/features" />
          </div>
        </div>
        <div className={styles.heroImage}>
          <Image
            src="/images/hero.svg" // Ensure this image exists in the public/images directory
            alt="Students Achieving Success"
            width={500}
            height={500}
          />
        </div>
      </section>

      {/* Success Section */}
      <section className={styles.successSection}>
        <div className={styles.successImage}>
          <Image
            src="/images/success.svg" // Ensure this image exists in the public/images directory
            alt="Students Celebrating Success"
            width={400}
            height={400}
          />
        </div>
        <div className={styles.successContent}>
          <h2>Your Success Begins Here</h2>
          <p>
            Join thousands of students who have achieved their dreams with Bishop. Our tailored support ensures you stand out in the competitive admissions landscape.
          </p>
          <Button text="Start Now" href="/auth/signup" />
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.featuresSection}>
        <h2>Why Choose Bishop?</h2>
        <p>
          We offer tailored solutions to navigate the complexities of college admissions, ensuring you stand out.
        </p>
        <div className={styles.featuresGrid}>
          {/* Feature 1 */}
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 3a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V7l-6-4H5z"
                />
              </svg>
            </div>
            <h3>Expert Guidance</h3>
            <p>
              Receive personalized advice from seasoned admissions consultants.
            </p>
          </div>

          {/* Feature 2 */}
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 7a9 9 0 0118 0v8a9 9 0 01-18 0V7z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6"
                />
              </svg>
            </div>
            <h3>Comprehensive Resources</h3>
            <p>
              Access a wealth of materials to enhance every aspect of your application.
            </p>
          </div>

          {/* Feature 3 */}
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 17v-6a2 2 0 012-2h2a2 2 0 012 2v6m4-8v8m0 0v3m0-3h3m-3 0H6"
                />
              </svg>
            </div>
            <h3>Application Tracking</h3>
            <p>
              Stay organized with our intuitive system that keeps you updated every step of the way.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
