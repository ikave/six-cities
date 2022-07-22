import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { NUMBER_OF_RENTAL_OFFERS } from '../../constants';

import Favorites from '../../pages/favorites/favorites';
import Login from '../../pages/login/login';
import Main from '../../pages/main/main';
import NotFound from '../../pages/not-found/not-found';
import Room from '../../pages/room/room';
import PrivateRoute from './private-route/private-route';
import { AppRoute, AuthStatus } from './enums';
import { OfferType } from '../../types';

type PropsType = {
  offersList: OfferType[];
};

const Router = ({ offersList }: PropsType) => (
  <BrowserRouter>
    <Routes>
      <Route
        path={AppRoute.Root}
        element={
          <Main
            numberOfRentalOffers={NUMBER_OF_RENTAL_OFFERS}
            offersList={offersList}
          />
        }
      />
      <Route path={AppRoute.Login} element={<Login />} />
      <Route
        path={AppRoute.Favorites}
        element={
          <PrivateRoute authStatus={AuthStatus.NoAuth}>
            <Favorites />
          </PrivateRoute>
        }
      />
      <Route path={AppRoute.Room} element={<Room />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
