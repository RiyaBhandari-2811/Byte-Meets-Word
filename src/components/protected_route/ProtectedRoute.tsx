/* eslint-disable @typescript-eslint/no-explicit-any */

import { JSX } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const userStore = useSelector((state: any) => state.userStore);

  console.log(userStore);
  const isAuthenticated = userStore.isAuthorized && userStore.role === 'admin';

  return isAuthenticated ? children : <Navigate to="/signIn" replace />;
};

export default ProtectedRoute;
