import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import { Box, Grid } from "@mui/material";
import PlayStoreLogo from "../../assets/img/playstore.png";
import AppStoreLogo from "../../assets/img/appstore.png";
import CloseIcon from "@mui/icons-material/Close";

interface Props {
  open: boolean;
  onClose: () => void;
  //   response: string; // API response
}

const Appselect: React.FC<Props> = ({ open, onClose }) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      sx={{ marginTop: "100px" }}
    >
      <DialogTitle
        id="alert-dialog-title"
        sx={{
          alignItems: "center",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {"OPEN OR DOWNLOAD APP TO BEGIN."}
        <CloseIcon onClick={onClose} />
      </DialogTitle>

      <DialogActions
        sx={{ textAlign: "center", margin: "auto", padding: "15px" }}
      >
        <Grid
          container
          spacing={2}
          alignItems="stretch"
          mt={1}
          mb={3}
          sx={{
            display: { xs: "flex" },
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              height: { xs: "70px", md: "100px" },
              cursor: "pointer",
              marginBottom: { xs: 0, md: 2 },
              marginTop: { xs: 1, md: 2 },
              marginLeft: 2,
              marginRight: 2,
            }}
          >
            <a
              href="https://djminddgap.page.link/afrofit"
              target="_blank"
              rel="noreferrer"
            >
              <img src={PlayStoreLogo} alt="the Afrofit logo" height={"100%"} />
            </a>
          </Box>
          <Box
            sx={{
              height: { xs: "70px", md: "100px" },
              cursor: "pointer",
              marginBottom: { xs: 0, md: 2 },
              marginTop: { xs: 1, md: 2 },
              marginLeft: 2,
              marginRight: 2,
            }}
          >
            <a
              href="https://djminddgap.page.link/afrofit"
              target="_blank"
              rel="noreferrer"
            >
              <img src={AppStoreLogo} alt="the Afrofit logo" height={"100%"} />
            </a>
          </Box>
        </Grid>
      </DialogActions>
    </Dialog>
  );
};

export default Appselect;
