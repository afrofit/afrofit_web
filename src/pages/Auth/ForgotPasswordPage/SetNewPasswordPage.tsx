import * as React from "react";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { Stack, Typography } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";

import { Card } from "../../../components/Card/Card";
import { COLORS } from "../../../constants/colors";
import { StyledLargeButton } from "../../../components/elements/StyledLargeButton/StyledLargeButton";
import { StyledClearButton } from "../../../components/elements/StyledClearButton/StyledClearButton";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { CustomInputElement } from "../../../components/forms/CustomInput/CustomInputElement";
import { SetNewPassword } from "../../../store/reducers/auth/thunks/set-new-password.thunk";

const changePassword = Yup.object().shape({
  password: Yup.string().min(6).max(32).required(),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  ),
});

const SetNewPasswordPage = () => {
  const navigation = useNavigate();
  const { hash, userId } = useParams();
  const dispatch = useDispatch();

  console.log(hash, userId);

  const { handleSubmit, control, reset } = useForm({
    resolver: yupResolver(changePassword),
    mode: "onBlur",
  });

  if (!hash || !userId) return null;

  const onSubmit = (data: any) => {
    const expandedData = {
      password: data.password,
      hash,
    };
    dispatch(SetNewPassword(userId, expandedData));
    // return reset();
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
            type="password"
            icon="lock"
          />
          <CustomInputElement
            name="confirmPassword"
            label="Confirm Password"
            control={control}
            placeholder="Confirm the password.."
            type="password"
            icon="lock"
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
