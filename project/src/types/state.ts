import { OfferType, ReviewType, UserType } from '.';
import { AuthStatus } from '../components/router/enums';
import { City, SortType } from '../constants';
import { store } from '../store/index';

export type AppData = {
  offers: OfferType[];
  currentOffer: OfferType | null;
  isLoadingData: boolean;
  reviews: ReviewType[];
  nearby: OfferType[];
  favorites: OfferType[];
};

export type AppProcess = {
  currentCity: City;
  sortType: SortType;
};

export type UserData = {
  authStatus: AuthStatus;
  user: UserType | null;
};

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
