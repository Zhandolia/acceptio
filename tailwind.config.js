// tailwind.config.js
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        indigo: {
          600: '#4f46e5',
          700: '#4338ca',
        },
        gray: {
          50: '#f9fafb',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
        },
        green: {
          500: '#22c55e',
        },
      },
    },
  },
  plugins: [],
}
