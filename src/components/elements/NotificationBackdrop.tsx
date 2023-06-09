import { Backdrop, Box, Stack, Typography } from "@mui/material";
import { COLORS } from "../../constants/colors";
import { CHAMFER } from "../../constants/globals";
import { SmallButton } from "../Buttons/SmallButton";

interface Props {
  open: boolean;
  onClose: () => void;
}

export const NotificationBackdrop: React.FC<Props> = ({
  open = false,
  onClose,
}) => {
  return (
    <Backdrop
      sx={{ color: COLORS.white, zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={open}
    >
      <Box
        sx={{
          backgroundColor: COLORS.hilite_purpink,
          minHeight: 10,
          width: "60%",
          borderRadius: CHAMFER,
          padding: "20px 40px",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography sx={{ fontSize: 20, marginRight: 3 }}>
          Hey! It looks like you haven't subscribed yet!
        </Typography>
        <Stack display="flex" flexDirection="row" columnGap={2}>
          <SmallButton
            color="purple_200"
            textcolor="fuschia"
            title="Find out more"
            onClick={() => null}
          />
          <SmallButton
            color="purple_200"
            textcolor="fuschia"
            title="Dismiss"
            onClick={onClose}
          />
        </Stack>
      </Box>
    </Backdrop>
  );
};
