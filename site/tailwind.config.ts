import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0C0A09",
        stone: {
          50: "#FAFAF9",
          100: "#F5F5F4",
          200: "#E8ECF0",
          300: "#D6D3D1",
          600: "#44403C",
          900: "#1C1917",
        },
        gold: "#A16207",
        cream: "#FAFAF9",
      },
      fontFamily: {
        display: ["var(--font-playfair)", "Playfair Display", "serif"],
        body: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(3.5rem, 10vw, 9rem)", { lineHeight: "0.9", letterSpacing: "-0.04em" }],
        "display-lg": ["clamp(2.5rem, 6vw, 5rem)", { lineHeight: "0.95", letterSpacing: "-0.03em" }],
        "display-md": ["clamp(2rem, 4vw, 3rem)", { lineHeight: "1", letterSpacing: "-0.02em" }],
      },
      letterSpacing: {
        widest: "0.25em",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.2, 0.8, 0.2, 1)",
      },
    },
  },
  plugins: [],
};
export default config;
