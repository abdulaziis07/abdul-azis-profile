/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif']
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      colors: {},
      animation: {
        'spin-slow': 'spin 5s linear infinite',
      },
      boxShadow: {
        'footer': '0 -35px 60px -15px #7c3aed',
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
}

