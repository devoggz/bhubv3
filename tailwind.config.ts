import { nextui } from "@nextui-org/theme";
import type { Config } from "tailwindcss";

const colors = require("tailwindcss/colors");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {},
    fill: {
      current: "currentColor",
    },
    screens: {
      xs: "500px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1400px",
      "3xl": "1500px",
      "4xl": "1780px",
    },
    extend: {
      fontFamily: {
        inter: ["var--font-inter"],
        poppins: ["var(--font-poppins)"],
      },
      fontSize: {
        h1: ["2.25rem", { lineHeight: "2.75rem" }],
        h2: ["1.875rem", { lineHeight: "2.375rem" }],
        h3: ["1.5rem", { lineHeight: "2rem" }],
        h4: ["1.25rem", { lineHeight: "1.75rem" }],
        h5: ["1.125rem", { lineHeight: "1.625rem" }],
        h6: ["1rem", { lineHeight: "1.5rem" }],
        quote: ["1.125rem", { lineHeight: "1.75rem", fontWeight: "600" }],
      },
      animation: {
        text: "text 5s ease infinite",
      },
      keyframes: {
        text: {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
      },
      colors: {
        bhgreen: "#12dac6",
        bhpink: "#da09b3",

        gray: {
          "1000": "rgb(var(--gray-1000) / <alpha-value>)",
          light: "rgb(var(--gray-light) / <alpha-value>)",
          lighter: "rgb(var(--gray-lighter) / <alpha-value>)",
          lightest: "rgb(var(--gray-lightest) / <alpha-value>)",
          DEFAULT: "rgb(var(--gray-default) / <alpha-value>)",
          dark: "rgb(var(--gray-dark) / <alpha-value>)",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        red: {
          light: "rgb(var(--red-light) / <alpha-value>)",
          lighter: "rgb(var(--red-lighter) / <alpha-value>)",
          DEFAULT: "rgb(var(--red-default) / <alpha-value>)",
          dark: "rgb(var(--red-dark) / <alpha-value>)",
        },
        orange: {
          light: "rgb(var(--orange-light) / <alpha-value>)",
          lighter: "rgb(var(--orange-lighter) / <alpha-value>)",
          DEFAULT: "rgb(var(--orange-default) / <alpha-value>)",
          dark: "rgb(var(--orange-dark) / <alpha-value>)",
        },
        green: {
          light: "rgb(var(--green-light) / <alpha-value>)",
          lighter: "rgb(var(--green-lighter) / <alpha-value>)",
          DEFAULT: "rgb(var(--green-default) / <alpha-value>)",
          dark: "rgb(var(--green-dark) / <alpha-value>)",
        },
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      boxShadow: {
        card: "0px 0px 0px 1px rgba(35, 38, 59, 0.05), 0px 2px 4px rgba(35, 38, 59, 0.1)",
        "card-hover":
          "0px 0px 0px 1px rgba(35, 38, 59, 0.05), 0px 3px 4px rgba(35, 38, 59, 0.1)",
        "card-two": "0px 8px 12px rgba(0, 0, 0, 0.08)",
        "menu-shadow": "0px 0px 8px rgba(0, 0, 0, 0.12)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  darkMode: ["class", "class"],
  plugins: [nextui(), require("tailwindcss-animate")],
};
export default config;
