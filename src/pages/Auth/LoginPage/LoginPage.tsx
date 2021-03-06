import { useForm } from "react-hook-form";
import { Container, Stack, Typography } from "@mui/material";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Card } from "../../../components/Card/Card";
import { COLORS } from "../../../constants/colors";
import { StyledLargeButton } from "../../../components/elements/StyledLargeButton/StyledLargeButton";
import { StyledClearButton } from "../../../components/elements/StyledClearButton/StyledClearButton";
import { useNavigate } from "react-router-dom";
import { LogIn } from "../../../store/reducers/auth/thunks/login.thunks";
import { useDispatch } from "react-redux";
import { CustomInputElement } from "../../../components/forms/CustomInput/CustomInputElement";

const schema = z.object({
  email: z.string({ required_error: "Valid email required" }).email(),
  password: z.string().min(1, { message: "Required" }),
});

const LoginPage = () => {
  const navigation = useNavigate();
  const dispatch = useDispatch();

  const { handleSubmit, control, reset } = useForm({
    resolver: zodResolver(schema),
    mode: "onBlur",
  });

  const onSubmit = (data: any) => {
    console.log("data", data);
    const { email, password } = data;

    const loginData = { password, email };
    dispatch(LogIn(loginData));
    reset();
  };

  return (
    <Container maxWidth="md">
      <Stack display="flex" flexDirection="column" sx={{ width: "100%" }}>
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
          Member Login
        </Typography>
        <Card>
          <Stack display="flex" flexDirection="column" width="100%" spacing={3}>
            <CustomInputElement
              name="email"
              label="Email"
              control={control}
              placeholder="Your email.."
              type="text"
              icon="mail"
            />
            <CustomInputElement
              name="password"
              label="Password"
              control={control}
              placeholder="Your password..."
              type="password"
              icon="lock"
            />
          </Stack>
        </Card>

        <StyledClearButton
          onClick={() => navigation("/forgot-password")}
          title="I forgot my password"
          color="fuschia"
        />
        <StyledLargeButton
          onClick={handleSubmit(onSubmit)}
          title="Log in"
          color="fuschia"
        />
        <StyledClearButton
          onClick={() => navigation("/register")}
          title="Create an account instead"
          color="fuschia"
        />
      </Stack>
    </Container>
  );
};

export default LoginPage;
