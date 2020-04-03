import { ActionReducerMap, MetaReducer, Action } from '@ngrx/store';
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

export const selectWeatherData = (state: AppState) => state.weather.weatherData;

export const selectLocationData = (state: AppState) => state.location.location;
export const selectLocationError = (state: AppState) => state.location.error;

export const metaReducers: MetaReducer<any>[] = !environment.production ? [] : [];
