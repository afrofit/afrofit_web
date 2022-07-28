import { CHAMFER } from "./../../constants/globals";
import { COLORS } from "./../../constants/colors";
import styled from "@emotion/styled";

export const CustomButton = styled.button`
  padding: 12px 20px;
  color: ${COLORS.white};
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 2px;
  text-transform: uppercase;
  border-radius: ${CHAMFER};
  text-decoration: none;
  text-align: center;
  display: inline-block;
  background-color: ${COLORS.fuschia};
  cursor: pointer;
`;
