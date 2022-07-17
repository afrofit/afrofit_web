import styled from "@emotion/styled";
import { COLORS } from "../../../constants/colors";
import { CHAMFER } from "../../../constants/globals";

interface Props {
	focused: boolean;
}

export const StyledInput = styled.input`
	border: none;
	background: none;
	background-color: transparent;
	outline: none;
	font-size: 20px;
	color: ${COLORS.white};
	width: 100%;
	margin-left: 15px;
	height: 100%;
	background-clip: text;
`;

export const StyledInputWrapper = styled.div<Props>`
	height: ${({ focused }) => (focused ? "65px" : "60px")};
	border-radius: 10px;
	border-width: ${({ focused }) => (focused ? "3px" : "2px")};
	border-style: solid;
	border-color: ${COLORS.hilite_purpink};
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	padding: 15px;
	margin: 0;
	transition: 0.2s ease-in-out;
`;

export const StyledWrapper = styled.div`
	display: flex;
	flex-direction: column;
`;
