import { Box } from "@mui/material";
import * as React from "react";
import { COLORS, ColorType } from "../../constants/colors";
import { CHAMFER } from "../../constants/globals";

interface Props {
  children: React.ReactNode;
  color?: ColorType;
  outlineColor?: ColorType;
}

export const Card: React.FC<Props> = ({
  children,
  color = "dark_300",
  outlineColor = "dark_200",
}) => {
  return (
    <Box
      sx={{
        minHeight: 50,
        borderRadius: CHAMFER,
        width: "100%",
        backgroundColor: COLORS[color],
        marginBottom: 1,
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        position: "relative",
        padding: 4,
        boxShadow: `box-shadow: 1px 1px 15px -3px ${COLORS.black}`,
        border: `1px solid ${COLORS[outlineColor]}`,
      }}
    >
      {children}
    </Box>
  );
};
