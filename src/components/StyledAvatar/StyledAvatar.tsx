import { Box } from "@mui/material";
import { COLORS } from "../../constants/colors";

interface Props {
  src: any;
  size: number;
  mb?: number;
  mr?: number;
  ml?: number;
  mt?: number;
  m?: number;
}

export const StyledAvatar: React.FC<Props> = ({
  src,
  size,
  mb,
  mt,
  mr,
  ml,
  m,
}) => {
  return (
    <Box
      sx={{
        height: size,
        width: size,
        cursor: "pointer",
        backgroundColor: COLORS.fuschia,
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
