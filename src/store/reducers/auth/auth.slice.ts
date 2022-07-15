import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserProfileModel } from "../../../models/UserProfile.model";
import { RootState } from "../../store";

export interface AuthState {
	currentUser: any;
	currentUserProfile: UserProfileModel | null;
}

const initialState: AuthState = {
	currentUser: null,
	currentUserProfile: null,
};

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		setCurrentUser(state, action: PayloadAction<any>) {
			state.currentUser = action.payload;
		},
		setCurrentUserProfile(state, action: PayloadAction<UserProfileModel>) {
			state.currentUserProfile = action.payload;
		},

		unsetCurrentUser(state) {
			return initialState;
		},
	},
});

export const { setCurrentUser, setCurrentUserProfile, unsetCurrentUser } =
	authSlice.actions;

export const selectCurrentUser = (state: RootState) => state.auth.currentUser;
export const selectCurrentUserProfile = (state: RootState) =>
	state.auth.currentUserProfile;

export default authSlice.reducer;
