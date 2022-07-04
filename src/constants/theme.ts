import { createTheme } from "@mui/material/styles";
import { COLORS } from "./colors";

const theme = createTheme({
  palette: {
    primary: {
      main: COLORS.dark,
    },
    secondary: {
      main: COLORS.gray_300,
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
