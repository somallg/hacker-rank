/**
 * Test specs for sorted-permutation-rank-with-repeats problem
 * SortedPermutationRankWithRepeats
 */

import {
  Fixture,
  generateArray,
  getPerformanceTestCaseDescription,
  getTestCaseDescription
} from '@challenges/util';

import { sortedPermutationRankWithRepeats } from './sorted-permutation-rank-with-repeats';
import * as fixture from './sorted-permutation-rank-with-repeats.fixture.json';

describe('Interviewbit - SortedPermutationRankWithRepeats', () => {
  describe('sortedPermutationRankWithRepeats', () => {
    describe('Example tests', () =>
      (fixture as Fixture<string, number>).exampleTests.forEach(testCase =>
        it(`${getTestCaseDescription(testCase)}`, () =>
          expect(sortedPermutationRankWithRepeats(testCase.input)).toEqual(
            testCase.output
          ))
      ));

    describe('Correctness tests', () =>
      (fixture as Fixture<string, number>).correctnessTests.forEach(testCase =>
        it(`${getTestCaseDescription(testCase)}`, () =>
          expect(sortedPermutationRankWithRepeats(testCase.input)).toEqual(
            testCase.output
          ))
      ));

    describe('Performance tests', () =>
      (fixture as Fixture<string, number>).performanceTests.forEach(testCase =>
        it(`${getPerformanceTestCaseDescription(testCase)}`, () =>
          expect(
            sortedPermutationRankWithRepeats(
              generateArray(testCase.inputSize).join('')
            )
          ).toBeDefined())
      ));
  });
});
