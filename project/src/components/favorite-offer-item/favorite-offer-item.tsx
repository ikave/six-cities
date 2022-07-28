import { OfferType } from '../../types';
import { FavoriteOfferCard } from '../favorite-offer-card';

type PropsType = {
  cityName: string;
  favorites: OfferType[];
};

type getFavoriteFromCityProps = {
  cityName: string;
  favorites: OfferType[];
};

const getFavoriteFromCity = ({
  cityName,
  favorites,
}: getFavoriteFromCityProps) =>
  favorites.filter(({ city: { name } }) => name === cityName);

export const FavoriteOfferItem = ({ cityName, favorites }: PropsType) => {
  const favoriteList = getFavoriteFromCity({ cityName, favorites });

  return (
    <li className='favorites__locations-items'>
      <div className='favorites__locations locations locations--current'>
        <div className='locations__item'>
          <a className='locations__item-link' href='#1'>
            <span>{cityName}</span>
          </a>
        </div>
      </div>
      <div className='favorites__places'>
        {favoriteList.map((offer) => (
          <FavoriteOfferCard key={offer.id} offer={offer} />
        ))}
      </div>
    </li>
  );
};
