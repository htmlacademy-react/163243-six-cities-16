import { PlaceCardAlt } from '../../const';

import { PlaceCards} from '../../types';

import PlaceCard from '../place-card/place-card';


type PlacesListProps = {
  placeCards: PlaceCards;
  mouseOverHandler: (arg:string) => void;
};

const PlacesList = ({placeCards, mouseOverHandler}:PlacesListProps):JSX.Element => (
  <div className="cities__places-list places__list tabs__content">
    {placeCards.map((placeCard) => (
      <PlaceCard
        key={placeCard.id}
        placeCard={placeCard}
        placeCardAlt={PlaceCardAlt.Cities}
        mouseOverHandler={mouseOverHandler}
      />
    ))}
  </div>
);

export default PlacesList;

