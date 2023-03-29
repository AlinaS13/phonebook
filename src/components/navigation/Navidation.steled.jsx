import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
export const Header = styled.header`
  justify-content: space-between;
  text-decoration: none;
  display: flex;
  width: 100%;
  height: 70px;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
  box-shadow: 0px 0px 18px 0px #00ffc0;
`;

export const StyledLink = styled(NavLink)`
  color: #fff;
  text-align: center;
  font-size: 36px;
  margin-right: 10px;
  padding: 15px;
  text-decoration: none;
  &.active {
    color: #00ffc0;
  }
`;

export const WrapUserUI = styled.div``;

export const MainWrp = styled.div`
  display: flex;
  align-items: center;
`;
