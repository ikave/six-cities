import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../hooks';
import { loginAction } from '../../store/api-actions';
import { AppRoute } from '../router/enums';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    dispatch(loginAction({ email, password }));
    navigate(AppRoute.Root);
  };

  return (
    <form className='login__form form' onSubmit={handleSubmit}>
      <div className='login__input-wrapper form__input-wrapper'>
        <label className='visually-hidden'>E-mail</label>
        <input
          className='login__input form__input'
          type='email'
          name='email'
          placeholder='Email'
          value={email}
          onChange={(evt) => setEmail(evt.target.value)}
          required
        />
      </div>
      <div className='login__input-wrapper form__input-wrapper'>
        <label className='visually-hidden'>Password</label>
        <input
          className='login__input form__input'
          type='password'
          name='password'
          placeholder='Password'
          onChange={(evt) => setPassword(evt.target.value)}
          value={password}
          required
        />
      </div>
      <button className='login__submit form__submit button' type='submit'>
        Sign in
      </button>
    </form>
  );
};

export default LoginForm;
