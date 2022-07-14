import * as React from "react";
import { Stack, Typography } from "@mui/material";
import { Card } from "../../components/Card/Card";
import { COLORS } from "../../constants/colors";
import { StyledLargeButton } from "../../components/elements/StyledLargeButton/StyledLargeButton";

const RegisterPage = () => {
  return (
    <Stack display="flex" flexDirection="column" sx={{ width: "100%" }}>
      <Typography
        sx={{
          fontSize: 50,
          fontWeight: 400,
          lineHeight: 1.2,
          color: COLORS.white,
          textAlign: "center",
          backgroundImage: `linear-gradient(45deg, ${COLORS.whiteblue}, ${COLORS.orange_100})`,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          borderRadius: 2,
          marginBottom: 10,
        }}
      >
        Register an account
      </Typography>
      <Card>Register page</Card>;
      <StyledLargeButton
        onClick={() => null}
        title="A sample button"
        color="fuschia"
      />
    </Stack>
  );
};

export default RegisterPage;
