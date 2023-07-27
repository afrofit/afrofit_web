import { createTheme } from "@mui/material/styles";
import { COLORS } from "./colors";

const theme = createTheme({
  palette: {
    primary: {
      main: COLORS.white,
    },
    secondary: {
      main: COLORS.orange_200,
      light: COLORS.orange_200,
      dark: COLORS.orange_300,
      contrastText: COLORS.white,
    },
    success: {
      main: COLORS.purple_200,
      light: COLORS.purple_100,
      dark: COLORS.purple_300,
      contrastText: COLORS.white,
    },
    info: {
      main: COLORS.pink_200,
      light: COLORS.pink_100,
      dark: COLORS.pink_300,
      contrastText: COLORS.white,
    },
    error: {
      main: COLORS.dark_200,
      light: COLORS.dark_100,
      dark: COLORS.dark_300,
      contrastText: COLORS.white,
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
  typography: {
    fontFamily: "Roboto",
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,

    button: {
      fontSize: "14px",
      "&:disabled": {
        color: "white",
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1400,
    },
  },
  shape: {
    borderRadius: 8,
  },
});

export { theme };
