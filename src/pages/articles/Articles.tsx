import Heading from '@/components/heading/Heading';
import { Stack } from '@mui/material';
import Card from '@/components/card/Card';
import { useGetAllArticlesQuery } from '@/features/articlesSlice';
import { IRailItem } from '@/components/content_rail/ContentRail';

const Articles = () => {
  const { data: articlesJson, isLoading } = useGetAllArticlesQuery({});
  if (isLoading) return <div>Loading...</div>;

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
        {articlesJson.articles.map((railItem: IRailItem) => (
          <Card
            key={railItem._id}
            id={railItem._id as string}
            title={railItem.title}
            subtitle={railItem.subtitle}
            description={railItem.description}
            image={railItem.image}
          />
        ))}
      </Stack>
    </Stack>
  );
};

export default Articles;
