import { Box } from "@mui/material";
import * as React from "react";
import { COLORS, ColorType } from "../../constants/colors";
import { CHAMFER } from "../../constants/globals";

interface Props {
  children: React.ReactNode;
  color?: ColorType;
  outlineColor?: ColorType;
  justifyContent?: "center" | "flex-start" | "flex-end";
  alignItems?: "center" | "flex-start" | "flex-end";
  padding?: number;
  height?: number;
}

export const Card: React.FC<Props> = ({
  children,
  color = "dark_300",
  outlineColor = "dark_200",
  justifyContent = "flex-start",
  alignItems = "flex-start",
  padding = 4,
  height = 50,
}) => {
  return (
    <Box
      sx={{
        minHeight: `${height}%`,
        borderRadius: CHAMFER,
        width: "100%",
        backgroundColor: COLORS[color],
        marginBottom: 1,
        overflow: "hidden",
        display: "flex",
        alignItems,
        justifyContent,
        position: "relative",
        padding,
        boxShadow: `box-shadow: 1px 1px 15px -3px ${COLORS.black}`,
        border: `1px solid ${COLORS[outlineColor]}`,
      }}
    >
      {children}
    </Box>
  );
};
