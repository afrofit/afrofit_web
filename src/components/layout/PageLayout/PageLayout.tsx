import { Box } from "@mui/material";
import { StyledFont } from "../../StyledFont/StyledFont";

interface Props {
  children: React.ReactNode;
  title: string;
}

export const PageLayout: React.FC<Props> = ({ children, title }) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flex: 1,
          height: "100%",
        }}
      >
        <StyledFont variant="title">{title}</StyledFont>
      </Box>
      <Box>{children}</Box>
    </>
  );
};
