/* eslint-disable @typescript-eslint/no-explicit-any */
import { setUser } from '@/features/store_slice/userStoreSlice';
import { useSignInMutation } from '@/features/userSlice';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import navigateToRoute, { NavigateFunction } from '@/utils/navigateTo';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const [signIn, { isLoading, isSuccess, isError }] = useSignInMutation();

  const dispatch = useDispatch();
  const routeTo: NavigateFunction = navigateToRoute();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const result = await signIn({ email, password }).unwrap();
      console.log(result);

      if (result?.token) {
        dispatch(
          setUser({
            isAuthorized: true,
            role: 'admin',
          })
        );
      }
    } catch (err: any) {
      console.error(err);
      setMessage(err?.data?.message || 'Sign in failed');
    }
  };

  useEffect(() => {
    if (isSuccess) {
      routeTo('/editor');
    }
  }, [isSuccess, routeTo]);

  const userStore = useSelector((state: any) => state.userStore);

  console.log(userStore);

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
