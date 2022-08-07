import { useState } from 'react';
import { Cities, cities } from '../../constants';
import { CityTab } from '../city-tab';

export const CityList = () => {
  const [activeTab, setActiveTab] = useState(Cities.Paris);

  return (
    <section className='locations container'>
      <ul className='locations__list tabs__list'>
        {cities.map((cityName) => (
          <CityTab
            key={cityName}
            cityName={cityName}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        ))}
      </ul>
    </section>
  );
};
