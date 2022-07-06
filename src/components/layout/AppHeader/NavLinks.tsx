import { Divider, Stack } from "@mui/material";
import { COLORS } from "../../../constants/colors";
import { NavLinkItem } from "./NavLinkItem";

export const NavLinks = () => {
  return (
    <Stack
      direction="row"
      spacing={2}
      divider={
        <Divider
          orientation="vertical"
          color={COLORS.white}
          sx={{ opacity: 0.2 }}
          flexItem
        />
      }
    >
      <NavLinkItem title="Events" route="events" />
      <NavLinkItem title="Store" route="store" />
      <NavLinkItem title="About" route="about" />
      <NavLinkItem title="Contact" route="contact" />
    </Stack>
  );
};
