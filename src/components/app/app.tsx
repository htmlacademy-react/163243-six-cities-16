import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import { AppRoute, AuthorizationStatus } from '../../const';

import { City, Sort, PlaceCards} from '../../types';

import Main from '../../pages/main/main';
import Login from '../../pages/login/login';
import Favorites from '../../pages/favorites/favorites';
import Offer from '../../pages/offer/offer';
import NotFound from '../../pages/not-found/not-found';

import ScrollToTop from '../scroll-to-top/scroll-to-top';
import PrivateRoute from '../private-route/private-route';


type AppProps = {
  city: City;
  sortType: Sort;
  placeCards: PlaceCards;
};

const App = ({city, sortType, placeCards}: AppProps):JSX.Element => (
  <HelmetProvider>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route
          path = { AppRoute.Main }
          element = {
            <Main
              city={ city }
              sort={ sortType }
              placeCards={ placeCards }
            />
          }
        />
        <Route
          path = { AppRoute.Login }
          element = {
            <PrivateRoute
              authorizationStatus={ AuthorizationStatus.NoAuth }
              page={ AppRoute.Login }
            >
              <Login/>
            </PrivateRoute>
          }
        />
        <Route
          path = { AppRoute.Favorites }
          element = {
            <PrivateRoute
              authorizationStatus={ AuthorizationStatus.Auth }
              page={ AppRoute.Favorites }
            >
              <Favorites
                placeCards={ placeCards }
              />
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
