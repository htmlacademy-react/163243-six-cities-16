import Main from '../../pages/main/main';
import Login from '../../pages/login/login';
import Favorites from '../../pages/favorites/favorites';
import Offer from '../../pages/offer/offer';
import { City, Sort } from '../../types';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppRoute } from '../../const';

type AppProps = {
  city: City;
  sortType: Sort;
};

const App = (props: AppProps):JSX.Element => (
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
        element = <Login/>
      />
      <Route
        path = {AppRoute.Favorites}
        element = <Favorites/>
      />
      <Route
        path = {AppRoute.Offer}
        element = <Offer/>
      />
    </Routes>
  </BrowserRouter>
);

export default App;
