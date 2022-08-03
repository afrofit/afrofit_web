import { CHAMFER } from "./../../constants/globals";
import { COLORS, ColorType } from "./../../constants/colors";
import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

interface Props {
  color?: ColorType;
  textcolor?: ColorType;
}
export const CustomButton = styled.button<Props>`
  padding: 12px 20px;
  color: ${({ textcolor }) => textcolor && COLORS[textcolor]};
  background-color: ${({ color }) => color && COLORS[color]};
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 2px;
  text-transform: uppercase;
  border-radius: ${CHAMFER};
  text-decoration: none;
  text-align: center;
  display: inline-block;
  cursor: pointer;
  border: none;
`;

export const StyledNavLink = styled(NavLink)<Props>`
  height: 65px;
  width: 500px;
  padding: 15px;
  border-radius: ${CHAMFER};
  background-color: ${({ color }) => color && COLORS[color]};
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.5s ease-in-out;

  &:hover {
    padding-right: 20px;
  }
`;

export const LinkButtonText = styled(Typography)<Props>`
  font-size: 20px;
  color: ${({ textcolor }) => textcolor && COLORS[textcolor]};
  text-align: center;
  margin-right: auto;
  letter-spacing: 1px;
  flex: 1;
  transition: 0.5s ease-in-out;

  &:hover {
    letter-spacing: 1.3px;
  }
`;
