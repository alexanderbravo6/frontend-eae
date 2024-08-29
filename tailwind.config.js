/** @type {import('tailwindcss').Config} */
import { nextui } from "@nextui-org/react";
const colors = require('tailwindcss/colors')
module.exports = {

  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"

  ],
  darkMode: "class",
  plugins: [

    nextui()
  ],
  theme: {
    colors: {
      ...colors,
      main: "#3b72e3",
      secundary: "#3b72e3",
      title: "#338ef7",
      success: "#DCF3F3",
    },
  },

};
