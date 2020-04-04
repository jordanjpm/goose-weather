import * as fromTest from './test.actions';

describe('loadTests', () => {
  it('should return an action', () => {
    expect(fromTest.loadTests().type).toBe('[Test] Load Tests');
  });
});
