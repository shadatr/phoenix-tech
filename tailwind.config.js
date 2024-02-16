/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.tsx",
    "./src/**/*.ts",
    "./public/index.html",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        secondary: "#FFFFFF",
        darkBlue: "#060121",
        babyBlue:"#2F89DD"
      },
      fontSize: {
        xxlg: "60px",
        xlg: "32px",
        lg: "30px",
        md: "20px",
        sm:"16px",
        xsm:"15px",
        xxsm:"8px"
      },
  },
  screens: {
    sm: "200px",
    md: "900px",
    lg: "1300px",
    xl: "1440px",
  },
},
  plugins: [],
}

