import { UserModel } from "./../../../types/UserModel";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { StripeSessionDataType } from "../../../types/StripeSessionDataType";

export interface AuthState {
  currentUser?: UserModel;
  token: string | null;
  stripeSession?: StripeSessionDataType;
  isSubscribed: boolean;
}

const initialState: AuthState = {
  token: null,
  isSubscribed: false,
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
    storeUserStripeSession(
      state,
      action: PayloadAction<StripeSessionDataType>
    ) {
      state.stripeSession = action.payload;
    },
    clearUserStripeSession(state) {
      state.stripeSession = undefined;
    },
    setIsSubscribed(state, action: PayloadAction<boolean>) {
      state.isSubscribed = action.payload;
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

export const {
  storeUser,
  storeUserToken,
  updateUserDisplayPic,
  storeUserStripeSession,
  clearUserStripeSession,
  setIsSubscribed,
  logout,
} = authSlice.actions;

export const selectUserIsLoggedIn = (state: RootState) =>
  !!state.auth.currentUser;
export const selectUserIsSubscribed = (state: RootState) =>
  state.auth.isSubscribed;
export const selectUser = (state: RootState) => state.auth.currentUser;
export const selectUserToken = (state: RootState) => state.auth.token;
export const selectUserStripeSession = (state: RootState) =>
  state.auth.stripeSession;

export default authSlice.reducer;
