import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      boxShadow: {
        calender: "0px 6px 12px 0px #5C738314, 0px 4px 8px 0px #5C738314",
      },
      fontFamily: {
        degular: ["degular", "sans-serif"],
      },
      colors: {
        primary: "#131316",
        success: {
          background: "#E3FCF2",
          foreground: "#0EA163",
        },
        pending: "#A77A07",
        danger: {
          background: "#F9E3E0",
          foreground: "#961100",
        },
        coolgrey: {
          background: "#EFF1F6",
          foreground: "#56616B",
        },
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
