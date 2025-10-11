import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        teal: "#1EB5A9",
        yellow: "#FFD600",
        charcoal: "#2E2D2F",
      },
    },
  },
  plugins: [],
} satisfies Config;
