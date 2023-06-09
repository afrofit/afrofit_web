import * as React from "react";
import {
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

interface Props {
  onClose: () => void;
  disableEscapeKeyDown?: boolean;
  disableBackdropClick?: boolean;
  headingTitleIcon?: React.ReactNode;
  headingTitle: string | React.ReactNode;
  footerChild?: React.ReactNode;
  children: React.ReactNode;
  open: boolean;
}

export const StyledDialog: React.FC<Props> = ({
  open,
  onClose,
  disableEscapeKeyDown,
  headingTitleIcon,
  headingTitle,
  footerChild,
  children,
}) => {
  return (
    <Dialog
      open={open}
      fullWidth
      onClose={onClose}
      disableEscapeKeyDown={disableEscapeKeyDown}
      disableAutoFocus
      disableEnforceFocus
      disablePortal
    >
      <DialogTitle sx={{ padding: 2.5 }}>
        <Box display="flex" justifyContent="flex-start" alignItems="center">
          {headingTitleIcon && (
            <Box mr={1} mt={1}>
              {headingTitleIcon}
            </Box>
          )}
          {headingTitle}
        </Box>
        <IconButton
          sx={{ position: "absolute", right: 2, top: 2 }}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <Divider />

      {children && <StyledDialogContent>{children}</StyledDialogContent>}
      {footerChild && <StyledDialogFooter>{footerChild}</StyledDialogFooter>}
    </Dialog>
  );
};

interface Props2 {
  children: React.ReactNode;
}

export const StyledDialogContent: React.FC<Props2> = ({ children }) => {
  return <DialogContent sx={{ padding: 4 }}>{children}</DialogContent>;
};

export const StyledDialogFooter: React.FC<Props2> = ({ children }) => {
  return (
    <React.Fragment>
      <Divider />
      <DialogActions sx={{ padding: 3, justifyContent: "flex-start" }}>
        {children}
      </DialogActions>
    </React.Fragment>
  );
};
