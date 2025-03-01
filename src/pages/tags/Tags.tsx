import Heading from '@/components/heading/Heading';
import { Button, Stack } from '@mui/material';
import tagsJson from '@assets/json/tags.json';
import navigateToRoute, { NavigateFunction } from '@/utils/navigateTo';
import slugify from '@/utils/slugify';

const Tags: React.FC = () => {
  const routeTo: NavigateFunction = navigateToRoute();

  return (
    <Stack justifyContent={'center'} alignItems={'center'} gap={3}>
      <Heading title={'Tags'} />
      <Stack
        direction={'row'}
        justifyContent={'center'}
        alignItems={'center'}
        flexWrap={'wrap'}
        gap={2}
      >
        {tagsJson.tags.map((tag: { name: string }) => (
          <Button
            sx={{
              border: '1.5px solid rgb(52 152 219 / 80%)',
              borderRadius: '10px',
              backgroundColor: 'transparent',
              color: 'white',
              '&:hover': {
                boxShadow: '0 0 15px rgb(52 152 219 / 80%)',
                background: 'linear-gradient(90deg, #22d3ee 0%, #0ea5e9 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                transition: 'all 0.3s ease-in-out',
              },
            }}
            onClick={() => routeTo(`/tags/${slugify(tag.name)}`)}
            key={tag.name}
          >
            {tag.name}
          </Button>
        ))}
      </Stack>
    </Stack>
  );
};

export default Tags;
