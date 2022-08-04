import { Backdrop, Box, Divider, Grid, Stack, Typography } from "@mui/material";
import { COLORS } from "../../constants/colors";
import { CHAMFER } from "../../constants/globals";
import { DISPLAY_PIC_MAPS } from "../../data/dp-maps";
import { DisplayPictureClicker } from "../../pages/Auth/components/DisplayPictureClicker/DisplayPictureClicker";
import { SmallButton } from "../Buttons/SmallButton";

interface Props {
  open: boolean;
  onClose: () => void;
  onSelectDp: (dpId: number) => void;
  selectedDp: number;
}

export const DisplayPicturePicker: React.FC<Props> = ({
  open = false,
  onClose,
  onSelectDp,
  selectedDp,
}) => {
  return (
    <Backdrop
      sx={{ color: COLORS.white, zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={open}
    >
      <Box
        sx={{
          backgroundColor: COLORS.dark_200,
          minHeight: 10,
          width: "60%",
          borderRadius: CHAMFER,
          padding: "20px 40px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          borderWidth: 2,
          borderStyle: "solid",
          borderColor: COLORS.dark_100,
        }}
      >
        <Stack
          display="flex"
          flexDirection="row"
          columnGap={2}
          width="100%"
          justifyContent={"space-between"}
        >
          <Typography sx={{ fontSize: 20, marginRight: 3 }}>
            Select your favorite avatar!
          </Typography>
          <SmallButton
            color="dark_400"
            textcolor="whiteblue"
            title="Dismiss"
            onClick={onClose}
          />
        </Stack>
        <Divider />
        <Grid
          container
          columns={10}
          spacing={2}
          sx={{ width: "100%", marginTop: 2 }}
        >
          {DISPLAY_PIC_MAPS.map((dp: number, index: number) => (
            <Grid item xs={2} key={dp}>
              <DisplayPictureClicker
                dpId={dp + 1}
                size={150}
                onClick={() => onSelectDp(dp + 1)}
                imageOnly
                selected={selectedDp === dp + 1}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Backdrop>
  );
};
