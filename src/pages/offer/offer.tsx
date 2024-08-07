import {Helmet} from 'react-helmet-async';
// import { useLocation } from 'react-router-dom';

import { Offer as OfferType, PlaceCard } from '../../types';

import Header from '../../components/header/header';
import OfferGallery from '../../components/offer-gallery/offer-gallery';
import OfferDetails from '../../components/offer-details/offer-details';
import OfferMap from '../../components/offer-map/offer-map';
import OfferNearPlaces from '../../components/offer-near-places/offer-near-places';

import {getRandomArrayElement} from '../../utils';

import { offers } from '../../mocks/offers';
import { review } from '../../mocks/review';
import { placeCards } from '../../mocks/place-cards';


const Offer = ():JSX.Element => {
  const cardMocks: PlaceCard[] = Array.from({ length: 5 }, () => getRandomArrayElement(placeCards));
  // let location = useLocation();
  return (
    <div className="page">
      <Header />
      <Helmet>
        <title>6 Cities. Offer</title>
      </Helmet>
      <main className="page__main page__main--offer">
        <section className="offer">
          <OfferGallery offer={ offers[0] as OfferType }/>
          <OfferDetails offer={ offers[0] as OfferType } reviews= { review }/>
          <OfferMap/>
        </section>
        <div className="container">
          <OfferNearPlaces placeCards={cardMocks}/>
        </div>
      </main>
    </div>

  );
};

export default Offer;
