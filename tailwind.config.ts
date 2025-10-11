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
        yellow: "#FFD95E",
        charcoal: "#2E2D2F",
        cream: "#FFF9EE",
        mint: "#B9F6CA",
        lavender: "#C5A3FF",
        coral: "#FF7A64",
      },
    },
  },
  plugins: [],
} satisfies Config;
