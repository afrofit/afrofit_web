import * as React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { PageLayout } from "../../components/layout/PageLayout/PageLayout";
import { useSelector } from "react-redux";

import { COLORS } from "../../constants/colors";
import { StatsCard } from "./components/StatsCard";
import { IdentCard } from "./components/IdentCard";
import { RankCard } from "./components/RankCard";
import { Card } from "../../components/Card/Card";
import { SubscriptionCard } from "./components/SubscriptionCard";
import { selectCurrentUserProfile } from "../../store/reducers/auth/auth.slice";
import { NotificationBackdrop } from "../../components/elements/NotificationBackdrop";

interface Props {}

const ProfilePage: React.FC<Props> = () => {
  const user = useSelector(selectCurrentUserProfile);
  const [showNotification, setShowNotification] = React.useState(false);

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
          <StatsCard title="Calories Burned" value="101.1k" />
          <StatsCard title="Minutes Danced" value="101.2k" />
          <StatsCard title="Days Active" value="12" />
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
