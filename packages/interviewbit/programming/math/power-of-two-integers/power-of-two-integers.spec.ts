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
