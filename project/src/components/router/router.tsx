import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Favorites } from '../../pages/favorites';
import { Login } from '../../pages/login';
import { Main } from '../../pages/main';
import { NotFound } from '../../pages/not-found';
import { Room } from '../../pages/room';
import { PrivateRoute } from './private-route';
import { AppRoute } from './enums';

export const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path={AppRoute.Root} element={<Main />} />
      <Route path={AppRoute.Login} element={<Login />} />
      <Route
        path={AppRoute.Favorites}
        element={
          <PrivateRoute>
            <Favorites />
          </PrivateRoute>
        }
      />
      <Route path={AppRoute.Room} element={<Room />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);
