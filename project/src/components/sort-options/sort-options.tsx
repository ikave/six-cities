import { SortType } from '../../constants';
import { useAppDispatch } from '../../hooks';
import { changeSortType } from '../../store/app-process/app-process';

type PropsType = {
  sortActive: boolean;
  setSortActive: (sort: boolean) => void;
};

export const SortOptions = ({ sortActive, setSortActive }: PropsType) => {
  const dispatch = useAppDispatch();

  return (
    <ul
      className={`places__options places__options--custom ${
        sortActive ? 'places__options--opened' : ''
      }`}
    >
      <li
        className='places__option places__option--active'
        tabIndex={0}
        onClick={() => {
          setSortActive(false);
          dispatch(changeSortType(SortType.Popular));
        }}
      >
        {SortType.Popular}
      </li>
      <li
        className='places__option'
        tabIndex={0}
        onClick={() => {
          setSortActive(false);
          dispatch(changeSortType(SortType.PriceLowToHigh));
        }}
      >
        Price: low to high
      </li>
      <li
        className='places__option'
        tabIndex={0}
        onClick={() => {
          setSortActive(false);
          dispatch(changeSortType(SortType.PriceHighToLow));
        }}
      >
        Price: high to low
      </li>
      <li
        className='places__option'
        tabIndex={0}
        onClick={() => {
          setSortActive(false);
          dispatch(changeSortType(SortType.TopRatedFirst));
        }}
      >
        Top rated first
      </li>
    </ul>
  );
};
