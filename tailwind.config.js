/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'blue-800': '#003b73',
        'purple-600': '#6a0dad',
        'green-500': '#28a745',
      },
    },
  },
  plugins: [],
};
