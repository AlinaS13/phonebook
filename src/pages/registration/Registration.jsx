import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { registrationOperation } from '../../redux/auth/operations';
import {
  Title,
  Wraper,
  Form,
  Label,
  InputRegis,
  ButtonRegis,
} from './Registtation.styled';

export default function Registration() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(
      registrationOperation({
        name,
        email,
        password,
      })
    ).then(response => {
      if (response.error) {
        navigate('/registration');
      } else {
        navigate('/contacts');
      }

      console.log(response, 'err');
    });
  };
  return (
    <Wraper>
      <Title>Registration</Title>
      <Form onSubmit={handleSubmit}>
        <Label htmlFor="name">Name</Label>
        <InputRegis
          type="text"
          name="name"
          id="name"
          onChange={e => setName(e.target.value)}
          required
        />
        <Label htmlFor="login">Email</Label>
        <InputRegis
          type="text"
          name="email"
          id="email"
          onChange={e => setEmail(e.target.value)}
          required
        />
        <Label htmlFor="password" className="label">
          Password
        </Label>
        <InputRegis
          type="password"
          name="password"
          id="password"
          onChange={e => setPassword(e.target.value)}
          required
        />
        <ButtonRegis type="submit">Send</ButtonRegis>
      </Form>
    </Wraper>
  );
}
