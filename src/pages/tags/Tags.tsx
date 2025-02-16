import Heading from '@/components/heading/Heading';
import { Button, Stack } from '@mui/material';
import tagsJson from '@assets/json/tags.json';

const Tags: React.FC = () => {
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
              border: '1px solid white',
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
          >
            {tag.name}
          </Button>
        ))}
      </Stack>
    </Stack>
  );
};

export default Tags;
