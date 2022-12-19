import { useForm } from 'react-hook-form'
import { Container, Stack, Typography } from '@mui/material'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { Card } from '../../../components/Card/Card'
import { COLORS } from '../../../constants/colors'
import { StyledLargeButton } from '../../../components/elements/StyledLargeButton/StyledLargeButton'
import { StyledClearButton } from '../../../components/elements/StyledClearButton/StyledClearButton'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { CustomInputElement } from '../../../components/forms/CustomInput/CustomInputElement'
import { LogIn } from '../../../store/reducers/auth/thunks/login.thunk'
import { useState } from 'react'

const schema = z.object({
  email: z.string({ required_error: 'Valid email required' }).email(),
  password: z.string().min(1, { message: 'Required' }),
})

const LoginPage = () => {
  const token = localStorage.getItem('STORAGE_TOKEN_KEY_standin')

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [showPassword, setShowPassword] = useState(false)

  const { handleSubmit, control, reset } = useForm({
    resolver: zodResolver(schema),
    mode: 'onBlur',
  })

  const onSubmit = (data: any) => {
    console.log('data', data)
    const { email, password } = data

    const loginData = { password, email }
    console.log('logindata', loginData)
    const handleNavigate = () => {
      navigate('/profile')
    }
    dispatch(LogIn(loginData, handleNavigate))
    reset()
  }

  return (
    <Container maxWidth="md">
      <Stack display="flex" flexDirection="column" sx={{ width: '100%' }}>
        <Typography
          sx={{
            fontSize: 50,
            fontWeight: 400,
            lineHeight: 1.2,
            color: COLORS.white,
            textAlign: 'center',
            backgroundImage: `linear-gradient(45deg, ${COLORS.orange_200}, ${COLORS.hilite_purpink})`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            borderRadius: 2,
            marginBottom: 5,
          }}
        >
          Member Login
        </Typography>
        <Card>
          <Stack display="flex" flexDirection="column" width="100%" spacing={3}>
            <CustomInputElement
              name="email"
              label="Email"
              control={control}
              placeholder="Your email.."
              type="text"
              icon="mail"
            />
            <CustomInputElement
              name="password"
              label="Password"
              control={control}
              placeholder="Your password..."
              type={showPassword ? 'text' : 'password'}
              icon="lock"
              showPassword={showPassword}
              setShowPassword={setShowPassword}
            />
          </Stack>
        </Card>

        <StyledClearButton
          onClick={() => navigate('/forgot-password')}
          title="I forgot my password"
          color="fuschia"
        />
        <StyledLargeButton
          onClick={handleSubmit(onSubmit)}
          title="Log in"
          color="fuschia"
        />

        {token ? (
          ''
        ) : (
          <StyledClearButton
            onClick={() => navigate('/register')}
            title="Create an account instead"
            color="fuschia"
          />
        )}
      </Stack>
    </Container>
  )
}

export default LoginPage
