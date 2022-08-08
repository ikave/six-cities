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

export const MAP_CIRLCE_OPTIONS = {
  radius: 500,
  fillOpacity: 0.5,
  fillColor: '#4481c3',
};
