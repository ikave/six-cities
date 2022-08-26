import { City, NameSpace, SortType } from '../../constants';
import { State } from '../../types/state';

export const getCurrentCity = (state: State): City =>
  state[NameSpace.App].currentCity;

export const getSortType = (state: State): SortType =>
  state[NameSpace.App].sortType;
