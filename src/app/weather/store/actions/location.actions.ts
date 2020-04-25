import { createAction, props } from '@ngrx/store';
import { LocationData } from '../../models/location-data/location-data';

export const loadLocations = createAction(
  '[Location] Load Locations'
);

export const loadLocationsSuccess = createAction(
  '[Location] Load Locations Success',
  props<{ data: LocationData }>()
);

export const loadLocationsFailure = createAction(
  '[Location] Load Locations Failure',
  props<{ error: any }>()
);
