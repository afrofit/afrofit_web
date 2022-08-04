import * as React from "react";
import { Container, Stack, Typography } from "@mui/material";
import { zodResolver } from "@hookform/resolvers/zod";

import * as z from "zod";

import { useForm } from "react-hook-form";
import { StyledLargeButton } from "../../../components/elements/StyledLargeButton/StyledLargeButton";
import { CustomInputElement } from "../../../components/forms/CustomInput/CustomInputElement";
import { COLORS } from "../../../constants/colors";
import { Card } from "../../../components/Card/Card";
import { useDispatch } from "react-redux";
import { StyledClearButton } from "../../../components/elements/StyledClearButton/StyledClearButton";
import { useNavigate } from "react-router-dom";
import { CreateUser } from "../../../store/reducers/auth/thunks/register.thunk";
import { DisplayPictureClicker } from "../components/DisplayPictureClicker/DisplayPictureClicker";
import { DisplayPicturePicker } from "../../../components/elements/DisplayPicturePicker";
import { generateRandomNumber } from "../../../utils/formatters";
import {
  finishedRequest,
  newRequest,
} from "../../../store/reducers/ui/ui.slice";

interface RegisterProps {
  lastName: string;
  firstName: string;
  email?: string;
  password?: string;
  confirm_password?: string;
  username?: string;
}

const schema = z
  .object({
    firstName: z.string().min(1, { message: "Required" }),
    lastName: z.string().min(1, { message: "Required" }),
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

  const memoDpId = React.useMemo(() => {
    return generateRandomNumber(1, 12);
  }, []);

  const [showDpPicker, setShowDpPicker] = React.useState(false);
  const [selectedDp, setSelectedDp] = React.useState(() => memoDpId);

  const { handleSubmit, control, reset } = useForm<RegisterProps>({
    resolver: zodResolver(schema),
    mode: "all",
    reValidateMode: "onChange",
    criteriaMode: "firstError",
  });

  const onSubmit = (data: any) => {
    console.log(data);
    const { username, password, lastName, firstName, email } = data;

    const registerData = {
      username,
      password,
      lastName,
      firstName,
      email,
      displayPicId: selectedDp,
    };

    console.log("registerData", registerData);

    dispatch(CreateUser(registerData));
    reset();
  };

  const handleSelectDp = (dpId: number) => {
    setSelectedDp(dpId);
    setShowDpPicker(false);
    dispatch(newRequest());
    setTimeout(() => {
      dispatch(finishedRequest());
    }, 200);
  };

  return (
    <>
      <DisplayPicturePicker
        onSelectDp={handleSelectDp}
        onClose={() => setShowDpPicker(false)}
        open={showDpPicker}
        selectedDp={selectedDp}
      />
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
            Register an account
          </Typography>
          <Card>
            <Stack
              display="flex"
              flexDirection="column"
              width="100%"
              spacing={3}
            >
              <DisplayPictureClicker
                dpId={selectedDp}
                onClick={() => setShowDpPicker(true)}
              />
              <Stack
                display={"flex"}
                flexDirection="row"
                columnGap={2}
                width="100%"
              >
                <CustomInputElement
                  name="firstName"
                  label="First Name"
                  control={control}
                  type="text"
                  icon="person"
                />
                <CustomInputElement
                  name="lastName"
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
      </Container>
    </>
  );
};

export default RegisterPage;
