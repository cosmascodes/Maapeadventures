/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/images/home_page/u9.svg')",
        "hero-map": "url('/images/home_page/u61.svg')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          DEFAULT: "#0f5257",
        },
        secondary: {
          DEFAULT: "#91dbc5",
        },
        tertiary: {
          DEFAULT: "#bacdb0",
        },
        text: {
          DEFAULT: "#0f5257",
        },
        redTheme: {
          DEFAULT: "#e63946",
        },
      },
      fontFamily: {
        duality: ["var(--font-duality)"],
        interstate: ["var(--font-interstate)"],
        mono: ["var(--font-mono)"],
      },
    },
  },
  plugins: [],
};
