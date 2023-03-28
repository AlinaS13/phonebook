import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Wrapper from 'components/Wrapper';
import { PhoneBook } from 'pages/contacts/PhoneBook';
import Login from 'pages/login/login';
import Registration from 'pages/registration/registration';
import NotFound from 'pages/not-found/notFound';
import Home from 'pages/home/Home';
import { PrivateRoute } from './hoc/PrivatRoute';
import { PublicRoute } from 'hoc/PublickRout';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsRefreshing } from 'redux/auth/selector';
import { refreshOperation } from 'redux/auth/operations';

export const App = () => {
  const dispatch = useDispatch();
  const isRefresh = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshOperation());
  }, [dispatch]);

  // return
  // !isRefresh ? (
  //   <div>
  //     <h2> Loading...</h2>
  //   </div>
  // ) :
  return (
    <div>
      <Routes>
        <Route path="/" element={<Wrapper />}>
          <Route path="/home" element={<Home />} />
          <Route
            path="/login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
          <Route
            path="/registration"
            element={
              <PublicRoute>
                <Registration />
              </PublicRoute>
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute>
                <PhoneBook />
              </PrivateRoute>
            }
          />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
