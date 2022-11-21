import { LinkButtonText, StyledNavLink } from "./styled";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { COLORS, ColorType } from "../../constants/colors";

interface Props {
  title: string;
  route: string;
  color: ColorType;
  textcolor?: ColorType;
  onClick?: () => void;
  mb?: number;
}

const activeLinkStyle = {};

export const LinkButton: React.FC<Props> = ({
  title,
  route,
  onClick,
  color,
  textcolor = "white",
  mb,
}) => {
  return (
    <StyledNavLink
      to={`${route}`}
      onClick={onClick}
      style={({ isActive }) => activeLinkStyle}
      color={color}
      mb={mb}
    >
      <LinkButtonText textcolor={textcolor}>{title}</LinkButtonText>
      <ArrowForwardIcon sx={{ color: COLORS[textcolor] }} />
    </StyledNavLink>
  );
};
