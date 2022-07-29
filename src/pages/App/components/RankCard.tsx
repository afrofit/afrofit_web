import { Grid, Typography } from "@mui/material";

import RankImage from "../../../assets/img/ranks/field_marshall.png";

import { Card } from "../../../components/Card/Card";
import { StyledRank } from "../../../components/StyledRank/StyledRank";
import { COLORS } from "../../../constants/colors";

export const RankCard = () => {
  return (
    <Grid item xs={4}>
      <Card height={100} padding={6}>
        <Typography sx={{ color: COLORS.white, fontSize: 25, fontWeight: 300 }}>
          Your Current Rank
        </Typography>
        <StyledRank src={RankImage} size={150} mb={0} mr={6} />
        <Typography sx={{ color: COLORS.white, fontSize: 25, fontWeight: 300 }}>
          Field Marshall
        </Typography>
      </Card>
    </Grid>
  );
};
