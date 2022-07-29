import { Grid, Typography } from "@mui/material";
import { Card } from "../../../components/Card/Card";
import { COLORS } from "../../../constants/colors";

export const StatsCard = () => {
  return (
    <Grid item xs={3}>
      <Card height={100} padding={6}>
        <Typography sx={{ color: COLORS.white, fontSize: 25, fontWeight: 300 }}>
          Field Marshall
        </Typography>
      </Card>
    </Grid>
  );
};
