import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../redux/auth/selector';

export const PublicRoute = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  // const location = useLocation();
  if (isLoggedIn) {
    return <Navigate to="/" />;
  }
  return children;
};
