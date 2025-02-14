import { Divider, Stack, Typography } from '@mui/material';
import RenderEmoji from '../render_emoji/RenderEmoji';
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
        <Typography>
          © Copyright {new Date().getFullYear()} by Riya's Blog. <br />
          Built with <RenderEmoji code={0x1f9e1} /> by Riya Bhandari
        </Typography>
        <SocialHandles />
      </Stack>
    </Stack>
  );
};

export default Footer;
