import { Button, Stack, Typography } from "@mui/material";
import * as React from "react";
import { COLORS } from "../../../constants/colors";
import { BannerWrapper } from "./styled";

interface Props {}
export const AppBanner: React.FC<Props> = () => {
  return (
    <BannerWrapper>
      <Stack
        sx={{
          display: "flex",
          flexDirection: "row",
          color: COLORS.white,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button
          sx={{
            margin: "0 10px",
          }}
          variant="outlined"
          color="secondary"
        >
          Join the Club!
        </Button>
        <Button
          sx={{
            margin: "0 10px",
          }}
          variant="outlined"
          color="secondary"
        >
          Sign in
        </Button>
      </Stack>
    </BannerWrapper>
  );
};
