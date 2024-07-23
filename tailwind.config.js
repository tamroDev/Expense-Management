/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "custom-1": " inset 5px 5px 10px #bebebe,inset -5px -5px 10px #ffffff",
        "custom-2": "5px 5px 10px #bebebe,-5px -5px 10px #ffffff",
      },
      transition: {
        all: "all 0.5s linear",
      },
      colors: {
        primary: "#999",
      },
      flex: {
        "between-items": "justify-between items-center",
      },
    },
  },
  plugins: [],
};
