import { UserModel } from './../../../types/UserModel'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../store'
import { StripeSessionDataType } from '../../../types/StripeSessionDataType'

export interface AuthState {
  currentUser?: UserModel
  token: string | null
  stripeSession?: StripeSessionDataType
  isSubscribed: boolean
  endDate: any
}

const initialState: AuthState = {
  token: null,
  isSubscribed: false,
  endDate: null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    storeUser(state, action: PayloadAction<UserModel | undefined>) {
      state.currentUser = action.payload
    },
    storeUserToken(state, action: PayloadAction<string>) {
      state.token = action.payload
    },
    storeUserStripeSession(
      state,
      action: PayloadAction<StripeSessionDataType>,
    ) {
      state.stripeSession = action.payload
    },
    clearUserStripeSession(state) {
      state.stripeSession = undefined
    },
    setIsSubscribed(state, action: PayloadAction<any>) {
      state.isSubscribed = action.payload.isSubscribed
      state.endDate = action.payload.endDate
    },
    updateUserDisplayPic(state, action: PayloadAction<any>) {
      if (state.currentUser) {
        state.currentUser = {
          ...state.currentUser,
         ...action.payload,
        }
      }
    },
    logout() {
      return initialState
    },
  },
})

export const {
  storeUser,
  storeUserToken,
  updateUserDisplayPic,
  storeUserStripeSession,
  clearUserStripeSession,
  setIsSubscribed,
  logout,
} = authSlice.actions

export const selectUserIsLoggedIn = (state: RootState) =>
  !!state.auth.currentUser
export const selectUserIsSubscribed = (state: RootState) =>
  state.auth.isSubscribed
export const selectUser = (state: RootState) => state.auth.currentUser
export const selectUserToken = (state: RootState) => state.auth.token
export const selectUserStripeSession = (state: RootState) =>
  state.auth.stripeSession
export const endSubcribtionDate = (state: RootState) => state.auth.endDate
export default authSlice.reducer
