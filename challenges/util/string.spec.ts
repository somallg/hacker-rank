import { generateString } from './string';

describe('String Util', () => {
  describe('generateString', () => {
    it('should generate a string of length 0', () => {
      expect(generateString(0).length).toEqual(0);
      expect(generateString(0)).toEqual('');
    });

    it('should generate a string of length 10', () => {
      expect(generateString(10).length).toEqual(10);
      expect(generateString(10)).toEqual('xxxxxxxxxx');
    });

    it('should generate a string of length 100', () => {
      expect(generateString(100).length).toEqual(100);
    });

    it(
      'should generate a string of length 100E3 in reasonable time',
      () => {
        expect(generateString(100e3).length).toEqual(100e3);
      },
      100
    );
  });
});
