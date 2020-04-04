import { createAction, props } from '@ngrx/store';

export const loadTests = createAction(
  '[Test] Load Tests'
);

export const loadTestsSuccess = createAction(
  '[Test] Load Tests Success',
  props<{ data: any }>()
);

export const loadTestsFailure = createAction(
  '[Test] Load Tests Failure',
  props<{ error: any }>()
);
