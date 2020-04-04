import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromTest from './test.reducer';

export const selectTestState = createFeatureSelector<fromTest.State>(
  fromTest.testFeatureKey
);
