import UserMenu from 'components/user-menu/UsrMenu';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectAuthToken } from '../../redux/auth/selector';
import { Header, StyledLink, WrapUserUI } from './Navidation.steled';

export default function Navigaion() {
  const authToken = useSelector(selectAuthToken);

  return (
    <Header>
      <StyledLink to="/">Home</StyledLink>
      {authToken ? (
        <>
          <StyledLink to="/contacts">Contacts</StyledLink>
          <UserMenu />
        </>
      ) : (
        <WrapUserUI>
          <StyledLink to="/registration">Sign up</StyledLink>
          <StyledLink to="/login">Sign in</StyledLink>
        </WrapUserUI>
      )}
    </Header>
  );
}
