import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { COLORS } from "../../../constants/colors";

export const BannerWrapper = styled(Box)`
  background-image: ${`linear-gradient(45deg, ${COLORS.hilite_purpink}, ${COLORS.pink_200})`};
  height: 55px;
  padding: 10px;
  background-size: 200%;
  transition: 0.5s ease-in-out;
  display: flex;
  background-position: left;
  justify-content: flex-end;
  &:hover {
    height: 60px;
    background-image: ${`linear-gradient(45deg, ${COLORS.pink_200}), ${COLORS.orange_200}`};
    background-position: right;
  }
`;
