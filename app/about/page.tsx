// pages/about.tsx
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>About Us - Bishop</title>
        <meta name="description" content="Learn more about Bishop, our mission, vision, and the team behind our platform." />
      </Head>
      <main className="min-h-screen bg-white">
        {/* Our Story */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Our Story</h1>
            <p className="text-gray-700">
              Bishop was founded with the belief that every student deserves access to high-quality college admissions assistance, regardless of their financial background. Frustrated by the exorbitant costs of existing services, we set out to create an affordable solution that empowers students to achieve their educational aspirations.
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row md:space-x-8">
              {/* Mission */}
              <div className="md:w-1/2 mb-8 md:mb-0">
                <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
                <p className="text-gray-700">
                  To provide comprehensive, affordable, and personalized college admissions support to a diverse range of students, ensuring that financial constraints do not hinder their educational aspirations.
                </p>
              </div>
              {/* Vision */}
              <div className="md:w-1/2">
                <h2 className="text-3xl font-semibold mb-4">Our Vision</h2>
                <p className="text-gray-700">
                  To become the leading platform for admissions assistance, supporting students from high school applications to graduate programs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Members */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-12">Meet Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Team Member 1 */}
              <div>
                <Image src="/images/team1.jpg" alt="Alice Johnson" width={200} height={200} className="mx-auto rounded-full" />
                <h3 className="text-xl font-semibold mt-4">Alice Johnson</h3>
                <p className="text-gray-600">Co-Founder & CEO</p>
              </div>
              {/* Team Member 2 */}
              <div>
                <Image src="/images/team2.jpg" alt="Bob Smith" width={200} height={200} className="mx-auto rounded-full" />
                <h3 className="text-xl font-semibold mt-4">Bob Smith</h3>
                <p className="text-gray-600">Co-Founder & CTO</p>
              </div>
              {/* Team Member 3 */}
              <div>
                <Image src="/images/team3.jpg" alt="Carol Davis" width={200} height={200} className="mx-auto rounded-full" />
                <h3 className="text-xl font-semibold mt-4">Carol Davis</h3>
                <p className="text-gray-600">Head of Marketing</p>
              </div>
              {/* Add more team members as needed */}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Our Values</h2>
            <ul className="text-left mx-auto max-w-2xl space-y-4">
              <li className="flex items-center">
                <svg className="w-6 h-6 text-indigo-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {/* Check Icon */}
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <strong>Inclusivity:</strong> Ensuring support is accessible to all students, regardless of their background.
              </li>
              <li className="flex items-center">
                <svg className="w-6 h-6 text-indigo-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {/* Check Icon */}
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <strong>Affordability:</strong> Providing high-quality services at a price point that removes financial barriers.
              </li>
              <li className="flex items-center">
                <svg className="w-6 h-6 text-indigo-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {/* Check Icon */}
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <strong>Excellence:</strong> Striving for the highest standards in our services and support.
              </li>
              {/* Add more values as needed */}
            </ul>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 px-4 bg-indigo-600 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Join the Bishop Community</h2>
          <p className="mb-8">Empower your admissions journey with our support.</p>
          <Link href="/auth/signup">
            <a className="px-6 py-3 bg-white text-indigo-600 font-semibold rounded-md hover:bg-gray-100">Get Started</a>
          </Link>
        </section>
      </main>
    </>
  )
}

export default About
