import Heading from '@/components/heading/Heading';
import { Stack } from '@mui/material';
import Card from '@/components/card/Card';
import { useGetAllArticlesQuery } from '@/features/articlesSlice';
import { IRailItem } from '@/components/content_rail/ContentRail';
import { useState } from 'react';
import Pagination from '@/components/pagination/Pagination';

const Articles = () => {
  const [page, setPage] = useState<number>(1);
  const { data: articlesJson, isLoading } = useGetAllArticlesQuery(page);
  if (isLoading) return <div>Loading...</div>;

  console.log(articlesJson);

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
      {articlesJson.totalPages > 1 ? (
        <Pagination totalPages={articlesJson.totalPages} setPage={setPage} />
      ) : null}
    </Stack>
  );
};

export default Articles;
