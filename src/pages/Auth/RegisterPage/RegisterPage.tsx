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
import { useNavigate, useSearchParams } from "react-router-dom";
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
    firstName: z
      .string()
      .min(1, { message: "Required" })
      .regex(/^[A-Za-z]+$/i, "Only contain alphabetic characters")
      .min(3, { message: "Atleast 3 characters required" })
      .max(16, { message: "Must be at most 16 characters" }),
    lastName: z
      .string()
      .min(1, { message: "Required" })
      .regex(/^[A-Za-z]+$/i, "Only contain alphabetic characters")
      .min(3, { message: "Atleast 3 characters required" })
      .max(16, { message: "Must be at most 16 characters" }),
    username: z
      .string()
      .min(1, { message: "Required" })
      .min(3, { message: "Atleast 3 characters required" })
      .max(16, { message: "Must be at most 16 characters" }),
    email: z.string({ required_error: "Valid email required" }).email(),
    password: z
      .string()
      .min(1, { message: "Required" })
      .regex(/^(?=.*[a-z])/, "At least one lowercase letter required")
      .regex(/^(?=.*[A-Z])/, "At least one uppercase letter required")
      .regex(/^(?=.*\d)/, "Atleast one Number character required")
      .regex(
        /^(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~|\\\/])/,
        "At least one special letter required"
      )
      // .regex(
      //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~|\\\/])(?=.*\d)[A-Za-z\d!@#$%^&*()_+{}\[\]:;<br>,.?~|\\\/]{8,}$/,
      //   "Password must contain at least one uppercase letter," +
      //     <br /> +
      //     "one lowercase letter, one special character, and \n one number. Minimum length is 8 characters."
      // )
      .min(8, { message: "Atleast 8 characters required" })
      .max(16, { message: "Must be at most 16 characters" }),
    confirm_password: z.string().min(1, { message: "Required" }),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: "Passwords must match",
    path: ["confirm_password"],
  });

const RegisterPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = React.useState(false);
  const [cShowPassword, setCShowPassword] = React.useState(false);
  const [image, setImage] = React.useState("");
  const [image1, setImage1] = React.useState("");

  const memoDpId = React.useMemo(() => {
    return generateRandomNumber(1, 12);
  }, []);

  const [showDpPicker, setShowDpPicker] = React.useState(false);
  const [selectedDp, setSelectedDp] = React.useState(() => memoDpId);
  const [searchParams] = useSearchParams();
  const priceId = searchParams.get("plan");

  const { handleSubmit, control, reset } = useForm<RegisterProps>({
    resolver: zodResolver(schema),
    mode: "all",
    reValidateMode: "onChange",
    criteriaMode: "firstError",
  });

  const onSubmit = async (data: any) => {
    const { username, password, lastName, firstName, email } = data;

    let formData = new FormData();
    formData.append("username", username);
    formData.append("password", password);
    formData.append("firstName", firstName);
    formData.append("email", email);
    formData.append("lastName", lastName);
    if (!image) formData.append("displayPicId", selectedDp as any);
    if (image) formData.append("image", image);

    const handleNavigate = () => {
      navigate("/about");
    };

    dispatch(CreateUser(formData as any, handleNavigate, priceId));
    reset();
  };

  const handleSelectDp = (dpId: any, type: boolean) => {
    if (type) {
      setImage(dpId);
      setShowDpPicker(false);
    } else {
      setSelectedDp(dpId);
      setShowDpPicker(false);
    }

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
        setImage={setImage}
        setImage1={setImage1}
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
                image1={image1}
              />
              <Stack
                display={"flex"}
                sx={{
                  display: { xs: "flex" },
                  flexDirection: { xs: "column", md: "row" },
                }}
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
                sx={{
                  display: { xs: "flex" },
                  flexDirection: { xs: "column", md: "row" },
                }}
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
                sx={{
                  display: { xs: "flex" },
                  flexDirection: { xs: "column", md: "row" },
                }}
                columnGap={2}
                width="100%"
              >
                <CustomInputElement
                  name="password"
                  label="Password"
                  control={control}
                  type={showPassword ? "text" : "password"}
                  icon="lock"
                  showpassIcon="eye"
                  hidepassIcon="eyeOff"
                  showPassword={showPassword}
                  setShowPassword={setShowPassword}
                />
                <CustomInputElement
                  name="confirm_password"
                  label="Confirm Password"
                  control={control}
                  type={cShowPassword ? "text" : "password"}
                  icon="lock"
                  showpassIcon="eye"
                  hidepassIcon="eyeOff"
                  cShowPassword={cShowPassword}
                  setCShowPassword={setCShowPassword}
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
            onClick={() => navigate("/login")}
            title="I already have an account"
            color="fuschia"
          />
        </Stack>
      </Container>
    </>
  );
};

export default RegisterPage;
