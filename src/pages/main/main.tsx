import Header from '../../components/header/header';
import CitiesTabs from '../../components/cities-tabs/cities-tabs';
import { City, SortType } from '../../const';
import PlacesHeader from '../../components/places-header/places-header';
import PlacesSort from '../../components/places-sort/place-sort';
import PlacesMap from '../../components/places-map/places-map';
import PlacesList from '../../components/places-list/places-list';

type MainProps = {
  city: typeof City;
  sortType: typeof SortType;
};

const main = ({ city, sortType }: MainProps) => (

  <div className="page page--gray page--main">
    <Header />

    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <CitiesTabs cities={city} />
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <PlacesHeader />
            <PlacesSort sortType={sortType} />
            <PlacesList />
          </section>
          <div className="cities__right-section">
            <PlacesMap />
          </div>
        </div>
      </div>
    </main>
  </div>

);

export default main;
