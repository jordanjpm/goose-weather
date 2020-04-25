import { createSelector } from '@ngrx/store';
import * as fromReducers from '../reducers';

export const selectLocationData = createSelector(fromReducers.selectWeatherFeature,
  (state: fromReducers.WeatherFeatureState) => state?.location.location
);

export const selectLocationError = createSelector(fromReducers.selectWeatherFeature,
  (state: fromReducers.WeatherFeatureState) => state?.location.error
);
