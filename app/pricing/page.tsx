// app/pricing/page.tsx

import Link from "next/link";

export default function Pricing() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-20 bg-black text-white">
      <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-center">Affordable Pricing</h1>
      <p className="text-lg sm:text-xl mb-12 text-center">
        Choose a plan that fits your needs and budget. All our services are designed to provide maximum value at minimal cost.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Basic Plan */}
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Basic</h2>
          <p className="text-4xl font-bold mb-4">$5</p>
          <ul className="text-left mb-6">
            <li className="mb-2">Access to Basic Resources</li>
            <li className="mb-2">Email Support</li>
            <li className="mb-2">Application Tracking</li>
          </ul>
          <Link
            href="/auth/signup"
            className="block w-full text-center px-4 py-2 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transform transition-transform duration-200 hover:scale-105"
          >
            Select Plan
          </Link>
        </div>
        {/* Standard Plan */}
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Standard</h2>
          <p className="text-4xl font-bold mb-4">$10</p>
          <ul className="text-left mb-6">
            <li className="mb-2">All Basic Features</li>
            <li className="mb-2">Personalized Essay Reviews</li>
            <li className="mb-2">Priority Email Support</li>
          </ul>
          <Link
            href="/auth/signup"
            className="block w-full text-center px-4 py-2 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transform transition-transform duration-200 hover:scale-105"
          >
            Select Plan
          </Link>
        </div>
        {/* Premium Plan */}
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Premium</h2>
          <p className="text-4xl font-bold mb-4">$15</p>
          <ul className="text-left mb-6">
            <li className="mb-2">All Standard Features</li>
            <li className="mb-2">One-on-One Coaching Sessions</li>
            <li className="mb-2">Comprehensive Application Review</li>
          </ul>
          <Link
            href="/auth/signup"
            className="block w-full text-center px-4 py-2 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transform transition-transform duration-200 hover:scale-105"
          >
            Select Plan
          </Link>
        </div>
      </div>
      <div className="mt-12 text-center">
        <Link href="/" className="text-indigo-600 hover:underline text-lg">
          Go Back Home
        </Link>
      </div>
    </div>
  );
}
