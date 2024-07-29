import { Link } from 'react-router-dom';

import { PlaceCard as placeCardType } from '../../types';

import { capitalizeLetter } from '../../utils';
import { AppRoute } from '../../const';


type PlaceCardProps = {
  placeCard: placeCardType;
  placeCardAlt: string;
  mouseOverHandler: (arg:string) => void;
};

const PlaceCard = (props:PlaceCardProps):JSX.Element => (
  <article className=
    {`${props.placeCardAlt}__card place-card cities__card place-card`}
  onMouseOver={() => props.mouseOverHandler(props.placeCard.id)}
  >
    { props.placeCard.isPremium && (
      <div className="place-card__mark">
        <span>Premium</span>
      </div>
    )}
    <div className=
      {`${props.placeCardAlt}__image-wrapper place-card__image-wrapper`}
    >
      <Link to={`${AppRoute.Offer.split(':')[0]}${props.placeCard.id}`}>
        <img className="place-card__image"
          src={ props.placeCard.previewImage }
          width="260"
          height="200"
          alt="Place image"
        />
      </Link>
    </div>
    <div className="place-card__info">
      <div className="place-card__price-wrapper">
        <div className="place-card__price">
          <b className="place-card__price-value">&euro;{ props.placeCard.price }</b>
          <span className="place-card__price-text">&#47;&nbsp;night</span>
        </div>
        <button
          className={`place-card__bookmark-button ${props.placeCard.isFavorite ? 'place-card__bookmark-button--active' : ''} button`}
          type="button"
        >
          <svg
            className="place-card__bookmark-icon"
            width="18"
            height="19"
          >
            <use xlinkHref="#icon-bookmark"/>
          </svg>
          <span className="visually-hidden">{ props.placeCard.isFavorite ? 'In bookmarks' : 'To bookmarks' }</span>
        </button>
      </div>
      <div className="place-card__rating rating">
        <div className="place-card__stars rating__stars">
          <span style= {{ width: '80%' }}></span>
          <span className="visually-hidden">Rating</span>
        </div>
      </div>
      <h2 className="place-card__name">
        <Link to={`${AppRoute.Offer.split(':')[0]}${props.placeCard.id}`}>{ props.placeCard.title }</Link>
      </h2>
      <p className="place-card__type">{ capitalizeLetter(props.placeCard.type as unknown as string) }</p>
    </div>
  </article>
);

export default PlaceCard;
