/**
 * Test specs for power-of-two-integers problem
 * PowerOfTwoIntegers
 */

import {
  Fixture,
  getPerformanceTestCaseDescription,
  getTestCaseDescription
} from '@challenges/util';

import { powerOfTwoIntegers } from './power-of-two-integers';
import * as fixture from './power-of-two-integers.fixture.json';

describe('Interviewbit - PowerOfTwoIntegers', () => {
  describe('powerOfTwoIntegers', () => {
    describe('Example tests', () =>
      (fixture as Fixture<number, number>).exampleTests.forEach(testCase =>
        it(`${getTestCaseDescription(testCase)}`, () =>
          expect(powerOfTwoIntegers(testCase.input)).toEqual(testCase.output))
      ));

    describe('Correctness tests', () =>
      (fixture as Fixture<number, number>).correctnessTests.forEach(testCase =>
        it(`${getTestCaseDescription(testCase)}`, () =>
          expect(powerOfTwoIntegers(testCase.input)).toEqual(testCase.output))
      ));

    describe('Performance tests', () =>
      (fixture as Fixture<number, number>).performanceTests.forEach(testCase =>
        it(`${getPerformanceTestCaseDescription(testCase)}`, () =>
          expect(powerOfTwoIntegers(testCase.inputSize)).toBeDefined())
      ));
  });
});

// function powerOfTwoIntegers(n: number): number {
//   if (n <= 1) {
//     return 1;
//   }

//   let p = 2;
//   let a = 2;

//   while (p < 32) {
//     a = 2;
//     let temp = a;

//     while (temp < n) {
//       temp = a ** p;
//       if (temp === n) {
//         return 1;
//       }
//       a = a + 1;
//     }

//     p = p + 1;
//   }

//   return 0;
// }
