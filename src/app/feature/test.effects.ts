import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

import * as TestActions from './test.actions';



@Injectable()
export class TestEffects {

  loadTests$ = createEffect(() => {
    return this.actions$.pipe( 

      ofType(TestActions.loadTests),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        EMPTY.pipe(
          map(data => TestActions.loadTestsSuccess({ data })),
          catchError(error => of(TestActions.loadTestsFailure({ error }))))
      )
    );
  });



  constructor(private actions$: Actions) {}

}
