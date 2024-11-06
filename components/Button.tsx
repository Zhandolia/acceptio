// components/Button.tsx

import React from "react";
import Link from "next/link";

type ButtonProps = {
  text: string;
  onClick?: () => void;
  href?: string; // Optional prop to turn the button into a link
  type?: "button" | "submit" | "reset"; // Optional prop for form buttons
};

const Button: React.FC<ButtonProps> = ({ text, onClick, href, type = "button" }) => {
  const baseClasses =
    "px-6 py-3 bg-white text-black border border-black rounded-lg font-semibold shadow-lg transform transition-transform duration-200 hover:scale-105 hover:shadow-2xl";

  if (href) {
    return (
      <Link href={href}>
        <a className={baseClasses} aria-label={text}>
          {text}
        </a>
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={baseClasses}
      aria-label={text}
      style={{ boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)" }}
    >
      {text}
    </button>
  );
};

export default Button;
