import { capitalizeLetter } from '../../utils';
import { PlaceCard as placeCardType } from '../../types';

type PlaceCardProps = {
  placeCard: placeCardType;
  placeCardAlt: string;
};

const PlaceCard = (props:PlaceCardProps):JSX.Element => (
  <article className=
    {`${props.placeCardAlt}__card place-card cities__card place-card`}
  >
    { props.placeCard.isPremium && (
      <div className="place-card__mark">
        <span>Premium</span>
      </div>
    )}
    <div className=
      {`${props.placeCardAlt}__image-wrapper place-card__image-wrapper`}
    >
      <a href="#">
        <img className="place-card__image"
          src={ props.placeCard.previewImage }
          width="260"
          height="200"
          alt="Place image"
        />
      </a>
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
        <a href="#">{ props.placeCard.title }</a>
      </h2>
      <p className="place-card__type">{ capitalizeLetter(props.placeCard.type as unknown as string) }</p>
    </div>
  </article>
);

export default PlaceCard;
