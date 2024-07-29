import { PlaceCardAlt } from '../../const';

import { PlaceCard as placeCardType} from '../../types';

import PlaceCard from '../place-card/place-card';


type OfferNearPlacesProps = {
  placeCards: placeCardType[];
};


const OfferNearPlaces = (props:OfferNearPlacesProps): JSX.Element => (
  <section className="near-places places">
    <h2 className="near-places__title">
      Other places in the neighbourhood
    </h2>
    <div className="near-places__list places__list">
      {props.placeCards.map((placeCard) => (
        <PlaceCard
          key={placeCard.id}
          placeCard={placeCard}
          placeCardAlt={PlaceCardAlt.NearPlace}
          onHoverHandler={ () => {} }
        />
      ))}
    </div>
  </section>
);

export default OfferNearPlaces;
