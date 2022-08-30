import API_CLIENT from "../../../../api/client";

import {
  finishedRequest,
  hideGenericErrorDialog,
  newRequest,
  showGenericErrorDialog,
} from "../../ui/ui.slice";
import { AxiosError } from "axios";
import { AppThunk } from "../../../store";
import { setUserPerformance } from "../performance.slice";

const fetchUserPerformanceApi = async (userId: string) => {
  return await API_CLIENT.get(`performance/overall/${userId}`);
};

export function GetUserPerformanceData(userId: string): AppThunk {
  return async (dispatch) => {
    try {
      dispatch(newRequest());
      dispatch(hideGenericErrorDialog());

      const response = await fetchUserPerformanceApi(userId);
      if (response && response.data) {
        const { totalUserSteps, totalUserTime, caloriesBurned } =
          response.data.performance;

        dispatch(
          setUserPerformance({
            danceMoves: totalUserSteps,
            minutesDanced: totalUserTime,
            caloriesBurned: caloriesBurned,
          })
        );
      } else {
        dispatch(finishedRequest());
        return showGenericErrorDialog(
          `An error occured fetching your performance data.`
        );
      }
      dispatch(finishedRequest());
    } catch (error: any) {
      const err = error as AxiosError;
      const errorMessage =
        (err.response?.data as string) ??
        "An error occured trying to retrieve your performance data.";
      dispatch(showGenericErrorDialog(errorMessage));
      dispatch(finishedRequest());
    }
  };
}
