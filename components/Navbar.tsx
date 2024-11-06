// components/Navbar.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black border-b border-gray-700">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-white">
          Bishop
        </Link>
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link href="/about" className="text-gray-300 hover:text-indigo-600">
            About
          </Link>
          <Link href="/features" className="text-gray-300 hover:text-indigo-600">
            Features
          </Link>
          <Link href="/pricing" className="text-gray-300 hover:text-indigo-600">
            Pricing
          </Link>
          <Link href="/contact" className="text-gray-300 hover:text-indigo-600">
            Contact
          </Link>
          <Link
            href="/auth/signup"
            className="px-4 py-2 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transform transition-transform duration-200 hover:scale-105"
          >
            Get Started
          </Link>
        </div>
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-300 hover:text-indigo-600 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black border-t border-gray-700">
          <Link href="/about" className="block px-4 py-2 text-gray-300 hover:bg-gray-800 hover:text-indigo-600">
            About
          </Link>
          <Link href="/features" className="block px-4 py-2 text-gray-300 hover:bg-gray-800 hover:text-indigo-600">
            Features
          </Link>
          <Link href="/pricing" className="block px-4 py-2 text-gray-300 hover:bg-gray-800 hover:text-indigo-600">
            Pricing
          </Link>
          <Link href="/contact" className="block px-4 py-2 text-gray-300 hover:bg-gray-800 hover:text-indigo-600">
            Contact
          </Link>
          <Link
            href="/auth/signup"
            className="block px-4 py-2 bg-indigo-600 text-white font-semibold rounded-lg mx-4 mb-4 hover:bg-indigo-700 transform transition-transform duration-200 hover:scale-105"
          >
            Get Started
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
