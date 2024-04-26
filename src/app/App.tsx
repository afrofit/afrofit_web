import * as React from 'react';
import '@stripe/stripe-js';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { ErrorDialog } from '../components/dialogs/ErrorDialog';
import { FullPageLoadingSpinner } from '../components/elements/FullPageLoadingSpinner';
import { theme } from '../constants/theme';
import {
  hideGenericErrorDialog,
  hideGenericSuccessDialog,
  selectedShowSuccessMessage,
  selectShowGenericErrorDialog,
  selectUiIsLoading,
} from '../store/reducers/ui/ui.slice';
import { AppRouter } from './AppRouter';
import {
  selectUserToken,
  storeUser,
  storeUserToken,
} from '../store/reducers/auth/auth.slice';
import { DECODE_TOKEN, GET_TOKEN } from '../api/storage';
import { SuccessDialog } from '../components/dialogs/SuccessDialog';

const App: React.FC = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectUiIsLoading);
  const errorMessage = useSelector(selectShowGenericErrorDialog);
  const successMessage = useSelector(selectedShowSuccessMessage);

  const userToken = useSelector(selectUserToken);
  // console.log('userToken :>> ', userToken);
  const memoToken = React.useMemo(() => GET_TOKEN(), []);
  // console.log('memoToken :>> ', memoToken);
  const putTokenInStore = React.useCallback(() => {
    memoToken && dispatch(storeUserToken(memoToken));
  }, [memoToken, dispatch]);

  React.useEffect(() => {
    putTokenInStore();
    const user = DECODE_TOKEN();
    // console.log('user :>> ', user);
    if (user) {
      dispatch(storeUser(user));
    } else {
      dispatch(storeUser(undefined));
    }
  }, [dispatch, userToken, putTokenInStore]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {successMessage && (
        <SuccessDialog
          open={!!successMessage}
          message={successMessage}
          onClose={() => dispatch(hideGenericSuccessDialog())}
        />
      )}
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
