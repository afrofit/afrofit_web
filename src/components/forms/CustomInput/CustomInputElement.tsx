import * as React from "react";
import {
  IconWrapper,
  StyledInput,
  StyledInputWrapper,
  StyledWrapper,
} from "./styled";
import { Mail, Lock, User, Eye, EyeOff } from "react-feather";
import { COLORS } from "../../../constants/colors";
import { Grid, Typography } from "@mui/material";
import { Controller } from "react-hook-form";

interface Props {
  name: string;
  type?: "text" | "email" | "password" | "number";
  label?: string;
  control: any;
  placeholder?: string;
  icon?: "person" | "mail" | "lock" | "user";
  showpassIcon?: "eye";
  hidepassIcon?: "eyeOff";
  showPassword?: any;
  setShowPassword?: any;
  cShowPassword?: any;
  setCShowPassword?: any;
}

export const CustomInputElement: React.FC<Props> = ({
  name,
  type = "text",
  label,
  control,
  placeholder,
  icon = "user",
  showPassword,
  setShowPassword,
  cShowPassword,
  setCShowPassword,
}) => {
  const [focused, setFocused] = React.useState(false);

  const getIcon = React.useCallback(() => {
    if (icon === "user")
      return (
        <User
          color={focused ? COLORS.gold : COLORS.whiteblue}
          size={focused ? 25 : 25}
        />
      );
    if (icon === "mail")
      return (
        <Mail
          color={focused ? COLORS.gold : COLORS.whiteblue}
          size={focused ? 25 : 25}
        />
      );
    if (icon === "lock")
      return (
        <Lock
          color={focused ? COLORS.gold : COLORS.whiteblue}
          size={focused ? 25 : 25}
        />
      );
    return (
      <User
        color={focused ? COLORS.gold : COLORS.whiteblue}
        size={focused ? 25 : 25}
      />
    );
  }, [icon, focused]);
  return (
    <Controller
      name={name}
      control={control}
      render={({
        field: { onBlur, onChange, value = "", name },
        fieldState: { error },
      }) => (
        <Grid
          style={{
            whiteSpace: "nowrap",
            overflow: "hidden",
            overflowWrap: "break-word",
            width: "100%",
            minHeight: "116px",
          }}
        >
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
          <StyledInputWrapper
            focused={focused}
            style={{
              whiteSpace: "nowrap",
              overflow: "hidden",
              overflowWrap: "break-word",
              flex: "unset",
            }}
          >
            <IconWrapper>{getIcon()}</IconWrapper>
            {name === "message" ? (
              <StyledInput
                onFocus={() => setFocused(true)}
                onBlur={() => {
                  setFocused(false);
                  return onBlur();
                }}
                type="text"
                // type={type}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                autoFocus={false}
                style={{
                  width: "100%",
                  height: "8rem",
                  // overflow: "initial",
                  // wordWrap: "break-word",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  overflowWrap: "break-word",
                }}
              />
            ) : name === "phoneNumber" ? (
              <StyledInput
                onFocus={() => setFocused(true)}
                onBlur={() => {
                  setFocused(false);
                  return onBlur();
                }}
                // type={"number"}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                autoFocus={false}
                type="number"
                maxLength={14}
              />
            ) : name === "email" ? (
              <StyledInput
                onFocus={() => setFocused(true)}
                onBlur={() => {
                  setFocused(false);
                  return onBlur();
                }}
                // type={"number"}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                autoFocus={false}
                type="email"
              />
            ) : (
              <StyledInput
                onFocus={() => setFocused(true)}
                onBlur={() => {
                  setFocused(false);
                  return onBlur();
                }}
                type={type}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                autoFocus={false}
              />
            )}

            {name === "password" || name === "confirm_password" ? (
              <IconWrapper
                onClick={(e) => {
                  if (name === "password") {
                    setShowPassword(!showPassword);
                  }
                  if (name === "confirm_password") {
                    setCShowPassword(!cShowPassword);
                  }
                }}
              >
                {name === "password" &&
                  (!showPassword ? (
                    <EyeOff
                      color={focused ? COLORS.gold : COLORS.whiteblue}
                      size={focused ? 30 : 25}
                    />
                  ) : (
                    <Eye
                      color={focused ? COLORS.gold : COLORS.whiteblue}
                      size={focused ? 30 : 25}
                    />
                  ))}
                {name === "confirm_password" &&
                  (cShowPassword ? (
                    <Eye
                      color={focused ? COLORS.gold : COLORS.whiteblue}
                      size={focused ? 30 : 25}
                    />
                  ) : (
                    <EyeOff
                      color={focused ? COLORS.gold : COLORS.whiteblue}
                      size={focused ? 30 : 25}
                    />
                  ))}
              </IconWrapper>
            ) : null}
          </StyledInputWrapper>
          {error && (
            <Typography
              className="error-register"
              sx={{
                fontSize: "14px",
                fontWeight: 500,
                marginTop: "5px",
                color: COLORS.orange_200,
                // wordBreak: "normal",
                // width: "100%",
                // whiteSpace: "initial",
              }}
            >
              {error.message}
            </Typography>
          )}
        </Grid>
      )}
    />
  );
};
