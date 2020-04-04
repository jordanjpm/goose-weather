import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromWeatherReducers from '../reducers/weather.reducer';
import { AppState } from '../reducers';

export const selectWeather = createFeatureSelector<AppState, fromWeatherReducers.WeatherState>(fromWeatherReducers.weatherFeatureKey);

export const selectWeatherData = createSelector(selectWeather,
  (state: fromWeatherReducers.WeatherState) => {
    if (state)
      return state.weatherData
    return null;
  }
);
