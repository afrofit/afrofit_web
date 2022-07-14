import { Box, Typography } from "@mui/material";
import herofemale from "../../../assets/img/model_female.png";
import { LargeLinkButton } from "../../../components/elements/LargeLinkButton/LargeLinkButton";

import { COLORS } from "../../../constants/colors";
import { CHAMFER } from "../../../constants/globals";

export const FitnessBanner = () => {
  return (
    <Box
      sx={{
        height: 400,
        borderRadius: CHAMFER,
        width: "100%",
        backgroundImage: `linear-gradient(45deg, ${COLORS.purple_300}, ${COLORS.purple_200})`,
        marginBottom: 6,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        position: "relative",
        padding: 10,
        boxShadow: `box-shadow: 1px 1px 15px -3px ${COLORS.black}`,
        // paddingTop: 0,
      }}
    >
      <Typography
        sx={{
          fontSize: 100,
          fontWeight: 500,
          letterSpacing: 0.1,
          width: "70%",
          lineHeight: 1,
          color: COLORS.pink_100,
          backgroundColor: COLORS.purple_200,
          padding: "10px 30px",
          borderRadius: 2,
        }}
      >
        Fuel your fitness.
      </Typography>
      <LargeLinkButton
        color="pink_100"
        textcolor="purple_300"
        title="subscribe to your fitness"
        route="/subscription-benefits"
      />
      <Box sx={{ padding: 0, position: "absolute", right: -50, top: -150 }}>
        <img src={herofemale} alt="a black animated girl" height="1200px" />
      </Box>
    </Box>
  );
};
