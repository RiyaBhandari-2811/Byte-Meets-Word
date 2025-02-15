import { Box, Stack, Typography, useMediaQuery } from '@mui/material';
import Heading from '../heading/Heading';
import Card from '../card/Card';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';

interface IRailItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
}

interface IRail {
  title: string;
  railItems: IRailItem[];
}

interface IContentRailProps {
  rails: IRail[];
}

const ContentRail: React.FC<IContentRailProps> = ({ rails }) => {
  const isSm400to550 = useMediaQuery('(min-width:400px) and (max-width:550px)');

  return (
    <Box sx={{ width: '100%' }}>
      {rails.map((rail, index) => {
        return (
          <Stack
            key={index}
            gap={5}
            sx={{ marginBottom: '20px' }}
            alignItems={{
              xs: 'centre',
              sm: 'center',
              md: 'flex-start',
              lg: 'flex-start',
            }}
            justifyContent={'space-evenly'}
          >
            <Stack
              direction={'row'}
              justifyContent={'space-between'}
              sx={{ width: '100%' }}
            >
              <Box>
                <Heading title={rail.title} />
              </Box>
              {rail.railItems.length >= 3 && (
                <Stack
                  direction={'row'}
                  alignItems={'center'}
                  gap={1}
                  sx={{
                    cursor: 'pointer',
                    ':hover': {
                      background:
                        'linear-gradient(90deg, #22d3ee 0%, #0ea5e9 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      transition: 'background 0.3s ease-in-out',
                    },
                  }}
                >
                  <Typography
                    className="hover-text"
                    sx={{
                      fontWeight: 'fontWeightBold',
                      fontSize: {
                        xs: '0.7rem',
                        sm: '0.8rem',
                        md: '0.8rem',
                        lg: '1rem',
                        xl: '1.2rem',
                      },
                    }}
                  >
                    View All Posts
                  </Typography>

                  <ArrowCircleRightOutlinedIcon
                    sx={{
                      fontSize: {
                        xs: '1.1rem',
                        sm: '1.1rem',
                        md: '1.1rem',
                        lg: '1.5rem',
                        xl: '2rem',
                      },
                    }}
                  />
                </Stack>
              )}
            </Stack>
            <Stack
              sx={{ width: '100%' }}
              direction={{
                xs: 'column',
                sm: 'row',
                md: 'row',
                lg: 'row',
                xl: 'row',
              }}
              flexWrap={'wrap'}
              gap={3}
              justifyContent={{
                xs: 'center',
                sm: isSm400to550 ? 'centre' : 'flex-start',
                md: 'flex-start',
                lg: 'flex-start',
                xl: 'flex-start',
              }}
              alignItems={{
                xs: 'center',
                sm: 'flex-start',
                md: 'flex-start',
                lg: 'flex-start',
                xl: 'flex-start',
              }}
            >
              {rail.railItems.slice(0, 3).map((railItem, index) => {
                return (
                  <Card
                    key={index}
                    id={railItem.id}
                    title={railItem.title}
                    subtitle={railItem.subtitle}
                    description={railItem.description}
                    image={railItem.image}
                  />
                );
              })}
            </Stack>
          </Stack>
        );
      })}
    </Box>
  );
};

export default ContentRail;
