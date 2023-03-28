import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../redux/auth/selector';

export const PublicRoute = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  // const location = useLocation();
  // const fromPage = location.state?.from.pathname || '/';
  if (isLoggedIn) {
    return <Navigate to="/" />;
  }
  return children;
};
