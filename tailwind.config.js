/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1.5rem",
        sm: "2rem",
      },

    },
    colors: {
      primary: "#18251A",
      secondary: "#768A76",
      white: "#fff",
      black: "#000",
      lightDark: "#333333",
      gray: "#F0F0F0",
    },
    // fontSize: {
    //   xl: '4.5rem'
    // }
  },
  plugins: [],
};
