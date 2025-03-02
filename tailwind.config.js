/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",  // 👈 Ensures dark mode only activates when "dark" class is added
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js",  // ✅ Ensure Flowbite is included
  ],
  theme: {
    extend: {
      screens: {
        "other": { 'min': '340px', 'max': '1200px' },
      },
    },
  },
  plugins: [],
};
