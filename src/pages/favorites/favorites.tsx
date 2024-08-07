import { Helmet } from 'react-helmet-async';

import { PlaceCards } from '../../types';

import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import FavoritesList from '../../components/favorites-list/favorites-list';


type FavoritesProps = {
  placeCards: PlaceCards;
};

const Favorites = ({placeCards}: FavoritesProps):JSX.Element => (
  <div className="page">
    <Header />
    <Helmet>
      <title>6 Cities. Favorites places</title>
    </Helmet>
    <main className="page__main page__main--favorites">
      <div className="page__favorites-container container">
        <FavoritesList places={ placeCards } />
      </div>
    </main>
    <Footer />
  </div>

);

export default Favorites;
