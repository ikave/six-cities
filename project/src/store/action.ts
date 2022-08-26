import { createAction } from '@reduxjs/toolkit';
import { AppRoute } from '../components/router/enums';

export const redirectToRoute = createAction<AppRoute>('redirectToRoute');
