import { OfferType } from '../../types';
import FavoriteCard from '../favorite-card/favorite-card';

type PropsType = {
  favorites: OfferType[]
}

const FavoritesList = ({ favorites }: PropsType) => {
  const cities: string[] = [];

  favorites.forEach((offer) => {
    if (!cities.includes(offer.city.name)) {
      cities.push(offer.city.name);
    }
  });

  const getFavoriteFromCity = (city: string) => favorites.filter((offer) => offer.city.name === city);

  return (
    <ul className="favorites__list">
      {cities.map((city) => (
        <li key={city} className="favorites__locations-items">
          <div className="favorites__locations locations locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#1">
                <span>{city}</span>
              </a>
            </div>
          </div>
          <div className="favorites__places">
            {getFavoriteFromCity(city).map((offer) => <FavoriteCard key={offer.id} offer={offer} />)}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default FavoritesList;
