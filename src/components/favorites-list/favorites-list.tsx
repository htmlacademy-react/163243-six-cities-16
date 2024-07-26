import FavoritesCity from '../favorites-city/favorites-city';

import { PlaceCards } from '../../types';

type FavoritesListProps = {
  places: PlaceCards;
};

const FavoritesList = ({places}:FavoritesListProps): JSX.Element => (
  <section className="favorites">
    <h1 className="favorites__title">Saved listing</h1>
    <FavoritesCity places={places}/>
  </section>

);

export default FavoritesList;
