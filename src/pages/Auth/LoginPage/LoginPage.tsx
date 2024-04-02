import { useForm } from "react-hook-form";
import { Container, Stack, Typography } from "@mui/material";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Card } from "../../../components/Card/Card";
import { COLORS } from "../../../constants/colors";
import { StyledLargeButton } from "../../../components/elements/StyledLargeButton/StyledLargeButton";
import { StyledClearButton } from "../../../components/elements/StyledClearButton/StyledClearButton";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { CustomInputElement } from "../../../components/forms/CustomInput/CustomInputElement";
import { LogIn } from "../../../store/reducers/auth/thunks/login.thunk";
import { useEffect, useState } from "react";
import { any } from "zod";
import {
  selectUser,
  selectUserIsSubscribed,
  setIsSubscribed,
  storeUserToken,
  updateUserDisplayPic,
} from "../../../store/reducers/auth/auth.slice";
import { RetrieveUserSubscription } from "../../../store/reducers/payments/thunks/retrieve-user-subscription.thunk";
import API_CLIENT from "../../../api/client";
import { setSession } from "../../../utils/jwt";

const schema = z.object({
  email: z.string({ required_error: "Valid email required" }).email(),
  password: z.string().min(1, { message: "Required" }),
});

const LoginPage = () => {
  type LoginUserDataType = {
    email: string;
    password: string;
    pushSubscription?: any;
  };
  const currentUser = useSelector(selectUser);
  const data = useSelector((state: any) => state.auth.isSubscribed);
  const getemail: any = sessionStorage.getItem("email");
  const getpassword: any = sessionStorage.getItem("password");
  const STORAGE_TOKEN_KEY_standin: any = sessionStorage.getItem(
    "STORAGE_TOKEN_KEY_standin"
  );

  const isSubscribed =
    typeof sessionStorage !== "undefined" &&
    sessionStorage.getItem("isSubscribed")
      ? sessionStorage.getItem("isSubscribed")
      : undefined;

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [getdata, setgetdata]: any = useState({
    email: getemail,
    password: getpassword,
    STORAGE_TOKEN_KEY_standin: STORAGE_TOKEN_KEY_standin,
  });
  const logInApi = async (userData: LoginUserDataType) => {
    const { email, password, pushSubscription } = userData;
    return await API_CLIENT.post("users/login", {
      email,
      password,
      pushSubscription,
    });
  };

  function urlBase64ToUint8Array(base64String: any) {
    const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
    // eslint-disable-next-line
    const base64 = (base64String + padding)
      .replace(/\-/g, "+")
      .replace(/_/g, "/");

    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);

    for (let i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
  }

  async function subscription() {
    try {
      const convertedVapidKey = urlBase64ToUint8Array(
        process.env.REACT_APP_PUBLIC_VAPID_KEY
      );

      const registration = await navigator.serviceWorker.ready;
      if (!registration.pushManager) {
        return;
      }

      let subscription = await registration.pushManager.getSubscription();

      if (subscription === null) {
        subscription = await registration.pushManager.subscribe({
          applicationServerKey: convertedVapidKey,
          userVisibleOnly: true,
        });

        return subscription;
      } else {
        return subscription;
      }
    } catch (error) {
      return {};
    }
  }

  const retrieveUserSubscription = async (userId: string) => {
    return await API_CLIENT.post(
      `payments/retrieve-user-subscription/${userId}`
    );
  };

  useEffect(() => {
    const initial = async () => {
      const handleNavigate = () => {
        navigate(isSubscribed == "true" ? "/profile" : "/plan");
      };
      await LogIn(getdata, handleNavigate);
    };
    initial();
  }, []);

  const token = sessionStorage.getItem("STORAGE_TOKEN_KEY_standin");

  const [showPassword, setShowPassword] = useState(false);

  const { handleSubmit, control, reset } = useForm({
    resolver: zodResolver(schema),
    mode: "onBlur",
  });

  const onSubmit = async (data: any) => {
    const sub = await subscription();
    const { email, password, pushSubscription = {} } = data;
    const loginData = { password, email, pushSubscription };

    const response = await logInApi(loginData);
    if (response && response.data) {
      dispatch(storeUserToken(response.data.token));
      dispatch(updateUserDisplayPic(response.data.data));
      // STORE_TOKEN(response.data.token);
      setSession(response.data.token);
      sessionStorage.setItem("userId", response.data.data.id);
      sessionStorage.setItem("email", response?.data?.data?.email);
      sessionStorage.setItem("password", response?.data?.data.password);

      const res = await retrieveUserSubscription(response.data.data.id);

      if (res.data.activeSubscription == true) {
        navigate("/profile");
      } else {
        navigate("/plan");
      }
    }

    const handleNavigate = () => {
      navigate(isSubscribed === "true" ? "/profile" : "/plan");
    };
    // dispatch(LogIn(loginData, handleNavigate));
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
              type={showPassword ? "text" : "password"}
              icon="lock"
              showPassword={showPassword}
              setShowPassword={setShowPassword}
            />
          </Stack>
        </Card>

        <StyledClearButton
          onClick={() => navigate("/forgot-password")}
          title="I forgot my password"
          color="fuschia"
        />
        <StyledLargeButton
          onClick={handleSubmit(onSubmit)}
          title="Log in"
          color="fuschia"
        />

        {token ? (
          ""
        ) : (
          <StyledClearButton
            onClick={() => navigate("/register")}
            title="Create an account instead"
            color="fuschia"
          />
        )}
      </Stack>
    </Container>
  );
};

export default LoginPage;
