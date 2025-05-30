import Heading from '@/components/heading/Heading';
import { Button, Stack } from '@mui/material';
import navigateToRoute, { NavigateFunction } from '@/utils/navigateTo';
import { useGetTagsQuery } from '@/features/tagsSlice';
import { useState } from 'react';
import Pagination from '@/components/pagination/Pagination';
import { ITag } from '@/types/tag';

const Tags: React.FC = () => {
  const [page, setPage] = useState<number>(1);
  const routeTo: NavigateFunction = navigateToRoute();
  const { data: tagsJson, error, isLoading } = useGetTagsQuery(page);
  if (isLoading) return <div>Loading...</div>;
  if (error) {
    const errorMessage: string =
      'status' in error
        ? `Error: ${error.status} - ${JSON.stringify(error.data)}`
        : `Error: ${error.message}`;
    return <div>{errorMessage}</div>;
  }

  console.log(tagsJson);

  return (
    tagsJson && (
      <Stack justifyContent={'center'} alignItems={'center'} gap={3}>
        <Heading title={'Tags'} />
        <Stack
          direction={'row'}
          justifyContent={'center'}
          alignItems={'center'}
          flexWrap={'wrap'}
          gap={2}
        >
          {tagsJson.tags.map((tag: ITag) => (
            <Button
              sx={{
                border: '1.5px solid rgb(52 152 219 / 80%)',
                borderRadius: '10px',
                backgroundColor: 'transparent',
                color: 'white',
                '&:hover': {
                  boxShadow: '0 0 15px rgb(52 152 219 / 80%)',
                  background:
                    'linear-gradient(90deg, #22d3ee 0%, #0ea5e9 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  transition: 'all 0.3s ease-in-out',
                },
              }}
              onClick={() => routeTo(`/tags/${tag._id}`)}
              key={tag.name}
            >
              {tag.name}
            </Button>
          ))}
        </Stack>
        {tagsJson.totalPages > 1 ? (
          <Pagination totalPages={tagsJson.totalPages} setPage={setPage} />
        ) : null}
      </Stack>
    )
  );
};

export default Tags;
