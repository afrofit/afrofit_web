import { Box, Typography } from "@mui/material";
import * as React from "react";
import { COLORS } from "../../../constants/colors";
import Lottie from "react-lottie";
import * as Animation from "../../../assets/animations/not-found.json";

const NotFoundPage: React.FC = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Animation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Box sx={{ padding: 10 }}>
      <Lottie options={defaultOptions} height={400} width={400} />
      <Typography
        sx={{
          fontSize: 30,
          color: COLORS.hilite_purpink,
          textAlign: "center",
          marginBottom: 20,
        }}
      >
        Oops! That page doesn't exist.
      </Typography>
    </Box>
  );
};

export default NotFoundPage;
