import { signOut } from "firebase/auth";
import { auth, db, storage } from "../../../../config/firebase";
import { UserCredentials } from "../../../../types/user.type";

import { AppThunk } from "../../../store";
import {
	finishedRequest,
	hideGenericErrorDialog,
	newRequest,
	showGenericErrorDialog,
} from "../../ui/ui.slice";
import { unsetCurrentUser } from "../auth.slice";

export function SignOut(): AppThunk {
	return (dispatch) => {
		dispatch(newRequest());
		dispatch(hideGenericErrorDialog());

		signOut(auth)
			.then(() => {
				console.log("User signed out!");
				dispatch(unsetCurrentUser());
			})
			.catch((error) => {
				dispatch(finishedRequest());
				dispatch(showGenericErrorDialog("Error! An unknown error occurred."));
				return;
			});
	};
}
