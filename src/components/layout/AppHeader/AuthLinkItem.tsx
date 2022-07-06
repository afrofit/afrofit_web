import { ListItem } from "@mui/material";
import { NavLink } from "react-router-dom";
import { COLORS } from "../../../constants/colors";
import { CHAMFER } from "../../../constants/globals";
import { AuthLinkText, AuthNavLink, NavLinkText } from "./styled";

interface Props {
  title: string;
  route: string;
  onClick?: () => void;
  outlined?: boolean;
}

const activeLinkStyle: React.CSSProperties = {
  textDecoration: "none",
};

export const AuthLinkItem: React.FC<Props> = ({
  title,
  route,
  onClick,
  outlined,
}) => {
  return (
    <ListItem disablePadding sx={{}}>
      <AuthNavLink
        style={({ isActive }) => activeLinkStyle}
        to={`${route}`}
        onClick={onClick}
        outlined={outlined}
      >
        <AuthLinkText outlined={outlined}>{title}</AuthLinkText>
      </AuthNavLink>
    </ListItem>
  );
};
