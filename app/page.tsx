// app/page.tsx

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center bg-indigo-600 text-white py-20 px-4">
        <h1 className="text-5xl font-bold mb-4 text-center">Welcome to Bishop</h1>
        <p className="text-xl mb-8 text-center max-w-2xl">
          Affordable, Comprehensive, and Personalized College Admissions Support.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/auth/signup"
            className="px-6 py-3 bg-white text-indigo-600 font-semibold rounded-md hover:bg-gray-100 transition"
          >
            Get Started
          </Link>
          <Link
            href="/features"
            className="px-6 py-3 bg-transparent border border-white text-white font-semibold rounded-md hover:bg-white hover:text-indigo-600 transition"
          >
            Learn More
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="text-center">
              <Image
                src="/images/essay.png"
                alt="Personalized Essays"
                width={100}
                height={100}
                className="mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Personalized Essays</h3>
              <p className="text-gray-600">
                Craft compelling personal and supplemental essays with expert guidance.
              </p>
            </div>
            {/* Feature 2 */}
            <div className="text-center">
              <Image
                src="/images/test-prep.png"
                alt="Test Preparation"
                width={100}
                height={100}
                className="mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Test Preparation</h3>
              <p className="text-gray-600">
                Access comprehensive test prep resources to boost your scores.
              </p>
            </div>
            {/* Feature 3 */}
            <div className="text-center">
              <Image
                src="/images/application-tracking.png"
                alt="Application Tracking"
                width={100}
                height={100}
                className="mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Application Tracking</h3>
              <p className="text-gray-600">
                Stay organized with our intuitive application tracking system.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">What Our Users Say</h2>
          <div className="space-y-8">
            <blockquote className="italic text-gray-700">
              "Bishop made the admissions process so much easier and affordable. I couldn't have achieved my dream without them!"
            </blockquote>
            <blockquote className="italic text-gray-700">
              "The personalized support and resources provided by Bishop were invaluable during my application journey."
            </blockquote>
          </div>
        </div>
      </section>

      {/* Pricing Snapshot Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Affordable Pricing</h2>
          <p className="text-gray-600 mb-8">
            Access all of Bishop's resources and support for a one-time fee ranging from $5 to $15.
          </p>
          <Link
            href="/pricing"
            className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 transition"
          >
            View Pricing
          </Link>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 px-4 bg-indigo-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Start Your Admissions Journey?</h2>
        <p className="mb-8">Join Bishop today and take the first step towards your educational goals.</p>
        <Link
          href="/auth/signup"
          className="px-6 py-3 bg-white text-indigo-600 font-semibold rounded-md hover:bg-gray-100 transition"
        >
          Get Started
        </Link>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-6">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} Bishop. All rights reserved.</p>
          <div className="flex justify-center space-x-6 mt-4">
            <Link href="https://twitter.com/bishop" className="hover:text-white">
              {/* Twitter Icon */}
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557a9.93 9.93 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.555-2.005.959-3.127 1.184a4.916 4.916 0 0 0-8.384 4.482A13.944 13.944 0 0 1 1.671 3.149a4.916 4.916 0 0 0 1.523 6.574 4.897 4.897 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 0 1-2.224.084 4.918 4.918 0 0 0 4.59 3.417A9.867 9.867 0 0 1 0 19.54a13.94 13.94 0 0 0 7.548 2.213c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0 0 24 4.557z" />
              </svg>
            </Link>
            <Link href="https://facebook.com/bishop" className="hover:text-white">
              {/* Facebook Icon */}
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.675 0h-21.35C.6 0 0 .6 0 1.325v21.351C0 23.4.6 24 1.325 24h11.495v-9.294H9.691V11.09h3.129V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.464.099 2.795.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.312h3.587l-.467 3.616h-3.12V24h6.116C23.4 24 24 23.4 24 22.675V1.325C24 .6 23.4 0 22.675 0z" />
              </svg>
            </Link>
            <Link href="https://linkedin.com/company/bishop" className="hover:text-white">
              {/* LinkedIn Icon */}
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.849-3.037-1.849 0-2.132 1.445-2.132 2.939v5.669h-3.554V9h3.414v1.561h.049c.476-.899 1.637-1.849 3.369-1.849 3.602 0 4.267 2.368 4.267 5.455v6.288zM5.337 7.433a2.063 2.063 0 1 1 .001-4.127 2.063 2.063 0 0 1 0 4.127zM6.828 20.452H3.846V9h3.982v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451C23.2 24 24 23.226 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
              </svg>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
