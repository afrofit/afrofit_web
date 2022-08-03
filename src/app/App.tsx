import { CssBaseline, ThemeProvider, Typography } from "@mui/material";
import { onAuthStateChanged } from "firebase/auth";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ErrorDialog } from "../components/dialogs/ErrorDialog";
import { FullPageLoadingSpinner } from "../components/elements/FullPageLoadingSpinner";
import { AppLayout } from "../components/layout/AppLayout/AppLayout";
import { auth } from "../config/firebase";
import { theme } from "../constants/theme";
import { useAuth } from "../hooks/useAuth";
import { GetUserPerformance } from "../store/reducers/app/thunks/get-user-performance.thunk";
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

  // const { pending } = useAuth();

  React.useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log(user);
      console.log("auth.currentUser", auth.currentUser);
    });
  }, []);

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
