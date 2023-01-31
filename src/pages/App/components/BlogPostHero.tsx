import { Box } from '@mui/material';
import { alpha, styled } from '@mui/material/styles';
import settings from '../../../config/settings';
import { Post } from '../EventDetails';

const OverlayStyle = styled('h1')(({ theme }) => ({
  top: '-23px',
  right: 0,
  bottom: '-15px',
  left: 0,
  zIndex: 9,
  position: 'absolute',
  backgroundColor: alpha(theme.palette.grey[900], 0.72),
}));

const TitleStyle = styled('h1')(({ theme }) => ({
  ...theme.typography.h2,
  top: 0,
  zIndex: 10,
  width: '100%',
  position: 'absolute',
  padding: theme.spacing(3),
  color: theme.palette.common.white,
  [theme.breakpoints.up('lg')]: {
    padding: theme.spacing(10),
  },
}));

const FooterStyle = styled('div')(({ theme }) => ({
  bottom: 0,
  zIndex: 10,
  width: '100%',
  display: 'flex',
  position: 'absolute',
  alignItems: 'flex-end',
  paddingLeft: theme.spacing(3),
  paddingRight: theme.spacing(2),
  paddingBottom: theme.spacing(3),
  justifyContent: 'space-between',
  [theme.breakpoints.up('sm')]: {
    alignItems: 'center',
    paddingRight: theme.spacing(3),
  },
  [theme.breakpoints.up('lg')]: {
    padding: theme.spacing(10),
  },
}));

// ----------------------------------------------------------------------

type Props = {
  post: Post;
};

export default function BlogPostHero({ post }: Props) {
  const { title, imageUrl } = post;

  return (
    <Box sx={{ position: 'relative' }}>
      <TitleStyle>{title}</TitleStyle>

      <OverlayStyle />
      <img
        style={{ height: '600px', width: '100%' }}
        src={settings.imageUrl + imageUrl}
        alt='event post'
      />
    </Box>
  );
}
