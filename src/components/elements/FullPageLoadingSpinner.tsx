import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { COLORS } from "../../constants/colors";

interface Props {
  isLoading: boolean;
}

export const FullPageLoadingSpinner: React.FC<Props> = ({ isLoading }) => {
  return (
    <Backdrop
      sx={{ color: COLORS.white, zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={isLoading}
    >
      <CircularProgress color="secondary" />
    </Backdrop>
  );
};
