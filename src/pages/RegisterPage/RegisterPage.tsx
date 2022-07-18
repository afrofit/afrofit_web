import * as React from "react";
import { Stack, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { Card } from "../../components/Card/Card";
import { COLORS } from "../../constants/colors";
import { StyledLargeButton } from "../../components/elements/StyledLargeButton/StyledLargeButton";
import { StyledClearButton } from "../../components/elements/StyledClearButton/StyledClearButton";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { RegisterAccount } from "../../store/reducers/auth/thunks/register.thunks";
import { CustomInputElement } from "../../components/forms/CustomInput/CustomInputElement";

const registerSchema = Yup.object().shape({
	email: Yup.string().email().required(),
	password: Yup.string().min(6).max(32).required(),
	username: Yup.string().min(6).max(32).required(),
	name_first: Yup.string().min(2).max(32).required(),
	name_last: Yup.string().min(2).max(32).required(),
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
		const { username, password, name_last, name_first, email } = data;

		// const registerData = { username, password, name_last, name_first, email };
		// dispatch(RegisterAccount(registerData));
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
						<CustomInputElement
							name="name_first"
							label="First Name"
							control={control}
							// placeholder="Unique username..."
							type="text"
							icon="person"
						/>

						<CustomInputElement
							name="namne_last"
							label="Last Name"
							control={control}
							// placeholder="Unique username..."
							type="text"
							icon="person"
						/>
					</Stack>
					<Stack
						display={"flex"}
						flexDirection="row"
						columnGap={2}
						width="100%"
					>
						<CustomInputElement
							name="username"
							label="Username"
							control={control}
							placeholder="Unique username..."
							type="text"
							icon="lock"
						/>

						<CustomInputElement
							name="email"
							label="Email"
							control={control}
							placeholder="Your email..."
							type="email"
							icon="mail"
						/>
					</Stack>
					<Stack
						display={"flex"}
						flexDirection="row"
						columnGap={2}
						width="100%"
					>
						<CustomInputElement
							name="password"
							label="Password"
							control={control}
							// placeholder="Your password..."
							type="password"
							icon="lock"
						/>
						<CustomInputElement
							name="confirm_password"
							label="Confirm Password"
							control={control}
							// placeholder="Confirm password..."
							type="password"
							icon="lock"
						/>
					</Stack>
				</Stack>
			</Card>

			<StyledLargeButton
				onClick={handleSubmit(onSubmit)}
				// onClick={() => console.log("Register clicked!")}
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
