import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import FavoritesList from '../../components/favorites-list/favorites-list';

const Favorites = () => (
  <div className="page">
    <Header />
    <main className="page__main page__main--favorites">
      <div className="page__favorites-container container">
        <FavoritesList />
      </div>
    </main>
    <Footer />
  </div>

);

export default Favorites;
