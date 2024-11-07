// app/pricing/page.tsx

import React from "react";
import styles from "./Pricing.module.css"; // Ensure this file exists and is correctly named
import Button from "../../components/Button/Button";
import PricingCard from "../../components/PricingCard/PricingCard"; // Ensure this component exists

const Pricing: React.FC = () => {
  const pricingPlans = [
    {
      name: "Basic",
      price: "$49",
      features: [
        "Personalized Guidance",
        "Access to Resources",
        "Email Support",
      ],
      recommended: false,
    },
    {
      name: "Pro",
      price: "$99",
      features: [
        "All Basic Features",
        "One-on-One Consultation",
        "Priority Email Support",
        "Application Review",
      ],
      recommended: true,
    },
    {
      name: "Premium",
      price: "$199",
      features: [
        "All Pro Features",
        "Unlimited Consultations",
        "Mock Interviews",
        "Exclusive Workshops",
      ],
      recommended: false,
    },
  ];

  return (
    <div className={styles.pricingContainer}>
      <section className={styles.pricingSection}>
        <h1 className={styles.sectionTitle}>Pricing Plans</h1>
        <p className={styles.sectionSubtitle}>
          Choose a plan that best fits your needs and take the next step towards your dream college.
        </p>
        <div className={styles.pricingGrid}>
          {pricingPlans.map((plan, index) => (
            <PricingCard
              key={index}
              name={plan.name}
              price={plan.price}
              features={plan.features}
              recommended={plan.recommended}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Pricing;
