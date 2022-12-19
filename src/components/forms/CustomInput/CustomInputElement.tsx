import * as React from 'react'
import {
  IconWrapper,
  StyledInput,
  StyledInputWrapper,
  StyledWrapper,
} from './styled'
import { Mail, Lock, User, Eye, EyeOff } from 'react-feather'
import { COLORS } from '../../../constants/colors'
import { Typography } from '@mui/material'
import { Controller } from 'react-hook-form'

interface Props {
  name: string
  type?: 'text' | 'email' | 'password'
  label?: string
  control: any
  placeholder?: string
  icon?: 'person' | 'mail' | 'lock' | 'user'
  showpassIcon?: 'eye'
  hidepassIcon?: 'eyeOff'
  showPassword?: any
  setShowPassword?: any
  cShowPassword?: any
  setCShowPassword?: any
}

export const CustomInputElement: React.FC<Props> = ({
  name,
  type = 'text',
  label,
  control,
  placeholder,
  icon = 'user',
  showPassword,
  setShowPassword,
  cShowPassword,
  setCShowPassword,
}) => {
  const [focused, setFocused] = React.useState(false)

  const getIcon = React.useCallback(() => {
    if (icon === 'user')
      return (
        <User
          color={focused ? COLORS.gold : COLORS.whiteblue}
          size={focused ? 30 : 25}
        />
      )
    if (icon === 'mail')
      return (
        <Mail
          color={focused ? COLORS.gold : COLORS.whiteblue}
          size={focused ? 30 : 25}
        />
      )
    if (icon === 'lock')
      return (
        <Lock
          color={focused ? COLORS.gold : COLORS.whiteblue}
          size={focused ? 30 : 25}
        />
      )
    return (
      <User
        color={focused ? COLORS.gold : COLORS.whiteblue}
        size={focused ? 30 : 25}
      />
    )
  }, [icon, focused])

  return (
    <Controller
      name={name}
      control={control}
      render={({
        field: { onBlur, onChange, value = '', name },
        fieldState: { error },
      }) => (
        <StyledWrapper>
          {label && (
            <Typography
              sx={{
                color: COLORS.hilite_purpink,
                marginBottom: 1,
                textTransform: 'uppercase',
                fontSize: 15,
                letterSpacing: 1,
              }}
            >
              {label}
            </Typography>
          )}
          <StyledInputWrapper focused={focused}>
            <IconWrapper>{getIcon()}</IconWrapper>
            <StyledInput
              onFocus={() => setFocused(true)}
              onBlur={() => {
                setFocused(false)
                return onBlur()
              }}
              type={type}
              name={name}
              placeholder={placeholder}
              autoComplete="new-password"
              value={value}
              onChange={onChange}
              autoFocus={false}
            />
            {name === 'password' || name === 'confirm_password' ? (
              <IconWrapper
                onClick={(e) => {
                  if (name === 'password') {
                    setShowPassword(!showPassword)
                  }
                  if (name === 'confirm_password') {
                    setCShowPassword(!cShowPassword)
                  }
                }}
              >
                {name === 'password' &&
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
                {name === 'confirm_password' &&
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
              sx={{
                fontSize: '14px',
                fontWeight: 500,
                marginTop: '5px',
                color: COLORS.orange_200,
              }}
            >
              {error.message}
            </Typography>
          )}
        </StyledWrapper>
      )}
    />
  )
}
