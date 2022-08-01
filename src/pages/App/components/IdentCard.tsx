import { Grid, Stack, Typography } from "@mui/material";
import { Card } from "../../../components/Card/Card";
import { StyledAvatar } from "../../../components/StyledAvatar/StyledAvatar";
import { COLORS } from "../../../constants/colors";
import AppLogo from "../../../assets/img/dp.jpg";

export const IdentCard = () => {
  return (
    <Grid item xs={8}>
      <Card
        height={300}
        padding={6}
        justifyContent="center"
        alignItems="center"
      >
        <StyledAvatar src={AppLogo} size={250} mb={0} mr={6} />
        <Stack
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
            flex: 1,
            color: COLORS.white,
          }}
        >
          <Typography
            sx={{
              fontSize: 45,
              fontWeight: 400,
              color: COLORS.orange_200,
              marginBottom: -1,
            }}
          >
            Olasupo Odebiyi
          </Typography>
          <Typography
            sx={{
              fontSize: 25,
              fontWeight: 300,
              color: COLORS.orange_100,
              marginBottom: 2,
            }}
          >
            @olasupoodebiyi
          </Typography>
          <Typography sx={{ fontSize: 20, fontWeight: 400, marginBottom: 1 }}>
            olasupoodebiyi@yahoo.com
          </Typography>
          <Typography
            sx={{
              fontSize: 15,
              fontWeight: 500,
              letterSpacing: 3,
              color: COLORS.whiteblue,
              textTransform: "uppercase",
            }}
          >
            Member since 24th June 2021
          </Typography>
        </Stack>
      </Card>
    </Grid>
  );
};
