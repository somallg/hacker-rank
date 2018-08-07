/**
 * Test specs for square-root-of-integer problem
 * SquareRootOfInteger
 */

import {
  Fixture,
  getPerformanceTestCaseDescription,
  getTestCaseDescription
} from '@challenges/util';

import { squareRootOfInteger } from './square-root-of-integer';
import * as fixture from './square-root-of-integer.fixture.json';

describe('Interviewbit - SquareRootOfInteger', () => {
  describe('squareRootOfInteger', () => {
    describe('Example tests', () =>
      (fixture as Fixture<number, number>).exampleTests.forEach(testCase =>
        it(`${getTestCaseDescription(testCase)}`, () =>
          expect(squareRootOfInteger(testCase.input)).toEqual(testCase.output))
      ));

    describe('Correctness tests', () =>
      (fixture as Fixture<number, number>).correctnessTests.forEach(testCase =>
        it(`${getTestCaseDescription(testCase)}`, () =>
          expect(squareRootOfInteger(testCase.input)).toEqual(testCase.output))
      ));

    xdescribe('Performance tests', () =>
      (fixture as Fixture<number, number>).performanceTests.forEach(testCase =>
        it(`${getPerformanceTestCaseDescription(testCase)}`, () =>
          expect(squareRootOfInteger(testCase.inputSize)).toBeDefined())
      ));
  });
});
