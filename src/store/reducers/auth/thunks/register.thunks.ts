import {
	createUserWithEmailAndPassword,
	sendEmailVerification,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db, storage } from "../../../../config/firebase";
import { UserCredentials } from "../../../../types/user.type";

import { AppThunk } from "../../../store";
import {
	finishedRequest,
	hideGenericErrorDialog,
	newRequest,
	showGenericErrorDialog,
} from "../../ui/ui.slice";
import { setCurrentUser } from "../auth.slice";

export function RegisterAccount(userCredentials: UserCredentials): AppThunk {
	console.log("userCredentials", userCredentials);
	const { email, password, name_first, name_last, username } = userCredentials;
	return (dispatch) => {
		dispatch(newRequest());
		dispatch(hideGenericErrorDialog());

		createUserWithEmailAndPassword(auth, email, password)
			.then((userCredential: any) => {
				const { user } = userCredential;
				const { email, uid } = user;
				// Here just go and fetch current user profile and set it on state

				console.log("User", user);

				const join_date = new Date().toUTCString();
				const loggedInUser = { ...(email && { email }), id: uid, join_date };

				//Now create user profile details
				if (auth.currentUser) {
					sendEmailVerification(auth.currentUser).then(() => {
						console.log("Email verification sent!");
						// ...
					});
				}

				setDoc(doc(db, "user-profiles", user.uid), {
					profile_pic: "profilepiclink.com",
					join_date,
					name_last,
					name_first,
					email,
					username,
					user_id: user.uid,
				})
					.then(() => console.log("User profile created!"))
					.catch((error) =>
						console.error("There was an error creating profile", error)
					);

				dispatch(setCurrentUser(loggedInUser));
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
