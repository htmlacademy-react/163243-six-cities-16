const City = {
  Paris: 'Paris',
  Cologne: 'Cologne',
  Brussels: 'Brussels',
  Amsterdam: 'Amsterdam',
  Hamburg: 'Hamburg',
  Dusseldorf: 'Dusseldorf',
} as const;

const Sort = {
  Popular: 'Popular',
  PriceLowToHigh: 'Price: low to high',
  PriceHighToLow: 'Price: high to low',
  TopRatedFirst: 'Top rated first',
} as const;

const Place = {
  House: 'house',
  Apartment: 'apartment',
  Hotel: 'hotel',
  Room: 'room'
} as const;

const PlaceCardAlt = {
  Cities: 'cities',
  NearPlace: 'near-places',
  Favorites: 'favorites'

} as const;

enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:id',
}

enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

const Rating = [
  {title:'perfect', stars: 5},
  {title:'good', stars: 4},
  {title:'not bad', stars: 3},
  {title:'badly', stars: 2},
  {title:'terribly', stars: 1}
];

const REVIEW_COMMENT_LIMIT = 50;

export {
  City,
  Sort,
  Place,
  PlaceCardAlt,
  AppRoute,
  AuthorizationStatus,
  REVIEW_COMMENT_LIMIT,
  Rating
};
