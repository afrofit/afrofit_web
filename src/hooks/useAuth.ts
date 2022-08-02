import { UserModel } from "./../models/User.model";
import { onAuthStateChanged } from "firebase/auth";
import * as React from "react";
import { useDispatch } from "react-redux";
import { auth } from "../config/firebase";
import { setCurrentUser } from "../store/reducers/auth/auth.slice";
import { finishedRequest, newRequest } from "../store/reducers/ui/ui.slice";

export const useAuth = () => {
  const dispatch = useDispatch();

  const [pending, setPending] = React.useState(true);

  React.useEffect(() => {
    dispatch(newRequest());
    const subbedUser = onAuthStateChanged(auth, (user) => {
      if (user != null) {
        // There's a user
        dispatch(
          setCurrentUser({
            id: user.uid,
            email: user.email,
          })
        );
        console.log("user", {
          id: user.uid,
          email: user.email,
        });
        setPending(false);
      } else {
        // There's no user
        console.log("There's no user");
        dispatch(setCurrentUser(null));
        // setPending(false);
      }
    });

    dispatch(finishedRequest());
    return subbedUser;
  }, [dispatch]);

  return { pending };
};
