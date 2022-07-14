import * as React from "react";
import * as Yup from "yup";
import { Stack, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Card } from "../../components/Card/Card";
import { COLORS } from "../../constants/colors";
import { StyledLargeButton } from "../../components/elements/StyledLargeButton/StyledLargeButton";

const loginSchema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().min(6).max(32).required(),
});

const RegisterPage = () => {
  const { handleSubmit, reset, control } = useForm({
    resolver: yupResolver(loginSchema),
    mode: "onBlur",
  });

  const onSubmit = (data: any) => console.log(data);

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
