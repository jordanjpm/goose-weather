import { Injectable } from '@angular/core';
import { Actions, Effect, ofType, createEffect } from '@ngrx/effects';
import { of, EMPTY } from 'rxjs';
import { map, catchError, switchMap, mergeMap } from 'rxjs/operators';
import * as fromLocationActions from '../actions/location.actions';
import * as fromWeatherActions from '../actions/weather.actions';
import { WeatherService } from '../services/weather.service';

@Injectable()
export class WeatherEffects {

  constructor(private actions$: Actions, private weatherService: WeatherService) { }

  loadWeathers$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromLocationActions.loadLocationsSuccess),
      mergeMap(action => this.weatherService.getWeather(action.data).pipe(
        map(data => {
          return fromWeatherActions.loadWeathersSuccess({ data });
        }),
        catchError((error) => of(fromLocationActions.loadLocationsFailure({ error })))
      ))
    )
  })

}
