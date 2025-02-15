import {
  Button,
  InputAdornment,
  Stack,
  styled,
  TextField,
  Typography,
} from '@mui/material';

import Heading from '../heading/Heading';

const Newsletter: React.FC = () => {
  const StyledTextField = styled(TextField)({
    flex: 1,
    '& .MuiInputBase-root': {
      background: 'rgba(30, 41, 59, 1)',
      color: '#ccc',
      borderRadius: '50px',
      paddingLeft: '10px',
    },
    '& .MuiOutlinedInput-notchedOutline': {
      border: 'none',
    },
  });

  const SubscribeButton = styled(Button)({
    background: 'linear-gradient(90deg, #27d7ff, #1c92ff)',
    color: 'rgba(30, 41, 59, 1)',
    textTransform: 'none',
    fontWeight: 'bold',
    borderRadius: '50px',
    padding: '7px 35px',
    '&:hover': {
      background: 'linear-gradient(90deg, #1c92ff, #27d7ff)',
    },
  });

  return (
    <Stack
      direction={'row'}
      width={'100%'}
      alignItems={'center'}
      justifyContent={'space-evenly'}
      gap={{ xs: 2, md: 5 }}
      flexWrap={{ xs: 'wrap', sm: 'wrap', md: 'nowrap' }}
    >
      <Stack
        width={{ xs: '100%', sm: '100%', md: '50%' }}
        alignItems={{ xs: 'center', sm: 'center', md: 'flex-start' }}
        justifyContent={'space-evenly'}
        gap={2}
      >
        <Heading title={'Subscribe to my Newsletters'} />
        <Typography
          sx={{
            fontSize: {
              xs: '0.7rem',
              sm: '1rem',
            },
          }}
          component={'span'}
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo
          commodi natus incidunt blanditiis assumenda, enim repudiandae labore
          iusto nam ullam.
        </Typography>
      </Stack>
      <Stack width={{ xs: '100%', sm: '100%', md: '50%' }}>
        <StyledTextField
          variant="outlined"
          placeholder="Enter your Email"
          slotProps={{
            input: {
              endAdornment: (
                <InputAdornment position="end">
                  <SubscribeButton>Subscribe</SubscribeButton>
                </InputAdornment>
              ),
            },
          }}
          InputProps={{
            disableUnderline: true,
          }}
        />
      </Stack>
    </Stack>
  );
};

export default Newsletter;
