import Heading from '@/components/heading/Heading';
import { Stack } from '@mui/material';
import Card from '@/components/card/Card';
import { useParams } from 'react-router-dom';
import { useGetArticlesByTagQuery } from '@/features/articlesSlice';
import { IRailItem } from '@/components/content_rail/ContentRail';

const TagDetail = () => {
  const { tagId } = useParams();
  const { data: articlesJson, isLoading } = useGetArticlesByTagQuery(tagId);

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
            key={article.id}
            id={article.id}
            title={article.title}
            subtitle={article.subtitle}
            description={article.description}
            image={article.image}
          />
        ))}
      </Stack>
    </Stack>
  );
};

export default TagDetail;
