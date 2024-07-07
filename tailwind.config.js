/* eslint-disable no-undef */
const animate = require("tailwindcss-animate")
const containerQueries = require('@tailwindcss/container-queries')

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx,vue}',
    './components/**/*.{ts,tsx,vue}',
    './app/**/*.{ts,tsx,vue}',
    './src/**/*.{ts,tsx,vue}',
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
      colors: {
        primary: '#FF6200',
        secondary: '#E0353D',
        stroke_primary: '#EDEDED',
        font_color: '#242424',
        ["message-foreground"]: "#FFF0E6",
      },
      lineHeight: {
        normal: "normal",
      },
      borderRadius: {
        'lgx': '10px'
      },
      size: {
        15: '60px'
      },
      spacing: {
        '3.5': '14px'
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [animate, containerQueries],
}
