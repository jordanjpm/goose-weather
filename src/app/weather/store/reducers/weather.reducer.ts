import { Action, createReducer, on } from '@ngrx/store';
import { WeatherData } from '../../models/weather-data/weather-data';
import * as fromWeatherActions from '../actions/weather.actions';

export interface WeatherState {
  weatherData: WeatherData | null;
  error: string | null;
}

const initialWeatherState: WeatherState = {
  weatherData: null,
  error: null
};

const weatherReducer = createReducer(
  initialWeatherState,
  on(fromWeatherActions.loadWeathers, state => state),
  on(fromWeatherActions.loadWeathersFailure, (state, action) => {
    return {
      error: action ? action.error : null,
      weatherData: null,
    };
  }),
  on(fromWeatherActions.loadWeathersSuccess, (state, action) => {
    return {
      error: null,
      weatherData: action ? action.data : null,
    };
  })
);

export function reducer(state: WeatherState | undefined, action: Action) {
  return weatherReducer(state, action);
}
