import { sendPasswordResetEmail } from "firebase/auth";
import { auth, db, storage } from "../../../../config/firebase";

import { AppThunk } from "../../../store";
import {
	finishedRequest,
	hideGenericErrorDialog,
	newRequest,
	showGenericErrorDialog,
} from "../../ui/ui.slice";
import { setCurrentUser } from "../auth.slice";

export function ResetPassword(userEmail: string): AppThunk {
	return (dispatch) => {
		dispatch(newRequest());
		dispatch(hideGenericErrorDialog());

		sendPasswordResetEmail(auth, userEmail)
			.then((userCredential: any) => {
				// const { user } = userCredential;
				// const { email, uid } = user;
				// // Here just go and fetch current user profile and set it on state

				// const join_date = new Date().toUTCString();
				// const loggedInUser = { ...(email && { email }), id: uid, join_date };
				// dispatch(setCurrentUser(loggedInUser));
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
