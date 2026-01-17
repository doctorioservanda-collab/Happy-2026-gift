import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
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
      fontFamily: {
        heading: ['Playfair Display', 'serif'],
        body: ['Outfit', 'sans-serif'],
        display: ['Syne', 'sans-serif'],
        mono: ['Space Mono', 'monospace'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        christmas: {
          red: "hsl(0 84% 60%)",
          green: "hsl(145 80% 50%)",
          gold: "hsl(var(--newyear-gold))",
          cream: "hsl(var(--newyear-champagne))",
          dark: "hsl(var(--newyear-midnight-blue))",
        },
        newyear: {
          gold: "hsl(var(--newyear-gold))",
          silver: "hsl(var(--newyear-silver))",
          midnight: "hsl(var(--newyear-midnight-blue))",
          navy: "hsl(var(--newyear-navy))",
          black: "hsl(var(--newyear-black))",
          champagne: "hsl(var(--newyear-champagne))",
          roseGold: "hsl(var(--newyear-rose-gold))",
        },
        snow: "hsl(var(--snow-white))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        "elegant": "0 8px 40px hsl(220 30% 8% / 0.5)",
        "gold": "0 4px 30px hsl(45 85% 58% / 0.3)",
        "silver": "0 4px 30px hsl(220 15% 75% / 0.2)",
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
        "fade-in": {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "slide-in-right": {
          from: { opacity: "0", transform: "translateX(20px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        "scale-in": {
          from: { opacity: "0", transform: "scale(0.95)" },
          to: { opacity: "1", transform: "scale(1)" },
        },
        "subtle-float": {
          "0%, 100%": { transform: "translateY(0) translateX(0)" },
          "33%": { transform: "translateY(-8px) translateX(2px)" },
          "66%": { transform: "translateY(-4px) translateX(-2px)" },
        },
        "gentle-pulse": {
          "0%, 100%": { opacity: "0.6", transform: "scale(1)" },
          "50%": { opacity: "0.9", transform: "scale(1.02)" },
        },
        "elegant-glow": {
          "0%, 100%": { boxShadow: "0 0 15px hsl(45 85% 58% / 0.25)" },
          "50%": { boxShadow: "0 0 35px hsl(45 85% 58% / 0.4)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.6s ease-out forwards",
        "slide-in-right": "slide-in-right 0.5s ease-out forwards",
        "scale-in": "scale-in 0.4s ease-out forwards",
        "subtle-float": "subtle-float 6s ease-in-out infinite",
        "gentle-pulse": "gentle-pulse 4s ease-in-out infinite",
        "elegant-glow": "elegant-glow 3s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
