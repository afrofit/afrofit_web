import { Box, Grid, Stack, Typography } from "@mui/material";

import RankImage from "../../../assets/img/ranks/field_marshall.png";

import { Card } from "../../../components/Card/Card";
import { StyledImage } from "../../../components/StyledImage/StyledImage";
import { COLORS } from "../../../constants/colors";
import { CardTitle } from "./font.styled";

interface Props {
  rank: string;
}

export const RankCard: React.FC<Props> = ({ rank }) => {
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
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            width="100%"
            height="100%"
            sx={{ marginTop: 2 }}
          >
            <StyledImage src={RankImage} size={150} mr={5} ml={2} />
            <Typography
              sx={{
                color: COLORS.gold,
                fontSize: 35,
                fontWeight: 300,
                lineHeight: 1.2,
                width: "70%",
              }}
            >
              {rank}
            </Typography>
          </Box>
        </Box>
      </Card>
    </Grid>
  );
};
