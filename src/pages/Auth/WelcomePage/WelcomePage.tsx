import { Box, Grid, Stack, Typography } from "@mui/material";
import * as React from "react";
import { LinkButton } from "../../../components/Buttons/LinkButton";
import { COLORS } from "../../../constants/colors";
import { StatsCard } from "../../App/components/StatsCard";
import { WelcomeCard } from "../components/WelcomeCard";

const titleFontStyles: React.CSSProperties = {
  fontSize: 90,
  fontWeight: 900,
  marginBottom: -3,
  color: COLORS.white,
  letterSpacing: 0.2,
  lineHeight: 1.3,
  textAlign: "center",
  backgroundImage: `linear-gradient(45deg, ${COLORS.purple_100}, ${COLORS.orange_200})`,
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  borderRadius: 2,
};

const subtitleFontStyles: React.CSSProperties = {
  fontSize: 45,
  fontWeight: 400,
  textAlign: "center",
  color: COLORS.white,
};

const WelcomePage: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box display="flex" flexDirection="column" mb={5}>
        <Typography sx={titleFontStyles}>
          Get <em>Fit.</em> Keep <em>Fit.</em>
        </Typography>
        <Typography sx={titleFontStyles}>
          Look <em>Good.</em>
        </Typography>
        <Typography sx={titleFontStyles}>
          Be <em>Strong</em>.
        </Typography>
      </Box>
      <Typography sx={subtitleFontStyles}>
        Physically. Mentally. Sexually.
      </Typography>
      <Stack
        display={"flex"}
        flexDirection="row"
        width="100%"
        alignItems="center"
        justifyContent="center"
        columnGap={3}
        mt={5}
        mb={5}
      >
        <LinkButton
          color="pink_200"
          textColor="fuschia"
          title="existing member?"
          route="/join-us"
        />
        <LinkButton
          color="purple_200"
          textColor="fuschia"
          title="Find out more"
          route="/join-us"
        />
      </Stack>

      <Typography
        sx={{
          fontSize: 20,
          color: COLORS.whiteblue,
          marginBottom: 3,
          marginTop: 2,
          textTransform: "uppercase",
          letterSpacing: 2,
        }}
      >
        A few membership benefits
      </Typography>
      <Grid container spacing={2} display="flex" alignItems="stretch" mb={0}>
        <WelcomeCard
          image="one"
          color="orange_200"
          title="Fitness Programs"
          subtitle="Join fitness programs and track your activity from our app"
        />
        <WelcomeCard
          image="two"
          color="hilite_purpink"
          title="MealPlan plus"
          subtitle="Follow expert-curated meal plans for your fitness goals"
        />
        <WelcomeCard
          image="three"
          color="pink_200"
          title="Exclusive events"
          subtitle="Get invited to  members-only social events"
        />
      </Grid>
    </Box>
  );
};

export default WelcomePage;
