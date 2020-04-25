import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import * as fromLocationReducers from './location.reducer';
import * as fromWeatherReducers from './weather.reducer';

export const weatherFeatureKey = 'weatherFeature';

export const selectWeatherFeature = createFeatureSelector<WeatherFeatureState>(weatherFeatureKey);

export interface WeatherFeatureState {
  location: fromLocationReducers.LocationState;
  weather: fromWeatherReducers.WeatherState;
}

export const reducers: ActionReducerMap<WeatherFeatureState> = {
  location: fromLocationReducers.reducer,
  weather: fromWeatherReducers.reducer
};
