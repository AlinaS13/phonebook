import UserMenu from 'components/user-menu/UsrMenu';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logoutOperation } from '../../redux/auth/operations';
import { selectAuthToken, selectUser } from '../../redux/auth/selector';
import { Header, LogOutBtn, StyledLink } from './Navidation.steled';

export default function Navigaion() {
  const authToken = useSelector(selectAuthToken);
  // const dispatch = useDispatch();

  return (
    <Header>
      <StyledLink to="/home">Home</StyledLink>
      {authToken ? (
        <>
          <StyledLink to="/contacts">Contacts</StyledLink>
          <UserMenu />
        </>
      ) : (
        <>
          <StyledLink to="/registration">Sign up</StyledLink>
          <StyledLink to="/login">Sign in</StyledLink>
        </>
      )}
    </Header>
  );
}
