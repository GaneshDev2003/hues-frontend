import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#57D4C7",
        textcolor: "#12C1B4",
        secondary: "#FFC107",
        textsecondary: "#B3B3B3" // Your custom primary color
      },
      backgroundImage: {
        'rectangle' : "url('/images/rectangle1.png')"
      }
    },
  },
  plugins: [],
};

export default config;