/* eslint-disable @typescript-eslint/no-var-requires */
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");
 
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
        medBlue: "#0A293F",
        babyBlue:"#2F89DD"
      },
      fontSize: {
        xxlg: "45px",
        xlg: "32px",
        lg: "30px",
        xmd: "25px",
        md: "20px",
        sm:"16px",
        xsm:"15px",
        xxsm:"11px"
      },
      animation: {
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
      keyframes: {
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
      },
  },
  screens: {
    sm: "200px",
    md: "900px",
    lg: "1300px",
    xl: "1440px",
  },
},
  plugins: [addVariablesForColors],
}

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}
