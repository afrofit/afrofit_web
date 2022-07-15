import { CssBaseline, ThemeProvider } from "@mui/material";
import * as React from "react";
import { useSelector } from "react-redux";
import { FullPageLoadingSpinner } from "../components/elements/FullPageLoadingSpinner";
import { auth } from "../config/firebase";
import { theme } from "../constants/theme";
import { selectUiIsLoading } from "../store/reducers/ui/ui.slice";
import { AppRouter } from "./AppRouter";

const App: React.FC = () => {
	const isLoading = useSelector(selectUiIsLoading);

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
