import Header from '../../components/header/header';
import CitiesTabs from '../../components/cities-tabs/cities-tabs';
import { City, Sort, PlaceCards } from '../../types';
import PlacesHeader from '../../components/places-header/places-header';
import PlacesSort from '../../components/places-sort/place-sort';
import PlacesMap from '../../components/places-map/places-map';
import PlacesList from '../../components/places-list/places-list';
import {Helmet} from 'react-helmet-async';
import React from 'react';

type MainProps = {
  city: City;
  sort: Sort;
  placeCards: PlaceCards;
};
const Main = (props: MainProps) => (
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
              <PlacesList placeCards={props.placeCards}/>
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

export default Main;
