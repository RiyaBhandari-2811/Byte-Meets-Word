/* eslint-disable @typescript-eslint/no-explicit-any */
import Heading from '@/components/heading/Heading';
import {
  Button,
  CircularProgress,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  Link,
  OutlinedInput,
  Stack,
  Typography,
} from '@mui/material';
import styled from '@mui/material/styles/styled';
import TextField from '@mui/material/TextField';
import { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useCreateUserMutation, useSignInMutation } from '@/features/userSlice';
import { useDispatch } from 'react-redux';
import navigateToRoute, { NavigateFunction } from '@/utils/navigateTo';
import { setUser } from '@/features/store_slice/userStoreSlice';

const Auth = () => {
  const [
    signup,
    {
      isSuccess: isSignUpSuccess,
      isError: isSignUpError,
      error: signupError,
      isLoading: signupLoading,
    },
  ] = useCreateUserMutation();
  const [
    signin,
    {
      isSuccess: isSignInSuccess,
      isError: isSignInError,
      error: signinError,
      isLoading: signinLoading,
    },
  ] = useSignInMutation();
  const [message, setMessage] = useState<string>('');
  const { control, handleSubmit } = useForm();
  const [action, setAction] = useState('signUp');
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const routeTo: NavigateFunction = navigateToRoute();

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  useEffect(() => {
    if (isSignUpSuccess) {
      setAction('signIn');
    }
    if (isSignInSuccess) {
      routeTo('/editor');
    }
    if (isSignUpError || isSignInError) {
      const errorMessage = isSignInError
        ? (signinError as any)?.data?.error || 'Sign in failed'
        : (signupError as any)?.data?.error || 'Sign up failed';

      setMessage(errorMessage);
    }
  }, [
    isSignUpSuccess,
    isSignInSuccess,
    isSignUpError,
    isSignInError,
    signinError,
    signupError,
  ]);

  const GradientButton = styled(Button)({
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

  const handleOnSubmit = async (data: any) => {
    if (action === 'signUp') {
      console.log('DATA', data);

      await signup({ ...data, role: 'admin' });
    } else {
      try {
        const result = await signin({
          email: data.email,
          password: data.password,
        }).unwrap();
        console.log(result);

        if (result?.token) {
          dispatch(
            setUser({
              isAuthorized: true,
              role: 'admin',
              token: result.token,
              expiry: result.exp,
            })
          );
        }
      } catch (err: any) {
        console.error(err);
      }
    }
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
          styleProps={{ marginBottom: '1rem', textAlign: 'center' }}
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

        {action === 'signUp' ? (
          <Typography>
            Already have the account?{' '}
            <Link
              color="info"
              onClick={() => setAction('signIn')}
              sx={{ cursor: 'pointer' }}
            >
              Sign In
            </Link>
          </Typography>
        ) : (
          <Typography>
            Create Account :{' '}
            <Link
              color="info"
              onClick={() => setAction('signUp')}
              sx={{ cursor: 'pointer' }}
            >
              Sign Up
            </Link>
          </Typography>
        )}

        <GradientButton type="submit" disabled={signinLoading || signupLoading}>
          {signinLoading || signupLoading ? (
            <CircularProgress />
          ) : action === 'signUp' ? (
            'Sign Up'
          ) : (
            'Sign In'
          )}
        </GradientButton>

        {(isSignInError || isSignUpError) && (
          <Typography color="error" textAlign={'center'}>
            {message}
          </Typography>
        )}
      </form>
    </Stack>
  );
};

export default Auth;
