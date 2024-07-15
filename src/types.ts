import { City, Sort, Place, PlaceCardAlt } from './const';

type City = typeof City;
type Sort = typeof Sort;
type Place = typeof Place;
type PlaceCardAlt = typeof PlaceCardAlt;

type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
}

type PlaceCard = {
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

type User = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
}

type Offer = {
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

type Review = {
  id: string;
  date: string;
  user: User;
  comment: string;
  rating: number;
}

export type {
  City,
  Sort,
  PlaceCard,
  Place,
  Offer,
  Review,
  PlaceCardAlt};
