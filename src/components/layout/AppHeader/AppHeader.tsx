/* eslint-disable jsx-a11y/anchor-is-valid */
import {
  Box,
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  Stack,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { EXPIRE_TOKEN } from "../../../api/storage";

import AppLogo from "../../../assets/img/logofull_nobg.png";
import { COLORS } from "../../../constants/colors";
import { storeUser } from "../../../store/reducers/auth/auth.slice";
import { StyledNavLink } from "./StyledNavLink";

interface Props {
  authorized: boolean | null;
  getheaderH: any | null;
  setGetheaderH: any | null;
}

export const AppHeader: React.FC<Props> = ({
  authorized,
  getheaderH,
  setGetheaderH,
}) => {
  const [open, setOpen] = useState(false);
  var offsetHeight = document.getElementById("header")?.offsetHeight;
  useEffect(() => {
    setGetheaderH(offsetHeight);
  }, [offsetHeight]);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const token = sessionStorage.getItem("STORAGE_TOKEN_KEY_standin");

  const handleLogout = () => {
    sessionStorage.clear();
    setOpen(false);
    EXPIRE_TOKEN();
    dispatch(storeUser(undefined));
    navigate("/");
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  if (authorized)
    return (
      <Box
        id="header"
        className="header"
        sx={{
          display: "flex",
          height: "auto",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          position: "fixed",
          top: 0,
          zIndex: 99999,
          backgroundColor: "#242534",
        }}
      >
        {/* mobile navbar start */}

        <Container
          className="header-nav-logo-main"
          maxWidth="md"
          sx={{
            display: { xs: "flex", md: "none" },
            paddingTop: 3,
            paddingBottom: 1,
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            flexDirection: "column",
            minHeight: "50px",
          }}
        >
          <Box
            className="header-nav-logo"
            sx={{
              height: "50px",
              cursor: "pointer",
            }}
            onClick={() => navigate("/")}
          >
            <a title="Afrofit">
              {AppLogo && (
                <img
                  src={AppLogo}
                  alt="the Afrofit logo"
                  width={"100px"}
                  height={"50px"}
                />
              )}
            </a>
          </Box>
          <Box
            sx={{
              display: "flex",
              // width: "70%",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <Box>
              <StyledNavLink title="Blog" route="/blog" />
            </Box>
            <Box>
              <StyledNavLink title="Classes" route="/classes" />
            </Box>
            <Box>
              <StyledNavLink title="Events" route="/events" />
            </Box>
            <Box>
              <StyledNavLink title="Shop" route="/shop" />
            </Box>
            <Box>
              <StyledNavLink title="About" route="/about" />
            </Box>
            <Box>
              <StyledNavLink title="Plans" route="/plan" />
            </Box>
            <Box>
              <StyledNavLink title="Faqs" route="/faqs" />
            </Box>
            <Box>
              <StyledNavLink title="Contact-us" route="/contact-us" />
            </Box>
            <Box>
              <StyledNavLink title="CHALLENGE" route="/challenge" />
            </Box>

            <Box>
              {token ? (
                <StyledNavLink title="My Profile" route="/profile" />
              ) : (
                ""
              )}
            </Box>
            <Box
              sx={{
                marginBottom: 0,
                display: "block",
                width: "100%",
                textAlign: "center",
              }}
            >
              {token ? (
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
                    marginBottom: 1,
                    marginTop: 1,
                    "&:hover": {
                      backgroundColor: COLORS.purple_200,
                    },
                  }}
                  onClick={handleClickOpen}
                >
                  Sign out
                </Button>
              ) : (
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
                  onClick={() => navigate("/login")}
                >
                  Sign in
                </Button>
              )}
            </Box>
          </Box>
        </Container>

        <div>
          {open ? (
            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">
                {"Are You Sure?"}
              </DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  Are you sure you want to Sign out ?
                </DialogContentText>
              </DialogContent>
              <DialogActions
                sx={{ textAlign: "center", margin: "auto", padding: "15px" }}
              >
                <Button
                  onClick={handleClose}
                  sx={{
                    backgroundColor: COLORS.dark_200,
                    "&:hover": {
                      backgroundColor: COLORS.dark_200,
                    },
                  }}
                >
                  Cancel
                </Button>
                <Button
                  onClick={handleLogout}
                  sx={{
                    backgroundColor: COLORS.dark_200,
                    "&:hover": {
                      backgroundColor: COLORS.dark_200,
                    },
                  }}
                >
                  Yes
                </Button>
              </DialogActions>
            </Dialog>
          ) : null}
        </div>

        {/* mobile navbar end */}

        {/* web navbar start */}

        <Container
          maxWidth="xl"
          sx={{
            display: { xs: "none", md: "block" },
            paddingTop: 2,
            paddingBottom: 2,
          }}
        >
          <Box
            className="header-nav-logo"
            sx={{
              height: "85px",
              cursor: "pointer",
            }}
            onClick={() => navigate("/")}
          >
            <a title="Afrofit">
              <img src={AppLogo} alt="the Afrofit logo" height={"100%"} />
            </a>
          </Box>
          <Stack
            className="header-nav"
            width="100%"
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            flexWrap={"wrap"}
          >
            <Box
              // width={400}
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                whiteSpace: "nowrap",
              }}
            >
              <Stack
                direction="row"
                sx={{ flexWrap: "wrap", justifyContent: "center" }}
                spacing={2}
                divider={
                  <Divider
                    orientation="vertical"
                    color={COLORS.white}
                    sx={{
                      opacity: 0.2,
                      height: 0.3,
                      alignSelf: "center",
                      display: "inline-block",
                    }}
                    flexItem
                  />
                }
              >
                <StyledNavLink title="Blog" route="/blog" />
                <StyledNavLink title="Classes" route="/classes" />
                <StyledNavLink title="Events" route="/events" />
                <StyledNavLink title="Shop" route="/shop" />
                <StyledNavLink title="About" route="/about" />
                <StyledNavLink title="Plans" route="/plan" />
                <StyledNavLink title="FAQS" route="/faqs" />
                <StyledNavLink title="Contact-us" route="/contact-us" />
                <StyledNavLink title="CHALLENGE" route="/challenge" />
              </Stack>
            </Box>

            <Box
              className="header-nav-btn"
              // width={400}
              sx={{
                // marginLeft: "px",
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
              }}
            >
              <Box marginRight={3}>
                {token ? (
                  <StyledNavLink title="My Profile" route="/profile" />
                ) : (
                  ""
                )}
              </Box>
              {token ? (
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
                  onClick={handleClickOpen}
                >
                  Sign out
                </Button>
              ) : (
                <Button
                  sx={{
                    textAlign: "center",
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
                  onClick={() => navigate("/login")}
                >
                  Sign in
                </Button>
              )}
            </Box>
          </Stack>
        </Container>

        <div>
          {open ? (
            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">
                {"Are You Sure?"}
              </DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  Are you sure you want to Sign out ?
                </DialogContentText>
              </DialogContent>
              <DialogActions
                sx={{ textAlign: "center", margin: "auto", padding: "15px" }}
              >
                <Button
                  onClick={handleClose}
                  sx={{
                    backgroundColor: COLORS.dark_200,
                    "&:hover": {
                      backgroundColor: COLORS.dark_200,
                    },
                  }}
                >
                  Cancel
                </Button>
                <Button
                  onClick={handleLogout}
                  sx={{
                    backgroundColor: COLORS.dark_200,
                    "&:hover": {
                      backgroundColor: COLORS.dark_200,
                    },
                  }}
                >
                  Yes
                </Button>
              </DialogActions>
            </Dialog>
          ) : null}
        </div>

        {/* web navbar end */}
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
            <img src={AppLogo} alt="the Afrofit logo" height={"50px"} />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};
