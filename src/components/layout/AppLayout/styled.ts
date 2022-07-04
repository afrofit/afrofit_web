import { CHAMFER, CHAMFER_BIG, COLORS } from "./../../../styles/constants";
import styled from "styled-components";

export const AppContainer = styled.div`
  max-width: 80vw;
  height: 100vh;
  background-color: ${COLORS.dark};
  margin: 0 auto;
  padding: 30px;
`;

export const AppBackground = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: ${COLORS.dark};
`;

export const AppHeaderContainer = styled.div`
  min-height: 100px;
  width: 100%;
  background-color: ${COLORS.gray_300};
  border-radius: ${CHAMFER};
  border-width: 1px;
  border-style: solid;
  border-color: ${COLORS.lightblue};
`;

export const AppFooterContainer = styled.div`
  min-height: 50px;
  width: 100%;
  background-color: ${COLORS.black};
  border-radius: ${CHAMFER};
  border-width: 1px;
  border-style: solid;
  border-color: ${COLORS.gray_200};
`;
