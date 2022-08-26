import { memo, useState } from 'react';
import { Cities } from '../../constants';
import { useAppSelector } from '../../hooks';
import { getCurrentCity } from '../../store/app-process/selectors';
import { CityTab } from '../city-tab';

const CityTabs = () => {
  const currentCity = useAppSelector(getCurrentCity);
  const [activeTab, setActiveTab] = useState(currentCity);

  return (
    <div className='tabs'>
      <section className='locations container'>
        <ul className='locations__list tabs__list'>
          {Cities.map((cityName) => (
            <CityTab
              key={cityName}
              cityName={cityName}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
          ))}
        </ul>
      </section>
    </div>
  );
};

export default memo(CityTabs);
