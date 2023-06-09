import styled from "@emotion/styled";
import { Button, Typography } from "@mui/material";
import { COLORS, ColorType } from "../../../constants/colors";

interface LinkProps {
  color: ColorType;
}

export const StyledButtonElement = styled(Button)<LinkProps>`
  height: 300px;
  width: 400px;
  padding: 15px;
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
  font-size: 16px;
  color: ${({ textcolor }) => textcolor && COLORS[textcolor]};
  text-align: center;
  margin-right: auto;
  letter-spacing: 1px;
  flex: 1;
  transition: 0.5s ease-in-out;
  text-transform: none;

  &:hover {
    letter-spacing: 1.3px;
  }
`;
