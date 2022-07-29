import { ColorType, COLORS } from "./../../constants/colors";
import { Typography } from "@mui/material";
import styled from "@emotion/styled";

interface Props {
  color: ColorType;
}

export const StyledFontElement = styled(Typography)<Props>`
  color: ${({ color }: { color: ColorType }) => color && COLORS[color]};
`;
