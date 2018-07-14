/**
 * Test specs for trailing-zeros-in-factorial problem
 */

import {
  Fixture,
  getPerformanceTestCaseDescription,
  getTestCaseDescription
} from '@challenges/util';

import { trailingZerosInFactorial } from './trailing-zeros-in-factorial';
import * as fixture from './trailing-zeros-in-factorial.fixture.json';

describe('Interviewbit - TrailingZerosInFactorial', () => {
  describe('trailingZerosInFactorial', () => {
    describe('Example tests', () =>
      (fixture as Fixture<number, number>).exampleTests.forEach(testCase =>
        it(`${getTestCaseDescription(testCase)}`, () =>
          expect(trailingZerosInFactorial(testCase.input)).toEqual(
            testCase.output
          ))
      ));

    describe('Correctness tests', () =>
      (fixture as Fixture<number, number>).correctnessTests.forEach(testCase =>
        it(`${getTestCaseDescription(testCase)}`, () =>
          expect(trailingZerosInFactorial(testCase.input)).toEqual(
            testCase.output
          ))
      ));

    describe('Performance tests', () =>
      (fixture as Fixture<number, number>).performanceTests.forEach(testCase =>
        it(`${getPerformanceTestCaseDescription(testCase)}`, () =>
          expect(trailingZerosInFactorial(testCase.inputSize)).toBeDefined())
      ));
  });
});
