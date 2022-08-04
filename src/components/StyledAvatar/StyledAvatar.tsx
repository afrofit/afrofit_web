import { Box } from "@mui/material";
import { COLORS, ColorType } from "../../constants/colors";

interface Props {
  src: any;
  size: number;
  mb?: number;
  mr?: number;
  ml?: number;
  mt?: number;
  m?: number;
  bgColor?: ColorType;
  onClick: () => void;
}

export const StyledAvatar: React.FC<Props> = ({
  src,
  size,
  mb,
  mt,
  mr,
  ml,
  m,
  bgColor = "whiteblue",
  onClick,
}) => {
  return (
    <Box
      onClick={onClick}
      sx={{
        height: size,
        width: size,
        cursor: "pointer",
        backgroundColor: COLORS[bgColor],
        borderRadius: 100,
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: mb,
        marginLeft: ml,
        marginRight: mr,
        marginTop: mt,
        margin: m,
      }}
    >
      <img src={src} alt="the Afrofit logo" height={"100%"} />
    </Box>
  );
};
