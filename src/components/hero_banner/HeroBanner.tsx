import { Box, Stack, Typography } from '@mui/material';
import RenderEmoji from '../render_emoji/RenderEmoji';
import FemalePic from '@assets/img/female-user.png';
import Heading from '../heading/Heading';
import SocialHandles from '../social_handles/SocialHandles';

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
        spacing={2}
      >
        <Stack
          direction={'row'}
          alignItems={'center'}
          justifyContent={'center'}
        >
          <Heading title={`Hi there, I'm Riya`} />
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
        <SocialHandles />
      </Stack>
      <Box>
        <img src={FemalePic} width={250} />
      </Box>
    </Stack>
  );
};

export default HeroBanner;
