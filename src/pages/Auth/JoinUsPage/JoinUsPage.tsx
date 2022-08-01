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
        <Stack display={"flex"} flexDirection="row" columnGap={2} mb={1}>
          <BenefitsCard
            title="Healthy Customized Meal Plans"
            subtitle="Benefit Card Title 1"
            color="purple_100"
            src={Image}
          />
          <BenefitsCard
            title="Fantastic App for Android and IOS"
            subtitle="Benefit Card Title 1"
            color="purple_200"
            src={Image}
          />
        </Stack>
        <Stack display={"flex"} flexDirection="row" columnGap={2} mb={4}>
          <BenefitsCard
            title="Unforgettable Year-Round Events"
            subtitle="Benefit Card Title 1"
            color="orange_100"
            src={Image}
          />
          <BenefitsCard
            title="Heavily Discounted Marketplace"
            subtitle="Benefit Card Title 1"
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
