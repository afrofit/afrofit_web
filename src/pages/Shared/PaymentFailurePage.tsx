import { Box, Stack, Typography } from "@mui/material";
import * as React from "react";
import Lottie from "react-lottie";
import * as Animation from "../../assets/animations/not-found.json";
import { LinkButton } from "../../components/Buttons/LinkButton";
import { COLORS } from "../../constants/colors";

const PaymentFailurePage: React.FC = () => {
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
        Aww no! You've cancelled the subscription process!
      </Typography>
      <Typography
        sx={{
          fontSize: 18,
          color: COLORS.whiteblue,
          textAlign: "center",
        }}
      >
        Click the button below to go to your profile page. There, you can
        restart process.
      </Typography>
      <Lottie options={defaultOptions} height={400} width={400} />
      <Stack
        display={"flex"}
        flexDirection="row"
        width="100%"
        alignItems="center"
        justifyContent="center"
        columnGap={3}
        mb={5}
      >
        <LinkButton
          color="pink_200"
          textcolor="fuschia"
          title="Go back to your profile screen"
          route="/"
        />
      </Stack>
    </Box>
  );
};

export default PaymentFailurePage;
