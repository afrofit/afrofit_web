import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/firebase";
import { FetchUserUserProfle } from "../store/reducers/auth/thunks/fetch-user-profile.thunk";
import React from "react";

export const useAuth = () => {
	const dispatch = useDispatch();

	React.useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			console.log("Checking for user...");
			if (user) {
				console.log("User from firebase...", user.uid);
				return dispatch(FetchUserUserProfle(user.uid));
				// fetch user profile from firebase and set currentUserProfile
			} else {
				return console.log("No User from firebase...");
				// set current user profile to null
			}
		});
	}, [dispatch]);
};
