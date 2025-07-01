/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  InputAdornment,
  Stack,
  styled,
  TextField,
  Typography,
} from '@mui/material';

import Heading from '../heading/Heading';
import { useSubscribeMutation } from '@/features/subscribeSlice';
import { Controller, FieldErrors, useForm } from 'react-hook-form';
import { useState } from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { ButtonAtom } from '../atoms/Button/ButtonAtom';

const Newsletter: React.FC = () => {
  const [subscribe, { isLoading }] = useSubscribeMutation();
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState<'success' | 'error'>(
    'success'
  );

  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      email: '',
    },
  });

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

  const handleSubscribe = async (data: any) => {
    try {
      await subscribe({ email: data.email });
      setSnackbarMessage('Verification Email Sent!');
      setSnackbarSeverity('success');
      setSnackbarOpen(true);
      reset();
    } catch (error) {
      console.log('Newsletter error', error);
      setSnackbarMessage('Something went wrong. Please try again.');
      setSnackbarSeverity('error');
      setSnackbarOpen(true);
    }
  };

  const onError = (errors: FieldErrors) => {
    if (errors.email) {
      const message =
        typeof errors.email === 'object' &&
        errors.email !== null &&
        'message' in errors.email &&
        typeof errors.email.message === 'string'
          ? errors.email.message
          : 'Validation error';
      setSnackbarMessage(message);
      setSnackbarSeverity('error');
      setSnackbarOpen(true);
    }
  };

  return (
    <Stack
      direction={'row'}
      width={'100%'}
      alignItems={'center'}
      justifyContent={'space-evenly'}
      gap={{ xs: 2, md: 5 }}
      flexWrap={{ xs: 'wrap', sm: 'wrap', md: 'nowrap' }}
    >
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={4000}
        onClose={() => setSnackbarOpen(false)}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Alert
          onClose={() => setSnackbarOpen(false)}
          severity={snackbarSeverity}
          sx={{ width: '100%' }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>

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
        <form onSubmit={handleSubmit(handleSubscribe, onError)}>
          <Controller
            name="email"
            control={control}
            rules={{
              required: 'Email is required',
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Enter a valid email address',
              },
            }}
            render={({ field }) => (
              <StyledTextField
                {...field}
                variant="outlined"
                placeholder="Enter your Email"
                slotProps={{
                  input: {
                    endAdornment: (
                      <InputAdornment position="end">
                        <ButtonAtom
                          variant="gradient"
                          type="submit"
                          disabled={isLoading}
                        >
                          Subscribe
                        </ButtonAtom>
                      </InputAdornment>
                    ),
                  },
                }}
                InputProps={{
                  disableUnderline: true,
                }}
              />
            )}
          />
        </form>
      </Stack>
    </Stack>
  );
};

export default Newsletter;
