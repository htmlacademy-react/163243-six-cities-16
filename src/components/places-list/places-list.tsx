import { useState } from 'react';
import { PlaceCardAlt } from '../../const';

import { PlaceCards} from '../../types';

import PlaceCard from '../place-card/place-card';


type PlacesListProps = {
  placeCards: PlaceCards;
};

const PlacesList = ({placeCards}:PlacesListProps):JSX.Element => {
  const [activeCard, setActiveCard] = useState(placeCards[0].id);
  console.log(activeCard);
  return (
    <div className="cities__places-list places__list tabs__content">
      {placeCards.map((placeCard) => (
        <PlaceCard
          key={placeCard.id}
          placeCard={placeCard}
          placeCardAlt={PlaceCardAlt.Cities}
          onHoverHandler={setActiveCard}
        />
      ))}
    </div>
  );
};
export default PlacesList;
