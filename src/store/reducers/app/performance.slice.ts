import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";

export type PerformanceType = {
  danceMoves: number;
  minutesDanced: number;
  caloriesBurned: number;
};

export type TodaysActivityType = {
  caloriesBurned: number;
  bodyMovements: number;
};

export interface PerformanceState {
  performance: PerformanceType | null;
  todaysActivity: TodaysActivityType | null;
}

const initialState: PerformanceState = {
  performance: null,
  todaysActivity: null,
};

const performanceSlice = createSlice({
  name: "performance",
  initialState,
  reducers: {
    setUserPerformance(state, action: PayloadAction<PerformanceType>) {
      const { danceMoves, minutesDanced, caloriesBurned } = action.payload;
      state.performance = { danceMoves, minutesDanced, caloriesBurned };
    },
    setUserTodaysActivity(state, action: PayloadAction<TodaysActivityType>) {
      const { bodyMovements, caloriesBurned } = action.payload;
      state.todaysActivity = { bodyMovements, caloriesBurned };
    },

    unsetUserPerformance() {
      return initialState;
    },
  },
});

export const { setUserPerformance, unsetUserPerformance } =
  performanceSlice.actions;

export const selectUserPerformance = (state: RootState) =>
  state.performance.performance;

export const selectUserTodaysActivity = (state: RootState) =>
  state.performance.todaysActivity;

export default performanceSlice.reducer;
