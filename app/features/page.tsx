// pages/features.tsx
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

const Features: NextPage = () => {
  return (
    <>
      <Head>
        <title>Features - Bishop</title>
        <meta name="description" content="Explore the comprehensive features that make Bishop your ideal college admissions partner." />
      </Head>
      <main className="min-h-screen bg-white">
        {/* Introduction */}
        <section className="py-20 px-4 bg-indigo-600 text-white text-center">
          <h1 className="text-4xl font-bold mb-4">Our Comprehensive Features</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Bishop offers a suite of tools and resources designed to guide you through every step of the college admissions process.
          </p>
        </section>

        {/* Features Details */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="space-y-16">
              {/* Feature 1 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2">
                  <Image src="/images/essays.png" alt="Personalized Essays" width={500} height={300} className="rounded-md shadow-md" />
                </div>
                <div className="md:w-1/2 md:pl-12 mt-8 md:mt-0">
                  <h2 className="text-2xl font-semibold mb-4">Personalized Essays</h2>
                  <p className="text-gray-700">
                    Our expert advisors help you craft compelling personal and supplemental essays that highlight your strengths and aspirations.
                  </p>
                </div>
              </div>
              {/* Feature 2 */}
              <div className="flex flex-col md:flex-row-reverse items-center">
                <div className="md:w-1/2">
                  <Image src="/images/test-prep.png" alt="Test Preparation" width={500} height={300} className="rounded-md shadow-md" />
                </div>
                <div className="md:w-1/2 md:pr-12 mt-8 md:mt-0">
                  <h2 className="text-2xl font-semibold mb-4">Test Preparation</h2>
                  <p className="text-gray-700">
                    Access comprehensive test prep resources to improve your SAT, ACT, and other standardized test scores.
                  </p>
                </div>
              </div>
              {/* Feature 3 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2">
                  <Image src="/images/extracurricular.png" alt="Extracurricular Planning" width={500} height={300} className="rounded-md shadow-md" />
                </div>
                <div className="md:w-1/2 md:pl-12 mt-8 md:mt-0">
                  <h2 className="text-2xl font-semibold mb-4">Extracurricular Planning</h2>
                  <p className="text-gray-700">
                    Plan and organize your extracurricular activities to enhance your college applications.
                  </p>
                </div>
              </div>
              {/* Feature 4 */}
              <div className="flex flex-col md:flex-row-reverse items-center">
                <div className="md:w-1/2">
                  <Image src="/images/tracking.png" alt="Application Tracking" width={500} height={300} className="rounded-md shadow-md" />
                </div>
                <div className="md:w-1/2 md:pr-12 mt-8 md:mt-0">
                  <h2 className="text-2xl font-semibold mb-4">Application Tracking</h2>
                  <p className="text-gray-700">
                    Stay organized with our intuitive application tracking system, ensuring you never miss a deadline.
                  </p>
                </div>
              </div>
              {/* Additional Features as Needed */}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 px-4 bg-indigo-600 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Enhance Your Admissions Process?</h2>
          <Link href="/auth/signup">
            <a className="px-6 py-3 bg-white text-indigo-600 font-semibold rounded-md hover:bg-gray-100">Get Started</a>
          </Link>
        </section>
      </main>
    </>
  )
}

export default Features
