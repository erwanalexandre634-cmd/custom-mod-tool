/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // HOI4-inspired color palette
        'hoi4-dark': '#1a1a2e',
        'hoi4-darker': '#0f0f1a',
        'hoi4-gold': '#c9a227',
        'hoi4-blue': '#4a90d9',
        'hoi4-red': '#d64545',
        'hoi4-green': '#45d645',
      },
    },
  },
  plugins: [],
}
