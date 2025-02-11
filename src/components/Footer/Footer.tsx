import { Divider, Stack, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import RenderEmoji from '../render_emoji/RenderEmoji';

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
        <Stack
          direction={'row'}
          alignItems={'center'}
          justifyContent={'space-evenly'}
          gap={2}
        >
          <GitHubIcon sx={{ fontSize: '30px' }} />
          <XIcon sx={{ fontSize: '30px' }} />
          <FacebookIcon sx={{ fontSize: '35px' }} />
          <LinkedInIcon sx={{ fontSize: '35px' }} />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Footer;
