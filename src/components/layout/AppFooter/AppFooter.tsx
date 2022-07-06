import { Box, Typography } from "@mui/material";
import { COLORS } from "../../../constants/colors";
import { CHAMFER } from "../../../constants/globals";
import logo from "../../../assets/img/logofull_nobg.png";
import { NavLinks } from "../AppHeader/NavLinks";

export const AppFooter = () => {
  return (
    <Box
      sx={{
        minHeight: 100,
        borderRadius: CHAMFER,
        width: "100%",
        backgroundColor: COLORS.dark_300,
        border: `1px solid ${COLORS.dark_200}`,
        padding: 3,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box sx={{ height: 50, marginBottom: 3 }}>
        <img src={logo} alt="the Afrofit logo" height="100%" />
      </Box>
      <NavLinks />
      <Typography
        sx={{
          fontSize: 16,
          fontWeight: 400,
          color: COLORS.white,
          marginBottom: 1,
          marginTop: 4,
        }}
      >
        123, Afrofit Avenue, Afrofit Nation, United Kingdom. info@afrofitapp.com
      </Typography>
      <Typography
        sx={{
          fontSize: 12,
          fontWeight: 500,
          color: COLORS.whiteblue,
        }}
      >
        &copy; Copyright (2022). Afrofit App Limited. Built by{" "}
        <em>Hunterborne</em>
      </Typography>
    </Box>
  );
};
