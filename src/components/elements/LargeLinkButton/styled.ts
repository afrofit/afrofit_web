import { NavLink } from "react-router-dom";
import styled from "@emotion/styled";
import { COLORS, ColorType } from "../../../constants/colors";
import { CHAMFER } from "../../../constants/globals";
import { Typography } from "@mui/material";

interface LinkProps {
  color: ColorType;
}

export const StyledNavLink = styled(NavLink)<LinkProps>`
  height: 300px;
  width: 400px;
  padding: 15px;
  border-radius: ${CHAMFER};
  background-color: ${({ color }) => color && COLORS[color]};
  text-decoration: none;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

interface TextProps {
  textColor?: ColorType;
}

export const StyledNavLinkText = styled(Typography)<TextProps>`
  font-size: 20px;
  color: ${({ textColor }) => textColor && COLORS[textColor]};
  text-align: center;
  margin-right: auto;
  flex: 1;
`;
