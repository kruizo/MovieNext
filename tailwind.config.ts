import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themeRoot: ":root",
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          primary: "#3081D0",
          "primary-content": "#1A1A1A",
          secondary: "teal",
          accent: "#3081D0",
          ".btn-primary": {
            "background-color": "#3081D0",
            "border-color": "#3081D0",
            color: "#F3F3F3",
          },
        },
        dark: {
          //1EA1F1
          ...require("daisyui/src/theming/themes")["dark"],
          primary: "#f3f3f3",
          secondary: "#1B1B1B",
          accent: "#e50813",
          "primary-content": "#F3F3F3",
          ".btn-primary": {
            "background-color": "#e50813",
            "border-color": "#e50813",
            color: "#F3F3F3",
          },
          "base-100": "#1B1B1B",
          "base-200": "#0E0E0E",
          "base-300": "#101010",
          ".btn-info": {
            "background-color": "#e50813",
            "border-color": "#e50813",
          },
          ".btn-info:hover": {
            "background-color": "#B0060E",
            "border-color": "#B0060E",
          },
          ".btn-outline": {
            color: "#e50813",
            "border-color": "#e50813",
          },
          ".btn-outline:hover": {
            "background-color": "#1B1B1B",
            "border-color": "#1B1B1B",
            color: "#f3f3f3",
          },
        },
      },
    ],
  },
};
export default config;
