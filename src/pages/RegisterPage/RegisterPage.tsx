import * as React from "react";
import { Stack, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { Card } from "../../components/Card/Card";
import { COLORS } from "../../constants/colors";
import { StyledLargeButton } from "../../components/elements/StyledLargeButton/StyledLargeButton";
import { CustomInput } from "../../components/forms/CustomInput";
import { StyledClearButton } from "../../components/elements/StyledClearButton/StyledClearButton";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { RegisterAccount } from "../../store/reducers/auth/thunks/register.thunks";

const registerSchema = Yup.object().shape({
	email: Yup.string().email().required(),
	password: Yup.string().min(6).max(32).required(),
	username: Yup.string().min(6).max(32).required(),
	first_name: Yup.string().min(6).max(32).required(),
	last_name: Yup.string().min(6).max(32).required(),
	confirm_password: Yup.string().oneOf(
		[Yup.ref("password"), null],
		"Passwords must match"
	),
});

const RegisterPage = () => {
	const navigation = useNavigate();
	const dispatch = useDispatch();

	const { handleSubmit, reset, control } = useForm({
		resolver: yupResolver(registerSchema),
		mode: "onBlur",
	});

	const onSubmit = (data: any) => {
		console.log(data);
		const { username, password, last_name, first_name, email } = data;

		const registerData = { username, password, last_name, first_name, email };
		dispatch(RegisterAccount(registerData));
	};

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
							name="first_name"
							control={control}
							placeholder="Your secure password"
						/>
						<CustomInput
							label="Last Name"
							name="last_name"
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
							name="confirm_password"
							control={control}
							placeholder="Your secure password"
						/>
					</Stack>
				</Stack>
			</Card>

			<StyledLargeButton
				onClick={handleSubmit(onSubmit)}
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
