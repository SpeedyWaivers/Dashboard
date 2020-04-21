import { createMuiTheme } from "@material-ui/core/styles";

const buttonOption = {
  root: {
    textTransform: "none",
    fontWeight: "normal",
  },
};

export const landingTheme = createMuiTheme({
  palette: {
    type: "light",
    primary: {
      main: "#FF6A7E",
      contrastText: "rgba(255,255,255,0.87)",
    },
    secondary: {
      main: "#6E5BFF",
      contrastText: "rgba(255,255,255,0.87)",
    },
    contrastThreshold: 3,
    tonalOffset: 0.1,
  },
  typography: {
    fontSize: 14,
    htmlFontSize: 16,
    useNextVariants: true,
  },
  overrides: {
    MuiButton: buttonOption,
    MuiFab: buttonOption,
    MuiCard: {
      root: {
        borderRadius: 8,
      },
    },
  },
});
