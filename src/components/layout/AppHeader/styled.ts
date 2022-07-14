import { NavLink } from "react-router-dom";
import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import { COLORS } from "../../../constants/colors";
import { CHAMFER } from "../../../constants/globals";

export const NavLinkText = styled(Typography)`
  /* color: ${COLORS.hilite_purpink}; */
  color: "inherit";
  font-size: 20px;
  /* width: 100%; */
  transition: 0.2s ease-in-out;
  letter-spacing: 1px;
  font-weight: 300;

  &:hover {
    letter-spacing: 1.5px;
    color: ${COLORS.fuschia};
  }
`;

interface AuthNavLinkProps {
  outlined?: boolean;
}

export const AuthLinkText = styled(Typography)<AuthNavLinkProps>`
  color: ${({ outlined }) => !outlined && COLORS.white};
  font-size: 16px;
  transition: 0.2s ease-in-out;
  letter-spacing: 1px;
  font-weight: ${({ outlined }) => (outlined ? 300 : 500)};
  text-decoration: none;
  text-align: center;

  &:hover {
    color: ${COLORS.fuschia};
  }
`;

export const AuthNavLink = styled(NavLink)<AuthNavLinkProps>`
  background-image: ${({ outlined }) =>
    !outlined &&
    `linear-gradient(45deg, ${COLORS.orange_200}, ${COLORS.hilite_purpink})`};

  min-width: 110px;
  text-decoration: "none";
  padding: 10px;
  color: ${COLORS.whiteblue};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${CHAMFER};
  transition: 0.2s ease-in-out;
  border: ${({ outlined }) => outlined && `1px solid ${COLORS.whiteblue}`};

  &:hover {
    min-width: 113px;
    border: ${({ outlined }) => outlined && `1px solid ${COLORS.fuschia}`};
  }
`;
