import type { Config } from "tailwindcss";

// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   darkMode: 'class',
//   // ...
// }

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode:'class',
  theme: {
    extend: {
      screens: {
        'mobile': '375px',
        // => @media (min-width: 640px) { ... }
      },


      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      colors: {
        'sub-navy': '#2b3743',
        'primary-navy': '#202d36',
        'light-mode-background': 'hsl(0, 0%, 98%)',
      },

      fontSize: {
        'homepage-items': '14px',
        'detail-page': '16px',
      },
    }   
  },
  plugins: [],
};
export default config;
