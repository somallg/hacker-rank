/**
 * Test specs for nesting problem
 */

import { generateString } from '@challenges/util';
import { solveNesting } from './nesting';

describe('Nesting', () => {
  describe('solveNesting', () => {
    it('should return for Extreme Simple input (', () => {
      expect(solveNesting('(')).toEqual(0);
    });

    it('should return for Extreme Simple input )', () => {
      expect(solveNesting(')')).toEqual(0);
    });

    it('should return for Extreme Simple input ()', () => {
      expect(solveNesting('()')).toEqual(1);
    });

    it('should return for Duplicates input ()()', () => {
      expect(solveNesting('()()')).toEqual(1);
    });

    it('should return for Extreme Double input (()())', () => {
      expect(solveNesting('(()())')).toEqual(1);
    });

    it('should return 1 for Example input (()(())())', () => {
      expect(solveNesting('(()(())())')).toEqual(1);
    });

    it('should return 0 for Sample input ())', () => {
      expect(solveNesting('())')).toEqual(0);
    });

    it(
      'should run for Large input 50E3 items',
      () => {
        expect(solveNesting(generateString(50e3, ')'))).toEqual(0);
      },
      100
    );

    it(
      'should run for Extra Large input 100E3 items',
      () => {
        expect(solveNesting(generateString(100e3, ')'))).toEqual(0);
      },
      100
    );
  });
});
