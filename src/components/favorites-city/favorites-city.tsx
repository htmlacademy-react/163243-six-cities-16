import { Link } from 'react-router-dom';

import { AppRoute } from '../../const';

import { PlaceCards } from '../../types';
import PlaceCard from '../place-card/place-card';


const FavoritesCityCards = ({cards}:{cards: PlaceCards}) => (
  cards.map((card) => (
    <article key={card.id} className="favorites__card place-card">
      {card.isPremium ?
        <div className="place-card__mark">
          <span>Premium</span>
        </div> : ''}
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <Link to={ AppRoute.Offer }>
          <img
            className="place-card__image"
            src={card.previewImage}
            width={150}
            height={110}
            alt="Place image"
          />
        </Link>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{card.price}</b>
            <span className="place-card__price-text">
              /&nbsp;night
            </span>
          </div>
          <button
            className="place-card__bookmark-button place-card__bookmark-button--active button"
            type="button"
          >
            <svg
              className="place-card__bookmark-icon"
              width={18}
              height={19}
            >
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: '100%' }} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">Nice, cozy, warm big bed apartment</a>
        </h2>
        <p className="place-card__type">Apartment</p>
      </div>
    </article>
  ))
);

type FavoritesCityProps = {
  places: PlaceCards;
};


const FavoritesCity = ({places}:FavoritesCityProps): JSX.Element => {
  const favorites = places.filter((place) => place.isFavorite);
  const groupedFavorites = Object.groupBy(favorites, (v) => v['city']['name']);
  // console.log('favorites', favorites);
  // console.log(Object.groupBy(favorites, v => v['city']['name']));
  return (
    <ul className="favorites__list">
      {Object.keys(groupedFavorites).map((city) => (
        <li key={city} className="favorites__locations-items">
          <div className="favorites__locations locations locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>{city}</span>
              </a>
            </div>
          </div>
          <div className="favorites__places">
            <FavoritesCityCards key={city} cards={groupedFavorites[city] || []} />
          </div>
        </li>
      )
      )}
    </ul>
  );
};


export default FavoritesCity;
