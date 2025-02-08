import { Box, Stack, Typography } from '@mui/material';
import RenderEmoji from '../render_emoji/RenderEmoji';
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import WesternMan from '@assets/WesternMan.svg';
import Heading from '../heading/Heading';

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
        <Stack
          direction={'row'}
          alignItems={'center'}
          justifyContent={'center'}
        >
          <Heading title={`Hi there, I'm `} gradientTitle={'Riya'} />
          <RenderEmoji code={0x1f44b} />
        </Stack>

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
        <Stack
          direction={'row'}
          spacing={4}
          alignItems={'center'}
          justifyContent={'center'}
        >
          <XIcon sx={{ fontSize: '30px' }} />
          <FacebookIcon sx={{ fontSize: '35px' }} />
          <LinkedInIcon sx={{ fontSize: '35px' }} />
          <YouTubeIcon sx={{ fontSize: '45px' }} />
        </Stack>
      </Stack>
      <Box>
        <img src={WesternMan} width={200} />
      </Box>
    </Stack>
  );
};

export default HeroBanner;
