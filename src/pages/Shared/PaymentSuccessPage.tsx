import { Box, Stack, Typography } from "@mui/material";
import * as React from "react";
import Lottie from "react-lottie";
import { useSearchParams } from "react-router-dom";
import * as Animation from "../../assets/animations/success.json";
import { LinkButton } from "../../components/Buttons/LinkButton";
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

  const [searchParams] = useSearchParams();
  const params = searchParams.get("id");

  console.log("params: ", params);

  return (
    <Box sx={{}}>
      <Box sx={{ margin: 2 }}>
        <Lottie options={defaultOptions} height={200} width={200} />
      </Box>
      <Typography
        sx={{
          fontSize: 30,
          color: COLORS.hilite_purpink,
          textAlign: "center",
          marginBottom: 2,
        }}
      >
        Success! You're all subscribed to Afrofit! club
      </Typography>
      <Typography
        sx={{
          fontSize: 18,
          color: COLORS.whiteblue,
          textAlign: "center",
        }}
      >
        You will be charged monthly £5 Pound sterling monthly until you decide
        to cancel. Terms and conditions apply.
      </Typography>
      <Stack
        display={"flex"}
        flexDirection="row"
        width="100%"
        alignItems="center"
        justifyContent="center"
        columnGap={3}
        mt={10}
      >
        <LinkButton
          color="purple_200"
          textcolor="fuschia"
          title="Continue on to site"
          route="/"
        />
      </Stack>
    </Box>
  );
};

export default PaymentSuccessPage;
