import Heading from '@/components/heading/Heading';
import { Stack } from '@mui/material';
import Card from '@/components/card/Card';
import { useGetAllArticlesByCategoryIdQuery } from '@/features/articlesSlice';
import { useParams } from 'react-router-dom';
import Pagination from '@/components/pagination/Pagination';
import { useState } from 'react';
import { IArticle } from '@/types/article';

const Category = () => {
  const [page, setPage] = useState<number>(1);
  const { categoryId } = useParams<string>();
  const response = useGetAllArticlesByCategoryIdQuery({
    categoryId: categoryId || '',
    page,
  });

  const { data: articlesJson, isLoading } = response;

  if (isLoading) return <div>Loading...</div>;

  console.log(articlesJson);

  return (
    articlesJson && (
      <Stack justifyContent={'center'} alignItems={'center'} gap={3}>
        <Heading title={articlesJson.name} />
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
          {articlesJson.articles.map((article: IArticle) => (
            <Card key={article._id} article={article} />
          ))}
        </Stack>
        {articlesJson.totalPages > 1 ? (
          <Pagination totalPages={articlesJson.totalPages} setPage={setPage} />
        ) : null}
      </Stack>
    )
  );
};

export default Category;
