import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../redux/auth/selector';

export const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  console.log(isLoggedIn);
  if (!isLoggedIn) {
    return <Navigate to="/login" state={{ from: location }} />;
  }
  return children;
  // Компонент вищого порядка - high order Component(HOC)
};
