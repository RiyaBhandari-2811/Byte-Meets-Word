/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import navigateToRoute, { NavigateFunction } from '@/utils/navigateTo';
import {
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from '@mui/material';
import { useCreateUserMutation } from '@/features/userSlice';
import { IUser } from '@/types/user';

const SignUpForm = () => {
  const [signup, { isLoading, isSuccess, isError }] = useCreateUserMutation();

  const [form, setForm] = useState<IUser>({
    name: '',
    email: '',
    password: '',
    role: 'admin',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await signup(form);
  };

  const routeTo: NavigateFunction = navigateToRoute();

  useEffect(() => {
    if (isSuccess) {
      // Wait for a moment before redirecting
      const timer = setTimeout(() => {
        routeTo('/signIn');
      }, 2000); // 2 seconds

      return () => clearTimeout(timer); // Cleanup
    }
  }, [isSuccess, routeTo]);

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Name"
        name="name"
        value={form.name}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Email"
        name="email"
        type="email"
        value={form.email}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Password"
        name="password"
        type="password"
        value={form.password}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <FormControl fullWidth margin="normal">
        <InputLabel>Role</InputLabel>
        <Select name="role" value={form.role} onChange={handleChange as any}>
          <MenuItem value="admin">Admin</MenuItem>
          <MenuItem value="user">User</MenuItem>
        </Select>
      </FormControl>
      <Button
        type="submit"
        variant="contained"
        color="primary"
        disabled={isLoading}
      >
        {isLoading ? 'Signing Up...' : 'Sign Up'}
      </Button>
      {isSuccess && <p>Signup successful!</p>}
      {isError && <p>{'Signup failed'}</p>}
    </form>
  );
};

export default SignUpForm;
