import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "var(--font-sans)",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "sans-serif",
        ],
      },
      boxShadow: {
        soft: "0 1px 2px rgba(15, 23, 42, 0.05), 0 12px 32px rgba(15, 23, 42, 0.06)",
        card: "0 1px 2px rgba(15, 23, 42, 0.04), 0 20px 48px rgba(15, 23, 42, 0.06)",
        lift: "0 1px 2px rgba(15, 23, 42, 0.06), 0 24px 56px rgba(79, 70, 229, 0.12)",
        dock: "0 -4px 24px rgba(15, 23, 42, 0.08), 0 8px 32px rgba(15, 23, 42, 0.06)",
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(to right, rgba(148, 163, 184, 0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(148, 163, 184, 0.08) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "56px 56px",
      },
    },
  },
  plugins: [],
};

export default config;
