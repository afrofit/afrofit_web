import { COLORS, ColorType } from "../../constants/colors";
import { StyledFontElement } from "./styled";

export type FontVariantsType = "title" | "body1" | "body2" | "bold" | "bold2";

export type FontStylesType = {
  [key in FontVariantsType]: React.CSSProperties;
};

const fontStyles: FontStylesType = {
  title: {
    fontSize: 40,
    fontWeight: 300,
    marginBottom: 2,
    color: COLORS.orange_200,
  },
  bold: {
    fontSize: 30,
    fontWeight: 300,
    color: COLORS.whiteblue,
  },
  bold2: {
    fontSize: 25,
    fontWeight: 300,
    color: COLORS.whiteblue,
  },
  body1: {
    fontSize: 16,
    fontWeight: 500,
    color: COLORS.whiteblue,
  },
  body2: {
    fontSize: 16,
    fontWeight: 300,
    color: COLORS.whiteblue,
  },
};

interface Props {
  children: React.ReactNode;
  variant: FontVariantsType;
  color?: ColorType;
}

export const StyledFont: React.FC<Props> = ({
  children,
  variant,
  color = "white",
}) => {
  return (
    <StyledFontElement color={color} sx={fontStyles[variant]}>
      {children}
    </StyledFontElement>
  );
};
