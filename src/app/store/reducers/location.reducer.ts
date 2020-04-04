import { Action, createReducer, on } from '@ngrx/store';
import { LocationData } from '../../models/location-data/location-data';
import * as fromLocationActions from '../actions/location.actions';

export const locationFeatureKey = 'location';

export interface LocationState {
  location: LocationData | null;
  error: string | null;
}

const initialLocationState: LocationState = {
  location: null,
  error: null
};

const locationReducer = createReducer(
  initialLocationState,
  on(fromLocationActions.loadLocations, state => state),
  on(fromLocationActions.loadLocationsFailure, (state, action) => {
    return {
      error: action ? action.error : null,
      location: null
    };
  }),
  on(fromLocationActions.loadLocationsSuccess, (state, action) => {
    return {
      error: null,
      location: action ? action.data : null
    };
  })
);

export function reducer(state: LocationState | undefined, action: Action) {
  return locationReducer(state, action);
}
