const theme = {
  base: "16px",
  spacing: "1rem",
  typography: {
    font: {
      sans: 'Jura',
      serif: 'Forum',
    },
    text: "1rem",
    title: "2rem"
  },
  breakpoint: {
    xs: "0em",  /* 0px */
    sm: "30em", /* 480px */
    md: "64em", /* 1024px */
    lg: "75em", /* 1200px */
  },
  color: {
    primary: "#6d9197",
    secondary: "#c4cd41",
    dark: "#28364d",
    light: "#dee1dd",
    infected: "#2f575d",
    recovered: "#658b6f",
    deaths: "#99aead"
  },
  border: {
    radius: '20px',
    boxShadow: '0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)',
  }
}

export default theme;
