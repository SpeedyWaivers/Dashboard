const textLight = {
  primary: "rgba(52, 49, 76, 1)",
  secondary: "rgba(52, 49, 76, 0.54)",
  disabled: "rgba(52, 49, 76, 0.38)",
  hint: "rgba(52, 49, 76, 0.38)",
};

export const themeColors = {
  purpleDark1: {
    palette: {
      type: "dark",
      primary: {
        main: "#7467ef",
        contrastText: "#ffffff",
      },
      secondary: {
        main: "#ff9e43",
        contrastText: textLight.primary,
      },
      background: {
        paper: "#222A45",
        default: "#1a2038",
      },
    },
  },
  slateDark1: {
    palette: {
      type: "dark",
      primary: {
        main: "#222A45",
        contrastText: "#ffffff",
      },
      secondary: {
        main: "#ff9e43",
        contrastText: textLight.primary,
      },
      background: {
        paper: "#222A45",
        default: "#1a2038",
      },
    },
  },
};
