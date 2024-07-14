import FavoritesCity from '../favorites-city/favorites-city';

const FavoritesList = (): JSX.Element => (
  <section className="favorites">
    <h1 className="favorites__title">Saved listing</h1>
    <FavoritesCity />
  </section>

);

export default FavoritesList;
