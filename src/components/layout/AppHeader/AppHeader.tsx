import { Box, Container } from "@mui/material";
import { COLORS } from "../../../constants/colors";
import logo from "../../../assets/img/logofull_nobg.png";
import { CHAMFER } from "../../../constants/globals";
import { NavLinks } from "./NavLinks";
import { NavAuthLinks } from "./NavAuthLinks";

export const AppHeader = () => {
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
      <Box sx={{ height: "65px" }}>
        <img src={logo} alt="the Afrofit logo" height={"100%"} />
      </Box>
      <NavLinks />
      <NavAuthLinks />
    </Box>
  );
};
