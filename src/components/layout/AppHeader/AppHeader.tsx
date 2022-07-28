import { Box, Container, Divider, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

import AppLogo from "../../../assets/img/logofull_nobg.png";
import { COLORS } from "../../../constants/colors";
import { SmallButton } from "../../Buttons/SmallButton";
import { StyledNavLink } from "./StyledNavLink";

interface Props {
  authorized: boolean;
}

export const AppHeader: React.FC<Props> = ({ authorized }) => {
  const navigate = useNavigate();

  if (authorized)
    return (
      <Box
        sx={{
          display: "flex",
          height: "140px",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Container maxWidth="xl" sx={{ paddingTop: 5, paddingBottom: 5 }}>
          <Stack
            width="100%"
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box
              width={400}
              sx={{
                display: "flex",
                justifyContent: "flex-start",
              }}
            >
              <Stack
                direction="row"
                spacing={2}
                divider={
                  <Divider
                    orientation="vertical"
                    color={COLORS.white}
                    sx={{
                      opacity: 0.2,
                      height: 0.3,
                      alignSelf: "center",
                    }}
                    flexItem
                  />
                }
              >
                <StyledNavLink
                  title="Classes"
                  route="classes"
                  onClick={() => null}
                />
                <StyledNavLink
                  title="Events"
                  route="events"
                  onClick={() => null}
                />
                <StyledNavLink title="Shop" route="shop" onClick={() => null} />
                <StyledNavLink
                  title="Music"
                  route="music"
                  onClick={() => null}
                />
              </Stack>
            </Box>
            <Box
              sx={{ height: "85px", cursor: "pointer" }}
              onClick={() => navigate("/")}
            >
              <img src={AppLogo} alt="the Afrofit logo" height={"100%"} />
            </Box>
            <Box
              width={400}
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
              }}
            >
              <Box marginRight={3}>
                <StyledNavLink
                  title="My Profile"
                  route="profile"
                  onClick={() => null}
                />
              </Box>
              <SmallButton
                title="Sign out"
                onClick={() => console.log("Button clicked!")}
              />
            </Box>
          </Stack>
        </Container>
      </Box>
    );

  return (
    <Box
      sx={{
        display: "flex",
        height: "140px",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container maxWidth="xl" sx={{ paddingTop: 5, paddingBottom: 5 }}>
        <Stack sx={{}}>
          <Box
            sx={{ height: "85px", cursor: "pointer" }}
            onClick={() => navigate("/")}
          >
            <img src={AppLogo} alt="the Afrofit logo" height={"100%"} />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};
