import { ListItem } from "@mui/material";
import { NavLink } from "react-router-dom";
import { COLORS } from "../../../constants/colors";
import { NavLinkText } from "./styled";

interface Props {
  title: string;
  route: string;
  onClick?: () => void;
}

const activeLinkStyle = {
  borderRadius: "6px",
  color: COLORS.fuschia,
  padding: "8px 12px",
  textDecoration: `none`,
  width: "100%",
};

export const NavLinkItem: React.FC<Props> = ({ title, route, onClick }) => {
  return (
    <ListItem disablePadding sx={{}}>
      <NavLink
        to={`${route}`}
        onClick={onClick}
        style={({ isActive }) =>
          isActive
            ? activeLinkStyle
            : {
                ...activeLinkStyle,
                color: COLORS.hilite_purpink,
                width: "100%",
                // backgroundColor: "transparent",
                textDecoration: "none",
              }
        }
      >
        <NavLinkText>{title}</NavLinkText>
      </NavLink>
    </ListItem>
  );
};
