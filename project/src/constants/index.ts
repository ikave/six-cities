export const URL_MARKER_DEFAULT = './img/pin.svg';
export const URL_MARKER_CURRENT = './img/pin-active.svg';

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

export enum Cities {
  Paris = 'Paris',
  Cologne = 'Cologne',
  Brussels = 'Brussels',
  Amsterdam = 'Amsterdam',
  Hamburg = 'Hamburg',
  Dusseldorf = 'Dusseldorf',
}

export const cities = [
  Cities.Paris,
  Cities.Cologne,
  Cities.Brussels,
  Cities.Amsterdam,
  Cities.Hamburg,
  Cities.Dusseldorf,
] as const;

export enum SortType {
  Popular = 'Popular',
  PriceLowToHigh = 'Price: low to high',
  PriceHighToLow = 'Price: high to low',
  TopRatedFirst = 'Top rated first',
}
