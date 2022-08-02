import { CssBaseline, ThemeProvider, Typography } from "@mui/material";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ErrorDialog } from "../components/dialogs/ErrorDialog";
import { FullPageLoadingSpinner } from "../components/elements/FullPageLoadingSpinner";
import { AppLayout } from "../components/layout/AppLayout/AppLayout";
import { theme } from "../constants/theme";
import { useAuth } from "../hooks/useAuth";
import {
  hideGenericErrorDialog,
  selectShowGenericErrorDialog,
  selectUiIsLoading,
} from "../store/reducers/ui/ui.slice";
import { AppRouter } from "./AppRouter";

const App: React.FC = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectUiIsLoading);
  const errorMessage = useSelector(selectShowGenericErrorDialog);

  const { pending } = useAuth();

  // if (pending) {
  //   return (
  //     <AppLayout authorized={false}>
  //       <Typography sx={{ fontSize: 100, color: "white" }}>
  //         Loading...
  //       </Typography>
  //     </AppLayout>
  //   );
  // }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {errorMessage && (
        <ErrorDialog
          open={!!errorMessage}
          message={errorMessage}
          onClose={() => dispatch(hideGenericErrorDialog())}
        />
      )}
      <FullPageLoadingSpinner isLoading={isLoading} />
      <AppRouter />
    </ThemeProvider>
  );
};

export default App;
