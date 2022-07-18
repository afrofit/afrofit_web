import { Stack, Typography } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import { zodResolver } from "@hookform/resolvers/zod";

import * as Yup from "yup";
import * as z from "zod";

import { useForm } from "react-hook-form";
import { StyledLargeButton } from "../../components/elements/StyledLargeButton/StyledLargeButton";
import { CustomInputElement } from "../../components/forms/CustomInput/CustomInputElement";
import { COLORS } from "../../constants/colors";
import { Card } from "../../components/Card/Card";
import { RegisterAccount } from "../../store/reducers/auth/thunks/register.thunks";
import { useDispatch } from "react-redux";

const registerSchema2 = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().min(6).max(32).required(),
  username: Yup.string().min(6).max(32).required(),
  name_first: Yup.string().min(2).max(32).required(),
  name_last: Yup.string().min(2).max(32).required(),
  confirm_password: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  ),
});

interface RegisterProps {
  name_last: string;
  name_first: string;
  email?: string;
  password?: string;
  confirm_password?: string;
  username?: string;
}

const registerSchema = Yup.object().shape({
  //   name_last: Yup.string().min(2).max(32).required(),
  name_first: Yup.string().min(2).max(32).required(),
});

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
    </Stack>
  );
};

export default RegisterPage;
