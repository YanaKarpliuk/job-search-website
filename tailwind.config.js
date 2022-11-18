/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  // plugins: [
  //   plugin(function({addBase, theme}) {
  //     addBase({
  //       'body': {FontFace: theme('Proxima Nova')}
  //     })
  //   })
  // ],
  theme: {
    extend: {
      colors: {
        listBg: "#E6E9F2",
        listItemBg: "#EFF0F5",
        btnBg: "#384564",
        lightBtnBg: '#E4E5EA',
        darkBg: "#2A3047",
        blueBg: "rgba(161, 177, 219, 0.317343)",
        yellowBg: "rgba(255, 207, 0, 0.15)",
        blueBorder: "rgba(0, 0, 0, 0.12)",
        yellowBorder: "#FFCF00",
        blueText: "#55699E",
        yellowText: "#988B49",
        grayText: "#878D9D",
        lightGrayText: "rgba(56, 65, 93, 0.602109)",
        darkGrayText: "rgba(56, 65, 93, 0.82)",
        darkText: "#3A4562",
        lightTextColor: "#E7EAF0",
        transparentWhiteText: "rgba(255, 255, 255, 0.669635)",
        grayBorderColor: 'rgba(56, 65, 93, 0.0513276)'
      },
      fontFamily: {
        display: ["Proxima Nova Rg"],
      },
      maxWidth: {
        maxWList: "1400px",
        maxWDetails: "1300px",
        maxWBox: '222px'
      },
      screens: {
        s: '414px',
        xl: "1400px",
      },
      listStyleType: {
        square: 'square'
      },
      dropShadow: {
        '2xl': '0 2px 1px rgba(0, 0, 0, 0.14)',
        '3xl': '4px 4px 1px rgba(0, 0, 0, 0.20)'
      }
    },
  },
  plugins: [],
};
