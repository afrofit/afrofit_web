import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../store'

export interface UIState {
  requestsLoading: number
  showGenericErrorDialog: string
  successMessageDialog: string
  isSubmitting: boolean
  loaderMessage: string
  actionCompleted: boolean
}

const initialState: UIState = {
  requestsLoading: 0,
  showGenericErrorDialog: '',
  successMessageDialog: '',
  isSubmitting: false,
  loaderMessage: 'Loading...',
  actionCompleted: false,
}

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    newRequest(state) {
      state.requestsLoading = state.requestsLoading + 1
    },
    finishedRequest(state) {
      state.requestsLoading = state.requestsLoading - 1
    },
    showGenericErrorDialog(state, action: PayloadAction<string>) {
      state.showGenericErrorDialog = action.payload
    },
    showGenericSuccessDialog(state, action: PayloadAction<string>) {
      state.successMessageDialog = action.payload
    },

    setLoaderMessage(state, action: PayloadAction<string>) {
      state.loaderMessage = action.payload
    },
    unsetLoaderMessage(state) {
      state.loaderMessage = ''
    },

    hideGenericErrorDialog(state) {
      state.showGenericErrorDialog = ''
    },
    hideGenericSuccessDialog(state) {
      state.successMessageDialog = ''
    },
    setIsSubmitting(state, action: PayloadAction<boolean>) {
      state.isSubmitting = action.payload
    },
    triggerActionCompleted(state, action: PayloadAction<boolean>) {
      state.actionCompleted = action.payload
    },
  },
})

export const {
  newRequest,
  finishedRequest,
  showGenericErrorDialog,
  hideGenericErrorDialog,
  setIsSubmitting,
  setLoaderMessage,
  unsetLoaderMessage,
  triggerActionCompleted,
  showGenericSuccessDialog,
  hideGenericSuccessDialog,
} = uiSlice.actions

export const selectUiIsLoading = (state: RootState) =>
  state.ui.requestsLoading > 0

export const selectShowGenericErrorDialog = (state: RootState) =>
  state.ui.showGenericErrorDialog

export const selectLoaderMessage = (state: RootState) => state.ui.loaderMessage

export const selectIsSubmitting = (state: RootState) => state.ui.isSubmitting

export const selectedActionCompleted = (state: RootState) =>
  state.ui.actionCompleted
export const selectedShowSuccessMessage = (state: RootState) =>
  state.ui.successMessageDialog
export default uiSlice.reducer
