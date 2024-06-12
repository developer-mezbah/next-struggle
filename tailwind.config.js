/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layout/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/DasComponent/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#20FB8B",
        accent: "#111204",
        textLight: "#ffffff",
        themeColor: "#845ADF",
        bgDark: "#111C43",
        bgLight: "#F0F1F7",
        textColor: "#a3aed1",
        warning: "#F5B849",
      },
      backgroundImage: {
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          'gradient-45': 'linear-gradient(45deg, #1d1d1d 2%, #002025 100%)',
      },
    },
  },
  plugins: [],
};
