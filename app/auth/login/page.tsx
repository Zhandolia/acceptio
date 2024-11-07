// app/auth/login/page.tsx
"use client";

import React, { useState } from "react";
import styles from "./Login.module.css";
import Button from "../../../components/Button/Button";

const Login: React.FC = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.email || !formData.password) {
      setStatus("error");
      setErrorMessage("Please fill in all fields.");
      return;
    }

    // Simulate form submission
    console.log("Login Data:", formData);
    setStatus("success");
    setErrorMessage("");
    setFormData({
      email: "",
      password: "",
    });
  };

  return (
    <div className={styles.loginContainer}>
      <section className={styles.loginSection}>
        <h1 className={styles.sectionTitle}>Login to Your Account</h1>
        {status === "success" && (
          <p className={styles.successMessage}>
            Logged in successfully! Redirecting...
          </p>
        )}
        {status === "error" && (
          <p className={styles.errorMessage}>{errorMessage}</p>
        )}
        <form onSubmit={handleSubmit} className={styles.loginForm}>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Your password"
              required
            />
          </div>
          <div className={styles.forgotPassword}>
            <a href="/auth/forgot-password" className={styles.forgotLink}>
              Forgot Password?
            </a>
          </div>
          <Button type="submit" text="Login" />
        </form>
        <p className={styles.redirectText}>
          Don't have an account? <a href="/auth/signup" className={styles.signupLink}>Sign up here.</a>
        </p>
      </section>
    </div>
  );
};

export default Login;
