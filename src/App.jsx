import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Wrapper from 'components/Wrapper';
import { PhoneBook } from 'pages/contacts/PhoneBook';
import Login from 'pages/login/login';
import Registration from 'pages/registration/registration';
import NotFound from 'pages/not-found/notFound';
import Home from 'pages/home/Home';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Wrapper />}>
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/contacts" element={<PhoneBook />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
