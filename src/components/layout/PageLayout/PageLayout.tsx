import { Box } from "@mui/material";
import { StyledFont } from "../../StyledFont/StyledFont";

interface Props {
  children: React.ReactNode;
  title: string;
  buttonComponent?: React.ReactNode;
  showButton?: boolean;
}

export const PageLayout: React.FC<Props> = ({
  children,
  title,
  buttonComponent,
  showButton = false,
}) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flex: 1,
          height: "100%",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ display: { xs: "none", md: "block" } }}>
          <StyledFont variant="title">{title}</StyledFont>
        </Box>
        <Box sx={{ display: { xs: "block", md: "none" } }}>
          <StyledFont variant="bold">{title}</StyledFont>
        </Box>
        {buttonComponent && showButton && <Box>{buttonComponent}</Box>}
      </Box>
      <Box>{children}</Box>
    </>
  );
};
