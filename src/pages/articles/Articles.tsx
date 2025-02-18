import Heading from '@/components/heading/Heading';
import { Stack } from '@mui/material';
import data from '@assets/json/contentRail.json';
import Card from '@/components/card/Card';

const Articles = () => {
  return (
    <Stack justifyContent={'center'} alignItems={'center'} gap={3}>
      <Heading title={'Articles'} />
      <Stack
        direction={'row'}
        justifyContent={{
          xs: 'center',
          sm: 'center',
          md: 'centre',
          lg: 'flex-start',
          xl: 'flex-start',
        }}
        alignItems={'center'}
        flexWrap={'wrap'}
        gap={2}
        marginLeft={{
          md: '1rem',
        }}
      >
        {data.contentRails.map((contentRail) =>
          contentRail.railItems.map((railItem, index) => (
            <Card
              key={index}
              id={railItem.id}
              title={railItem.title}
              subtitle={railItem.subtitle}
              description={railItem.description}
              image={railItem.image}
            />
          ))
        )}
      </Stack>
    </Stack>
  );
};

export default Articles;
