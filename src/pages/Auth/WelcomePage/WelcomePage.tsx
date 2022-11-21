import { Box, Grid, Stack, Typography } from "@mui/material";
import * as React from "react";
import { LinkButton } from "../../../components/Buttons/LinkButton";
import { COLORS } from "../../../constants/colors";
import { StatsCard } from "../../App/components/StatsCard";
import { WelcomeCard } from "../components/WelcomeCard";

const titleFontStyles = {
  fontSize: { xs: 60, md: 90 },
  fontWeight: 900,
  marginBottom: -3,
  color: COLORS.white,
  letterSpacing: 0.2,
  lineHeight: { xs: 1.4, md: 1.3 },
  textAlign: "center",
  backgroundImage: `linear-gradient(45deg, ${COLORS.purple_100}, ${COLORS.orange_200})`,
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  borderRadius: 2,
};

const subtitleFontStyles = {
  fontSize: { xs: 25, md: 45 },
  fontWeight: { md: 400 },
  textAlign: "center",
  color: COLORS.white,
};

//xs, sm, md, lg, xl
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
        sx={{
          display: { xs: "flex", md: "none" },
          width: "100%",
        }}
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        columnGap={3}
        mt={5}
        mb={5}
      >
        <LinkButton
          color="purple_200"
          textcolor="fuschia"
          title="Find out more"
          route="/join-us"
          mb={20}
        />

        <LinkButton
          color="pink_200"
          textcolor="fuschia"
          title="existing member?"
          route="/login"
        />
      </Stack>
      <Stack
        sx={{
          display: { xs: "none", md: "flex" },
          marginBottom: 5,
          marginTop: 5,
        }}
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
          color="purple_200"
          textcolor="fuschia"
          title="Find out more"
          route="/join-us"
        />
        <LinkButton
          color="pink_200"
          textcolor="fuschia"
          title="existing member?"
          route="/login"
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
      <Grid
        container
        spacing={2}
        alignItems="stretch"
        mb={0}
        sx={{
          display: { xs: "flex" },
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <WelcomeCard
          image="two"
          color="orange_200"
          title="Dance Exercise App"
          subtitle="Dance and lose weight quickly with our free DAILY DANCE EXERCISE APP"
        />
        <WelcomeCard
          image="one"
          color="hilite_purpink"
          title="Dance Fitness Programmes"
          subtitle="FULL ACCESS TO WEEKLY ONLINE DANCE FITNESS PROGRAME CLASSES by highly qualified fitness instructors"
        />
        <WelcomeCard
          image="three"
          color="pink_200"
          title="Amazing DJ Mixes"
          subtitle="ACCESS TO UNLIMITED WORKOUT/PARTY DJ MIXES by top DJs around the world"
        />
      </Grid>
    </Box>
  );
};

export default WelcomePage;
