import Header from '../../components/header/header';
import OfferGallery from '../../components/offer-gallery/offer-gallery';
import OfferDetails from '../../components/offer-details/offer-details';
import OfferMap from '../../components/offer-map/offer-map';
import OfferNearPlaces from '../../components/offer-near-places/offer-near-places';
import { offer } from '../../mocks/offer';
import { review } from '../../mocks/review';
import { placeCards } from '../../mocks/place-cards';
import { Offer as OfferType, PlaceCard } from '../../types';
import {getRandomArrayElement} from '../../utils';
import {Helmet} from 'react-helmet-async';

const Offer = ():JSX.Element => {
  const cardMocks: PlaceCard[] = Array.from({ length: 5 }, () => getRandomArrayElement(placeCards));
  return (
    <div className="page">
      <Header />
      <Helmet>
        <title>6 Cities. Offer</title>
      </Helmet>
      <main className="page__main page__main--offer">
        <section className="offer">
          <OfferGallery offer={ offer as OfferType }/>
          <OfferDetails offer={ offer as OfferType } reviews= { review }/>
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
