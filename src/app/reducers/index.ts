import { ActionReducerMap, MetaReducer, Action, createFeatureSelector } from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromLocationReducers from './location.reducer';
import * as fromWeatherReducers from './weather.reducer';

export interface AppState {
  weather: fromWeatherReducers.WeatherState;
  location: fromLocationReducers.LocationState;
}

export const reducers: ActionReducerMap<AppState> = {
  weather: fromWeatherReducers.reducer,
  location: fromLocationReducers.reducer
};

export const selectWeatherData = createFeatureSelector<fromWeatherReducers.WeatherState>(
  fromWeatherReducers.weatherFeatureKey
);

export const selectLocationData = createFeatureSelector<fromLocationReducers.LocationState>(
  fromWeatherReducers.weatherFeatureKey
);

export const selectLocationError = createFeatureSelector<fromLocationReducers.LocationState>(
  fromLocationReducers.locationFeatureKey
);

export const metaReducers: MetaReducer<any>[] = !environment.production ? [] : [];
