/* eslint-disable import/no-anonymous-default-export */

import { Poppins } from 'next/font/google';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        Poppins: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        'black': '4px 4px 0 #000',
        'white': '4px 4px 0 #fff'
      },
      gridTemplateColumns: {
        'auto': 'repeat(auto-fit, minmax(200px, 1fr))'
      },
      animation: {
        bounce: 'bounce 1.5s cubic-bezier(0.25, 1, 0.5, 1) infinite', // Longer duration and smoother easing
        'scroll-left': 'scroll-left 40s linear infinite',
        'scroll-right': 'scroll-right 40s linear infinite',
      },
      keyframes: {
        'scroll-left': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'scroll-right': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
        bounce: {
          '0%': {
            transform: 'translateY(0)',
          },
          '30%': {
            transform: 'translateY(-15px)', // Higher peak for the bounce
          },
          '50%': {
            transform: 'translateY(0)',
          },
          '70%': {
            transform: 'translateY(-8px)', // A smaller rebound for a smooth landing
          },
          '100%': {
            transform: 'translateY(0)',
          },
        },
      },
    },
  },
  plugins: [],
};
