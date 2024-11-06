// app/contact/page.tsx
"use client";

import React, { useState } from "react";
import styles from "./Contact.module.css";
import Button from "../../components/Button/Button";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Basic validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setStatus("error");
      return;
    }
    // Simulate form submission
    console.log("Form Submitted:", formData);
    setStatus("success");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className={styles.contactContainer}>
      <section className={styles.contactSection}>
        <h1>Contact Us</h1>
        {status === "success" && <p className={styles.successMessage}>Your message has been sent successfully!</p>}
        {status === "error" && <p className={styles.errorMessage}>Please fill in all fields correctly.</p>}
        <form onSubmit={handleSubmit} className={styles.contactForm}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
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
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message..."
              rows={5}
              required
            ></textarea>
          </div>
          <Button type="submit" text="Send Message" />
        </form>
      </section>
    </div>
  );
};

export default Contact;
