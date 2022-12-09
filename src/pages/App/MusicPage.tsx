import { Box, Grid, Typography } from '@mui/material'
// import { Box, Grid } from "react-feather";
import { PageLayout } from '../../components/layout/PageLayout/PageLayout'
import { COLORS } from '../../constants/colors'
import PlayStoreLogo from '../../assets/img/playstore.png'
import AppStoreLogo from '../../assets/img/appstore.png'

interface Props {}
const MusicPage: React.FC<Props> = () => {
  return (
    <PageLayout title="Welcome to the Afrofit Club">
      <Typography
        sx={{ color: COLORS.whiteblue, fontSize: 22, marginBottom: 5 }}
      >
        The Afrofitapp is a value - add app for members of the AFROFIT FITNESS
        CLUB to keep members active through dancing exercises. Users can record
        their dance steps/movements while dancing or exercising by having their
        phones on them.
      </Typography>

      <Typography
        sx={{
          color: COLORS.white,
          fontSize: 20,
          fontWeight: 300,
          marginBottom: 2,
        }}
      >
        <strong>STEP 1:</strong> Download the Applicatation from the bilo link
      </Typography>

      <Grid
        container
        spacing={2}
        alignItems="stretch"
        mt={1}
        mb={3}
        sx={{
          display: { xs: 'flex' },
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box
          sx={{
            height: { xs: '70px', md: '100px' },
            cursor: 'pointer',
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
            <img src={PlayStoreLogo} alt="the Afrofit logo" height={'100%'} />
          </a>
        </Box>
        <Box
          sx={{
            height: { xs: '70px', md: '100px' },
            cursor: 'pointer',
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
            <img src={AppStoreLogo} alt="the Afrofit logo" height={'100%'} />
          </a>
        </Box>
      </Grid>

      <Typography
        sx={{ color: COLORS.whiteblue, fontSize: 22, marginBottom: 5 }}
      >
        playas follow the steps below to start
        your weight loss and calorie burning journey!
      </Typography>
      <Typography
        sx={{
          color: COLORS.hilite_purpink,
          fontWeight: 500,
          fontSize: 25,
          marginBottom: 5,
        }}
      >
        HOW TO USE THE APP
      </Typography>
      <Typography
        sx={{
          color: COLORS.white,
          fontSize: 20,
          fontWeight: 300,
          marginBottom: 2,
        }}
      >
        <strong>STEP 2:</strong> The user logs into the app with a registered
        email and a password.
      </Typography>
      <Typography
        sx={{
          color: COLORS.white,
          fontSize: 20,
          fontWeight: 300,
          marginBottom: 2,
        }}
      >
        <strong>STEP 3:</strong> The user can click on a story to start. After
        listening to the story the user can click on ‘Continue story' to take
        the user to the 'Stories chapters' (NOTE: The user has to finish the
        chapters on a story before they can gain access to the next story)
      </Typography>
      <Typography
        sx={{
          color: COLORS.white,
          fontSize: 20,
          fontWeight: 300,
          marginBottom: 2,
        }}
      >
        <strong>STEP 4:</strong> At the stories chapter page, the user will
        select a chapter and start dancing the user can either select music on
        their phone or use our suggested playlist. Once the user starts moving
        or dancing the movements will be recorded and the user can see the
        timing on the screen. (NOTE: App requires permission from the user to
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
        User's rating or performance among other users.
      </Typography>
      <Typography
        sx={{
          color: COLORS.white,
          fontSize: 20,
          fontWeight: 300,
          marginBottom: 2,
        }}
      >
        <strong>PROFILE PAGE</strong> Shows the information and users'
        interaction with the app including Ranking.
      </Typography>
      <Typography
        sx={{
          color: COLORS.white,
          fontSize: 20,
          fontWeight: 300,
          marginBottom: 2,
        }}
      >
        <a
          href="https://youtu.be/pMC3ibZhvIc"
          target="_blank"
          rel="noreferrer"
          style={{
            textDecoration: 'none',
            color: COLORS.gold,
            fontWeight: 500,
            fontSize: 20,
          }}
        >
          Watch the app's instructional video
        </a>
      </Typography>
    </PageLayout>
  )
}

export default MusicPage
