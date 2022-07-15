import { sendPasswordResetEmail } from "firebase/auth";
import { auth, db, storage } from "../../../../config/firebase";

import { AppThunk } from "../../../store";
import {
	finishedRequest,
	hideGenericErrorDialog,
	newRequest,
	showGenericErrorDialog,
} from "../../ui/ui.slice";

export function ResetPassword(userEmail: string): AppThunk {
	return (dispatch) => {
		dispatch(newRequest());
		dispatch(hideGenericErrorDialog());

		sendPasswordResetEmail(auth, userEmail)
			.then(() => {
				console.log("Password reset sent!");
				dispatch(finishedRequest());
			})
			.catch((error) => {
				dispatch(finishedRequest());
				const errorCode = error.code;
				const errorMessage = error.message;
				if (errorCode === "auth/user-not-found") {
					dispatch(showGenericErrorDialog("Error! User not found."));
					return;
				}
				if (errorCode === "auth/wrong-password") {
					dispatch(
						showGenericErrorDialog("Error! Your credentials don't match.")
					);
					return;
				}
				dispatch(showGenericErrorDialog("Error! An unknown error occurred."));
				return;
			});
	};
}
