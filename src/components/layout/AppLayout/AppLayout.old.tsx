import * as React from "react";
import { Box, Container } from "@mui/material";
import { COLORS } from "../../../constants/colors";
import { AppFooter } from "../AppFooter/AppFooter";
import { AppHeader } from "../AppHeader/AppHeader";

interface Props {
  children: React.ReactNode;
}

export const AppLayoutOld: React.FC<Props> = ({ children }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        minHeight: "100vh",
        backgroundImage: `linear-gradient(20deg, ${COLORS.dark_400}, ${COLORS.dark_300})`,
        postion: "relative",
        backgroundColor: COLORS.dark_400,
      }}
    >
      <Container sx={{ paddingTop: 5, paddingBottom: 5 }}>
        <AppHeader authorized />
        {children} <AppFooter authorized />
      </Container>
    </Box>
  );
};
