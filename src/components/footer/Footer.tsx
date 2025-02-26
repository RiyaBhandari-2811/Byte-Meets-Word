import { Divider, Stack, Typography } from '@mui/material';
import SocialHandles from '../social_handles/SocialHandles';

const Footer = () => {
  return (
    <Stack
      component="footer"
      sx={{
        marginBottom: '10px',
      }}
      gap={2}
    >
      <Divider
        sx={{
          borderColor: 'white',
        }}
      />
      <Stack
        direction={'row'}
        alignItems={'center'}
        justifyContent={{
          xs: 'center',
          sm: 'center',
          md: 'space-between',
        }}
        flexWrap={'wrap'}
        gap={2}
      >
        <Typography
          sx={{
            fontSize: {
              xs: '0.7rem',
              sm: '0.8rem',
            },
            fontWeight: 'light',
          }}
        >
          © Copyright {new Date().getFullYear()} by Riya's Blog. Built with ❤️
          by Riya Bhandari
        </Typography>
        <SocialHandles />
      </Stack>
    </Stack>
  );
};

export default Footer;
