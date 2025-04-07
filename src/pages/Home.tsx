import ContentRail from '@/components/content_rail/ContentRail';
import HeroBanner from '@/components/hero_banner/HeroBanner';
import { Stack } from '@mui/material';

const Home = () => {
  return (
    <Stack spacing={10} justifyContent="space-evenly" alignItems="flex-start">
      <HeroBanner />
      <ContentRail />
    </Stack>
  );
};

export default Home;
