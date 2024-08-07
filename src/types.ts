import PlaceCard from './components/place-card/place-card';
import { City, Sort, Place, PlaceCardAlt } from './const';

export type City = typeof City;
export type Sort = typeof Sort;
export type Place = typeof Place;
export type PlaceCardAlt = typeof PlaceCardAlt;

export type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
}

export type PlaceCard = {
  id: string;
  title: string;
  type: Place;
  price: number;
  city: {
    name: string;
    location: Location;
  };
  location: Location;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  previewImage: string;
  }

export type PlaceCards = PlaceCard[]

export type User = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
}

export type Offer = {
  id: string;
  title: string;
  type: string;
  price: number;
  city: {
    name: string;
    location: Location;
  };
  location: Location;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  description: string;
  bedrooms: number;
  goods: [string];
  host: User;
  images: [string];
  maxAdults: number;
}

export type Offers = Offer[]

export type Review = {
  id: string;
  date: string;
  user: User;
  comment: string;
  rating: number;
}

export type FormState = {
  rating: string;
  comment: string;
}

export type ActiveCard = string | undefined;
