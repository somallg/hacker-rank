/**
 * Test specs for wave-array problem
 * Interviewbit - WaveArray
 */

import { generateArray } from '@challenges/util';

import { waveArray } from './wave-array';

describe('Interviewbit - WaveArray', () => {
  describe('waveArray', () => {
    describe('Example tests', () => {
      it('should return for Example 1 input [1, 2, 3, 4]', () => {
        expect(waveArray([1, 2, 3, 4])).toEqual([2, 1, 4, 3]);
      });

      it('should return for Example 2 input [11, 8, 7, 9, 2, 10, 2]', () => {
        // prettier-ignore
        expect(waveArray([11, 8, 7, 9, 2, 10, 2])).toEqual([2, 2, 8, 7, 10, 9, 11]);
      });

      // tslint:disable-next-line
      it('should return from Exampl 3 input [95, 19, 54, 23, 89, 60, 5, 26, 23, 6, 13, 70, 38, 94, 20, 44, 66, 34, 26, 94, 63, 38, 44, 90, 50, 59, 23, 47, 85, 17, 72, 39, 47, 85, 96, 85, 23, 20, 44, 68, 35, 15, 25, 34, 42, 11, 79, 52, 44]', () => {
        expect(
          waveArray([
            95,
            19,
            54,
            23,
            89,
            60,
            5,
            26,
            23,
            6,
            13,
            70,
            38,
            94,
            20,
            44,
            66,
            34,
            26,
            94,
            63,
            38,
            44,
            90,
            50,
            59,
            23,
            47,
            85,
            17,
            72,
            39,
            47,
            85,
            96,
            85,
            23,
            20,
            44,
            68,
            35,
            15,
            25,
            34,
            42,
            11,
            79,
            52,
            44
          ])
        ).toEqual([
          6,
          5,
          13,
          11,
          17,
          15,
          20,
          19,
          23,
          20,
          23,
          23,
          25,
          23,
          26,
          26,
          34,
          34,
          38,
          35,
          39,
          38,
          44,
          42,
          44,
          44,
          47,
          44,
          50,
          47,
          54,
          52,
          60,
          59,
          66,
          63,
          70,
          68,
          79,
          72,
          85,
          85,
          89,
          85,
          94,
          90,
          95,
          94,
          96
        ]);
      });
    });

    describe('Correctness tests', () => {
      it('should return for Sample 1 input [1, 2, 3, 4, 5]', () => {
        expect(waveArray([1, 2, 3, 4, 5])).toEqual([2, 1, 4, 3, 5]);
      });

      it('should return [] for Extreme input []', () => {
        expect(waveArray([])).toEqual([]);
      });
    });

    describe('Performance tests', () => {
      it('should run for Medium 1 input of 100 items', () => {
        waveArray(generateArray(100));
      });

      it('should run for Large 1 input of 10e3 items', () => {
        waveArray(generateArray(10e3));
      });

      it('should run for Large 2 input of 50e3 items', () => {
        waveArray(generateArray(50e3));
      });

      it('should run for Large 3 input of 100e3 items', () => {
        waveArray(generateArray(100e3));
      });
    });
  });
});
