/* eslint-disable jsx-a11y/iframe-has-title */
import { Box, Grid, Stack, Typography } from "@mui/material";
import { PageLayout } from "../../components/layout/PageLayout/PageLayout";
import { COLORS } from "../../constants/colors";
import PlayStoreLogo from "../../assets/img/playstore.png";
import AppStoreLogo from "../../assets/img/appstore.png";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import API_CLIENT from "../../api/client";
import ForwardIcon from "@mui/icons-material/Forward";
import { LinkButton } from "../../components/Buttons/LinkButton";
import Appselect from "../../components/dialogs/AppselectDialog";
import { RetrieveUserSubscription } from "../../store/reducers/payments/thunks/retrieve-user-subscription.thunk";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../store/reducers/auth/auth.slice";

interface Props {}
const MusicPage: React.FC<Props> = () => {
  const currentUser = useSelector(selectUser);
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const [openDialog, setOpenDialog] = useState(false);
  const sessionId = searchParams.get("id");
  const uid = sessionStorage.getItem("userId");

  const token = sessionStorage.getItem("STORAGE_TOKEN_KEY_standin");

  const fsession = async (uid: string | null) => {
    const responce = await API_CLIENT.post(
      `payments/retrieve-stripe-session/${uid}`,
      { sessionId }
    );
  };

  useEffect(() => {
    if (sessionId !== null) {
      fsession(uid);
      setOpenDialog(true);
      currentUser && dispatch(RetrieveUserSubscription(currentUser.userId));
    }
  }, [sessionId]);

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <PageLayout title="WELCOME TO THE AFROFIT CLUB">
      <>
        <Typography
          sx={{ color: COLORS.whiteblue, fontSize: 22, marginBottom: 2 }}
        >
          The Afrofit app is a value - added app for members of the 'AFROFIT
          FITNESS CLUB' to help members lose weight and keep fit through dancing
          exercises.
        </Typography>

        <Typography
          sx={{ color: COLORS.whiteblue, fontSize: 22, marginBottom: 2 }}
        >
          You can record Your dance steps/movements while dancing or exercising
          by having your phone on you.
        </Typography>

        <Typography
          sx={{ color: COLORS.whiteblue, fontSize: 22, marginBottom: 5 }}
        >
          You can also select or download unlimited DJ workout mixes of diffrent
          Genre like AFROBEAT, AMAPIANO, DANCE HALL , SOCA, CLASSIC HIP HOP /
          R&B + more on your devices.
        </Typography>
        {/* mobile button Start */}
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
            title="Start Free Trial"
            route={token ? "/profile" : "/plan"}
            mb={10}
          />
          <LinkButton
            color="pink_200"
            textcolor="fuschia"
            title="DOWNLOAD DJ MIX"
            route="/shop"
          />
        </Stack>
        {/* mobile button end */}

        {/* web button start */}
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
            title="Start Free Trial"
            route={token ? "/profile" : "/plan"}
          />
          <LinkButton
            color="pink_200"
            textcolor="fuschia"
            title="DOWNLOAD DJ MIX"
            route="/shop"
          />
        </Stack>
        {/* web button end */}

        <Typography
          sx={{
            color: COLORS.hilite_purpink,
            fontWeight: 500,
            fontSize: 25,
            marginBottom: 3,
          }}
        >
          HOW TO USE THE APP
        </Typography>

        <Typography
          sx={{ color: COLORS.whiteblue, fontSize: 22, marginBottom: 2 }}
        >
          Please follow the below steps to start your weight loss and
          calorie-burning journey!
        </Typography>

        <Typography
          sx={{
            color: COLORS.white,
            fontSize: 20,
            fontWeight: 300,
            marginBottom: 2,
            display: "flex",
          }}
        >
          <ForwardIcon sx={{ marginTop: "2px", marginRight: "10px" }} />
          <strong style={{ width: "80px" }}>STEP 1:</strong> Download the
          Afrofit App from the given link.
        </Typography>

        <Grid
          container
          spacing={2}
          alignItems="stretch"
          mt={1}
          mb={3}
          sx={{
            display: { xs: "flex" },
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: "center",
          }}
        >
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
              href="https://djminddgap.page.link/afrofit"
              target="_blank"
              rel="noreferrer"
            >
              <img src={PlayStoreLogo} alt="the Afrofit logo" height={"100%"} />
            </a>
          </Box>
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
              href="https://djminddgap.page.link/afrofit"
              target="_blank"
              rel="noreferrer"
            >
              <img src={AppStoreLogo} alt="the Afrofit logo" height={"100%"} />
            </a>
          </Box>
        </Grid>

        <Typography
          sx={{
            color: COLORS.white,
            fontSize: 20,
            fontWeight: 300,
            marginBottom: 2,
            display: "flex",
          }}
        >
          <ForwardIcon sx={{ marginTop: "2px", marginRight: "10px" }} />
          <strong style={{ width: "80px" }}>STEP 2:</strong>
          Log into the app with your username and password.
        </Typography>
        <Typography
          sx={{
            color: COLORS.white,
            fontSize: 20,
            fontWeight: 300,
            marginBottom: 2,
            display: "flex",
          }}
        >
          <ForwardIcon sx={{ marginTop: "2px", marginRight: "10px" }} />
          <strong style={{ width: "150px" }}>STEP 3:</strong> By clicking on the
          story you can start your journey. After listening to the story you can
          click on to ‘Continue story' then it takes you to 'Stories chapters'
          (NOTE: you have to complete the chapters in a story before you can get
          access to the next story)
        </Typography>
        <Typography
          sx={{
            color: COLORS.white,
            fontSize: 20,
            fontWeight: 300,
            marginBottom: 2,
            display: "flex",
          }}
        >
          <ForwardIcon sx={{ marginTop: "2px", marginRight: "5px" }} />
          <strong style={{ width: "200px" }}>STEP 4:</strong>In the stories
          chapter, you will select a chapter and start dancing. you can either
          select music on their phone or use our suggested playlist. Once you
          starts moving or dancing the movements will be recorded and you can
          see that on the screen. (NOTE: App requires permission from you to
          record activity)
        </Typography>
        <Typography
          sx={{
            color: COLORS.white,
            fontSize: 20,
            fontWeight: 300,
            marginBottom: 2,
          }}
        >
          <strong>RANKING PAGE:</strong> This is a leaderboard that shows the
          your rating or performance among other users.
        </Typography>
        <Typography
          sx={{
            color: COLORS.white,
            fontSize: 20,
            fontWeight: 300,
            marginBottom: 2,
          }}
        >
          <strong>PROFILE PAGE:</strong> Shows the information and your
          interaction with the app including Ranking.
        </Typography>
        <Typography
          sx={{
            color: COLORS.white,
            fontSize: 20,
            fontWeight: 300,
            marginBottom: 2,
            marginTop: 5,
          }}
        >
          Watch the app's tutorial video
        </Typography>
        <Stack
          direction="row"
          sx={{
            alignItems: "center",
            margin: "auto",
            justifyContent: "center",
          }}
        >
          <iframe
            width="760"
            height="415"
            src="https://www.youtube.com/embed/pMC3ibZhvIc"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </Stack>
        <Appselect open={openDialog} onClose={handleCloseDialog} />
      </>
    </PageLayout>
  );
};

export default MusicPage;
