import * as React from "react";
import { StyledInput, StyledInputWrapper, StyledWrapper } from "./styled";
import { Mail } from "react-feather";
import { COLORS } from "../../../constants/colors";
import { Typography } from "@mui/material";
import { Controller } from "react-hook-form";

interface Props {
	name: string;
	type?: "text" | "email" | "password";
	label?: string;
	control: any;
	placeholder?: string;
}

export const CustomInputElement: React.FC<Props> = ({
	name,
	type = "text",
	label,
	control,
	placeholder,
}) => {
	const [focused, setFocused] = React.useState(false);

	React.useEffect(() => {
		console.log("Focused", focused);
	}, [focused]);

	return (
		<Controller
			name={name}
			control={control}
			render={({
				field: { onBlur, onChange, value = "", name },
				fieldState: { error },
			}) => (
				<StyledWrapper>
					{label && (
						<Typography
							sx={{
								color: COLORS.hilite_purpink,
								marginBottom: 1,
								textTransform: "uppercase",
								fontSize: 15,
								letterSpacing: 1,
							}}
						>
							{label}
						</Typography>
					)}
					<StyledInputWrapper focused={focused}>
						<Mail
							color={focused ? COLORS.gold : COLORS.whiteblue}
							size={focused ? 30 : 25}
						/>
						<StyledInput
							onFocus={() => setFocused(true)}
							onBlur={() => setFocused(false)}
							type={type}
							name={name}
							placeholder={placeholder}
							autoComplete={"off"}
						/>
					</StyledInputWrapper>
				</StyledWrapper>
			)}
		/>
	);
};
