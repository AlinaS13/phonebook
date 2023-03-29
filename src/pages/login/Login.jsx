import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginOperation } from '../../redux/auth/operations';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
    ).then(response => {
      if (response.error) {
        toast.error('Please enter valid data!');
      } else {
        navigate('/contacts');
      }
    });
  };

  return (
    <Wraper>
      <Title>Login</Title>
      <Form onSubmit={e => handleSubmit(e)}>
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
        <ButtonLogin type="submit">Login in</ButtonLogin>
        <ToastContainer autoClose={3500} theme="colored" />
      </Form>
    </Wraper>
  );
}
