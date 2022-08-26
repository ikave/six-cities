import { MouseEvent } from 'react';
import { Link } from 'react-router-dom';
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

  const handleCityClick = (evt: MouseEvent<HTMLAnchorElement>) => {
    evt.preventDefault();
  };

  return (
    <li className='favorites__locations-items'>
      <div className='favorites__locations locations locations--current'>
        <div className='locations__item'>
          <Link
            className='locations__item-link'
            to=''
            onClick={handleCityClick}
          >
            <span>{cityName}</span>
          </Link>
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
