import { TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import { COLORS } from "../../constants/colors";

export const StyledTextField = styled(TextField)(({ theme }) => ({
	color: COLORS.white,
	input: {
		borderColor: "red",
		borderRadius: 8,
		"&::placeholder": {
			color: "red",
		},
	},
}));

/*
"&:nth-of-type(even)": {
		backgroundColor: COLORS.dark_100,
	},
	"&:nth-of-type(odd)": {
		backgroundColor: COLORS.dark_300,
	},
	"&:last-child td, &:last-child th": {
		border: 0,
	},
    */
