import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "gray-light": "#D3D3D3",
        "gray-dark": "#7c7c7c",
        "blue-dark": "#202d3d",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        braah: ["Braah One", "sans-serif"],
        overpass: ["Overpass", "sans-serif"],
      },
      boxShadow: {
        "glow-blue": "0 0 10px 2px rgba(0, 162, 232, 0.8)", // Custom blue glow
        "glow-bright": "0 0 15px 3px rgba(30, 144, 255, 0.9)", // Brighter blue glow
      },
    },
  },
  plugins: [],
};
export default config;
