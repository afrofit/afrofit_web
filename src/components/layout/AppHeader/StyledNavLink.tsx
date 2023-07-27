import { Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import { COLORS } from "../../../constants/colors";

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
  // width: "100%",
  height: 30,
  display: "flex",
  alignItems: "center",
};

export const StyledNavLink: React.FC<Props> = ({ title, onClick, route }) => {
  return (
    <NavLink
      className="navlink1"
      to={`${route}`}
      onClick={onClick}
      style={({ isActive }) =>
        isActive
          ? activeLinkStyle
          : {
              ...activeLinkStyle,
              color: COLORS.hilite_purpink,
              textDecoration: "none",
              display: "inline-block",
            }
      }
    >
      <Typography
        sx={{
          fontSize: 14,
          fontWeight: 500,
          textTransform: "uppercase",
          letterSpacing: 2,
          color: "inherit",
        }}
      >
        {title}
      </Typography>
    </NavLink>
  );
};
