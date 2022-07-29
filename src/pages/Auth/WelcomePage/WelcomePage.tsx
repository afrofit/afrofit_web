import { Box, Grid, Stack, Typography } from "@mui/material";
import * as React from "react";
import { LinkButton } from "../../../components/Buttons/LinkButton";
import { COLORS } from "../../../constants/colors";
import { StatsCard } from "../../App/components/StatsCard";
import { HomeBensCard } from "../components/HomeBensCard";

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
          color="purple_200"
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
      <Grid container spacing={2} display="flex" alignItems={"stretch"} mb={5}>
        <HomeBensCard title="Calories Burned" value="101.1k" />
        <HomeBensCard title="Minutes Danced" value="101.2k" />
        <HomeBensCard title="Days Active" value="12" />
      </Grid>
    </Box>
  );
};

export default WelcomePage;
