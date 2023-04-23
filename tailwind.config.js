/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    ({ addUtilities }) => {
      addUtilities({
        ".hover-effect-blue": {
          "@apply hover:cursor-pointer hover:bg-gradient-to-r hover:from-sky-500 hover:to-blue-500":
            {},
        },
        ".bg-effect-blue": {
          "@apply bg-gradient-to-r from-sky-500 to-blue-500": {},
        },
      });
    },
  ],
};
