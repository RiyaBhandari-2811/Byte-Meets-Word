import Heading from '@/components/heading/Heading';
import { Stack } from '@mui/material';
import Card from '@/components/card/Card';
import { useParams } from 'react-router-dom';
import { useGetArticlesByTagQuery } from '@/features/articlesSlice';
import { IRailItem } from '@/components/content_rail/ContentRail';
import { useState } from 'react';
import Pagination from '@/components/pagination/Pagination';

const TagDetail = () => {
  const { tagId } = useParams<string>();
  const [page, setPage] = useState<number>(1);
  const { data: articlesJson, isLoading } = useGetArticlesByTagQuery({
    tagId: tagId as string,
    page,
  });

  if (isLoading) return <p>Loading...</p>;

  console.log(articlesJson);

  return (
    <Stack justifyContent={'center'} alignItems={'center'} gap={3}>
      <Heading title={articlesJson.tagName as string} />
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
        {articlesJson.articles.map((article: IRailItem) => (
          <Card
            key={article._id}
            id={article._id as string}
            title={article.title}
            subtitle={article.createdAt + ' ' + article.readTime}
            description={article.summary}
            image={article.featureImage}
          />
        ))}
      </Stack>
      {articlesJson.totalPages > 1 ? (
        <Pagination totalPages={articlesJson.totalPages} setPage={setPage} />
      ) : null}
    </Stack>
  );
};

export default TagDetail;
