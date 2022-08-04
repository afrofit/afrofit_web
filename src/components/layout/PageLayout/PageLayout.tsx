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
        <StyledFont variant="title">{title}</StyledFont>
        {buttonComponent && showButton && <Box>{buttonComponent}</Box>}
      </Box>
      <Box>{children}</Box>
    </>
  );
};
