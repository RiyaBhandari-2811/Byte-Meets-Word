/* eslint-disable @typescript-eslint/no-explicit-any */
import { useSignInMutation } from '@/features/userSlice';
import { useState, useEffect } from 'react';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const [signIn, { isLoading, isSuccess, isError }] = useSignInMutation();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const result = await signIn({ email, password }).unwrap();
      console.log(result);
      setMessage('Sign in successful!');

      // const token =
      //   result?.token ||
      //   result?.meta?.response?.headers
      //     .get('Authorization')
      //     ?.replace('Bearer ', '');
      //     localStorage.setItem("accessToken", token);
    } catch (err: any) {
      console.error(err);
      setMessage(err?.data?.message || 'Sign in failed');
    }
  };

  useEffect(() => {
    if (isSuccess) {
      // Optional: redirect or handle token
      console.log('Redirect to dashboard or home');
    }
  }, [isSuccess]);

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 300 }}>
      <h2>Sign In</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <br />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <br />
      <button type="submit" disabled={isLoading}>
        {isLoading ? 'Signing in...' : 'Sign In'}
      </button>
      <p style={{ color: isError ? 'red' : 'green' }}>{message}</p>
    </form>
  );
};

export default SignIn;
