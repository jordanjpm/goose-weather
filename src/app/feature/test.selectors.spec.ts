import * as fromTest from './test.reducer';
import { selectTestState } from './test.selectors';

describe('Test Selectors', () => {
  it('should select the feature state', () => {
    const result = selectTestState({
      [fromTest.testFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
