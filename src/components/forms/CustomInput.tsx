import { Typography } from "@mui/material";
import { Controller } from "react-hook-form";
import { COLORS } from "../../constants/colors";
import { StyledTextField } from "./StyledTextField";

interface Props {
  name: string;
  control: any;
  label?: string;
  required?: boolean;
  multiline?: boolean;
  rows?: number;
  maxLength?: number;
  placeholder?: string;
  type?: "password" | "";
  rules?: any;
  readOnly?: boolean;
  handleInputFocus?: () => void;
}

export const CustomInput: React.FC<Props> = ({
  name,
  control,
  label,
  required = false,
  multiline = false,
  rows = 4,
  maxLength = 500,
  placeholder,
  type = "",
  rules,
  readOnly = false,
  handleInputFocus,
}) => {
  return (
    <>
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({
          field: { onBlur, onChange, value = "", name },
          fieldState: { error },
        }) => (
          <>
            <StyledTextField
              // variant="filled"
              onChange={onChange}
              onBlur={onBlur}
              onFocus={handleInputFocus}
              value={value}
              label={label}
              required={required}
              variant="outlined"
              fullWidth
              multiline={multiline}
              placeholder={placeholder ? placeholder : ""}
              inputProps={{ maxLength, readOnly }}
              rows={multiline ? rows : 0}
              type={type}
              autoFocus={false}
              InputProps={{
                style: {
                  fontSize: 20,
                  color: COLORS.hilite_purpink,

                  // backgroundColor: "red",
                },
              }}
            />
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
          </>
        )}
      />
    </>
  );
};
