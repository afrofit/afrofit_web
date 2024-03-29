import * as React from "react";

import { Alert, Box, Grid, Stack, Typography } from "@mui/material";
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
  endSubcribtionDate,
  selectUser,
  selectUserIsSubscribed,
} from "../../store/reducers/auth/auth.slice";
import { GetUserPerformanceData } from "../../store/reducers/app/thunks/get-user-performance.thunk";
import { formatDate } from "../../utils/formatters";
import { DisplayPicturePicker } from "../../components/elements/DisplayPicturePicker";
import { finishedRequest, newRequest } from "../../store/reducers/ui/ui.slice";
import { UpdateUserDp } from "../../store/reducers/auth/thunks/update-user-dp.thunk";
import { RetrieveUserSubscription } from "../../store/reducers/payments/thunks/retrieve-user-subscription.thunk";
import { CancelUserSubscription } from "../../store/reducers/payments/thunks/cancel-user-subscription.thunk";

interface Props {}

const ProfilePage: React.FC<Props> = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const currentUser = useSelector(selectUser);
  const userPerformance = useSelector(selectUserPerformance);
  const isSubscribed = useSelector(selectUserIsSubscribed);
  const endDate = useSelector(endSubcribtionDate);
  const [image, setImage] = React.useState("");

  const [showNotification, setShowNotification] = React.useState(false);
  const [showDpPicker, setShowDpPicker] = React.useState(false);
  const [selectedDp, setSelectedDp] = React.useState(
    currentUser?.displayPicId ?? 1
  );

  const handleNavigate = () => {
    navigate("/plan");
  };

  const handleRetrieveUserSubscriptionInfo = React.useCallback(() => {
    currentUser && dispatch(RetrieveUserSubscription(currentUser.userId));
  }, [currentUser, dispatch]);

  React.useEffect(() => {
    currentUser && dispatch(GetUserPerformanceData(currentUser.userId));
  }, [currentUser, dispatch]);

  React.useEffect(() => {
    currentUser && handleRetrieveUserSubscriptionInfo();
  }, [currentUser, handleRetrieveUserSubscriptionInfo]);

  React.useEffect(() => {}, [userPerformance]);

  const handleSelectDp = (dpId: any, type: boolean) => {
    let formData = new FormData();
    if (type) {
      setImage(dpId);
      setShowDpPicker(false);
      formData.append("image", dpId);
    } else {
      formData.append("displayPicId", dpId as any);
      setSelectedDp(dpId);
      setShowDpPicker(false);
    }

    currentUser && dispatch(UpdateUserDp(currentUser.userId, formData));
    setShowDpPicker(false);
    dispatch(newRequest());
    setTimeout(() => {
      dispatch(finishedRequest());
    }, 200);
  };

  const handleCancelSubscription = () => {
    if (currentUser) {
      return dispatch(CancelUserSubscription(currentUser.userId));
    }
  };

  if (!userPerformance) return null;

  return (
    <>
      <DisplayPicturePicker
        onSelectDp={handleSelectDp}
        onClose={() => setShowDpPicker(false)}
        open={showDpPicker}
        selectedDp={selectedDp}
        setImage={""}
        setImage1={""}
      />

      <NotificationBackdrop
        open={showNotification}
        onClose={() => setShowNotification(false)}
      />
      <PageLayout
        title="Your Profile"
        showButton={true}
        buttonComponent={
          <Stack
            display={"flex"}
            flexDirection="row"
            columnGap={2}
            alignItems="center"
          >
            {!isSubscribed ? (
              <SmallButton
                title={"Start Free Trial"}
                onClick={handleNavigate}
                color="purple_200"
              />
            ) : (
              <SmallButton
                title={"Cancel Subscription"}
                onClick={handleCancelSubscription}
                color="dark_400"
              />
            )}
          </Stack>
        }
      >
        <Grid
          container
          spacing={2}
          alignItems={"stretch"}
          mb={5}
          sx={{
            display: { xs: "flex", md: "flex" },
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          <IdentCard
            currentUser={currentUser}
            onChangeDp={() => setShowDpPicker(true)}
          />
          <RankCard rank={1} />
        </Grid>
        {isSubscribed && (
          <div
            style={{
              paddingBottom: "20px",
            }}
          >
            <Alert
              variant="filled"
              severity="success"
              style={{ width: "100%", justifyContent: "center" }}
            >
              " To begin visit the AFROFIT APP on your device now and log in
              with your user name and password"
            </Alert>
          </div>
        )}
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
          sx={{
            display: { xs: "flex", md: "flex" },
            flexWrap: "wrap",
          }}
          alignItems={"stretch"}
          mb={5}
        >
          <StatsCard
            title="Total Dance Moves"
            value={userPerformance?.danceMoves}
          />
          <StatsCard
            title="Minutes Danced"
            value={userPerformance.minutesDanced / 1000 / 60}
          />
          <StatsCard
            title="Calories Burned"
            value={userPerformance?.caloriesBurned}
          />
          <SubscriptionCard
            color="purple_300"
            title="Subscription Status"
            value={isSubscribed}
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
                  textAlign: "center",
                }}
              >
                {currentUser
                  ? `Your Are logged in ${formatDate(currentUser.joinDate)}`
                  : "We can't tell when you were last active"}
              </Typography>
            </Box>
          </Card>
          {Boolean(endDate) ? (
            <Card justifyContent="center" alignItems="center" color="black">
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "50%",
                }}
              >
                <Typography
                  sx={{
                    color: COLORS.white,
                    fontSize: 25,
                    fontWeight: 300,
                    textAlign: "center",
                  }}
                >
                  {currentUser
                    ? `Your subscription Will be ended  ${
                        endDate ? formatDate(endDate) : "-"
                      }`
                    : "We can't tell when you were last active"}
                </Typography>
              </Box>
            </Card>
          ) : null}
        </Grid>
      </PageLayout>
    </>
  );
};

export default ProfilePage;
