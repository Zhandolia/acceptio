// app/contact/page.tsx

"use client";

// app/contact/page.tsx
import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

const Contact: NextPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateEmail = (email: string) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Basic Validation
    if (!validateEmail(formData.email)) {
      setError('Please enter a valid email address.');
      return;
    }
    if (!formData.name || !formData.subject || !formData.message) {
      setError('Please fill in all required fields.');
      return;
    }
    // Simulate form submission
    try {
      // Placeholder for actual submission logic (e.g., API call)
      console.log('Form Submitted:', formData);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setError('');
    } catch (err) {
      setError('An error occurred while submitting the form. Please try again.');
    }
  };

  return (
    <>
      <Head>
        <title>Contact Us - Bishop</title>
        <meta name="description" content="Get in touch with the Bishop team for support, inquiries, or feedback." />
      </Head>
      <main className="min-h-screen bg-black text-white">
        {/* Contact Form */}
        <section className="py-20 px-4 bg-gray-900">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
            {submitted && (
              <div className="text-center text-green-500 mb-4">
                Your message has been sent successfully!
              </div>
            )}
            {error && <div className="text-center text-red-500 mb-4">{error}</div>}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-300">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 mt-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-300">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 mt-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-gray-300">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 mt-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-300">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 mt-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 transform transition-transform duration-200 hover:scale-105"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-20 px-4 bg-black">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
            <p className="text-lg mb-8">
              Whether you have questions about our services, need support, or just want to say hello, we'd love to hear from you!
            </p>
            <p className="text-lg mb-4"><strong>Email:</strong> <a href="mailto:support@bishop.com" className="text-indigo-600 hover:underline">support@bishop.com</a></p>
            {/* Uncomment and add phone number if applicable */}
            {/* <p className="text-lg"><strong>Phone:</strong> (123) 456-7890</p> */}
            {/* Social Media Links */}
            <div className="flex justify-center space-x-6 mt-8">
              <Link href="https://twitter.com/bishop">
                <a target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-indigo-600">
                  {/* Twitter Icon */}
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557a9.93 9.93 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.555-2.005.959-3.127 1.184a4.916 4.916 0 0 0-8.384 4.482A13.944 13.944 0 0 1 1.671 3.149a4.916 4.916 0 0 0 1.523 6.574 4.897 4.897 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 0 1-2.224.084 4.918 4.918 0 0 0 4.59 3.417A9.867 9.867 0 0 1 0 19.54a13.94 13.94 0 0 0 7.548 2.213c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0 0 24 4.557z" />
                  </svg>
                </a>
              </Link>
              <Link href="https://facebook.com/bishop">
                <a target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-indigo-600">
                  {/* Facebook Icon */}
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.675 0h-21.35C.6 0 0 .6 0 1.325v21.351C0 23.4.6 24 1.325 24h11.495v-9.294H9.691V11.09h3.129V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.464.099 2.795.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.312h3.587l-.467 3.616h-3.12V24h6.116C23.4 24 24 23.4 24 22.675V1.325C24 .6 23.4 0 22.675 0z" />
                  </svg>
                </a>
              </Link>
              <Link href="https://linkedin.com/company/bishop">
                <a target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-indigo-600">
                  {/* LinkedIn Icon */}
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.849-3.037-1.849 0-2.132 1.445-2.132 2.939v5.669h-3.554V9h3.414v1.561h.049c.476-.899 1.637-1.849 3.369-1.849 3.602 0 4.267 2.368 4.267 5.455v6.288zM5.337 7.433a2.063 2.063 0 1 1 .001-4.127 2.063 2.063 0 0 1 0 4.127zM6.828 20.452H3.846V9h3.982v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451C23.2 24 24 23.226 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                  </svg>
                </a>
              </Link>
              {/* Add more social icons as needed */}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Contact;
