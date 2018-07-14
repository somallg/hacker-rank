/**
 * Test specs for max-min-array problem
 *  @url https://www.hackerrank.com/challenges/max-min-array/problem
 */

import {
  Fixture,
  generateArray,
  getPerformanceTestCaseDescription,
  getTestCaseDescription
} from '@challenges/util';

import { solveMaxMinArray } from './max-min-array';
import * as fixture from './max-min-array.fixture.json';

describe('Hackerrank - MaxMinArray', () => {
  describe('solveMaxMinArray', () => {
    describe('Example tests', () =>
      (fixture as Fixture<number, number>).exampleTests.forEach(testCase =>
        it(`${getTestCaseDescription(testCase)}`, () =>
          expect(solveMaxMinArray(testCase.input)).toEqual(testCase.output))
      ));

    describe('Correctness tests', () =>
      (fixture as Fixture<number, number>).correctnessTests.forEach(testCase =>
        it(`${getTestCaseDescription(testCase)}`, () =>
          expect(solveMaxMinArray(testCase.input)).toEqual(testCase.output))
      ));

    xdescribe('Performance tests', () =>
      (fixture as Fixture<number, number>).performanceTests.forEach(testCase =>
        it(`${getPerformanceTestCaseDescription(testCase)}`, () =>
          expect(
            solveMaxMinArray(generateArray(testCase.inputSize))
          ).toBeDefined())
      ));
  });
});
