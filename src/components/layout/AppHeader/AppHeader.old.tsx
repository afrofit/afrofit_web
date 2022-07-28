import { Box, Container, Stack } from "@mui/material";
import { COLORS } from "../../../constants/colors";
import logo from "../../../assets/img/logofull_nobg.png";
import { CHAMFER } from "../../../constants/globals";
import { NavLinks } from "./NavLinks";
import { NavAuthLinks } from "./NavAuthLinks";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUserProfile } from "../../../store/reducers/auth/auth.slice";
import { StyledSmallButton } from "../../elements/StyledSmallButon/StyledSmallButton";
import { SignOut } from "../../../store/reducers/auth/thunks/sign-out.thunk";

export const AppHeaderOld = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentUser = useSelector(selectCurrentUserProfile);

  const handleLogout = () => {
    return dispatch(SignOut());
  };

  return (
    <Box
      sx={{
        minHeight: 60,
        borderRadius: CHAMFER,
        width: "100%",
        marginBottom: 1,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        padding: 2,
        justifyContent: "space-between",
      }}
    >
      <Box
        sx={{ height: "65px", cursor: "pointer" }}
        onClick={() => navigate("/")}
      >
        <img src={logo} alt="the Afrofit logo" height={"100%"} />
      </Box>
      <NavLinks />
      {currentUser ? (
        <Stack direction="row" spacing={2}>
          <StyledSmallButton title="Log out" onClick={handleLogout} />
        </Stack>
      ) : (
        <NavAuthLinks />
      )}
    </Box>
  );
};
