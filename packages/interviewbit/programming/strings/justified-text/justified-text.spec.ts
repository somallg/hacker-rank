/**
 * Test specs for justified-text problem
 * JustifiedText
 */

import { generateArray } from '@challenges/util';

import { justifiedText } from './justified-text';

describe('Interviewbit - JustifiedText', () => {
  describe('justifiedText', () => {
    describe('Example Tests', () => {
      it('should return correctly for Example 1 input', () =>
        expect(
          justifiedText(
            ['This', 'is', 'an', 'example', 'of', 'text', 'justification.'],
            16
          )
        ).toMatchSnapshot());

      it('should return correctly for Example 2 input', () =>
        expect(
          justifiedText(
            [
              'am',
              'fasgoprn',
              'lvqsrjylg',
              'rzuslwan',
              'xlaui',
              'tnzegzuzn',
              'kuiwdc',
              'fofjkkkm',
              'ssqjig',
              'tcmejefj',
              'uixgzm',
              'lyuxeaxsg',
              'iqiyip',
              'msv',
              'uurcazjc',
              'earsrvrq',
              'qlq',
              'lxrtzkjpg',
              'jkxymjus',
              'mvornwza',
              'zty',
              'q',
              'nsecqphjy'
            ],
            14
          )
        ).toMatchSnapshot());
    });

    describe('Correctness Tests', () => {
      it('should return correctly for Sample 1 input', () =>
        expect(justifiedText(['ab', 'cd'], 2)).toMatchSnapshot());

      it('should return correctly for Sample 2 input', () =>
        expect(
          justifiedText(['What', 'must', 'be', 'shall', 'be.'], 12)
        ).toMatchSnapshot());

      it('should return correctly for Extreme 1 input', () =>
        expect(justifiedText([''], 10)).toMatchSnapshot());
    });

    describe('Performance Tests', () => {
      it('should run for Medium 1 input', () =>
        expect(
          justifiedText(generateArray(100).map(String), 10)
        ).toBeDefined());

      it('should run for Medium 2 input', () =>
        expect(
          justifiedText(generateArray(1e3).map(String), 10)
        ).toBeDefined());

      it('should run for Large 1 input', () =>
        expect(
          justifiedText(generateArray(10e3).map(String), 100)
        ).toBeDefined());

      it('should run for Large 2 input', () =>
        expect(
          justifiedText(generateArray(50e3).map(String), 100)
        ).toBeDefined());

      it('should run for Large 3 input', () =>
        expect(
          justifiedText(generateArray(100e3).map(String), 100)
        ).toBeDefined());
    });
  });
});
