import { OfferType } from '../../types';
import { FavoriteOfferItem } from '../favorite-offer-item';

type PropsType = {
  favorites: OfferType[];
};

const getCityNames = (list: OfferType[]) => {
  const cities = new Set<string>();

  list.forEach(({ city: { name } }) => {
    cities.add(name);
  });

  return Array.from(cities);
};

export const FavoriteOfferList = ({ favorites }: PropsType) => {
  const cities = getCityNames(favorites);

  return (
    <ul className='favorites__list'>
      {cities.map((city) => (
        <FavoriteOfferItem key={city} cityName={city} favorites={favorites} />
      ))}
    </ul>
  );
};
