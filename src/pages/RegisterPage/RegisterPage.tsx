import * as React from "react";
import * as Yup from "yup";
import { Stack, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Card } from "../../components/Card/Card";
import { COLORS } from "../../constants/colors";
import { StyledLargeButton } from "../../components/elements/StyledLargeButton/StyledLargeButton";
import { CustomInput } from "../../components/forms/CustomInput";
import { StyledClearButton } from "../../components/elements/StyledClearButton/StyledClearButton";
import { useNavigate } from "react-router-dom";

const loginSchema = Yup.object().shape({
	email: Yup.string().email().required(),
	password: Yup.string().min(6).max(32).required(),
});

const RegisterPage = () => {
	const navigation = useNavigate();

	const { handleSubmit, reset, control } = useForm({
		resolver: yupResolver(loginSchema),
		mode: "onBlur",
	});

	const onSubmit = (data: any) => console.log(data);

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
				Register an account
			</Typography>
			<Card>
				<Stack display="flex" flexDirection="column" width="100%" spacing={3}>
					<Stack
						display={"flex"}
						flexDirection="row"
						columnGap={2}
						width="100%"
					>
						<CustomInput
							label="First Name"
							name="firstName"
							control={control}
							placeholder="Your secure password"
						/>
						<CustomInput
							label="Last Name"
							name="lastName"
							control={control}
							placeholder="Your secure password"
						/>
					</Stack>
					<CustomInput
						label="Username"
						name="username"
						control={control}
						placeholder="Username"
					/>
					<CustomInput
						label="Email"
						name="email"
						control={control}
						placeholder="Your email"
					/>
					<Stack
						display={"flex"}
						flexDirection="row"
						columnGap={2}
						width="100%"
					>
						<CustomInput
							label="Password"
							name="password"
							control={control}
							placeholder="Your secure password"
						/>
						<CustomInput
							label="Confirm Password"
							name="confirmPassword"
							control={control}
							placeholder="Your secure password"
						/>
					</Stack>
				</Stack>
			</Card>

			<StyledLargeButton
				onClick={() => null}
				title="Create Account"
				color="fuschia"
			/>
			<StyledClearButton
				onClick={() => navigation("/login")}
				title="I already have an account"
				color="fuschia"
			/>
		</Stack>
	);
};

export default RegisterPage;
