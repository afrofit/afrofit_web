import { Stack, Typography } from "@mui/material";
import { zodResolver } from "@hookform/resolvers/zod";

import * as z from "zod";

import { useForm } from "react-hook-form";
import { StyledLargeButton } from "../../components/elements/StyledLargeButton/StyledLargeButton";
import { CustomInputElement } from "../../components/forms/CustomInput/CustomInputElement";
import { COLORS } from "../../constants/colors";
import { Card } from "../../components/Card/Card";
import { RegisterAccount } from "../../store/reducers/auth/thunks/register.thunks";
import { useDispatch } from "react-redux";
import { StyledClearButton } from "../../components/elements/StyledClearButton/StyledClearButton";
import { useNavigate } from "react-router-dom";

interface RegisterProps {
  name_last: string;
  name_first: string;
  email?: string;
  password?: string;
  confirm_password?: string;
  username?: string;
}

const schema = z
  .object({
    name_first: z.string().min(1, { message: "Required" }),
    name_last: z.string().min(1, { message: "Required" }),
    username: z.string().min(1, { message: "Required" }),
    email: z.string({ required_error: "Valid email required" }).email(),
    password: z.string().min(1, { message: "Required" }),
    confirm_password: z.string().min(1, { message: "Required" }),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: "Passwords must match",
    path: ["confirm_password"],
  });

const RegisterPage = () => {
  const dispatch = useDispatch();
  const navigation = useNavigate();

  const { handleSubmit, control, reset } = useForm<RegisterProps>({
    resolver: zodResolver(schema),
    mode: "all",
    reValidateMode: "onChange",
    criteriaMode: "firstError",
  });

  const onSubmit = (data: any) => {
    console.log(data);
    const { username, password, name_last, name_first, email } = data;

    const registerData = { username, password, name_last, name_first, email };
    dispatch(RegisterAccount(registerData));
    reset();
  };

  return (
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
        Register an account
      </Typography>
      <Card>
        <Stack display="flex" flexDirection="column" width="100%" spacing={3}>
          <Stack
            display={"flex"}
            flexDirection="row"
            columnGap={2}
            width="100%"
          >
            <CustomInputElement
              name="name_first"
              label="First Name"
              control={control}
              type="text"
              icon="person"
            />
            <CustomInputElement
              name="name_last"
              label="Last Name"
              control={control}
              type="text"
              icon="person"
            />
          </Stack>
          <Stack
            display={"flex"}
            flexDirection="row"
            columnGap={2}
            width="100%"
          >
            <CustomInputElement
              name="username"
              label="Username"
              control={control}
              type="text"
              icon="lock"
            />

            <CustomInputElement
              name="email"
              label="Email"
              control={control}
              type="email"
              icon="mail"
            />
          </Stack>
          <Stack
            display={"flex"}
            flexDirection="row"
            columnGap={2}
            width="100%"
          >
            <CustomInputElement
              name="password"
              label="Password"
              control={control}
              type="password"
              icon="lock"
            />
            <CustomInputElement
              name="confirm_password"
              label="Confirm Password"
              control={control}
              type="password"
              icon="lock"
            />
          </Stack>
        </Stack>
      </Card>
      <StyledLargeButton
        onClick={handleSubmit(onSubmit)}
        title="Create Account"
        color="fuschia"
      />
      <StyledClearButton
        onClick={() => navigation("/login")}
        title="I already have an account"
        color="fuschia"
      />
    </Stack>
  );
};

export default RegisterPage;
