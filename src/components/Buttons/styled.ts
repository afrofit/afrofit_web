import { CHAMFER } from "./../../constants/globals";
import { COLORS, ColorType } from "./../../constants/colors";
import styled from "@emotion/styled";

interface Props {
  color: ColorType;
  textColor: ColorType;
}
export const CustomButton = styled.button<Props>`
  padding: 12px 20px;
  color: ${({ textColor }) => COLORS[textColor]};
  background-color: ${({ color }) => COLORS[color]};
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
