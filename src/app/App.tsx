import { CssBaseline, ThemeProvider } from "@mui/material";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ErrorDialog } from "../components/dialogs/ErrorDialog";
import { FullPageLoadingSpinner } from "../components/elements/FullPageLoadingSpinner";
import { USER_STORAGE_KEY } from "../constants.config";
import { theme } from "../constants/theme";
import { useAuth } from "../hooks/useAuth";
import { setCurrentUser } from "../store/reducers/auth/auth.slice";
import {
  hideGenericErrorDialog,
  selectShowGenericErrorDialog,
  selectUiIsLoading,
} from "../store/reducers/ui/ui.slice";
import { AppRouter } from "./AppRouter";

const App: React.FC = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(
      setCurrentUser(() =>
        JSON.parse(localStorage.getItem(USER_STORAGE_KEY) || "{}")
      )
    );
  }, [dispatch]);

  useAuth();

  const isLoading = useSelector(selectUiIsLoading);
  const errorMessage = useSelector(selectShowGenericErrorDialog);

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
