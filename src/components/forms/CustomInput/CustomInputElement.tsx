import * as React from "react";
import {
  IconWrapper,
  StyledInput,
  StyledInputWrapper,
  StyledWrapper,
} from "./styled";
import { Mail, Lock, User } from "react-feather";
import { COLORS } from "../../../constants/colors";
import { Typography } from "@mui/material";
import { Controller } from "react-hook-form";

interface Props {
  name: string;
  type?: "text" | "email" | "password";
  label?: string;
  control: any;
  placeholder?: string;
  icon?: string;
}

export const CustomInputElement: React.FC<Props> = ({
  name,
  type = "text",
  label,
  control,
  placeholder,
  icon = "user",
}) => {
  const [focused, setFocused] = React.useState(false);

  const IconComponent =
    icon === "person" ? User : "mail" ? Mail : "lock" ? Lock : User;

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
            <IconWrapper>
              <IconComponent
                color={focused ? COLORS.gold : COLORS.whiteblue}
                size={focused ? 30 : 25}
              />
            </IconWrapper>
            <StyledInput
              onFocus={() => setFocused(true)}
              onBlur={() => {
                setFocused(false);
                return onBlur();
              }}
              type={type}
              name={name}
              placeholder={placeholder}
              autoComplete="new-password"
              value={value}
              onChange={onChange}
              autoFocus={false}
            />
          </StyledInputWrapper>
          {error && (
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: 500,
                marginTop: "5px",
                color: COLORS.orange_200,
              }}
            >
              {error.message}
            </Typography>
          )}
        </StyledWrapper>
      )}
    />
  );
};
