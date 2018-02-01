import { checkFunnyString, funnyString } from './funny-string';
import { input1, input2 } from './input';

describe('Funny String', () => {
  describe('checkFunnyString', () => {
    it('should return true if input is acxz', () => {
      expect(checkFunnyString('acxz', 'zxca')).toBe(true);
    });

    it('should return false if input is bcxz', () => {
      expect(checkFunnyString('bcxz', 'zxcb')).toBe(false);
    });
  });

  describe('funnyString', () => {
    it('should return Funny if input is acxz', () => {
      expect(funnyString('acxz')).toEqual('Funny');
    });

    it('should return Not Funny if input is bcxz', () => {
      expect(funnyString('bcxz')).toEqual('Not Funny');
    });

    it('should return Not Funny if input is input1', () => {
      expect(funnyString(input1)).toEqual('Not Funny');
    });

    it('should return Funny if input is input2', () => {
      expect(funnyString(input2)).toEqual('Funny');
    });
  });
});
