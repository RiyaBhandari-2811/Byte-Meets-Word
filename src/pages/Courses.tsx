import Heading from '@/components/heading/Heading';
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from '@mui/material';
import courses from '@assets/json/courses.json';

const Courses = () => {
  const goToYouTube = (youtube_link: string) => {
    window.open(youtube_link, '_blank');
  };
  return (
    <Stack justifyContent={'center'} alignItems={'center'} gap={3}>
      <Heading title={'Courses'} />
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
        {courses.courses.map(
          (
            {
              title,
              image,
              description,
              date_of_upload,
              duration,
              youtube_link,
            },
            id: number
          ) => (
            <Card
              key={id}
              className="card"
              sx={{
                width: {
                  xs: '300px',
                  lg: '300px',
                },
                height: {
                  xs: '400px',
                  lg: '350px',
                },
                backgroundColor: 'rgba(30, 41, 59, 1)',
                color: 'white',
                border: '1.5px solid rgb(52 152 219 / 80%)',
                borderRadius: '20px',
                transition: 'box-shadow 0.3s ease-in-out',
                '&:hover': {
                  boxShadow: '0 0 15px rgb(52 152 219 / 80%)',
                },
                '& .MuiCardActionArea-focusHighlight': {
                  display: 'none',
                },
              }}
            >
              <CardActionArea
                disableRipple={true}
                disableTouchRipple={true}
                className="card__action-area"
                sx={{
                  height: '100%',
                }}
                onClick={() => goToYouTube(youtube_link)}
              >
                <CardMedia
                  component="img"
                  alt={title}
                  image={image}
                  height={'50%'}
                  className="card__media"
                  sx={{
                    objectFit: 'cover',
                  }}
                />
                <CardContent
                  className="card__content"
                  sx={{
                    height: '45%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'space-around',
                    padding: '10px',
                    textAlign: 'center',
                  }}
                >
                  <Typography
                    className="card-title"
                    sx={{
                      fontSize: '15px',
                      fontWeight: 'fontWeightBold',
                    }}
                  >
                    {title}
                  </Typography>

                  <Typography
                    className="card-description"
                    sx={{
                      fontSize: '12px',
                      fontWeight: 'fontWeightRegular',
                    }}
                  >
                    {description}
                  </Typography>
                  <Typography
                    className="card__subtitle"
                    sx={{
                      fontSize: '11px',
                      fontWeight: 'fontWeightRegular',
                      color: 'rgba(156, 163, 175, 1)',
                    }}
                  >
                    {date_of_upload + ' ' + duration}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          )
        )}
      </Stack>
    </Stack>
  );
};

export default Courses;
