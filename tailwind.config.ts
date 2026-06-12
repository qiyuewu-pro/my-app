import type { Config } from "tailwindcss";

const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#07111f",
        panel: "#0c1b2f",
      },
      boxShadow: {
        glow: "0 0 30px rgba(34,211,238,.18)",
      },
    },
  },
  plugins: [],
} satisfies Config;

export default config;
