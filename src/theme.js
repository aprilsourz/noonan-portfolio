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
    white: "#ffffff",
  },
  typography: {
    largeTitleText: {
      fontSize: "50px",
      mobileFontSize: "40px",
      fontFamily: "museo-sans, sans-serif",
      fontWeight: 700,
      lineHeight: "55px",
    },
    largeBodyText: {
      fontSize: "30px",
      mobileFontSize: "20px",
      fontFamily: "museo-sans, sans-serif",
      fontWeight: 300,
      lineHeight: "40px",
    },
    headerLgText: {
      fontSize: "40px",
      mobileFontSize: "30px",
      fontFamily: "museo-sans, sans-serif",
      fontWeight: 700,
      lineHeight: "45px",
    },
    headerMdText: {
      fontSize: "30px",
      mobileFontSize: "20px",
      fontFamily: "museo-sans, sans-serif",
      fontStyle: "italic",
      fontWeight: 500,
      lineHeight: "40px",
    },
    headerSmText: {
      fontSize: "20px",
      mobileFontSize: "16px",
      fontFamily: "museo-sans, sans-serif",
      fontWeight: 900,
      lineHeight: "24px",
    },
    normalBodyText: {
      fontSize: "20px",
      mobileFontSize: "16px",
      fontFamily: "museo-sans, sans-serif",
      fontWeight: 300,
      lineHeight: "24px",
    },
    boldBodyText: {
      fontSize: "20px",
      mobileFontSize: "16px",
      fontFamily: "museo-sans, sans-serif",
      fontWeight: 500,
      lineHeight: "24px",
    },
    linkText: {
      fontSize: "20px",
      mobileFontSize: "16px",
      fontFamily: "museo-sans, sans-serif",
      fontStyle: "italic",
      fontWeight: 300,
    },
    navLinkText: {
      fontSize: "18px",
      mobileFontSize: "16px",
      fontFamily: "museo-sans, sans-serif",
      fontWeight: 300,
    },
    largeBodyTextLineHeight: "30px",
  },
}

export default theme
