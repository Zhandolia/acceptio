// components/FeatureCard/FeatureCard.tsx

import React from "react";
import Image from "next/image";
import styles from "./FeatureCard.module.css";

type FeatureCardProps = {
  title: string;
  description: string;
  icon: string;
};

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon }) => {
  return (
    <div className={styles.featureCard}>
      <div className={styles.featureIcon}>
        <Image src={icon} alt={`${title} Icon`} width={64} height={64} />
      </div>
      <h3 className={styles.featureTitle}>{title}</h3>
      <p className={styles.featureDescription}>{description}</p>
    </div>
  );
};

export default FeatureCard;
