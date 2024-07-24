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

export { City, Sort, Place, PlaceCardAlt, AppRoute, AuthorizationStatus };
