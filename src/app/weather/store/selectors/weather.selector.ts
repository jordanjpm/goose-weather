import { createSelector } from '@ngrx/store';
import * as fromReducers from '../reducers';

export const selectWeatherData = createSelector(fromReducers.selectWeatherFeature,
  (state: fromReducers.WeatherFeatureState) => state?.weather.weatherData
);

export const selectWeatherError = createSelector(fromReducers.selectWeatherFeature,
  (state: fromReducers.WeatherFeatureState) => state?.weather.error
);
