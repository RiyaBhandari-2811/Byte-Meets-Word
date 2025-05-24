/* eslint-disable @typescript-eslint/no-explicit-any */

import { logout } from '@/features/store_slice/userStoreSlice';
import isTokenExpired from '@/utils/isTokenExpired';
import { JSX, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const userStore = useSelector((state: any) => state.userStore);

  console.log('userStore: ', userStore);

  const dispatch = useDispatch();

  useEffect(() => {
    const expiry = userStore.expiry;

    if (expiry) {
      if (isTokenExpired(expiry)) {
        dispatch(logout());
      } else {
        const expiryTime = expiry * 1000;
        const currentTime = Date.now();
        const timeout = expiryTime - currentTime;

        const timer = setTimeout(() => {
          dispatch(logout());
          localStorage.removeItem('accessToken');
        }, timeout);

        return () => clearTimeout(timer);
      }
    }
  }, [dispatch]);

  console.log(userStore);
  const isAuthenticated = userStore.isAuthorized && userStore.role === 'admin';

  return isAuthenticated ? children : <Navigate to="/signIn" replace />;
};

export default ProtectedRoute;
