export const MarkerUrL = {
  Default: './img/pin.svg',
  Current: './img/pin-active.svg',
} as const;

export enum NameSpace {
  App = 'App',
  Data = 'Data',
  User = 'User',
}

export const ERROR_SHOW_TIMEOUT = 2000;

export const CARD_CLASSES = {
  cities: {
    card: 'cities__card',
    imageWrapper: 'cities__image-wrapper',
  },
  near: {
    card: 'near-places__card',
    imageWrapper: 'near-places__image-wrapper',
  },
};

export enum City {
  Paris = 'Paris',
  Cologne = 'Cologne',
  Brussels = 'Brussels',
  Amsterdam = 'Amsterdam',
  Hamburg = 'Hamburg',
  Dusseldorf = 'Dusseldorf',
}

export const Cities = [
  City.Paris,
  City.Cologne,
  City.Brussels,
  City.Amsterdam,
  City.Hamburg,
  City.Dusseldorf,
] as const;

export enum SortType {
  Popular = 'Popular',
  PriceLowToHigh = 'Price: low to high',
  PriceHighToLow = 'Price: high to low',
  TopRatedFirst = 'Top rated first',
}
