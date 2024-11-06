// components/Footer.tsx

import Link from 'next/link';

const Footer: React.FC = () => {
  return (
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
  );
};

export default Footer;
