import { MouseEvent } from 'react';
import { Cities } from '../../constants';
import { useAppDispatch } from '../../hooks';
import { changeCurrentCity, getOffersByCity } from '../../store/action';

type PropsType = {
  cityName: Cities;
  activeTab: Cities;
  setActiveTab: (city: Cities) => void;
};

export const CityTab = ({ cityName, activeTab, setActiveTab }: PropsType) => {
  const dispatch = useAppDispatch();
  const handleClick = (evt: MouseEvent<HTMLAnchorElement>) => {
    evt.preventDefault();
    setActiveTab(cityName);
    dispatch(changeCurrentCity({ currentCity: cityName }));
    dispatch(getOffersByCity());
  };
  return (
    <li className='locations__item'>
      {cityName === activeTab ? (
        <a
          className='locations__item-link tabs__item tabs__item--active'
          href='/'
          onClick={handleClick}
        >
          <span>{cityName}</span>
        </a>
      ) : (
        <a
          className='locations__item-link tabs__item'
          href='/'
          onClick={handleClick}
        >
          <span>{cityName}</span>
        </a>
      )}
    </li>
  );
};
