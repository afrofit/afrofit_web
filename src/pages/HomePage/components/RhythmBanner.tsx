import { Box, Typography } from "@mui/material";
import hero from "../../../assets/img/model_male.png";
import { LargeLinkButton } from "../../../components/elements/LargeLinkButton/LargeLinkButton";
import { COLORS } from "../../../constants/colors";
import { CHAMFER } from "../../../constants/globals";

export const RhythmBanner = () => {
  return (
    <Box
      sx={{
        height: 400,
        borderRadius: CHAMFER,
        width: "100%",
        backgroundImage: `linear-gradient(45deg, ${COLORS.hilite_purpink}, ${COLORS.orange_200})`,
        marginBottom: 2,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        justifyContent: "center",
        position: "relative",
        padding: 10,
        boxShadow: `box-shadow: 1px 1px 15px -3px ${COLORS.black}`,
      }}
    >
      <Typography
        sx={{
          fontSize: 100,
          fontWeight: 500,
          letterSpacing: 0.1,
          width: "70%",
          lineHeight: 1,
          color: COLORS.white,
          textAlign: "right",
          backgroundColor: COLORS.pink_100,
          padding: "10px 30px",
          borderRadius: 2,
        }}
      >
        Find your rhythm.
      </Typography>
      <LargeLinkButton
        color="purple_200"
        textcolor="fuschia"
        title="join the club now"
        route="/join-us"
      />
      <Box
        sx={{
          padding: 0,
          position: "absolute",
          left: 0,
          top: -150,
        }}
      >
        <img src={hero} alt="a black animated girl" height="1200px" />
      </Box>
    </Box>
  );
};
