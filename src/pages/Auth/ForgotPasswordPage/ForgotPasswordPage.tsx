import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Stack, Typography } from "@mui/material";

import { Card } from "../../../components/Card/Card";
import { COLORS } from "../../../constants/colors";
import { StyledLargeButton } from "../../../components/elements/StyledLargeButton/StyledLargeButton";
import { StyledClearButton } from "../../../components/elements/StyledClearButton/StyledClearButton";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { CustomInputElement } from "../../../components/forms/CustomInput/CustomInputElement";
import { SendPasswordResetLink } from "../../../store/reducers/auth/thunks/send-password-reset-link.thunk";

const resetPassword = Yup.object().shape({
  email: Yup.string().email().required(),
});

const ForgotPasswordPage = () => {
  const navigation = useNavigate();
  const dispatch = useDispatch();

  const { handleSubmit, control, reset } = useForm({
    resolver: yupResolver(resetPassword),
    mode: "onBlur",
  });

  const onSubmit = (data: any) => {
    console.log(data);
    const { email } = data;

    dispatch(SendPasswordResetLink(email));
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
        Reset your password
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

export default ForgotPasswordPage;
