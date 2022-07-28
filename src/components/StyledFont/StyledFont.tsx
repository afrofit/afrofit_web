import { StyledFontElement } from "./styled";

export type FontVariantsType = "title" | "body";

export type FontStylesType = {
  [key in FontVariantsType]: React.CSSProperties;
};

const fontStyles: FontStylesType = {
  title: {
    fontSize: 40,
    fontWeight: 500,
    marginBottom: 2,
  },
  body: {
    fontSize: 16,
  },
};

interface Props {
  children: React.ReactNode;
  variant: FontVariantsType;
}

export const StyledFont: React.FC<Props> = ({ children, variant }) => {
  return (
    <StyledFontElement sx={fontStyles[variant]}>{children}</StyledFontElement>
  );
};
