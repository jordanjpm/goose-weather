import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { map, catchError, switchMap, mergeMap } from 'rxjs/operators';
import * as fromLocationActions from '../actions/location.actions';
import * as fromWeatherActions from '../actions/weather.actions';
import { AppState } from '../reducers';
import { WeatherService } from '../services/weather.service';

@Injectable()
export class WeatherEffects {

  constructor(private actions$: Actions, private store: Store<AppState>, private weatherService: WeatherService) { }

  loadWeathers$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromLocationActions.loadLocationsSuccess),
      mergeMap(action => this.weatherService.getWeather(action.data).pipe(
        map(data => fromWeatherActions.loadWeathersSuccess({ data })),
        catchError((error) => of(fromLocationActions.loadLocationsFailure({ error })))
      ))
    )
  })

}
