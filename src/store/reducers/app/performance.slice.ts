import { CALORIE_MULTPLIER } from "./../../../utils/formatters";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";

type PerformanceType = {
  danceMoves: number;
  minutesDanced: number;
  caloriesBurned: number;
};

export interface PerformanceState {
  performance: PerformanceType | null;
}

const initialState: PerformanceState = {
  performance: null,
};

const performanceSlice = createSlice({
  name: "performance",
  initialState,
  reducers: {
    setUserPerformance(state, action: PayloadAction<PerformanceType>) {
      const { danceMoves, minutesDanced, caloriesBurned } = action.payload;
      state.performance = { danceMoves, minutesDanced, caloriesBurned };
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

export default performanceSlice.reducer;
