import { Box, Typography } from "@mui/material";
import { COLORS } from "../../../constants/colors";
import logo from "../../../assets/img/logofull_nobg.png";

interface Props {
  authorized: boolean | null;
}

export const AppFooter: React.FC<Props> = ({ authorized }) => {
  return (
    <Box
      sx={{
        minHeight: 50,
        width: "100%",
        padding: 2,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box sx={{ height: 40, marginBottom: 2 }}>
        <img src={logo} alt="the Afrofit logo" height="100%" />
      </Box>

      <Typography
        sx={{
          fontSize: 12,
          fontWeight: 500,
          color: COLORS.whiteblue,
          marginBottom: 1,
        }}
      >
        &copy; Copyright (2022). Afrofit App Limited. Built by{" "}
        <em>Hunterborne</em>
      </Typography>
    </Box>
  );
};
