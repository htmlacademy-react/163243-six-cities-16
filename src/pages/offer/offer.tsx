import Header from '../../components/header/header';
import OfferGallery from '../../components/offer-gallery/offer-gallery';
import OfferDetails from '../../components/offer-details/offer-details';
import OfferMap from '../../components/offer-map/offer-map';
import OfferNearPlaces from '../../components/offer-near-places/offer-near-places';

const Offer = () => (
  <div className="page">
    <Header />
    <main className="page__main page__main--offer">
      <section className="offer">
        <OfferGallery />
        <OfferDetails />
        <OfferMap />
      </section>
      <div className="container">
        <OfferNearPlaces />
      </div>
    </main>
  </div>

);

export default Offer;
