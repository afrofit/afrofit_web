import { Box, Container } from "@mui/material";
import { COLORS } from "../../../constants/colors";
import logo from "../../../assets/img/logofull_nobg.png";
import { CHAMFER } from "../../../constants/globals";
import { NavLinks } from "./NavLinks";
import { NavAuthLinks } from "./NavAuthLinks";
import { useNavigate } from "react-router-dom";

export const AppHeader = () => {
  const navigate = useNavigate();
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
      <NavAuthLinks />
    </Box>
  );
};
