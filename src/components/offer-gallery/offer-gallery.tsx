import { Offer } from '../../types';

type OfferGalleryProps = {
  offer: Offer;
};

const OfferGalleryItem = ({image} : {image: string}):JSX.Element => (
  <div className="offer__image-wrapper">
    <img
      className="offer__image"
      src={image}
      alt="Photo studio"
    />
  </div>
);

const OfferGallery = ({offer}: OfferGalleryProps): JSX.Element => {
  const images = offer.images;
  return (
    <div className="offer__gallery-container container">
      <div className="offer__gallery">
        {images.map((image) => (<OfferGalleryItem key={image} image={image} />))}
      </div>
    </div>
  );
};

export default OfferGallery;
