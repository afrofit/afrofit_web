import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { COLORS } from "../../../constants/colors";

interface Props {
  focused: boolean;
}

export const IconWrapper = styled.div`
  height: 100%;
  width: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.2s ease-in-out;
`;

export const StyledInput = styled.input`
  border: none;
  background: none;
  background-color: transparent;
  outline: none;
  font-size: 20px;
  color: ${COLORS.white};
  width: 100%;
  margin-left: 15px;
  height: 100%;
`;

export const StyledInputWrapper = styled.div<Props>`
  height: ${({ focused }) => (focused ? "60px" : "60px")};
  border-radius: 10px;
  border-width: ${({ focused }) => (focused ? "2px" : "2px")};
  border-style: solid;
  border-color: ${COLORS.hilite_purpink};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 15px;
  margin: 0;
  transition: 0.2s ease-in-out;
  flex: 1;
`;

export const StyledWrapper = styled(Box)`
  display: flex;
  width: 100%;
  flex-direction: column;
`;
