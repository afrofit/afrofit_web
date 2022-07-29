import { Box, Grid, Stack, Typography } from "@mui/material";
import { PageLayout } from "../../components/layout/PageLayout/PageLayout";

import { StyledAvatar } from "../../components/StyledAvatar/StyledAvatar";
import { StyledFont } from "../../components/StyledFont/StyledFont";
import { Card } from "../../components/Card/Card";
import { COLORS } from "../../constants/colors";
import { StyledRank } from "../../components/StyledRank/StyledRank";
import { StatsCard } from "./components/StatsCard";
import { IdentCard } from "./components/IdentCard";
import { RankCard } from "./components/RankCard";

interface Props {}

const ProfilePage: React.FC<Props> = () => {
  return (
    <PageLayout title="Your Profile">
      <Grid container spacing={2} display="flex" alignItems={"stretch"} mb={5}>
        <IdentCard />
        <RankCard />
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
      <Grid container spacing={2} display="flex" alignItems={"stretch"}>
        <StatsCard />
        <StatsCard />
        <StatsCard />
        <StatsCard />
      </Grid>
    </PageLayout>
  );
};

export default ProfilePage;
