import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: ["selector", "[data-theme='dark']"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#EAF1FF", 100: "#D6E4FF", 200: "#B8D2FF", 300: "#8FB6FF",
          400: "#2E77FF", 500: "#0057FF", 600: "#0046CC", 700: "#0041BD",
          800: "#065F46", 900: "#064E3B",
        },
        surface: {
          50: "#F8FAFC", 100: "#F1F5F9", 200: "#E2E8F0",
          800: "#1E293B", 900: "#0F172A", 950: "#0A0F1A",
        },
      },
      fontFamily: {
        display: ['Inter', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
};
export default config;
