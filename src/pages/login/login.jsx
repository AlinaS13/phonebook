import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginOperation } from '../../redux/auth/operations';

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
    );

    navigate('/');
  };
  return (
    <div>
      <h2>Login in </h2>
      <form>
        <label htmlFor="email">Login</label>
        <input
          type="text"
          name="email"
          defaultValue={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          defaultValue={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        <button type="button" onClick={e => handleSubmit(e)}>
          Login in
        </button>
      </form>
    </div>
  );
}
