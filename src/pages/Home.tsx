import ContentRail from '@/components/contentRail/ContentRail';
import HeroBanner from '@/components/hero_banner/HeroBanner';
import contentRailJson from '@assets/json/contentRail.json';
import { Stack } from '@mui/material';

const Home = () => {
  return (
    <Stack spacing={10} justifyContent="space-evenly" alignItems="flex-start">
      <HeroBanner />
      <ContentRail rails={contentRailJson.contentRails} />
    </Stack>
  );
};

export default Home;
