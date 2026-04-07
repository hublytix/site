import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: { 50: "#ECFDF5", 100: "#D1FAE5", 200: "#A7F3D0", 300: "#6EE7B7", 400: "#34D399", 500: "#22C55E", 600: "#16A34A", 700: "#15803D", 800: "#166534", 900: "#14532D" },
        surface: { 50: "#F8FAFC", 100: "#F1F5F9", 800: "#1E293B", 900: "#0F172A", 950: "#0A0F1A" },
      },
      fontFamily: {
        display: ['"Cabinet Grotesk"', 'sans-serif'],
        body: ['"DM Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out both",
        "fade-in": "fadeIn 0.5s ease-out both",
        "pulse-glow": "pulseGlow 3s ease-in-out infinite",
        "score-ring": "scoreRing 1.5s ease-out both",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: { "0%": { opacity: "0", transform: "translateY(24px)" }, "100%": { opacity: "1", transform: "translateY(0)" } },
        fadeIn: { "0%": { opacity: "0" }, "100%": { opacity: "1" } },
        pulseGlow: { "0%,100%": { opacity: "0.4" }, "50%": { opacity: "0.8" } },
        scoreRing: { "0%": { strokeDashoffset: "314" }, "100%": { strokeDashoffset: "120" } },
        float: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-12px)" } },
      },
    },
  },
  plugins: [],
};
export default config;
