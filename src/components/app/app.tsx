import Main from '../../pages/main/main';
import Login from '../../pages/login/login';
import Favorites from '../../pages/favorites/favorites';
import Offer from '../../pages/offer/offer';
import { City, Sort } from '../../types';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import PrivateRoute from '../private-route/private-route';
import {HelmetProvider} from 'react-helmet-async';
import NotFound from '../../pages/not-found/not-found';

type AppProps = {
  city: City;
  sortType: Sort;
};

const App = (props: AppProps):JSX.Element => (
  <HelmetProvider>
    <BrowserRouter>
      <Routes>
        <Route
          path = { AppRoute.Main }
          element = {
            <Main
              city={ props.city }
              sort={ props.sortType }
            />
          }
        />
        <Route
          path = { AppRoute.Login }
          element = {
            <PrivateRoute authorizationStatus={ AuthorizationStatus.NoAuth } page={ AppRoute.Login }>
              <Login/>
            </PrivateRoute>
          }
        />
        <Route
          path = { AppRoute.Favorites }
          element = {
            <PrivateRoute authorizationStatus={ AuthorizationStatus.NoAuth } page={ AppRoute.Favorites }>
              <Favorites/>
            </PrivateRoute>
          }
        />
        <Route
          path = { AppRoute.Offer }
          element = { <Offer/> }
        />
        <Route
          path="*"
          element={ <NotFound /> }
        />
      </Routes>
    </BrowserRouter>
  </HelmetProvider>
);

export default App;
