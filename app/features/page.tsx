// app/features/page.tsx

import Link from "next/link";

export default function Features() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-20 text-center bg-black text-white">
      <h1 className="text-4xl sm:text-5xl font-bold mb-6">Our Features</h1>
      <p className="text-lg sm:text-xl mb-12">
        Bishop offers a suite of tools and services designed to simplify the college admissions process and enhance your application.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Personalized Essays */}
        <div className="flex flex-col items-center">
          <svg
            className="w-16 h-16 mb-4 text-indigo-600"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M5 3a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V7l-6-4H5z" />
          </svg>
          <h2 className="text-2xl font-semibold mb-2">Personalized Essays</h2>
          <p className="text-lg">
            Craft compelling personal and supplemental essays with expert guidance, ensuring your unique story stands out.
          </p>
        </div>
        {/* Test Preparation */}
        <div className="flex flex-col items-center">
          <svg
            className="w-16 h-16 mb-4 text-indigo-600"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 1a11 11 0 100 22A11 11 0 0012 1zm1 16.93V12h3.07L11.07 4.93 9.93 6.07 14 10.14V5.07h2V19h-2v-4.07l-3 3z" />
          </svg>
          <h2 className="text-2xl font-semibold mb-2">Test Preparation</h2>
          <p className="text-lg">
            Access comprehensive test prep resources and personalized coaching to boost your scores and confidence.
          </p>
        </div>
        {/* Application Tracking */}
        <div className="flex flex-col items-center">
          <svg
            className="w-16 h-16 mb-4 text-indigo-600"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M3 13h2v7a1 1 0 001 1h14a1 1 0 001-1v-7h2l-4-4-4 4H7l-4-4z" />
          </svg>
          <h2 className="text-2xl font-semibold mb-2">Application Tracking</h2>
          <p className="text-lg">
            Stay organized with our intuitive application tracking system, keeping all your important deadlines and submissions in one place.
          </p>
        </div>
      </div>
      <div className="mt-12">
        <Link href="/" className="text-indigo-600 hover:underline text-lg">
          Go Back Home
        </Link>
      </div>
    </div>
  );
}
