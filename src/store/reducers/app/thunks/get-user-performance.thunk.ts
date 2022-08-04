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

const fetchUserTodaysActivityApi = async (userId: string) => {
  return await API_CLIENT.get(`performance/overall/${userId}`);
};

export function GetUserPerformanceData(userId: string): AppThunk {
  return async (dispatch) => {
    try {
      dispatch(newRequest());
      dispatch(hideGenericErrorDialog());

      const response = await fetchUserPerformanceApi(userId);
      console.log("Responses from getUserPerformanceThunk", response);
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
      console.log("Error!", error.response.data);
      const err = error as AxiosError;
      dispatch(showGenericErrorDialog(` ${err.response?.data as string}`));
      dispatch(finishedRequest());
    }
  };
}

export function GetUserTodaysActivityData(userId: string): AppThunk {
  return async (dispatch) => {
    try {
      dispatch(newRequest());
      dispatch(hideGenericErrorDialog());

      const response = await fetchUserTodaysActivityApi(userId);
      console.log("Responses from getUserPerformanceThunk", response);
      if (response && response.data) {
        // dispatch(storeUserToken(response.data.token));
        // STORE_TOKEN(response.data.token);
        // dispatch(
        //     setUserPerformance({
        //       danceMoves: totalUserSteps,
        //       minutesDanced: totalUserTime,
        //       caloriesBurned: caloriesBurned,
        //     })
        //   );
      } else {
        dispatch(finishedRequest());
        return showGenericErrorDialog(
          `An error occured fetching your performance data.`
        );
      }
      dispatch(finishedRequest());
    } catch (error: any) {
      console.log("Error!", error.response.data);
      const err = error as AxiosError;
      dispatch(showGenericErrorDialog(` ${err.response?.data as string}`));
      dispatch(finishedRequest());
    }
  };
}
