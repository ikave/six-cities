import { MouseEvent } from 'react';
import { Link } from 'react-router-dom';
import { City } from '../../constants';
import { useAppDispatch } from '../../hooks';
import { setCurrentCity } from '../../store/app-process/app-process';

type PropsType = {
  cityName: City;
  activeTab: City;
  setActiveTab: (city: City) => void;
};

export const CityTab = ({ cityName, activeTab, setActiveTab }: PropsType) => {
  const dispatch = useAppDispatch();

  const handleClick = (evt: MouseEvent<HTMLAnchorElement>) => {
    evt.preventDefault();
    setActiveTab(cityName);
    dispatch(setCurrentCity(cityName));
  };

  return (
    <li className='locations__item'>
      {cityName === activeTab ? (
        <Link
          className='locations__item-link tabs__item tabs__item--active'
          to='/'
          onClick={handleClick}
        >
          <span>{cityName}</span>
        </Link>
      ) : (
        <Link
          className='locations__item-link tabs__item'
          to='/'
          onClick={handleClick}
        >
          <span>{cityName}</span>
        </Link>
      )}
    </li>
  );
};
