// pages/pricing.tsx
import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

const Pricing: NextPage = () => {
  return (
    <>
      <Head>
        <title>Pricing - Bishop</title>
        <meta name="description" content="Discover Bishop's affordable pricing plans designed to fit your needs." />
      </Head>
      <main className="min-h-screen bg-white">
        {/* Introduction */}
        <section className="py-20 px-4 bg-indigo-600 text-white text-center">
          <h1 className="text-4xl font-bold mb-4">Affordable Pricing</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Access all of Bishop's resources and support for a one-time fee that suits your budget.
          </p>
        </section>

        {/* Pricing Tiers */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row justify-center items-center md:space-x-8 space-y-8 md:space-y-0">
              {/* Tier 1 */}
              <div className="w-full md:w-1/3 bg-white p-6 rounded-lg shadow-md text-center">
                <h2 className="text-2xl font-semibold mb-4">Basic</h2>
                <p className="text-4xl font-bold mb-4">$5</p>
                <ul className="text-gray-700 space-y-2 mb-6">
                  <li>Access to all essay resources</li>
                  <li>Basic application tracking</li>
                  <li>Email support</li>
                </ul>
                <Link href="/auth/signup">
                  <a className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">Choose Basic</a>
                </Link>
              </div>
              {/* Tier 2 */}
              <div className="w-full md:w-1/3 bg-white p-6 rounded-lg shadow-md text-center">
                <h2 className="text-2xl font-semibold mb-4">Standard</h2>
                <p className="text-4xl font-bold mb-4">$10</p>
                <ul className="text-gray-700 space-y-2 mb-6">
                  <li>All Basic features</li>
                  <li>Advanced test prep resources</li>
                  <li>Priority email support</li>
                </ul>
                <Link href="/auth/signup">
                  <a className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">Choose Standard</a>
                </Link>
              </div>
              {/* Tier 3 */}
              <div className="w-full md:w-1/3 bg-white p-6 rounded-lg shadow-md text-center">
                <h2 className="text-2xl font-semibold mb-4">Premium</h2>
                <p className="text-4xl font-bold mb-4">$15</p>
                <ul className="text-gray-700 space-y-2 mb-6">
                  <li>All Standard features</li>
                  <li>Personalized extracurricular planning</li>
                  <li>Dedicated support</li>
                </ul>
                <Link href="/auth/signup">
                  <a className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">Choose Premium</a>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Why Choose Bishop?</h2>
            <p className="text-gray-700 mb-8">
              We believe that financial constraints should not hinder your educational aspirations. With Bishop, you receive top-tier admissions support at a fraction of the cost.
            </p>
            <ul className="text-left mx-auto max-w-2xl space-y-4">
              <li className="flex items-center">
                <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {/* Check Icon */}
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Comprehensive resources covering all aspects of admissions.
              </li>
              <li className="flex items-center">
                <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {/* Check Icon */}
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Affordable pricing without compromising quality.
              </li>
              <li className="flex items-center">
                <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {/* Check Icon */}
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Personalized support tailored to your unique needs.
              </li>
            </ul>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold">What is the pricing model?</h3>
                <p className="text-gray-700 mt-2">
                  Bishop offers a one-time fee ranging from $5 to $15, granting lifetime access to our resources and support services.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Are there any hidden fees?</h3>
                <p className="text-gray-700 mt-2">
                  No, our pricing is transparent with no hidden costs. Once you pay, you have full access to all features.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Can I upgrade my plan later?</h3>
                <p className="text-gray-700 mt-2">
                  Yes, you can choose to upgrade your plan at any time to access additional features and support.
                </p>
              </div>
              {/* Add more FAQs as needed */}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 px-4 bg-indigo-600 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Start Your Journey with Bishop Today</h2>
          <Link href="/auth/signup">
            <a className="px-6 py-3 bg-white text-indigo-600 font-semibold rounded-md hover:bg-gray-100">Get Started</a>
          </Link>
        </section>
      </main>
    </>
  )
}

export default Pricing
