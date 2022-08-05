import { Box, Stack, Typography } from "@mui/material";
import * as React from "react";
import Lottie from "react-lottie";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import * as Animation from "../../assets/animations/success.json";
import { LinkButton } from "../../components/Buttons/LinkButton";
import { COLORS } from "../../constants/colors";
import {
  selectUser,
  selectUserStripeSession,
} from "../../store/reducers/auth/auth.slice";
import { RetrieveStripeSession } from "../../store/reducers/payments/thunks/retrieve-stripe-session.thunk";

const PaymentSuccessPage: React.FC = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get("id");

  const currentUser = useSelector(selectUser);
  const currentStripeSession = useSelector(selectUserStripeSession);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Animation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleFetchStripeSession = React.useCallback(() => {
    if (sessionId && currentUser) {
      dispatch(RetrieveStripeSession(currentUser.userId, sessionId));
    }
  }, [dispatch, sessionId, currentUser]);

  React.useEffect(() => {
    handleFetchStripeSession();
  }, [handleFetchStripeSession]);

  React.useEffect(() => {
    console.log("currentStripeSession", currentStripeSession);
  }, [currentStripeSession]);

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
        {!currentStripeSession
          ? "Loading content..."
          : "Success! You're all subscribed to the Afrofit! club"}
      </Typography>
      <Typography
        sx={{
          fontSize: 18,
          color: COLORS.whiteblue,
          textAlign: "center",
        }}
      >
        {!currentStripeSession
          ? "Loading content..."
          : `You will be charged monthly £${
              currentStripeSession.totalAmount / 100
            } Pound sterling monthly until you decide to cancel. Terms and conditions apply.`}
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
