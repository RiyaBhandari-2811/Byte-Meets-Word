import { Box, Stack, Typography } from '@mui/material';
import RenderEmoji from '../render_emoji/RenderEmoji';
import GradientText from '../gradient_text/GradientText';
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import WesternMan from '@assets/WesternMan.svg';

const HeroBanner = () => {
  return (
    <Stack
      direction={{ xs: 'column-reverse', md: 'row' }}
      justifyContent={{ xs: 'center', md: 'space-between' }}
      alignItems={{ xs: 'center', md: 'start' }}
      spacing={3}
    >
      <Stack
        justifyContent={'center'}
        alignItems={{ xs: 'center', md: 'start' }}
        spacing={3}
      >
        <Typography
          sx={{
            fontSize: {
              xs: '1rem',
              sm: '1rem',
              md: '1.5rem',
              lg: '2rem',
              xl: '2.5rem',
            },
            fontWeight: 'fontWeightBold',
            letterSpacing: '0.1rem',
          }}
        >
          Hi there, I'm <GradientText text="Riya" />
          <RenderEmoji code={0x1f44b} />
        </Typography>
        <Typography
          sx={{
            fontSize: '1rem',
            fontWeight: 'fontWeightLight',
            color: 'quaternary.main',
            width: { xs: '100%', md: '70%' },
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
          corrupti explicabo, ullam consequatur cum excepturi, laudantium
          suscipit magnam ducimus fugit eum quas ipsum, sed nulla. Minima iure,
          ad natus culpa qui commodi itaque amet autem eius fuga, consequatur
          enim animi esse exercitationem et adipisci, optio error quisquam
          suscipit? Mollitia, doloremque.
        </Typography>
        <Stack direction={'row'} spacing={3}>
          <XIcon />
          <FacebookIcon />
          <LinkedInIcon />
          <YouTubeIcon />
        </Stack>
      </Stack>
      <Box>
        <img src={WesternMan} width={200} />
      </Box>
    </Stack>
  );
};

export default HeroBanner;
