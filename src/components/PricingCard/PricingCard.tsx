// components/PricingCard/PricingCard.tsx

import React from "react";
import styles from "./PricingCard.module.css";
import Button from "../Button/Button";

type PricingCardProps = {
  name: string;
  price: string;
  features: string[];
  recommended: boolean;
};

const PricingCard: React.FC<PricingCardProps> = ({ name, price, features, recommended }) => {
  return (
    <div className={`${styles.pricingCard} ${recommended ? styles.recommended : ""}`}>
      {recommended && <div className={styles.recommendedBadge}>Most Popular</div>}
      <h3 className={styles.planName}>{name}</h3>
      <p className={styles.planPrice}>{price}/month</p>
      <ul className={styles.planFeatures}>
        {features.map((feature, idx) => (
          <li key={idx} className={styles.featureItem}>
            {feature}
          </li>
        ))}
      </ul>
      <div className={styles.ctaButton}>
        <Button text="Choose Plan" href="/auth/signup" />
      </div>
    </div>
  );
};

export default PricingCard;
