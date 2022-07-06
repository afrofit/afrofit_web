import { Box, Typography } from "@mui/material";
import { COLORS } from "../../../constants/colors";
import { CHAMFER } from "../../../constants/globals";
import herofemale2 from "../../../assets/img/model_female2.png";

export const TopBanner = () => {
  return (
    <Box
      sx={{
        height: 200,
        borderRadius: CHAMFER,
        width: "100%",
        backgroundColor: COLORS.dark_300,
        marginBottom: 2,
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        position: "relative",
        padding: 10,
        boxShadow: `box-shadow: 1px 1px 15px -3px ${COLORS.black}`,
        border: `1px solid ${COLORS.dark_200}`,
      }}
    >
      <Box
        sx={{
          padding: 0,
          position: "absolute",
          right: 100,
          top: -30,
        }}
      >
        <img src={herofemale2} alt="a black animated girl" height="400px" />
      </Box>
      <Typography
        sx={{
          fontSize: 60,
          fontWeight: 400,
          letterSpacing: 1,
          width: "70%",
          lineHeight: 1.2,
          color: COLORS.white,
          textAlign: "left",
          // backgroundColor: COLORS.pink_100,
          backgroundImage: `linear-gradient(45deg, ${COLORS.whiteblue}, ${COLORS.orange_100})`,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          borderRadius: 2,
        }}
      >
        We are the <em>coolest</em> <strong>dance fitness</strong> club in town.
      </Typography>
    </Box>
  );
};
