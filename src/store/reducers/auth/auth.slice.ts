import { UserModel } from "./../../../types/UserModel";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";

export interface AuthState {
  currentUser?: UserModel;
  token: string | null;
}

const initialState: AuthState = {
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    storeUser(state, action: PayloadAction<UserModel | undefined>) {
      state.currentUser = action.payload;
    },
    storeUserToken(state, action: PayloadAction<string>) {
      state.token = action.payload;
    },
    updateUserDisplayPic(state, action: PayloadAction<number>) {
      if (state.currentUser) {
        state.currentUser = {
          ...state.currentUser,
          displayPicId: action.payload,
        };
      }
    },
    logout() {
      return initialState;
    },
  },
});

export const { storeUser, storeUserToken, updateUserDisplayPic, logout } =
  authSlice.actions;

export const selectUserIsLoggedIn = (state: RootState) =>
  !!state.auth.currentUser;
export const selectUser = (state: RootState) => state.auth.currentUser;
export const selectUserToken = (state: RootState) => state.auth.token;

export default authSlice.reducer;
