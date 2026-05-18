import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        syne: ["Syne", "sans-serif"],
        dm: ["DM Sans", "sans-serif"],
      },
      colors: {
        bg: "#060b14",
        bg2: "#0a1120",
        accent: "#00d4ff",
        accent2: "#7c3aed",
        accent3: "#f59e0b",
        muted: "#64748b",
      },
    },
  },
  plugins: [],
};
export default config;
