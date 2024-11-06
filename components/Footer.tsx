// components/Footer.tsx

import React from "react";
import Link from "next/link";

const Footer = () => (
  <footer className="bg-black py-8 border-t border-gray-700">
    <div className="container mx-auto text-center text-gray-400 px-4">
      <p className="mb-4">© {new Date().getFullYear()} Bishop. All rights reserved.</p>
      <div className="flex justify-center gap-6">
        <Link href="/privacy" className="hover:underline">
          Privacy Policy
        </Link>
        <Link href="/terms" className="hover:underline">
          Terms of Service
        </Link>
        <Link href="/faq" className="hover:underline">
          FAQ
        </Link>
        <Link href="/support" className="hover:underline">
          Support
        </Link>
      </div>
    </div>
  </footer>
);

export default Footer;
