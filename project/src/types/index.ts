export type LocationType = {
  latitude: number;
  longitude: number;
  zoom: number;
};

export type CityType = {
  location: LocationType;
  name: string;
};

export type HostType = {
  avatarUrl: string;
  id: number;
  isPro: boolean;
  name: string;
};

export type OfferType = {
  bedrooms: number;
  city: CityType;
  description: string;
  goods: string[];
  host: HostType;
  id: number;
  images: string[];
  isFavorite: boolean;
  isPremium: boolean;
  location: LocationType;
  maxAdults: number;
  previewImage: string;
  price: number;
  rating: number;
  title: string;
  type: string;
};

export type UserType = {
  avatarUrl: string;
  id: number;
  isPro: boolean;
  name: string;
};

export type ReviewType = {
  comment: string;
  date: string;
  id: number;
  rating: number;
  user: UserType;
};

export type CardClassType = {
  card: string;
  imageWrapper: string;
};
