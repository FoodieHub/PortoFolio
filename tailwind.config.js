/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ffb400",
      },
      fontSize: {
        xs: ["14px", "28px"],
        sm: ["18px", "30px"],
        base: ["16px", "35px"],
        "3xl": ["29px", "39px"],
        "4xl": ["38px", "48px"],
        "5xl": ["51px", "62px"],
      },
      screens: {
        sm: "576px",
        lg: "992px",
        desktop: "1280px",
      },
    },
  },
  plugins: [],
};
