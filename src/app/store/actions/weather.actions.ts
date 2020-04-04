import { createAction, props } from '@ngrx/store';
import { WeatherData } from '../../models/weather-data/weather-data';

export const loadWeathers = createAction(
  '[Weather] Load Weathers'
);

export const loadWeathersSuccess = createAction(
  '[Weather] Load Weathers Success',
  props<{ data: WeatherData }>()
);

export const loadWeathersFailure = createAction(
  '[Weather] Load Weathers Failure',
  props<{ error: any }>()
);
