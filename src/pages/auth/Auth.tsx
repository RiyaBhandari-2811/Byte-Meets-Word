/* eslint-disable @typescript-eslint/no-explicit-any */
import Heading from '@/components/heading/Heading';
import {
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
} from '@mui/material';
import styled from '@mui/material/styles/styled';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const Auth = () => {
  const { control, handleSubmit } = useForm();
  const [action, setAction] = useState('signUp');
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const SubmitButton = styled(Button)({
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

  const GradientTextField = styled(TextField)(() => ({
    '& .MuiOutlinedInput-root': {
      color: 'black',
      borderRadius: '8px',
      '& fieldset': {
        border: '2px solid var(--quinary)',
      },
      '&:hover fieldset': {
        border: '2px solid var(--quinary)',
      },
      '&.Mui-focused fieldset': {
        border: '2px solid var(--quinary)',
      },
      input: {
        color: 'white',
      },
    },
    '& .MuiInputLabel-root': {
      color: 'white',
    },
    '& .MuiInputLabel-root.Mui-focused': {
      color: 'white',
    },
  }));

  const handleOnSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <Stack justifyContent="space-evenly" alignItems={'center'}>
      <form
        onSubmit={handleSubmit(handleOnSubmit)}
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-evenly',
          gap: '1rem',
        }}
      >
        <Heading
          title={action === 'signUp' ? 'Sign Up' : 'Sign In'}
          styleProps={{ marginBottom: '1rem' }}
        />
        {action === 'signUp' && (
          <Controller
            name="name"
            render={({ field }) => (
              <GradientTextField
                {...field}
                type="name"
                id="outlined-basic"
                label="Name"
                variant="outlined"
                fullWidth
                margin="none"
              />
            )}
            control={control}
          />
        )}
        <Controller
          name="email"
          render={({ field }) => (
            <GradientTextField
              {...field}
              type="email"
              id="outlined-basic"
              label="Email"
              variant="outlined"
              fullWidth
            />
          )}
          control={control}
        />
        <Controller
          name="password"
          render={({ field }) => (
            <FormControl
              sx={{
                '& .MuiOutlinedInput-root': {
                  color: 'white',
                  borderRadius: '8px',
                  '& fieldset': {
                    border: '2px solid var(--quinary)',
                  },
                  '&:hover fieldset': {
                    border: '2px solid var(--quinary)',
                  },
                  '&.Mui-focused fieldset': {
                    border: '2px solid var(--quinary)',
                  },
                },
                '& .MuiInputLabel-root': {
                  color: 'white',
                  '&.Mui-focused': {
                    color: 'white',
                  },
                },
                '& .MuiIconButton-root': {
                  color: 'white',
                },
              }}
              variant="outlined"
              {...field}
            >
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                fullWidth
                id="outlined-adornment-password"
                type={showPassword ? 'text' : 'password'}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label={
                        showPassword
                          ? 'hide the password'
                          : 'display the password'
                      }
                      onClick={handleClickShowPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>
          )}
          control={control}
        />
        <Stack direction={'row'} gap={2}>
          <SubmitButton onClick={() => setAction('signUp')}>
            {' '}
            Sign Up{' '}
          </SubmitButton>
          <SubmitButton onClick={() => setAction('signIn')}>
            {' '}
            Sign In{' '}
          </SubmitButton>
        </Stack>
      </form>
    </Stack>
  );
};

export default Auth;
