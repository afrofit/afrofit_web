import { CssBaseline, ThemeProvider } from "@mui/material";
import * as React from "react";
import { FullPageLoadingSpinner } from "../components/elements/FullPageLoadingSpinner";
import { auth } from "../config/firebase";
import { theme } from "../constants/theme";
import { AppRouter } from "./AppRouter";

const App: React.FC = () => {
  const isLoading = false;

  console.log("auth", auth);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <FullPageLoadingSpinner isLoading={isLoading} />
      <AppRouter />
    </ThemeProvider>
  );
};

export default App;
