import { useDispatch, useSelector } from 'react-redux';
import { logoutOperation } from 'redux/auth/operations';
import { selectUser } from 'redux/auth/selector';
import { LogOutBtn, UserMenuWrap } from './UserMenu.styled';

export default function UserMenu() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(logoutOperation());
  };
  return (
    <UserMenuWrap>
      <h2>Hello, {user}</h2>
      <LogOutBtn onClick={logout}>Logout</LogOutBtn>
    </UserMenuWrap>
  );
}
