// app/page.tsx

import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center flex-grow py-20 px-4">
        <h1 className="text-5xl sm:text-6xl font-extrabold mb-6 text-center">
          Unlock Your Future with Bishop
        </h1>
        <p className="text-xl sm:text-2xl mb-12 text-center max-w-3xl">
          Affordable, Comprehensive, and Personalized College Admissions Support.
        </p>
        <div className="flex flex-col sm:flex-row gap-6">
          <Link
            href="/auth/signup"
            className="px-8 py-4 bg-white text-black font-semibold rounded-lg shadow-lg transform transition-transform duration-200 hover:scale-105 hover:shadow-2xl"
          >
            Get Started
          </Link>
          <Link
            href="/features"
            className="px-8 py-4 border border-white text-white font-semibold rounded-lg shadow-lg transform transition-transform duration-200 hover:scale-105 hover:shadow-2xl"
          >
            Learn More
          </Link>
        </div>
      </section>

      {/* Catchy Phrase Section */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Your Success Begins Here
          </h2>
          <p className="text-xl sm:text-2xl mb-8">
            Join thousands of students who have achieved their dreams with Bishop.
          </p>
          <Link
            href="/auth/signup"
            className="px-8 py-4 bg-white text-black font-semibold rounded-lg shadow-lg transform transition-transform duration-200 hover:scale-105 hover:shadow-2xl"
          >
            Start Now
          </Link>
        </div>
      </section>

      {/* Additional Sections for Enhanced Context */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Why Choose Bishop?
          </h2>
          <p className="text-xl sm:text-2xl mb-8">
            We offer tailored solutions to navigate the complexities of college admissions, ensuring you stand out.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {/* Feature Highlight 1 */}
            <div className="flex flex-col items-center">
              <svg
                className="w-16 h-16 mb-4 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20 10 10 0 000-20z"
                />
              </svg>
              <h3 className="text-2xl font-semibold mb-2">Expert Guidance</h3>
              <p className="text-lg">
                Receive personalized advice from seasoned admissions consultants.
              </p>
            </div>
            {/* Feature Highlight 2 */}
            <div className="flex flex-col items-center">
              <svg
                className="w-16 h-16 mb-4 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 17v-6a2 2 0 012-2h2a2 2 0 012 2v6m4-8v8m0 0v3m0-3h3m-3 0H6"
                />
              </svg>
              <h3 className="text-2xl font-semibold mb-2">Comprehensive Resources</h3>
              <p className="text-lg">
                Access a wealth of materials to enhance every aspect of your application.
              </p>
            </div>
            {/* Feature Highlight 3 */}
            <div className="flex flex-col items-center">
              <svg
                className="w-16 h-16 mb-4 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2zm0 4c-2.209 0-4 1.791-4 4v2h8v-2c0-2.209-1.791-4-4-4z"
                />
              </svg>
              <h3 className="text-2xl font-semibold mb-2">Application Tracking</h3>
              <p className="text-lg">
                Stay organized with our intuitive system that keeps you updated every step of the way.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
