/**
 * Test specs for brackets problem
 */

import { generateString } from '../../../../util/string';
import { solveBrackets } from './brackets';

describe('Brackets', () => {
  describe('solveBrackets', () => {
    it('should return for Extreme Simple input empty string', () => {
      expect(solveBrackets('')).toEqual(1);
    });

    it('should return for Extreme Simple input []', () => {
      expect(solveBrackets('[]')).toEqual(1);
    });

    it('should return for Duplicates input [[]]', () => {
      expect(solveBrackets('[[]]')).toEqual(1);
    });

    it('should return for input [)]', () => {
      expect(solveBrackets('[)]')).toEqual(0);
    });

    it('should return 1 for Example input {[()()]}', () => {
      expect(solveBrackets('{[()()]}')).toEqual(1);
    });

    it('should return 0 for Sample input ([)()]', () => {
      expect(solveBrackets('([)()]')).toEqual(0);
    });

    it('should return 0 for Sample input {{{{', () => {
      expect(solveBrackets('{{{{')).toEqual(0);
    });

    it(
      'should run for Large input 50E3 items',
      () => {
        expect(solveBrackets(generateString(50e3, '{'))).toEqual(0);
      },
      100
    );

    it(
      'should run for Extra Large input 100E3 items',
      () => {
        expect(solveBrackets(generateString(100e3, '{'))).toEqual(0);
      },
      100
    );
  });
});
