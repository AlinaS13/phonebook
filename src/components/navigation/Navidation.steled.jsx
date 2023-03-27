import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
export const Header = styled.header`
  text-decoration: none;
  display: flex;
  width: 100%;
  height: 70px;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
  box-shadow: 0px 0px 18px 0px #adff2f;
`;

export const StyledLink = styled(NavLink)`
  color: #fff;
  text-align: center;
  font-size: 36px;
  margin-right: 10px;
  padding: 15px;
  text-decoration: none;
  &.active {
    color: #adff2f;
  }
`;
