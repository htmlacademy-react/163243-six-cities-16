import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import FavoritesList from '../../components/favorites-list/favorites-list';
import {Helmet} from 'react-helmet-async';

const Favorites = ():JSX.Element => (
  <div className="page">
    <Header />
    <Helmet>
      <title>6 Cities. Favorites places</title>
    </Helmet>
    <main className="page__main page__main--favorites">
      <div className="page__favorites-container container">
        <FavoritesList />
      </div>
    </main>
    <Footer />
  </div>

);

export default Favorites;
