import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromLocationReducers from '../reducers/location.reducer';
import { AppState } from '../reducers';

export const selectLocation = createFeatureSelector<AppState, fromLocationReducers.LocationState>(fromLocationReducers.locationFeatureKey);

export const selectLocationData = createSelector(selectLocation,
  (state: fromLocationReducers.LocationState) => {
    if (state)
      return state.location
    return null;
  }
);

export const selectLocationError = createSelector(selectLocation,
  (state: fromLocationReducers.LocationState) => {
    if (state)
      return state.error
    return null;
  }

);
