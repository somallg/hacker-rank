import { kangaroo } from './kangaroo';

describe('Kangaroo', () => {
  describe('function kangaroo()', () => {
    it('should return YES when input is 0 3 4 2', () => {
      expect(kangaroo(0, 3, 4, 2)).toEqual('YES');
    });
    it('should return NO when input is 0 2 5 3', () => {
      expect(kangaroo(0, 2, 5, 3)).toEqual('NO');
    });
  });
});
