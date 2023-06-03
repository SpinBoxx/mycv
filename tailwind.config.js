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
        ".custom-underline": {
          "@apply underline decoration-blue-500 underline-offset-4 xl:no-underline":
            {},
        },
        ".text-h1": {
          "@apply text-4xl font-bold tracking-wide text-zinc-100 antialiased":
            {},
        },
        ".text-h2": {
          "@apply underline decoration-blue-500 underline-offset-4 xl:no-underline":
            {},
        },
        ".text-paragraph": {
          "@apply text-zinc-400 tracking-normal text-base indent-2 tracking-tight sm:tracking-normal":
            {},
        },
        ".bg-effect-blue": {
          "@apply bg-gradient-to-r from-sky-500 to-blue-500": {},
        },
        ".decoration-effect-blue": {
          "@apply bg-gradient-to-r from-sky-500 to-blue-500": {},
        },
      });
    },
  ],
};
