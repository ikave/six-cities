import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../constants';
import { AppData } from '../../types/state';
import {
  addOfferCommentAction,
  changeOfferStatus,
  fetchFavoritOffersAction,
  fetchOfferAction,
  fetchOfferCommentsAction,
  fetchOfferNearbyAction,
  fetchOffersAction,
} from '../api-actions';

const initialState: AppData = {
  offers: [],
  isLoadingData: false,
  error: null,
  currentOffer: null,
  reviews: [],
  nearby: [],
  favorites: [],
};

const appData = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchOffersAction.pending, (state) => {
        state.isLoadingData = true;
      })
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.isLoadingData = false;
        state.offers = action.payload;
      })
      .addCase(fetchOffersAction.rejected, (state) => {
        state.isLoadingData = false;
      })
      .addCase(fetchOfferAction.pending, (state) => {
        state.isLoadingData = true;
      })
      .addCase(fetchOfferAction.fulfilled, (state, action) => {
        state.currentOffer = action.payload;
        state.isLoadingData = false;
      })
      .addCase(fetchOfferAction.rejected, (state) => {
        state.isLoadingData = false;
      })
      .addCase(fetchOfferCommentsAction.fulfilled, (state, action) => {
        const arr = action.payload;
        state.reviews = arr;
      })
      .addCase(fetchOfferNearbyAction.fulfilled, (state, action) => {
        state.nearby = action.payload;
      })
      .addCase(fetchFavoritOffersAction.fulfilled, (state, action) => {
        state.favorites = action.payload;
      })
      .addCase(changeOfferStatus.fulfilled, (state, action) => {
        const { isFavorite, id } = action.payload;

        if (isFavorite) {
          state.favorites.push(action.payload);
        }

        if (!isFavorite) {
          state.favorites = state.favorites.filter((item) => item.id !== id);
        }
      })
      .addCase(addOfferCommentAction.fulfilled, (state, action) => {
        state.reviews = action.payload;
      });
  },
});
export default appData.reducer;
