import { ActionReducerMap, MetaReducer, Action, createFeatureSelector } from '@ngrx/store';
import { environment } from '../../../environments/environment';
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

export const metaReducers: MetaReducer<any>[] = !environment.production ? [] : [];
