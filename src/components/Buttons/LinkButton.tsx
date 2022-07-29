import { LinkButtonText, StyledNavLink } from "./styled";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { COLORS, ColorType } from "../../constants/colors";

interface Props {
  title: string;
  route: string;
  color: ColorType;
  textColor?: ColorType;
  onClick?: () => void;
}

const activeLinkStyle = {};

export const LinkButton: React.FC<Props> = ({
  title,
  route,
  onClick,
  color,
  textColor = "white",
}) => {
  return (
    <StyledNavLink
      to={`${route}`}
      onClick={onClick}
      style={({ isActive }) => activeLinkStyle}
      color={color}
    >
      <LinkButtonText textColor={textColor}>{title}</LinkButtonText>
      <ArrowForwardIcon sx={{ color: COLORS[textColor] }} />
    </StyledNavLink>
  );
};
