// components/Button/Button.tsx

import React from "react";
import styles from "./Button.module.css";

interface ButtonProps {
  type?: "button" | "submit" | "reset";
  text: string;
  onClick?: () => void;
  className?: string; // Allow passing custom class names
}

const Button: React.FC<ButtonProps> = ({ type = "button", text, onClick, className }) => {
  return (
    <button type={type} onClick={onClick} className={`${styles.button} ${className || ""}`}>
      {text}
    </button>
  );
};

export default Button;
