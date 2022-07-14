import { COLORS, ColorType } from "../../../constants/colors";
import { StyledNavLink, StyledNavLinkText } from "./styled";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

interface Props {
  title: string;
  route: string;
  color: ColorType;
  textcolor?: ColorType;
  onClick?: () => void;
}

const activeLinkStyle = {};

export const LargeLinkButton: React.FC<Props> = ({
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
      <StyledNavLinkText textcolor={textcolor}>{title}</StyledNavLinkText>
      <ArrowForwardIcon sx={{ color: COLORS[textcolor] }} />
    </StyledNavLink>
  );
};
