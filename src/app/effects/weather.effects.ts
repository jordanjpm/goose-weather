import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import * as fromLocationActions from '../actions/location.actions';
import * as fromWeatherActions from '../actions/weather.actions';
import { WeatherService } from '../services/weather.service';

@Injectable()
export class WeatherEffects {

  constructor(private actions$: Actions, private weatherService: WeatherService) { }

  @Effect()
  loadLocation$ = this.actions$
    .pipe(ofType(fromLocationActions.loadLocationsSuccess),
      mergeMap((action) => this.weatherService.getWeather(action.data)
        .pipe(
          map(data => fromWeatherActions.loadWeathersSuccess({ data })),
          catchError(error => of(fromLocationActions.loadLocationsFailure({ error })))
        )
      )
    );

}