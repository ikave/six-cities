import { SortType } from '../../constants';
import { useAppDispatch } from '../../hooks';
import { changeSortType, sortOffers } from '../../store/action';

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
          dispatch(changeSortType({ sortType: SortType.Popular }));
          dispatch(sortOffers());
        }}
      >
        {SortType.Popular}
      </li>
      <li
        className='places__option'
        tabIndex={0}
        onClick={() => {
          setSortActive(false);
          dispatch(changeSortType({ sortType: SortType.PriceLowToHigh }));
          dispatch(sortOffers());
        }}
      >
        Price: low to high
      </li>
      <li
        className='places__option'
        tabIndex={0}
        onClick={() => {
          setSortActive(false);
          dispatch(changeSortType({ sortType: SortType.PriceHighToLow }));
          dispatch(sortOffers());
        }}
      >
        Price: high to low
      </li>
      <li
        className='places__option'
        tabIndex={0}
        onClick={() => {
          setSortActive(false);
          dispatch(changeSortType({ sortType: SortType.TopRatedFirst }));
          dispatch(sortOffers());
        }}
      >
        Top rated first
      </li>
    </ul>
  );
};
