/**
 * Test specs for search-for-a-range problem
 * SearchForARange
 */

import {
  Fixture,
  generateArray,
  getPerformanceTestCaseDescription,
  getTestCaseDescription
} from '@challenges/util';

import { searchForARange } from './search-for-a-range';
import * as fixture from './search-for-a-range.fixture.json';

describe('Interviewbit - SearchForARange', () => {
  describe('searchForARange', () => {
    describe('Example tests', () =>
      (fixture as Fixture<[number[], number], number>).exampleTests.forEach(
        testCase =>
          it(`${getTestCaseDescription(testCase)}`, () => {
            const [array, target] = testCase.input;
            expect(searchForARange(array, target)).toEqual(testCase.output);
          })
      ));

    describe('Correctness tests', () =>
      (fixture as Fixture<[number[], number], number>).correctnessTests.forEach(
        testCase =>
          it(`${getTestCaseDescription(testCase)}`, () => {
            const [array, target] = testCase.input;
            expect(searchForARange(array, target)).toEqual(testCase.output);
          })
      ));

    describe('Performance tests', () =>
      (fixture as Fixture<[number[], number], number>).performanceTests.forEach(
        testCase =>
          it(`${getPerformanceTestCaseDescription(testCase)}`, () =>
            expect(
              searchForARange(
                generateArray(testCase.inputSize, 1),
                testCase.inputSize
              )
            ).toBeDefined())
      ));
  });
});
