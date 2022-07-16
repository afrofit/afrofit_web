import { CssBaseline, ThemeProvider } from "@mui/material";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ErrorDialog } from "../components/dialogs/ErrorDialog";
import { FullPageLoadingSpinner } from "../components/elements/FullPageLoadingSpinner";
import { auth } from "../config/firebase";
import { theme } from "../constants/theme";
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

	console.log("auth", auth);

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
