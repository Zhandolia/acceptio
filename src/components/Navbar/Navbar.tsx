// components/Navbar/Navbar.tsx

"use client";

import React from "react";
import styles from "./Navbar.module.css";
import { useAuth } from "../../context/AuthContext";

const Navbar: React.FC = () => {
  const { user, login, logout } = useAuth();

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <a href="/">AcceptIO</a>
      </div>
      <div className={styles.navLinks}>
        <a href="/features">Features</a>
        <a href="/pricing">Pricing</a>
        {user ? (
          <>
            <a href="/profile">Profile</a>
            <button onClick={logout} className={styles.authButton}>
              Logout
            </button>
          </>
        ) : (
          <>
            <a href="/auth/login">Login</a>
            <button onClick={login} className={styles.authButton}>
              Mock Login
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
