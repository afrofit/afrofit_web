import { UserModel } from "./../../../../models/User.model";
import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, db, storage } from "../../../../config/firebase";
import { UserProfileModel } from "../../../../models/UserProfile.model";
import { UserCredentials } from "../../../../types/user.type";

import { AppThunk } from "../../../store";
import {
  finishedRequest,
  hideGenericErrorDialog,
  newRequest,
  showGenericErrorDialog,
} from "../../ui/ui.slice";
import { setCurrentUser, setCurrentUserProfile } from "../auth.slice";

export function LogIn(
  userCredentials: Pick<UserCredentials, "email" | "password">
): AppThunk {
  const { email, password } = userCredentials;
  return (dispatch) => {
    dispatch(newRequest());
    dispatch(hideGenericErrorDialog());
    console.log("Let's log in!");
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential: any) => {
        const { user } = userCredential;
        const { email, uid } = user;

        const loggedInUser: UserModel = {
          email,
          id: uid,
        };

        const userDocRef = doc(db, "user-profiles", uid);

        getDoc(userDocRef).then((docSnapshot) => {
          if (docSnapshot.exists()) {
            console.log("UserProfileData", docSnapshot.data());
            const {
              email,
              join_date,
              name_first,
              name_last,
              user_id,
              username,
              profile_pic,
              last_active,
            } = docSnapshot.data();

            const userData: UserProfileModel = {
              email,
              join_date,
              name_first,
              name_last,
              user_id,
              username,
              profile_pic,
              last_active,
            };

            dispatch(setCurrentUserProfile(userData));
          }
        });

        dispatch(setCurrentUser(loggedInUser));
        dispatch(finishedRequest());
      })
      .catch((error) => {
        dispatch(finishedRequest());
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("errorMessage", errorMessage);
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
