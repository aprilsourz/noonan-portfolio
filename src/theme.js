// @TODO Replace Raleway with museo-sans
// Subtract 4px from every font size on mobile devices.
// The smallest font will be 11px and the typography elements will maintain the same size ratios
const theme = {
  colors: {
    black: "#1B1723",
    blue: "#5D76DD",
    pink: "#FFA4F6",
    green: "#86EDDF",
    lightGrey: "#F1F2F7",
    lightBlue: "#E9EDFF",
    lightPink: "#E9EDFF",
    lightGreen: "#EAFFFC",
  },
  typography: {
    largeTitleText: {
      fontSize: "50px",
      mobileFontSize: "46px",
      fontFamily: "Raleway Bold 700",
    },
    largeBodyText: {
      fontSize: "30px",
      mobileFontSize: "26px",
      fontFamily: "Raleway Medium 500",
    },
    headerLgText: {
      fontSize: "40px",
      mobileFontSize: "36px",
      fontFamily: "Raleway Bold 700",
    },
    headerMdText: {
      fontSize: "30px",
      mobileFontSize: "26px",
      fontFamily: "Raleway Medium 500 Italic",
    },
    headerSmText: {
      fontSize: "20px",
      mobileFontSize: "16px",
      fontFamily: "Raleway Black 900",
    },
    normalBodyText: {
      fontSize: "20px",
      mobileFontSize: "16px",
      fontFamily: "Raleway Light 300",
    },
    boldBodyText: {
      fontSize: "20px",
      mobileFontSize: "16px",
      fontFamily: "Raleway Medium 500",
    },
    linkText: {
      fontSize: "20px",
      mobileFontSize: "16px",
      fontFamily: "Raleway Medium 500 Italic",
    },
  },
}

export default theme
