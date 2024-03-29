import { Box, Grid, Stack, Typography } from "@mui/material";
import * as React from "react";
import { LinkButton } from "../../../components/Buttons/LinkButton";
import { COLORS } from "../../../constants/colors";
import { WelcomeCard } from "../components/WelcomeCard";
import PlayStoreLogo from "../../../assets/img/playstore.png";
import AppStoreLogo from "../../../assets/img/appstore.png";
import { useNavigate } from "react-router-dom";
import SwipeableTextMobileStepper from "../../../components/layout/Appcarousel/carouselImage";
import SwipeableText from "../../../components/layout/Appcarousel/carouselText";

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

const WelcomePage: React.FC = () => {
  const token = sessionStorage.getItem("STORAGE_TOKEN_KEY_standin");

  const navigate = useNavigate();

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
        columnGap={1}
        mt={2}
      >
        <LinkButton
          color="purple_200"
          textcolor="fuschia"
          title="Start Free Trial"
          route="/plan"
        />
      </Stack>
      <Stack
        sx={{
          display: { xs: "flex", md: "none" },
          width: "100%",
        }}
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        columnGap={3}
        mt={3}
        mb={5}
      >
        <LinkButton
          color="hilite_purpink"
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
          marginTop: 2,
        }}
        display={"flex"}
        flexDirection="row"
        width="100%"
        alignItems="center"
        justifyContent="center"
        columnGap={3}
      >
        <LinkButton
          color="purple_200"
          textcolor="fuschia"
          title="Start Free Trial"
          route="/plan"
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
          color="hilite_purpink"
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

      <Typography
        sx={{
          fontSize: 20,
          color: COLORS.whiteblue,
          marginTop: 5,
          marginBottom: 2,
          textTransform: "uppercase",
          letterSpacing: 2,
          textAlign: "center",
        }}
      >
        GET THE SUPER FUN APP!
      </Typography>
      <Grid
        container
        spacing={2}
        alignItems="stretch"
        mb={0}
        sx={{
          display: { xs: "flex" },
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {!token ? (
          <Box
            onClick={() => navigate("/register")}
            sx={{
              height: { xs: "70px", md: "100px" },
              cursor: "pointer",
              marginBottom: { xs: 0, md: 2 },
              marginTop: { xs: 1, md: 2 },
              marginLeft: 2,
              marginRight: 2,
            }}
          >
            <img src={PlayStoreLogo} alt="the Afrofit logo" height={"100%"} />
          </Box>
        ) : (
          <Box
            sx={{
              height: { xs: "70px", md: "100px" },
              cursor: "pointer",
              marginBottom: { xs: 0, md: 2 },
              marginTop: { xs: 1, md: 2 },
              marginLeft: 2,
              marginRight: 2,
            }}
          >
            <a
              href="https://play.google.com/store/apps/details?id=com.djminddgap.afrofit&gl=GB"
              target="_blank"
              rel="noreferrer"
            >
              <img src={PlayStoreLogo} alt="the Afrofit logo" height={"100%"} />
            </a>
          </Box>
        )}

        {!token ? (
          <Box
            onClick={() => navigate("/register")}
            sx={{
              height: { xs: "70px", md: "100px" },
              cursor: "pointer",
              marginBottom: { xs: 0, md: 2 },
              marginTop: { xs: 1, md: 2 },
              marginLeft: 2,
              marginRight: 2,
            }}
          >
            <img src={AppStoreLogo} alt="the Afrofit logo" height={"100%"} />
          </Box>
        ) : (
          <Box
            sx={{
              height: { xs: "70px", md: "100px" },
              cursor: "pointer",
              marginBottom: { xs: 0, md: 2 },
              marginTop: { xs: 1, md: 2 },
              marginLeft: 2,
              marginRight: 2,
            }}
          >
            <a
              href="https://apps.apple.com/us/app/afrofit-app/id1643761809"
              target="_blank"
              rel="noreferrer"
            >
              <img src={AppStoreLogo} alt="the Afrofit logo" height={"100%"} />
            </a>
          </Box>
        )}
      </Grid>

      <Typography
        sx={{
          fontSize: "40px",
          color: COLORS.hilite_purpink,
          marginTop: "25px",
          fontWeight: "bold",
        }}
      >
        Testimonial
      </Typography>
      <hr style={{ width: "200px" }} />

      <Box
        sx={{
          marginTop: "20px",
          marginBottom: "20px",
          height: "auto",
          width: "100%",
        }}
      >
        <SwipeableTextMobileStepper />
      </Box>

      <Box
        sx={{
          marginTop: "20px",
          marginBottom: "20px",
          height: "auto",
          width: "100%",
        }}
      >
        <SwipeableText />
      </Box>
    </Box>
  );
};

export default WelcomePage;
