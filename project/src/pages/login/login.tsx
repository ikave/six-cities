import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { Header } from '../../components/header';
import { LoginForm } from '../../components/login-form';
import { AppRoute, AuthStatus } from '../../components/router/enums';
import { Cities } from '../../constants';
import { getRandomCity } from '../../helpers';

import { useAppDispatch, useAppSelector } from '../../hooks';
import { setCurrentCity } from '../../store/app-process/app-process';
import { getAuthStatus } from '../../store/user-data/selectors';

export const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const authStatus = useAppSelector(getAuthStatus);

  const randomCity = getRandomCity(Cities);

  const handleClick = () => {
    dispatch(setCurrentCity(randomCity));
  };

  useEffect(() => {
    if (authStatus === AuthStatus.Auth) {
      navigate(AppRoute.Root);
    }
  }, [authStatus, navigate]);

  return (
    <div className='page page--gray page--login'>
      <Header />

      <main className='page__main page__main--login'>
        <div className='page__login-container container'>
          <section className='login'>
            <h1 className='login__title'>Sign in</h1>
            <LoginForm />
          </section>
          <section className='locations locations--login locations--current'>
            <div className='locations__item'>
              <Link
                className='locations__item-link'
                to={AppRoute.Root}
                onClick={handleClick}
              >
                <span>{randomCity}</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};
