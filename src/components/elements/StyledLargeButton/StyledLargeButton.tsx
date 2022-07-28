import { Button } from "@mui/material";
import { COLORS, ColorType } from "../../../constants/colors";
import { CHAMFER } from "../../../constants/globals";
import { StyledButtonElement, ButtonText } from "./styled";

interface Props {
  title: string;
  color: ColorType;
  textcolor?: ColorType;
  hoverColorBg?: ColorType;
  hoverColorText?: ColorType;
  onClick: () => void;
}

export const StyledLargeButton: React.FC<Props> = ({
  title,
  onClick,
  color,
  textcolor = "white",
  hoverColorBg = "dark_200",
  hoverColorText = "dark_200",
}) => {
  return (
    <Button
      sx={[
        {
          height: "60px",
          width: "100%",
          padding: 2,
          borderRadius: CHAMFER,
          // backgroundColor: COLORS[color],
          backgroundImage: `linear-gradient(45deg, ${COLORS.orange_200}, ${COLORS.hilite_purpink})`,
          marginTop: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        },
        {
          "&:hover": {
            color: COLORS[hoverColorText],
            backgroundColor: COLORS[hoverColorBg],
          },
        },
      ]}
      onClick={onClick}
    >
      <ButtonText textcolor={textcolor}>{title}</ButtonText>
    </Button>
  );
};
