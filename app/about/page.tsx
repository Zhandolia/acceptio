// app/about/page.tsx

import Link from "next/link";

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-20 text-center bg-black text-white">
      <h1 className="text-4xl sm:text-5xl font-bold mb-6">About Bishop</h1>
      <p className="text-lg sm:text-xl mb-8">
        At Bishop, we are committed to empowering students through affordable and comprehensive college admissions support. Our mission is to demystify the admissions process, providing personalized guidance tailored to each individual's unique strengths and aspirations.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Vision */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
          <p>
            To create equal opportunities for all students by offering accessible and high-quality admissions consulting services.
          </p>
        </div>
        {/* Mission */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p>
            To provide personalized support that guides students through every step of the college application journey, ensuring they present their best selves to admissions committees.
          </p>
        </div>
        {/* Values */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
          <p>
            Integrity, Excellence, and Empathy are at the core of everything we do, fostering a supportive environment for our students.
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
