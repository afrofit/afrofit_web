import * as React from "react";
import { useForm } from "react-hook-form";
import { Stack, Typography } from "@mui/material";

import { Card } from "../../../components/Card/Card";
import { COLORS } from "../../../constants/colors";
import { StyledLargeButton } from "../../../components/elements/StyledLargeButton/StyledLargeButton";
import { StyledClearButton } from "../../../components/elements/StyledClearButton/StyledClearButton";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { CustomInputElement } from "../../../components/forms/CustomInput/CustomInputElement";
import { SetNewPassword } from "../../../store/reducers/auth/thunks/set-new-password.thunk";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

interface NewPassword {
  password?: string;
  confirm_password?: string;
}

const schema = z
  .object({
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

const SetNewPasswordPage = () => {
  const navigation = useNavigate();
  const { hash, userId } = useParams();
  const dispatch = useDispatch();

  const [showPassword, setShowPassword] = React.useState(false);
  const [cShowPassword, setCShowPassword] = React.useState(false);

  const { handleSubmit, control, reset } = useForm<NewPassword>({
    resolver: zodResolver(schema),
    mode: "all",
    reValidateMode: "onChange",
    criteriaMode: "firstError",
  });

  if (!hash || !userId) return null;

  const onSubmit = (data: any) => {
    const expandedData = {
      password: data.password,
      hash,
    };
    dispatch(SetNewPassword(userId, expandedData));
    navigation("/login");
    return reset();
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
        Enter your new password
      </Typography>
      <Card>
        <Stack display="flex" flexDirection="column" width="100%" spacing={3}>
          <CustomInputElement
            name="password"
            label="Password"
            control={control}
            placeholder="Your password.."
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
            placeholder="Your Confirm password.."
            control={control}
            type={cShowPassword ? "text" : "password"}
            icon="lock"
            showpassIcon="eye"
            hidepassIcon="eyeOff"
            cShowPassword={cShowPassword}
            setCShowPassword={setCShowPassword}
          />
        </Stack>
      </Card>

      <StyledLargeButton
        onClick={handleSubmit(onSubmit)}
        title="Send reset email"
        color="fuschia"
      />
      <StyledClearButton
        onClick={() => navigation("/login")}
        title="Let me log in instead"
        color="fuschia"
      />
    </Stack>
  );
};

export default SetNewPasswordPage;
