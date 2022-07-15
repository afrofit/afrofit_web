import * as React from "react";
import { useForm } from "react-hook-form";
import { Stack, Typography } from "@mui/material";

import { Card } from "../../components/Card/Card";
import { COLORS } from "../../constants/colors";
import { StyledLargeButton } from "../../components/elements/StyledLargeButton/StyledLargeButton";
import { CustomInput } from "../../components/forms/CustomInput";
import { StyledClearButton } from "../../components/elements/StyledClearButton/StyledClearButton";
import { useNavigate } from "react-router-dom";

const ForgotPasswordPage = () => {
	const navigation = useNavigate();

	const { handleSubmit, control, reset } = useForm({
		mode: "onBlur",
	});

	return (
		<Stack display="flex" flexDirection="column" sx={{ width: "100%" }}>
			<Typography
				sx={{
					fontSize: 50,
					fontWeight: 400,
					lineHeight: 1.2,
					color: COLORS.white,
					textAlign: "center",
					backgroundImage: `linear-gradient(45deg, ${COLORS.orange_200}, ${COLORS.hilite_purpink})`,
					WebkitBackgroundClip: "text",
					WebkitTextFillColor: "transparent",
					borderRadius: 2,
					marginBottom: 5,
				}}
			>
				Reset your password
			</Typography>
			<Card>
				<Stack display="flex" flexDirection="column" width="100%" spacing={3}>
					<CustomInput
						label="Email"
						name="email"
						control={control}
						placeholder="Username"
					/>
				</Stack>
			</Card>

			<StyledLargeButton
				onClick={() => null}
				title="Send reset email"
				color="fuschia"
			/>
			<StyledClearButton
				onClick={() => navigation("/login")}
				title="Let me log in instead"
				color="fuschia"
			/>
		</Stack>
	);
};

export default ForgotPasswordPage;
