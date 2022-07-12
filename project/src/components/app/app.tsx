import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppRoute, AuthStatus } from '../../const';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import LoginPage from '../../pages/login-page/login-page';
import MainPage from '../../pages/main-page/main-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import RoomPage from '../../pages/room-page/room-page';
import PrivateRoute from '../private-route/private-route';

type PropsType = {
  numberOfRentalOffers: number;
};

function App({ numberOfRentalOffers }: PropsType) {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={<MainPage numberOfRentalOffers={numberOfRentalOffers} />}
        />
        <Route path={AppRoute.Login} element={<LoginPage />} />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute authStatus={AuthStatus.NoAuth}>
              <FavoritesPage />
            </PrivateRoute>
          }
        />
        <Route path={AppRoute.Room} element={<RoomPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
