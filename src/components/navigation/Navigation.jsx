import MainSVG from 'assest/maimSVG';
import UserMenu from 'components/user-menu/UsrMenu';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectAuthToken } from '../../redux/auth/selector';
import { Header, MainWrp, StyledLink, WrapUserUI } from './Navidation.steled';

export default function Navigaion() {
  const authToken = useSelector(selectAuthToken);

  return (
    <Header>
      <MainWrp>
        <MainSVG></MainSVG>
        <StyledLink to="/">PhoneBook</StyledLink>
      </MainWrp>
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
