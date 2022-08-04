import { Box, Typography } from "@mui/material";
import * as React from "react";
import Lottie from "react-lottie";
import * as Animation from "../../assets/animations/not-found.json";
import { COLORS } from "../../constants/colors";

const PaymentSuccessPage: React.FC = () => {
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
      <Typography
        sx={{
          fontSize: 30,
          color: COLORS.hilite_purpink,
          textAlign: "center",
          marginBottom: 2,
        }}
      >
        Success! You've successfully created a subscription
      </Typography>
      <Typography
        sx={{
          fontSize: 18,
          color: COLORS.whiteblue,
          textAlign: "center",
        }}
      >
        You will be charged monthly until you decide to cancel. Hopefully not!
        Terms and conditions apply.
      </Typography>
      <Lottie options={defaultOptions} height={400} width={400} />
    </Box>
  );
};

export default PaymentSuccessPage;
