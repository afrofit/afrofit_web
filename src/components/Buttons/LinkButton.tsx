import { LinkButtonText, StyledNavLink } from "./styled";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { COLORS, ColorType } from "../../constants/colors";

interface Props {
  title: string;
  route: string;
  color: ColorType;
  textcolor?: ColorType;
  onClick?: () => void;
}

const activeLinkStyle = {};

export const LinkButton: React.FC<Props> = ({
  title,
  route,
  onClick,
  color,
  textcolor = "white",
}) => {
  return (
    <StyledNavLink
      to={`${route}`}
      onClick={onClick}
      style={({ isActive }) => activeLinkStyle}
      color={color}
    >
      <LinkButtonText textcolor={textcolor}>{title}</LinkButtonText>
      <ArrowForwardIcon sx={{ color: COLORS[textcolor] }} />
    </StyledNavLink>
  );
};
