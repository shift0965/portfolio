/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#192231",
        "primary-middle": "#33658A",
        "primary-second": "#a9b7c0",
        secondary: "#fbcfb1",
        "secondary-second": "#ff5a09",
        tx: "#fff",
        "tx-dark": "black",
        light: "rgba(230,230,230,0.9)",
      },
    },
  },
  plugins: [],
};
