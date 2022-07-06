import { Button, Stack } from "@mui/material";
import { COLORS } from "../../../constants/colors";
import { AuthLinkItem } from "./AuthLinkItem";

export const NavAuthLinks = () => {
  const buttonStyles = {
    textTransform: "capitalize",
    letterSpacing: "1.2px",
    color: COLORS.orange_200,
    fontWeight: 400,
    fontSize: "16px",
  };

  const buttonStyles2 = {
    ...buttonStyles,
    backgroundColor: COLORS.orange_200,
    color: COLORS.dark_400,
    padding: "5px 20px",
    fontWeight: 500,
    ":&hover": {
      color: "white",
    },
  };

  return (
    <Stack direction="row" spacing={2}>
      <AuthLinkItem title="Log in" route="login" outlined />
      <AuthLinkItem title="Join now" route="register" />
    </Stack>
  );
};
