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
    lightPink: "#FFE9FD",
    lightGreen: "#EAFFFC",
  },
  typography: {
    largeTitleText: {
      fontSize: "50px",
      mobileFontSize: "46px",
      fontFamily: `"Raleway Semi Bold", sans-serif`,
    },
    largeBodyText: {
      fontSize: "30px",
      mobileFontSize: "26px",
      fontFamily: `"Raleway Regular", sans-serif`,
    },
    headerLgText: {
      fontSize: "40px",
      mobileFontSize: "36px",
      fontFamily: `"Raleway Semi Bold", sans-serif`,
    },
    headerMdText: {
      fontSize: "30px",
      mobileFontSize: "26px",
      fontFamily: `"Raleway Regular Italic", sans-serif`,
    },
    headerSmText: {
      fontSize: "20px",
      mobileFontSize: "16px",
      fontFamily: `"Raleway Extra Bold", sans-serif`,
    },
    normalBodyText: {
      fontSize: "20px",
      mobileFontSize: "16px",
      fontFamily: `"Raleway Extra Light", sans-serif`,
    },
    boldBodyText: {
      fontSize: "20px",
      mobileFontSize: "16px",
      fontFamily: `"Raleway Regular", sans-serif`,
    },
    linkText: {
      fontSize: "20px",
      mobileFontSize: "16px",
      fontFamily: `"Raleway Regular Italic", sans-serif`,
    },
    navLinkText: {
      fontSize: "18px",
      mobileFontSize: "16px",
      fontFamily: `"Raleway Regular", sans-serif`,
    },
  },
}

export default theme
