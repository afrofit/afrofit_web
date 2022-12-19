import { AppThunk } from '../../../store'
import { AxiosError } from 'axios'

import {
  finishedRequest,
  hideGenericErrorDialog,
  newRequest,
  showGenericErrorDialog,
} from '../../ui/ui.slice'
import API_CLIENT from '../../../../api/client'
import { setIsSubscribed } from '../../auth/auth.slice'

const retrieveUserSubscription = async (userId: string) => {
  return await API_CLIENT.post(`payments/retrieve-user-subscription/${userId}`)
}

export function RetrieveUserSubscription(userId: string): AppThunk {
  return async (dispatch) => {
    try {
      dispatch(newRequest())
      dispatch(hideGenericErrorDialog())

      const response = await retrieveUserSubscription(userId)

      if (response && response.data) {
        const { activesSubscription, endDate } = response.data
        dispatch(
          setIsSubscribed({
            isSubscribed: activesSubscription,
            endDate: endDate,
          }),
        )
      } else {
      }

      dispatch(finishedRequest())
    } catch (error) {
      const err = error as AxiosError
      const errorMessage =
        (err.response?.data as string) ??
        'An error occured trying to retrieve your subscription.'
      dispatch(showGenericErrorDialog(errorMessage))
      dispatch(finishedRequest())
    }
  }
}
