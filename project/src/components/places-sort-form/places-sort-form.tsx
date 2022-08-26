import { memo, useCallback, useState } from 'react';
import { useAppSelector } from '../../hooks';
import { getSortType } from '../../store/app-process/selectors';
import { SortOptions } from '../../components/sort-options';

const PlacesSortForm = () => {
  const sortType = useAppSelector(getSortType);
  const [sortActive, setSortActive] = useState<boolean>(false);

  const handleClick = useCallback(() => {
    setSortActive(!sortActive);
  }, [sortActive]);

  return (
    <form className='places__sorting'>
      <span className='places__sorting-caption'>Sort by</span>{' '}
      <span className='places__sorting-type' tabIndex={0} onClick={handleClick}>
        {sortType}
        <svg className='places__sorting-arrow' width='7' height='4'>
          <use xlinkHref='#icon-arrow-select'></use>
        </svg>
      </span>
      <SortOptions sortActive={sortActive} setSortActive={setSortActive} />
    </form>
  );
};

export default memo(PlacesSortForm);
