// components/Navbar/Navbar.tsx

"use client";

import React from "react";
import styles from "./Navbar.module.css";
import { useAuth } from "../../context/AuthContext";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Navbar: React.FC = () => {
  const { user, login, logout } = useAuth();
  const router = useRouter();

  const handleMockLogin = () => {
    login();
    router.push("/profile"); // Redirect to Profile after login
  };

  const handleLogout = () => {
    logout();
    router.push("/"); // Redirect to Home after logout
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">AcceptIO</Link>
      </div>
      <div className={styles.navLinks}>
        <Link href="/features">Features</Link>
        <Link href="/pricing">Pricing</Link>
        {user ? (
          <>
            <Link href="/profile">Profile</Link>
            <button onClick={handleLogout} className={styles.authButton}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link href="/auth/login">Login</Link>
            <button onClick={handleMockLogin} className={styles.authButton}>
              Mock Login
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
