import Header from '../../components/header/header';
import CitiesTabs from '../../components/cities-tabs/cities-tabs';
import { City, PlaceCard, Sort } from '../../types';
import PlacesHeader from '../../components/places-header/places-header';
import PlacesSort from '../../components/places-sort/place-sort';
import PlacesMap from '../../components/places-map/places-map';
import PlacesList from '../../components/places-list/places-list';
import { placeCards } from '../../mocks/place-cards';
import { getRandomArrayElement } from '../../utils';

type MainProps = {
  city: City;
  sort: Sort;
};
const Main = (props: MainProps) => {
  const cardMocks : PlaceCard[] = Array.from({ length: 5 }, () => getRandomArrayElement(placeCards));
  return (
    <main>
      <div className="page page--gray page--main">
        <Header />

        <main className="page__main page__main--index">
          <h1 className="visually-hidden">Cities</h1>
          <CitiesTabs cities={props.city} />
          <div className="cities">
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <PlacesHeader />
                <PlacesSort sort={props.sort} />
                <PlacesList placeCards={cardMocks}/>
              </section>
              <div className="cities__right-section">
                <PlacesMap />
              </div>
            </div>
          </div>
        </main>
      </div>
    </main>
  );
};
export default Main;
