import * as React from "react";
import { Box, Container, Divider } from "@mui/material";
import { COLORS } from "../../../constants/colors";
import { AppFooter } from "../AppFooter/AppFooter";
import { AppHeader } from "../AppHeader/AppHeader";
import { useLocation } from "react-router-dom";

interface Props {
  children: React.ReactNode;
  authorized: boolean;
}

export const AppLayout: React.FC<Props> = ({ children, authorized }) => {
  const location = useLocation();
  const [getheaderH, setGetheaderH] = React.useState<any>("");

  const LandingPage = location?.pathname?.length == 1;
  const ChallengePage = location?.pathname?.includes("challenge");
  return (
    <>
      {LandingPage ? (
        <>
          <Box
            id="main_content"
            className="main-content"
            sx={{
              paddingTop: `${getheaderH}px`,
              display: "flex",
              flexDirection: "column",
              alignItems: "space-between",
              justifyContent: "space-between",
              width: "100%",
              minHeight: "100vh",
              backgroundImage: `linear-gradient(20deg, ${COLORS.dark_200}, ${COLORS.dark_300})`,
              postion: "relative",
              // padding: 0,
            }}
          >
            {/* <AppHeader authorized={authorized} /> */}
            <AppHeader
              authorized={true}
              getheaderH={getheaderH}
              setGetheaderH={setGetheaderH}
            />
            <div
              style={{
                flex: 1,
                maxWidth: "100%",
                // zIndex: 999,
              }}
            >
              {children}
            </div>
            <Divider />
            <AppFooter authorized={authorized} />
          </Box>
        </>
      ) : ChallengePage ? (
        <Box
          className="main-content"
          id="main_content"
          sx={{
            display: "flex",
            flexDirection: "column",
            maxWidth: "100%",
            alignItems: "space-between",
            justifyContent: "space-between",
            width: "100%",
            paddingTop: `${getheaderH}px`,
            minHeight: "100vh",
            backgroundImage: `linear-gradient(20deg, ${COLORS.dark_200}, ${COLORS.dark_300})`,
            postion: "relative",
          }}
        >
          <AppHeader
            authorized={true}
            getheaderH={getheaderH}
            setGetheaderH={setGetheaderH}
          />
          <div>{children}</div>
          <Divider />
          <AppFooter authorized={authorized} />
        </Box>
      ) : (
        <Box
          className="main-content"
          id="main_content"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "space-between",
            justifyContent: "space-between",
            width: "100%",
            paddingTop: `${getheaderH}px`,
            minHeight: "100vh",
            backgroundImage: `linear-gradient(20deg, ${COLORS.dark_200}, ${COLORS.dark_300})`,
            postion: "relative",
          }}
        >
          <AppHeader
            authorized={true}
            getheaderH={getheaderH}
            setGetheaderH={setGetheaderH}
          />
          <Container
            maxWidth="lg"
            sx={{
              paddingTop: 5,
              paddingBottom: 5,
              flex: 1,
            }}
            // style={{
            //   padding: "50px 280px 0px 280px",
            //   display: "flex",
            //   flexDirection: "column",
            //   flex: 1,
            // }}
          >
            {children}
          </Container>
          <Divider />
          <AppFooter authorized={authorized} />
        </Box>
      )}
    </>
  );
};
