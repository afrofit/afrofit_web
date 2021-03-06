import { Button, Typography } from "@mui/material";
import { StyledDialog } from "./StyledDialog";
import CancelIcon from "@mui/icons-material/Cancel";
import CloseIcon from "@mui/icons-material/Close";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import { COLORS } from "../../constants/colors";

interface Props {
	open: boolean;
	onClose: () => void;
	closeButtonLabel?: string;
	title?: string;
	message?: string;
}

export const ErrorDialog: React.FC<Props> = ({
	open,
	onClose,
	title = "Your request failed",
	message = "There's been an error while processing your request, please try again or contact your administrator.",
	closeButtonLabel = "Ok",
}) => {
	const handleConfirmClick = () => {
		onClose();
	};

	return (
		<StyledDialog
			open={open}
			headingTitleIcon={<WarningAmberIcon sx={{ color: COLORS.orange_200 }} />}
			headingTitle={
				<Typography sx={{ fontSize: 22, color: COLORS.orange_200 }}>
					{title}
				</Typography>
			}
			onClose={onClose}
			footerChild={
				<Button variant="outlined" onClick={handleConfirmClick}>
					{closeButtonLabel}
				</Button>
			}
		>
			<Typography>{message}</Typography>
		</StyledDialog>
	);
};
