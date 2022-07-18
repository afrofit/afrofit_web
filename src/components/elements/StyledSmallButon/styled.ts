import styled from "@emotion/styled";
import { Button, Typography } from "@mui/material";
import { COLORS } from "../../../constants/colors";
import { CHAMFER } from "../../../constants/globals";

interface Props {
	outlined?: boolean;
}

export const SmallButton = styled(Button)<Props>`
	background-image: ${({ outlined }) =>
		!outlined &&
		`linear-gradient(45deg, ${COLORS.orange_200}, ${COLORS.hilite_purpink})`};

	min-width: 110px;
	text-decoration: "none";
	padding: 10px;
	color: ${COLORS.whiteblue};
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: ${CHAMFER};
	transition: 0.2s ease-in-out;
	border: ${({ outlined }) => outlined && `1px solid ${COLORS.whiteblue}`};

	&:hover {
		min-width: 113px;
		border: ${({ outlined }) => outlined && `1px solid ${COLORS.fuschia}`};
	}
`;

export const SmallButtonText = styled(Typography)<Props>`
	color: ${({ outlined }) => !outlined && COLORS.white};
	font-size: 16px;
	transition: 0.2s ease-in-out;
	letter-spacing: 1px;
	font-weight: ${({ outlined }) => (outlined ? 300 : 500)};
	text-decoration: none;
	text-align: center;
	text-transform: capitalize;

	&:hover {
		color: ${COLORS.fuschia};
	}
`;
