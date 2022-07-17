import { doc, getDoc } from "firebase/firestore";
import { getDownloadURL, ref } from "firebase/storage";
import { db, storage } from "../../../../config/firebase";
import { UserProfileModel } from "../../../../models/UserProfile.model";
import { AppThunk } from "../../../store";
import {
	finishedRequest,
	hideGenericErrorDialog,
	newRequest,
	showGenericErrorDialog,
} from "../../ui/ui.slice";
import { setCurrentUserProfile } from "../auth.slice";

export function FetchUserUserProfle(currentUserId: string): AppThunk {
	return (dispatch) => {
		dispatch(newRequest());
		dispatch(hideGenericErrorDialog());

		const docRef = doc(db, "user-profiles", currentUserId);

		getDoc(docRef)
			.then((docSnapshot) => {
				if (docSnapshot.exists()) {
					const {
						email,
						join_date,
						name_first,
						name_last,
						user_id,
						username,
						profile_pic,
					} = docSnapshot.data();

					const userData: UserProfileModel = {
						email,
						join_date,
						name_first,
						name_last,
						user_id,
						username,
						profile_pic,
					};

					console.log("Profile fetched!", {
						email,
						join_date,
						name_first,
						name_last,
						user_id,
						username,
					});

					dispatch(setCurrentUserProfile(userData));
					dispatch(finishedRequest());
				} else {
					dispatch(finishedRequest());
					throw new Error("Error fetching your profile!");
				}
			})
			.catch((error) => {
				dispatch(finishedRequest());
				console.error(error);
				dispatch(showGenericErrorDialog("Error! An unknown error occurred."));
			});
	};
}
