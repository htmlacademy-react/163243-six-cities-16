import { PlaceCardAlt } from '../../const';

import { PlaceCards } from '../../types';

import PlaceCard from '../place-card/place-card';


type PlacesListProps = {
  placeCards: PlaceCards;
  onMouseEnter: (arg:string) => void;
  onMouseLeave: (arg:string | undefined) => void;
};

const PlacesList = ({placeCards, onMouseEnter, onMouseLeave}:PlacesListProps):JSX.Element => (
  <div className="cities__places-list places__list tabs__content">
    {placeCards.map((placeCard) => (
      <PlaceCard
        key={placeCard.id}
        placeCard={placeCard}
        placeCardAlt={PlaceCardAlt.Cities}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      />
    ))}
  </div>
);

export default PlacesList;

