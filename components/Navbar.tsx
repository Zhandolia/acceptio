// components/Navbar.tsx
"use client";

import Link from 'next/link';
import { useState } from 'react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-indigo-600">
          Bishop
        </Link>
        <div className="hidden md:flex space-x-6">
          <Link href="/features" className="text-gray-700 hover:text-indigo-600">
            Features
          </Link>
          <Link href="/pricing" className="text-gray-700 hover:text-indigo-600">
            Pricing
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-indigo-600">
            About
          </Link>
          <Link href="/contact" className="text-gray-700 hover:text-indigo-600">
            Contact
          </Link>
          <Link
            href="/auth/signup"
            className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
          >
            Sign Up
          </Link>
        </div>
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 hover:text-indigo-600 focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <Link href="/features" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
            Features
          </Link>
          <Link href="/pricing" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
            Pricing
          </Link>
          <Link href="/about" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
            About
          </Link>
          <Link href="/contact" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
            Contact
          </Link>
          <Link
            href="/auth/signup"
            className="block px-4 py-2 text-white bg-indigo-600 hover:bg-indigo-700"
          >
            Sign Up
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
