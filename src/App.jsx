import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Wrapper from 'components/Wrapper';
import { PhoneBook } from 'pages/contacts/PhoneBook';
import Login from 'pages/login/Login';
import Registration from 'pages/registration/Registration';
import NotFound from 'pages/not-found/notFound';
import Home from 'pages/home/Home';
import { PrivateRoute } from './hoc/PrivatRoute';
import { PublicRoute } from 'hoc/PublickRout';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Wrapper />}>
          <Route
            path="/home"
            element={
              <PublicRoute>
                <Home />
              </PublicRoute>
            }
          />
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
