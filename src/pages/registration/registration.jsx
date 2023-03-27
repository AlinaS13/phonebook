import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { registrationOperation } from '../../redux/auth/operations';

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
    );

    navigate('/');
  };
  return (
    <div>
      <h2>Registration</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          onChange={e => setName(e.target.value)}
          required
        />
        <label htmlFor="login">Email</label>
        <input
          type="text"
          name="email"
          id="email"
          onChange={e => setEmail(e.target.value)}
          required
        />
        <label htmlFor="password" className="label">
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          onChange={e => setPassword(e.target.value)}
          required
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
