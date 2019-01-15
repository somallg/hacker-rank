/**
 * Test specs for triplets-with-sum-between-given-range problem
 * Interviewbit - TripletsWithSumBetweenGivenRange
 */

import { generateArray } from '@challenges/util';

import { tripletsWithSumBetweenGivenRange } from './triplets-with-sum-between-given-range';

describe('Interviewbit - TripletsWithSumBetweenGivenRange', () => {
  describe('tripletsWithSumBetweenGivenRange', () => {
    describe('Example tests', () => {
      it('should return 1 for Example 1 input []', () => {
        expect(
          tripletsWithSumBetweenGivenRange(['0.6', '0.7', '0.8', '1.2', '0.4'])
        ).toEqual(1);
      });

      it('should return 1 form Example 2 input ["2.673662", "2.419159", "0.573816", "2.454376", "0.403605", "2.503658", "0.806191"]', () => {
        expect(
          tripletsWithSumBetweenGivenRange([
            '2.673662',
            '2.419159',
            '0.573816',
            '2.454376',
            '0.403605',
            '2.503658',
            '0.806191'
          ])
        ).toEqual(1);
      });

      it('should return 0 for Example 3 input ["0.366507", "0.234601", "2.126313", "1.372403", "2.022170", "0.308558", "2.120754", "1.561462"]', () => {
        expect(
          tripletsWithSumBetweenGivenRange([
            '0.366507',
            '0.234601',
            '2.126313',
            '1.372403',
            '2.022170',
            '0.308558',
            '2.120754',
            '1.561462'
          ])
        ).toEqual(1);
      });
    });

    describe('Correctness tests', () => {
      it('should return 0 for Sample 1 input [1, 2, 3, 4]', () => {
        expect(
          tripletsWithSumBetweenGivenRange(['0.1', '0.2', '0.3', '0.4'])
        ).toEqual(0);
      });

      it('should return 0 for Extreme input []', () => {
        expect(tripletsWithSumBetweenGivenRange([])).toEqual(0);
      });
    });

    describe('Performance tests', () => {
      it('should run for Medium 1 input of 100 items', () => {
        tripletsWithSumBetweenGivenRange(
          generateArray(100).map((e: number) => `0.${e}`)
        );
      });

      it('should run for Large 1 input of 10e3 items', () => {
        tripletsWithSumBetweenGivenRange(
          generateArray(10e3).map((e: number) => `0.${e}`)
        );
      });

      it('should run for Large 2 input of 50e3 items', () => {
        tripletsWithSumBetweenGivenRange(
          generateArray(50e3).map((e: number) => `0.${e}`)
        );
      });

      it('should run for Large 3 input of 100e3 items', () => {
        tripletsWithSumBetweenGivenRange(
          generateArray(100e3).map((e: number) => `0.${e}`)
        );
      });
    });
  });
});
