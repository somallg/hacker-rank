/**
 * Test specs for test-name problem
 *  @url https://www.hackerrank.com/challenges/test-name/problem
 */

import {
  Fixture,
  generateArray,
  getPerformanceTestCaseDescription,
  getTestCaseDescription
} from '@challenges/util';

import { solveTestName } from './test-name';
import * as fixture from './test-name.fixture.json';

describe('Hackerrank - TestName', () => {
  describe('solveTestName', () => {
    describe('Example tests', () =>
      (fixture as Fixture<number, number>).exampleTests.forEach(testCase =>
        it(`${getTestCaseDescription(testCase)}`, () =>
          expect(solveTestName(testCase.input)).toEqual(testCase.output))
      ));

    describe('Correctness tests', () =>
      (fixture as Fixture<number, number>).correctnessTests.forEach(testCase =>
        it(`${getTestCaseDescription(testCase)}`, () =>
          expect(solveTestName(testCase.input)).toEqual(testCase.output))
      ));

    xdescribe('Performance tests', () =>
      (fixture as Fixture<number, number>).performanceTests.forEach(testCase =>
        it(`${getPerformanceTestCaseDescription(testCase)}`, () =>
          expect(
            solveTestName(generateArray(testCase.inputSize))
          ).toBeDefined())
      ));
  });
});
