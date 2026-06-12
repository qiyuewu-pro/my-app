import type { Config } from "tailwindcss";
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: { extend: { colors: { ink: "#07111f", panel: "#0c1b2f", cyan: "#22d3ee", lime: "#a3e635" }, boxShadow: { glow: "0 0 30px rgba(34,211,238,.18)" } } },
  plugins: [],
} satisfies Config;
