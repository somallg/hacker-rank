/**
 * Test specs for reverse-integer problem
 * Interviewbit - ReverseInteger
 */

import {
  Fixture,
  getPerformanceTestCaseDescription,
  getTestCaseDescription
} from '@challenges/util';

import { reverseInteger } from './reverse-integer';
import * as fixture from './reverse-integer.fixture.json';

describe('Interviewbit - ReverseInteger', () => {
  describe('reverseInteger', () => {
    describe('Example tests', () =>
      (fixture as Fixture<number, number>).exampleTests.forEach(testCase =>
        it(`${getTestCaseDescription(testCase)}`, () =>
          expect(reverseInteger(testCase.input)).toEqual(testCase.output))
      ));

    describe('Correctness tests', () =>
      (fixture as Fixture<number, number>).correctnessTests.forEach(testCase =>
        it(`${getTestCaseDescription(testCase)}`, () =>
          expect(reverseInteger(testCase.input)).toEqual(testCase.output))
      ));

    describe('Performance tests', () =>
      (fixture as Fixture<number, number>).performanceTests.forEach(testCase =>
        it(`${getPerformanceTestCaseDescription(testCase)}`, () =>
          expect(reverseInteger(testCase.inputSize)).toBeDefined())
      ));
  });
});
