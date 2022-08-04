import * as React from "react";
import { loadStripe, Stripe } from "@stripe/stripe-js";
import { Box, Grid, Typography } from "@mui/material";
import { PageLayout } from "../../components/layout/PageLayout/PageLayout";
import { useDispatch, useSelector } from "react-redux";

import { COLORS } from "../../constants/colors";
import { StatsCard } from "./components/StatsCard";
import { IdentCard } from "./components/IdentCard";
import { RankCard } from "./components/RankCard";
import { Card } from "../../components/Card/Card";
import { SubscriptionCard } from "./components/SubscriptionCard";
import { NotificationBackdrop } from "../../components/elements/NotificationBackdrop";
import { selectUserPerformance } from "../../store/reducers/app/performance.slice";
import { SmallButton } from "../../components/Buttons/SmallButton";
import { useNavigate } from "react-router-dom";
import {
  STRIPE_PUBLISHABLE_KEY,
  SUBSCRIPTION_PRODUCT_1,
} from "../../constants.config";

import { selectUser } from "../../store/reducers/auth/auth.slice";
import { GetUserPerformanceData } from "../../store/reducers/app/thunks/get-user-performance.thunk";
import { formatDate } from "../../utils/formatters";
import { DisplayPicturePicker } from "../../components/elements/DisplayPicturePicker";
import { finishedRequest, newRequest } from "../../store/reducers/ui/ui.slice";
import { UpdateUserDp } from "../../store/reducers/auth/thunks/update-user-dp.thunk";

interface Props {}

const ProfilePage: React.FC<Props> = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const currentUser = useSelector(selectUser);
  const userPerformance = useSelector(selectUserPerformance);
  const [showNotification, setShowNotification] = React.useState(false);
  const [showDpPicker, setShowDpPicker] = React.useState(false);
  const [selectedDp, setSelectedDp] = React.useState(
    currentUser?.displayPicId ?? 1
  );

  React.useEffect(() => {
    console.log("currentUser", currentUser);
  }, [currentUser]);

  React.useEffect(() => {
    currentUser && dispatch(GetUserPerformanceData(currentUser.userId));
  }, [currentUser, dispatch]);

  React.useEffect(() => {
    console.log("userPerformance", userPerformance);
  }, [userPerformance]);

  /*
  let stripePromise: Promise<Stripe | null>;

  const getStripe = () => {
    if (!stripePromise) {
      stripePromise = loadStripe(STRIPE_PUBLISHABLE_KEY);
    }
    return stripePromise;
  };


  React.useEffect(() => {
    console.log("userPerformance", userPerformance);
  }, [userPerformance]);

  const handleCreateCheckoutSession = () => {
    const response = httpsCallable(functions, "createStripeCheckout");

    console.log("response", response);
    // const sessionId = response.data.id;
    // stripe.redirectToCheckout({ sessionId });
    redirectToCheckout();
  };

  const redirectToCheckout = async () => {
    const stripe = await getStripe();
    if (stripe && user) {
      const result = stripe.redirectToCheckout({
        lineItems: [{ price: SUBSCRIPTION_PRODUCT_1, quantity: 1 }],
        customerEmail: user?.email,
        successUrl: "http://localhost:3001/success",
        cancelUrl: "http://localhost:3001/failure",
        mode: "subscription",
      });

      console.log("result", result);
    }
  };
  */

  const handleSelectDp = (dpId: number) => {
    setSelectedDp(dpId);
    currentUser && dispatch(UpdateUserDp(currentUser.userId, dpId));
    setShowDpPicker(false);
    dispatch(newRequest());
    setTimeout(() => {
      dispatch(finishedRequest());
    }, 200);
  };

  return (
    <>
      <DisplayPicturePicker
        onSelectDp={handleSelectDp}
        onClose={() => setShowDpPicker(false)}
        open={showDpPicker}
        selectedDp={selectedDp}
      />
      <NotificationBackdrop
        open={showNotification}
        onClose={() => setShowNotification(false)}
      />
      <PageLayout
        title="Your Profile"
        showButton={true}
        buttonComponent={
          <SmallButton
            title="Buy Subscription Now"
            onClick={() => "handleCreateCheckoutSession"}
            color="orange_200"
          />
        }
      >
        <Grid
          container
          spacing={2}
          display="flex"
          alignItems={"stretch"}
          mb={5}
        >
          <IdentCard
            currentUser={currentUser}
            onChangeDp={() => setShowDpPicker(true)}
          />
          <RankCard rank={1} />
        </Grid>
        <Typography
          sx={{
            color: COLORS.white,
            fontSize: 25,
            fontWeight: 300,
            marginBottom: 3,
          }}
        >
          Your Stats
        </Typography>
        <Grid
          container
          spacing={2}
          display="flex"
          alignItems={"stretch"}
          mb={5}
        >
          <StatsCard
            title="Total Dance Moves"
            value={userPerformance?.danceMoves}
          />
          <StatsCard
            title="Minutes Danced"
            value={userPerformance?.minutesDanced}
          />
          <StatsCard
            title="Calories Burned"
            value={userPerformance?.caloriesBurned}
          />
          <SubscriptionCard
            color="purple_300"
            title="Subscription Status"
            value="Active"
          />
        </Grid>
        <Grid container display="flex" alignItems={"stretch"}>
          <Card justifyContent="center" alignItems="center" color="black">
            <Box
              sx={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
              }}
            >
              <Typography
                sx={{
                  color: COLORS.white,
                  fontSize: 25,
                  fontWeight: 300,
                }}
              >
                {currentUser
                  ? `Your last activity was logged on the ${formatDate(
                      currentUser.joinDate
                    )}`
                  : "We can't tell when you were last active"}
              </Typography>
            </Box>
          </Card>
        </Grid>
      </PageLayout>
    </>
  );
};

export default ProfilePage;
