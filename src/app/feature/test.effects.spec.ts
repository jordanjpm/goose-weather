import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { TestEffects } from './test.effects';

describe('TestEffects', () => {
  let actions$: Observable<any>;
  let effects: TestEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TestEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get<TestEffects>(TestEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
