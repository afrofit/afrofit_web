/* eslint-disable jsx-a11y/anchor-is-valid */
import { Box, Button, Container, Divider, Stack } from '@mui/material'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { EXPIRE_TOKEN } from '../../../api/storage'

import AppLogo from '../../../assets/img/logofull_nobg.png'
import { COLORS } from '../../../constants/colors'
import { storeUser } from '../../../store/reducers/auth/auth.slice'

import { StyledNavLink } from './StyledNavLink'

interface Props {
  authorized: boolean | null
}

export const AppHeader: React.FC<Props> = ({ authorized }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const token = localStorage.getItem('STORAGE_TOKEN_KEY_standin')

  const handleLogout = () => {
    EXPIRE_TOKEN()
    dispatch(storeUser(undefined))
    navigate('/welcome')
  }

  if (authorized)
    return (
      <Box
        sx={{
          display: 'flex',
          height: 'auto',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          position: 'sticky',
          top: 0,
          zIndex: 99999,
          backgroundColor: '#242534',
        }}
      >
        {/* mobile navbar start */}

        <Container
          maxWidth="md"
          sx={{
            display: { xs: 'flex', md: 'none' },
            paddingTop: 3,
            paddingBottom: 1,
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            flexDirection: 'column',
            // marginBottom: 5,
            minHeight: '50px',
          }}
        >
          <Box
            sx={{
              height: '50px',
              cursor: 'pointer',
              // marginBottom: 1,
              // marginTop: 12,
            }}
            onClick={() => navigate('/')}
          >
            <Link to="/welcome">
              <a title="Afrofit">
                <img src={AppLogo} alt="the Afrofit logo" height={'100%'} />
              </a>
            </Link>
          </Box>
          <Box
            sx={{
              display: 'flex',
              width: '70%',
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}
          >
            <Box>
              <StyledNavLink title="Blog" route="/blog" />
            </Box>
            <Box>
              <StyledNavLink title="Classes" route="/classes" />
            </Box>
            <Box>
              <StyledNavLink title="Events" route="/events" />
            </Box>
            <Box>
              <StyledNavLink title="Shop" route="/shop" />
            </Box>
            <Box>
              <StyledNavLink title="About" route="/about" />
            </Box>
            <Box>
              <StyledNavLink title="Plans" route="/plan" />
            </Box>
            <Box>
              {token ? (
                <StyledNavLink title="My Profile" route="/profile" />
              ) : (
                ''
              )}
            </Box>
            <Box
              sx={{
                marginBottom: 0,
                display: 'block',
                width: '100%',
                textAlign: 'center',
              }}
            >
              {token ? (
                <Button
                  sx={{
                    backgroundColor: COLORS.purple_100,
                    paddingLeft: 2,
                    paddingRight: 2,
                    paddingTop: 1.1,
                    paddingBottom: 1.1,
                    borderRadius: 10,
                    letterSpacing: 2,
                    fontSize: 13,
                    fontWeight: 300,
                    marginBottom: 1,
                    marginTop: 1,
                    '&:hover': {
                      backgroundColor: COLORS.purple_200,
                    },
                  }}
                  onClick={handleLogout}
                >
                  Sign out
                </Button>
              ) : (
                <Button
                  sx={{
                    backgroundColor: COLORS.purple_100,
                    paddingLeft: 2,
                    paddingRight: 2,
                    paddingTop: 1.1,
                    paddingBottom: 1.1,
                    borderRadius: 10,
                    letterSpacing: 2,
                    fontSize: 13,
                    fontWeight: 300,
                    '&:hover': {
                      backgroundColor: COLORS.purple_200,
                    },
                  }}
                  onClick={() => navigate('/login')}
                >
                  Sign in
                </Button>
              )}
            </Box>
          </Box>
        </Container>
        {/* mobile navbar end */}

        {/* web navbar start */}

        <Container
          maxWidth="xl"
          sx={{
            display: { xs: 'none', md: 'block' },
            paddingTop: 2,
            paddingBottom: 2,
          }}
        >
          <Box
            sx={{ height: '85px', cursor: 'pointer' }}
            // onClick={() => navigate('/')}
          >
            <a href="Afrofit">
              <Link title="Afrofit" to="/welcome">
                <img src={AppLogo} alt="the Afrofit logo" height={'100%'} />
              </Link>
            </a>
          </Box>
          <Stack
            width="100%"
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box
              width={400}
              sx={{
                display: 'flex',
                justifyContent: 'flex-start',
              }}
            >
              <Stack
                direction="row"
                spacing={2}
                divider={
                  <Divider
                    orientation="vertical"
                    color={COLORS.white}
                    sx={{
                      opacity: 0.2,
                      height: 0.3,
                      alignSelf: 'center',
                    }}
                    flexItem
                  />
                }
              >
                <StyledNavLink title="Blog" route="/blog" />
                <StyledNavLink title="Classes" route="/classes" />
                <StyledNavLink title="Events" route="/events" />
                <StyledNavLink title="Shop" route="/shop" />
                <StyledNavLink title="About" route="/about" />
                <StyledNavLink title="Plans" route="/plan" />
              </Stack>
            </Box>

            <Box
              width={400}
              sx={{
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'center',
              }}
            >
              <Box marginRight={3}>
                {token ? (
                  <StyledNavLink title="My Profile" route="/profile" />
                ) : (
                  ''
                )}
              </Box>
              {token ? (
                <Button
                  sx={{
                    backgroundColor: COLORS.purple_100,
                    paddingLeft: 2,
                    paddingRight: 2,
                    paddingTop: 1.1,
                    paddingBottom: 1.1,
                    borderRadius: 10,
                    letterSpacing: 2,
                    fontSize: 13,
                    fontWeight: 300,
                    '&:hover': {
                      backgroundColor: COLORS.purple_200,
                    },
                  }}
                  onClick={handleLogout}
                >
                  Sign out
                </Button>
              ) : (
                <Button
                  sx={{
                    backgroundColor: COLORS.purple_100,
                    paddingLeft: 2,
                    paddingRight: 2,
                    paddingTop: 1.1,
                    paddingBottom: 1.1,
                    borderRadius: 10,
                    letterSpacing: 2,
                    fontSize: 13,
                    fontWeight: 300,
                    '&:hover': {
                      backgroundColor: COLORS.purple_200,
                    },
                  }}
                  onClick={() => navigate('/login')}
                >
                  Sign in
                </Button>
              )}
            </Box>
          </Stack>
        </Container>

        {/* web navbar end */}
      </Box>
    )

  return (
    <Box
      sx={{
        display: 'flex',
        height: '140px',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Container maxWidth="xl" sx={{ paddingTop: 5, paddingBottom: 5 }}>
        <Stack sx={{}}>
          <Box
            sx={{
              height: '85px',
              width: '300px',
              cursor: 'pointer',
            }}
            onClick={() => navigate('/')}
          >
            <img src={AppLogo} alt="the Afrofit logo" height={'100%'} />
          </Box>
        </Stack>
      </Container>
    </Box>
  )
}
