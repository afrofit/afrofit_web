import * as React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Stack, Typography } from "@mui/material";

import { COLORS } from "../../../constants/colors";
import { BenefitsCard } from "./components/BenefitsCard";
import { StyledLargeButton } from "../../../components/elements/StyledLargeButton/StyledLargeButton";
import { StyledClearButton } from "../../../components/elements/StyledClearButton/StyledClearButton";
import Image from "../../../assets/img/model_female.png";

const JoinUsPage = () => {
  const navigation = useNavigate();
  return (
    <React.Fragment>
      <Typography
        sx={{
          fontSize: 50,
          fontWeight: 400,
          lineHeight: 1.2,
          color: COLORS.white,
          textAlign: "center",
          backgroundImage: `linear-gradient(45deg, ${COLORS.orange_200}, ${COLORS.hilite_purpink})`,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          borderRadius: 2,
          marginBottom: 5,
        }}
      >
        Why you should join Afrofit
      </Typography>
      <Container maxWidth="md">
        <Typography
          sx={{
            fontSize: 20,
            fontWeight: 300,
            color: COLORS.white,
            textAlign: "center",
            marginBottom: 10,
          }}
        >
          The Afrofit fitness club is home to one of the most effective and fun
          weight loss and fitness app in the world made for people that loves to
          dance but hates exercising or don’t have the time to attend the Gym
          helping them maintain a fitness life style. The app helps members
          reach their everyday nutrition and fitness goal. Members use it to
          calculate their dancing time, steps and the amount of calories.
          Members enjoy a wide range of impressive in app dancing exercise and
          members only online fitness program led by top fitness trainers every
          week with access to unlimited energetic workout & party mixes from
          popular DJs around the globe. The app also offers an exclusive feature
          for Members, their friends and family to come together for a dance
          marathon competition.
        </Typography>
        <Stack display={"flex"} flexDirection="row" columnGap={2} mb={1}>
          <BenefitsCard
            title="Massive Discounts!"
            subtitle="Only for members, enjoy discounts on Health and fitness products from our partners"
            color="purple_100"
            src={Image}
          />
          <BenefitsCard
            title="Free Daily Exercise App"
            subtitle="An Android/IOS App that helps you dance and therefore lose weight quickly and in a fun way"
            color="purple_200"
            src={Image}
          />
        </Stack>
        <Stack display={"flex"} flexDirection="row" columnGap={2} mb={4}>
          <BenefitsCard
            title="Weekly Online Fitness Classes"
            subtitle="Classes are taught by highly qualified fitness instructors."
            color="orange_100"
            src={Image}
          />
          <BenefitsCard
            title="Unlimited Workout/Party DJ Mixes"
            subtitle="Mixes are produced by top DJs around the world"
            color="orange_200"
            src={Image}
          />
        </Stack>
        <StyledLargeButton
          onClick={() => navigation("/register")}
          title="Join Afrofit now"
          color="fuschia"
        />
        <StyledClearButton
          onClick={() => navigation("/login")}
          title="I already have an account"
          color="fuschia"
        />
      </Container>
    </React.Fragment>
  );
};

export default JoinUsPage;
