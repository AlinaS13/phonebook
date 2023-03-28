import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginOperation } from '../../redux/auth/operations';
import {
  Title,
  Wraper,
  Form,
  ButtonLogin,
  Label,
  InputLogin,
} from './Login.styled';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(
      loginOperation({
        email,
        password,
      })
    ).then(() => navigate('/contacts'));
  };
  return (
    <Wraper>
      <Title>Login</Title>
      <Form>
        <Label htmlFor="email">Email</Label>
        <InputLogin
          type="text"
          name="email"
          defaultValue={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <Label htmlFor="password">Password</Label>
        <InputLogin
          type="password"
          name="password"
          defaultValue={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        <ButtonLogin type="button" onClick={e => handleSubmit(e)}>
          Login in
        </ButtonLogin>
      </Form>
    </Wraper>
  );
}
