import { placeCards } from '../../mocks/place-cards';
import PlaceCard from '../place-card/place-card';

const PlacesList = ():JSX.Element => (
  <div className="cities__places-list places__list tabs__content">
    {placeCards.map((placeCard) => (
      <PlaceCard key={placeCard.id} placeCard={placeCard} />
    ))}
  </div>
);

export default PlacesList;
