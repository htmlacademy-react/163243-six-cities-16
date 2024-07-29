import {Helmet} from 'react-helmet-async';
import { useState } from 'react';

import { City, Sort, PlaceCards } from '../../types';

import Header from '../../components/header/header';
import CitiesTabs from '../../components/cities-tabs/cities-tabs';
import PlacesHeader from '../../components/places-header/places-header';
import PlacesSort from '../../components/places-sort/place-sort';
import PlacesMap from '../../components/places-map/places-map';
import PlacesList from '../../components/places-list/places-list';


type MainProps = {
  city: City;
  sort: Sort;
  placeCards: PlaceCards;
};
const Main = (props: MainProps) => {
  const [activeCard, setActiveCard] = useState(props.placeCards[0].id);
  return (
    <main>
      <div className="page page--gray page--main">
        <Header />
        <Helmet>
          <title>6 Cities. Book your trip</title>
        </Helmet>

        <main className="page__main page__main--index">
          <h1 className="visually-hidden">Cities</h1>
          <CitiesTabs cities={props.city} />
          <div className="cities">
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <PlacesHeader />
                <PlacesSort sort={props.sort} />
                <PlacesList
                  placeCards={props.placeCards}
                  mouseOverHandler={setActiveCard}
                />
              </section>
              <div className="cities__right-section">
                <PlacesMap
                  activeCard={activeCard}
                />
              </div>
            </div>
          </div>
        </main>
      </div>
    </main>
  );
};

export default Main;
