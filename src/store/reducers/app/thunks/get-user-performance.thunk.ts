import { doc, getDoc } from "firebase/firestore";
import { auth, db, storage } from "../../../../config/firebase";

import { AppThunk } from "../../../store";
import {
  finishedRequest,
  hideGenericErrorDialog,
  newRequest,
  showGenericErrorDialog,
} from "../../ui/ui.slice";
import { setUserPerformance } from "../performance.slice";

export function GetUserPerformance(userId: string): AppThunk {
  return (dispatch) => {
    dispatch(newRequest());
    dispatch(hideGenericErrorDialog());
    console.log("Let's fetch your data!");

    const userDocRef = doc(db, "performances", userId);

    getDoc(userDocRef)
      .then((docSnapshot) => {
        if (docSnapshot.exists()) {
          console.log("UserPerfData", docSnapshot.data());
          const { total_user_time, total_user_steps, calories_burned } =
            docSnapshot.data();

          dispatch(
            setUserPerformance({
              danceMoves: total_user_steps,
              minutesDanced: total_user_time,
              caloriesBurned: calories_burned,
            })
          );
        }
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
