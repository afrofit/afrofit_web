import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import { COLORS, ColorType } from "../../../constants/colors";
import { CHAMFER } from "../../../constants/globals";

interface LinkProps {
  color: ColorType;
}

export const StyledButtonElement = styled.button<LinkProps>`
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
  transition: 0.5s ease-in-out;

  &:hover {
    padding-right: 20px;
  }
`;

interface TextProps {
  textcolor?: ColorType;
}

export const ButtonText = styled(Typography)<TextProps>`
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
