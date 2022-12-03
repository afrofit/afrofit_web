import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { COLORS } from "../../../../constants/colors";
import { CHAMFER } from "../../../../constants/globals";

interface Props {
  onClick: () => void;
  dpId: number;
  size?: number | string;
  imageOnly?: boolean;
  selected?: boolean;
}

export const DisplayPictureClicker: React.FC<Props> = ({
  onClick,
  dpId,
  size = 95,
  imageOnly = false,
  selected = false,
}) => {
  if (imageOnly)
    return (
      <Box
        onClick={onClick}
        sx={{
          height: size,
          width: size,
          backgroundColor: COLORS.whiteblue,
          borderRadius: CHAMFER,
          cursor: "pointer",
          borderWidth: selected ? 4 : 2,
          borderStyle: "solid",
          borderColor: !selected ? COLORS.purple_100 : COLORS.hilite_purpink,
          overflow: "hidden",
          
        }}
      >
        <img
          src={require(`../../../../assets/img/dp/${dpId}.png`)}
          style={{ width: "100%", height: "100%" }}
          alt="The current user's display"
        />
      </Box>
    );

  return (
    <Box
      width={"100%"}
      sx={{
        display: { xs: "flex" },
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        onClick={onClick}
        sx={{
          height: size,
          width: size,
          backgroundColor: COLORS.whiteblue,
          borderRadius: CHAMFER,
          cursor: "pointer",
          marginRight: 2,
          borderWidth: 2,
          borderStyle: "solid",
          borderColor: COLORS.hilite_purpink,
          overflow: "hidden",
        }}
      >
        <img
          src={require(`../../../../assets/img/dp/${dpId}.png`)}
          style={{ width: "100%", height: "100%" }}
          alt="The current user's display"
        />
      </Box>
      <Typography
        sx={{
          color: COLORS.hilite_purpink,
          marginBottom: 1,
          textTransform: "uppercase",
          fontSize: 15,
          letterSpacing: 1,
          textAlign: { xs: "center", md: "left" },
          marginTop: { xs: 2, md: 0 },
        }}
      >
        Tap on the image to choose your display picture
      </Typography>
    </Box>
  );
};
