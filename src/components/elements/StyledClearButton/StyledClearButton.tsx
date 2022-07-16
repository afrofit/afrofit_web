import { Button } from "@mui/material";
import { COLORS, ColorType } from "../../../constants/colors";
import { CHAMFER } from "../../../constants/globals";
import { StyledButtonElement, ButtonText } from "./styled";

interface Props {
	title: string;
	color: ColorType;
	textcolor?: ColorType;
	hoverColorBg?: ColorType;
	hoverColorText?: ColorType;
	onClick: () => void;
}

export const StyledClearButton: React.FC<Props> = ({
	title,
	onClick,
	color,
	textcolor = "whiteblue",
	hoverColorBg = "dark_200",
	hoverColorText = "dark_200",
}) => {
	return (
		<Button
			sx={[
				{
					height: "60px",
					width: "100%",
					padding: 2,

					display: "flex",
					alignItems: "center",
					justifyContent: "center",
				},
				{
					"&:hover": {
						color: COLORS[hoverColorText],
					},
				},
			]}
			onClick={onClick}
		>
			<ButtonText textcolor={textcolor}>{title}</ButtonText>
		</Button>
	);
};
