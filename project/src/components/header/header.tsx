import { memo, MouseEvent } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { logoutAction } from '../../store/api-actions';
import { getFavoriteOffers } from '../../store/app-data/selectors';
import { getAuthStatus, getUser } from '../../store/user-data/selectors';
import { AuthStatus } from '../router/enums';

const Header = () => {
  const dispatch = useAppDispatch();

  const authStatus = useAppSelector(getAuthStatus);
  const favorites = useAppSelector(getFavoriteOffers);
  const user = useAppSelector(getUser);

  const handleClick = (evt: MouseEvent<HTMLAnchorElement>) => {
    evt.preventDefault();
    dispatch(logoutAction());
  };

  return (
    <header className='header'>
      <div className='container'>
        <div className='header__wrapper'>
          <div className='header__left'>
            <Link
              className='header__logo-link header__logo-link--active'
              to='/'
            >
              <img
                className='header__logo'
                src='img/logo.svg'
                alt='6 cities logo'
                width='81'
                height='41'
              />
            </Link>
          </div>
          <nav className='header__nav'>
            <ul className='header__nav-list'>
              {authStatus === AuthStatus.Auth ? (
                <>
                  <li className='header__nav-item user'>
                    <Link
                      className='header__nav-link header__nav-link--profile'
                      to='/favorites'
                    >
                      <div className='header__avatar-wrapper user__avatar-wrapper'></div>
                      <span className='header__user-name user__name'>
                        {user?.email}
                      </span>
                      <span className='header__favorite-count'>
                        {favorites.length}
                      </span>
                    </Link>
                  </li>
                  <li className='header__nav-item'>
                    <Link
                      className='header__nav-link'
                      to='/'
                      onClick={handleClick}
                    >
                      <span className='header__signout'>Sign out</span>
                    </Link>
                  </li>
                </>
              ) : (
                <li className='header__nav-item user'>
                  <Link
                    className='header__nav-link header__nav-link--profile'
                    to='/login'
                  >
                    <div className='header__avatar-wrapper user__avatar-wrapper'></div>
                    <span className='header__login'>Sign in</span>
                  </Link>
                </li>
              )}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
export default memo(Header);
