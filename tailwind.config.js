/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite-react/**/*.js",
  ],
  theme: {
    extend: {
      animation: {
        fade: "fadeIn 6s",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: (theme) => ({
        fadeIn: {
          "0%": { opacity: "0" },
          "80%": { opacity: "0.1" },
          "100%": { opacity: "1" },
        },
      }),
    },
  },
  plugins: [
    require("flowbite/plugin"),
    ({ addUtilities }) => {
      addUtilities({
        ".hover-effect-blue": {
          "@apply hover:cursor-pointer hover:bg-gradient-to-r hover:from-sky-500 hover:to-blue-500":
            {},
        },
        ".bg-effect-blue": {
          "@apply bg-gradient-to-r from-sky-500 to-blue-500": {},
        },
        ".docoration-effect-blue": {
          "@apply -gradient-to-r from-sky-500 to-blue-500": {},
        },
      });
    },
  ],
};
