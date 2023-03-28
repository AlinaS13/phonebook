import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logoutOperation } from '../../redux/auth/operations';
import { selectAuthToken } from '../../redux/auth/selector';
import { Header, StyledLink } from './Navidation.steled';

export default function Navigaion() {
  const authToken = useSelector(selectAuthToken);
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(logoutOperation());
  };

  return (
    <Header>
      {authToken ? (
        <>
          <StyledLink to="/contacts">Contacts</StyledLink>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <>
          <StyledLink to="/home">Home</StyledLink>
          <StyledLink to="/registration">Sign up</StyledLink>
          <StyledLink to="/login">Sign in</StyledLink>
        </>
      )}
    </Header>
  );
}
