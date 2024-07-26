import PlaceCard from '../place-card/place-card';
import { PlaceCards} from '../../types';
import { PlaceCardAlt } from '../../const';


type PlacesListProps = {
  placeCards: PlaceCards;
};

const PlacesList = ({placeCards}:PlacesListProps):JSX.Element => (
  <div className="cities__places-list places__list tabs__content">
    {placeCards.map((placeCard) => (
      <PlaceCard
        key={placeCard.id}
        placeCard={placeCard}
        placeCardAlt={PlaceCardAlt.Cities}
      />
    ))}
  </div>
);

export default PlacesList;
