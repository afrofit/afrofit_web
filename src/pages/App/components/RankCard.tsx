import { Box, Grid, Stack, Typography } from "@mui/material";

import RankImage from "../../../assets/img/ranks/field_marshall.png";

import { Card } from "../../../components/Card/Card";
import { StyledImage } from "../../../components/StyledImage/StyledImage";
import { COLORS } from "../../../constants/colors";
import { CardTitle } from "./font.styled";

export const RankCard = () => {
  return (
    <Grid item xs={4}>
      <Card height={100} padding={4} justifyContent="center">
        <Box
          display={"flex"}
          flexDirection="column"
          sx={{ height: "100%", alignItems: "center" }}
        >
          <CardTitle
            sx={{
              color: COLORS.whiteblue,
            }}
          >
            Your Current Rank
          </CardTitle>
          <Stack
            display="flex"
            flexDirection="row"
            alignItems="center"
            justifyContent="center"
            width="100%"
          >
            <StyledImage src={RankImage} size={175} mr={5} ml={2} />
            <Typography
              sx={{
                color: COLORS.gold,
                fontSize: 35,
                fontWeight: 300,
                lineHeight: 1.2,
                width: "70%",
              }}
            >
              Field Marshall
            </Typography>
          </Stack>
        </Box>
      </Card>
    </Grid>
  );
};
