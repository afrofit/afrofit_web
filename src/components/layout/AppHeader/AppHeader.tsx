import { Box, Button, Container, Divider, Stack } from "@mui/material";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { EXPIRE_TOKEN } from "../../../api/storage";

import AppLogo from "../../../assets/img/logofull_nobg.png";
import { COLORS } from "../../../constants/colors";
import { storeUser } from "../../../store/reducers/auth/auth.slice";

import { StyledNavLink } from "./StyledNavLink";

interface Props {
  authorized: boolean | null;
}

export const AppHeader: React.FC<Props> = ({ authorized }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    EXPIRE_TOKEN();
    return dispatch(storeUser(undefined));
  };

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
        <Container
          maxWidth="md"
          sx={{
            display: { xs: "flex", md: "none" },
            paddingTop: 5,
            paddingBottom: 5,
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            flexDirection: "column",
            marginBottom: 5,
            minHeight: "50px",
          }}
        >
          <Box
            sx={{
              height: "50px",
              cursor: "pointer",
              // marginBottom: 1,
              marginTop: 12,
            }}
            onClick={() => navigate("/")}
          >
            <img src={AppLogo} alt="the Afrofit logo" height={"100%"} />
          </Box>
          <Box
            sx={{
              display: "flex",
              width: "70%",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <Box>
              <StyledNavLink title="Blog" route="blog" onClick={() => null} />
            </Box>
            <Box>
              <StyledNavLink
                title="Classes"
                route="classes"
                onClick={() => null}
              />
            </Box>
            <Box>
              <StyledNavLink
                title="Events"
                route="events"
                onClick={() => null}
              />
            </Box>
            <Box>
              <StyledNavLink title="Shop" route="shop" onClick={() => null} />
            </Box>
            <Box>
              <StyledNavLink title="About" route="about" onClick={() => null} />
            </Box>
            <Box>
              <StyledNavLink
                title="My Profile"
                route="profile"
                onClick={() => null}
              />
            </Box>
            <Box sx={{ marginBottom: 0 }}>
              <Button
                sx={{
                  backgroundColor: COLORS.purple_100,
                  paddingLeft: 2,
                  paddingRight: 2,
                  paddingTop: 1.1,
                  paddingBottom: 1.1,
                  borderRadius: 10,
                  letterSpacing: 2,
                  fontSize: 13,
                  fontWeight: 300,
                  marginBottom: 4,
                  marginTop: 1,
                  "&:hover": {
                    backgroundColor: COLORS.purple_200,
                  },
                }}
                onClick={handleLogout}
              >
                Sign out
              </Button>
            </Box>
          </Box>
        </Container>
        <Container
          maxWidth="xl"
          sx={{
            display: { xs: "none", md: "block" },
            paddingTop: 5,
            paddingBottom: 5,
          }}
        >
          <Box
            sx={{ height: "85px", cursor: "pointer" }}
            onClick={() => navigate("/")}
          >
            <img src={AppLogo} alt="the Afrofit logo" height={"100%"} />
          </Box>
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
                <StyledNavLink title="Blog" route="blog" onClick={() => null} />
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
                  title="About"
                  route="about"
                  onClick={() => null}
                />
              </Stack>
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
              <Button
                sx={{
                  backgroundColor: COLORS.purple_100,
                  paddingLeft: 2,
                  paddingRight: 2,
                  paddingTop: 1.1,
                  paddingBottom: 1.1,
                  borderRadius: 10,
                  letterSpacing: 2,
                  fontSize: 13,
                  fontWeight: 300,
                  "&:hover": {
                    backgroundColor: COLORS.purple_200,
                  },
                }}
                onClick={handleLogout}
              >
                Sign out
              </Button>
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
            sx={{
              height: "85px",
              width: "300px",
              cursor: "pointer",
            }}
            onClick={() => navigate("/")}
          >
            <img src={AppLogo} alt="the Afrofit logo" height={"100%"} />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};
