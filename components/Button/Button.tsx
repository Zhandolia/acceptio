// components/Button/Button.tsx

import React from "react";
import Link from "next/link";
import styles from "./Button.module.css";

type ButtonProps = {
  text: string;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
};

const Button: React.FC<ButtonProps> = ({ text, href, onClick, type = "button" }) => {
  if (href) {
    // Determine if the href is external
    const isExternal = href.startsWith("http");
    if (isExternal) {
      return (
        <a href={href} className={styles.button} target="_blank" rel="noopener noreferrer">
          {text}
        </a>
      );
    }
    return (
      <Link href={href} className={styles.button}>
        {text}
      </Link>
    );
  }

  return (
    <button className={styles.button} onClick={onClick} type={type}>
      {text}
    </button>
  );
};

export default Button;
