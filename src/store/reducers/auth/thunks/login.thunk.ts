import { AppThunk } from '../../../store'
import {
  finishedRequest,
  hideGenericErrorDialog,
  newRequest,
  showGenericErrorDialog,
} from '../../ui/ui.slice'
import API_CLIENT from '../../../../api/client'
import { STORE_TOKEN } from '../../../../api/storage'
import { AxiosError } from 'axios'
import { storeUserToken, updateUserDisplayPic } from '../auth.slice'

type LoginUserDataType = { email: string; password: string }

const logInApi = async (userData: LoginUserDataType) => {
  const { email, password } = userData
  return await API_CLIENT.post('users/login', { email, password })
}

export function LogIn(userData: LoginUserDataType, navigate: any): AppThunk {
  return async (dispatch) => {
    try {
      dispatch(newRequest())
      dispatch(hideGenericErrorDialog())

      const response = await logInApi(userData)
      // console.log('response ===>> ', response)
      if (response && response.data) {
        dispatch(storeUserToken(response.data.token))
        dispatch(updateUserDisplayPic(response.data.data));
        STORE_TOKEN(response.data.token)
        navigate()
      } else if (!response || !response.data) {
        dispatch(finishedRequest())
        return showGenericErrorDialog(`An error occured logging in.`)
      }
      dispatch(finishedRequest())
    } catch (error) {
      const err = error as AxiosError
      const errorMessage =
        (err.response?.data as string) ??
        'An error occured trying to log you in.'
      dispatch(showGenericErrorDialog(errorMessage))
      dispatch(finishedRequest())
    }
  }
}
