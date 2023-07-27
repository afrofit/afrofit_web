import { Box, Typography } from "@mui/material";
import { COLORS } from "../../../constants/colors";
import logo from "../../../assets/img/logofull_nobg.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import tiktok from "../../../assets/img/webp/tiktok.svg";

import facebook2 from "../../../assets/img/webp/facebook2.svg";
import instagram from "../../../assets/img/webp/instagram.svg";

import facebookwhite from "../../../assets/img/webp/facebookwhite.svg";
import { useLocation, useNavigate } from "react-router-dom";
import HouseIcon from "@mui/icons-material/House";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

interface Props {
  authorized: boolean | null;
}

export const AppFooter: React.FC<Props> = ({ authorized }) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      {/* <div style={{ display: "flex" }}> */}

      {!(location.pathname === "/") ? (
        <div className="maindiv-homelog">
          <Box className="footericon" onClick={() => navigate("/")}>
            {/* <Typography sx={{ color: COLORS.white }}> Home</Typography> */}
            {/* <KeyboardBackspaceIcon sx={{ color: COLORS.white }} /> */}
            {/* <Typography sx={{ color: COLORS.white }}> Back to</Typography> */}

            <HouseIcon
              sx={{
                padding: 0,
                width: "2rem",
                color: "#f26c68",
                height: "4rem",
              }}
            />
          </Box>
        </div>
      ) : null}
      <Box
        sx={{
          minHeight: 210,
          width: "100%",
          padding: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box sx={{ height: 45, marginBottom: 2, maxHeight: "100%" }}>
          <img src={logo} alt="the Afrofit logo" height="100%" />
        </Box>

        <Typography
          className="footer-text"
          sx={{
            fontSize: 12,
            fontWeight: 500,
            color: COLORS.whiteblue,
            marginBottom: 1,
            display: "flex",
            flexDirection: "column",
          }}
        >
          &copy; Copyright (2022). Afrofit App Limited. Built by Hunterborne
        </Typography>
        <div
          style={{
            marginTop: "10px",
            gap: "10px",
            display: "flex",
          }}
        >
          <a
            target="_blank"
            href="https://instagram.com/djminddgap?igshid=MTIzZWMxMTBkOA=="
          >
            <img src={instagram} alt="tiktok logo" height="30rem" />
          </a>
          <a target="_blank" href="https://tiktok.com/@djminddgap">
            <img src={tiktok} alt="facebook logo" height="30rem" />
          </a>
        </div>
      </Box>

      {/* </div> */}
    </>
  );
};
