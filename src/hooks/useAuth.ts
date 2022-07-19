import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/firebase";
import { FetchUserUserProfle } from "../store/reducers/auth/thunks/fetch-user-profile.thunk";
import React from "react";
import { setCurrentUser } from "../store/reducers/auth/auth.slice";
import { USER_STORAGE_KEY } from "../constants.config";

export const useAuth = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    const listener = onAuthStateChanged(auth, (user) => {
      console.log("Checking for user...");
      if (user) {
        console.log("User from firebase...", user.uid);
        localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(user));
        dispatch(setCurrentUser(user));
        return dispatch(FetchUserUserProfle(user.uid));
        // fetch user profile from firebase and set currentUserProfile
      } else {
        localStorage.removeItem(USER_STORAGE_KEY);
        dispatch(setCurrentUser(null));
        return console.log("No User from firebase...");
        // set current user profile to null
      }
    });
    return () => listener?.();
  }, [dispatch]);
};
