import { Action, createReducer, on } from '@ngrx/store';
import { WeatherData } from '../../models/weather-data/weather-data';
import * as fromWeatherActions from '../actions/weather.actions';

export const weatherFeatureKey = 'weather';

export interface WeatherState {
  weatherData: WeatherData | null;
}

const initialWeatherState: WeatherState = {
  weatherData: null
};

const weatherReducer = createReducer(
  initialWeatherState,
  on(fromWeatherActions.loadWeathers, state => state),
  on(fromWeatherActions.loadWeathersFailure, (state, action) => state),
  on(fromWeatherActions.loadWeathersSuccess, (state, action) => {
    return {
      weatherData: action ? action.data : null,
    };
  })
);

export function reducer(state: WeatherState | undefined, action: Action) {
  return weatherReducer(state, action);
}
