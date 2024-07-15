import PlaceCard from '../place-card/place-card';
import { PlaceCard as placeCardType} from '../../types';
import { PlaceCardAlt } from '../../const';

type PlacesListProps = {
  placeCards: placeCardType[];
};

const PlacesList = ({placeCards}:PlacesListProps):JSX.Element => (
  <div className="cities__places-list places__list tabs__content">
    {placeCards.map((placeCard) => (
      <PlaceCard key={placeCard.id} placeCard={placeCard} placeCardAlt={PlaceCardAlt.Cities}/>
    ))}
  </div>
);

export default PlacesList;
