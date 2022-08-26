import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../constants';
import appData from './app-data/app-data';
import appProcess from './app-process/app-process';
import userData from './user-data/user-data';

export const rootReducer = combineReducers({
  [NameSpace.Data]: appData,
  [NameSpace.App]: appProcess,
  [NameSpace.User]: userData,
});
