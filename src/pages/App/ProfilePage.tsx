import * as React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { PageLayout } from "../../components/layout/PageLayout/PageLayout";
import { useDispatch, useSelector } from "react-redux";

import { COLORS } from "../../constants/colors";
import { StatsCard } from "./components/StatsCard";
import { IdentCard } from "./components/IdentCard";
import { RankCard } from "./components/RankCard";
import { Card } from "../../components/Card/Card";
import { SubscriptionCard } from "./components/SubscriptionCard";
import { selectCurrentUserProfile } from "../../store/reducers/auth/auth.slice";
import { NotificationBackdrop } from "../../components/elements/NotificationBackdrop";
import { GetUserPerformance } from "../../store/reducers/app/thunks/get-user-performance.thunk";
import { selectUserPerformance } from "../../store/reducers/app/performance.slice";

interface Props {}

const ProfilePage: React.FC<Props> = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectCurrentUserProfile);
  const userPerformance = useSelector(selectUserPerformance);
  const [showNotification, setShowNotification] = React.useState(false);

  React.useEffect(() => {
    user && dispatch(GetUserPerformance(user.user_id));
  }, [user, dispatch]);

  React.useEffect(() => {
    console.log("userPerformance", userPerformance);
  }, [userPerformance]);

  return (
    <>
      <NotificationBackdrop
        open={showNotification}
        onClose={() => setShowNotification(false)}
      />
      <PageLayout title="Your Profile">
        <Grid
          container
          spacing={2}
          display="flex"
          alignItems={"stretch"}
          mb={5}
        >
          <IdentCard />
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
                {user
                  ? `Your last activity was logged on the ${user.last_active}`
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
