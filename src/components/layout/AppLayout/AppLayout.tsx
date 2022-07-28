import * as React from "react";
import { Box, Container } from "@mui/material";
import { COLORS } from "../../../constants/colors";
import { AppFooter } from "../AppFooter/AppFooter";
import { AppHeader } from "../AppHeader/AppHeader";

interface Props {
  children: React.ReactNode;
  authorized: boolean;
}

export const AppLayout: React.FC<Props> = ({ children, authorized }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "space-between",
        justifyContent: "space-between",
        width: "100%",
        minHeight: "100vh",
        backgroundImage: `linear-gradient(20deg, ${COLORS.dark_200}, ${COLORS.dark_300})`,
        postion: "relative",
      }}
    >
      <AppHeader authorized={authorized} />
      <Container
        maxWidth="lg"
        sx={{
          paddingTop: 5,
          paddingBottom: 5,
          flex: 1,
        }}
      >
        {children}
      </Container>
      <AppFooter authorized={authorized} />
    </Box>
  );
};
