/**
 * Test specs for sorted-permutation-rank problem
 * SortedPermutationRank
 */

import {
  Fixture,
  generateArray,
  getPerformanceTestCaseDescription,
  getTestCaseDescription
} from '@challenges/util';

import { sortedPermutationRank } from './sorted-permutation-rank';
import * as fixture from './sorted-permutation-rank.fixture.json';

describe('Interviewbit - SortedPermutationRank', () => {
  describe('sortedPermutationRank', () => {
    describe('Example tests', () =>
      (fixture as Fixture<string, number>).exampleTests.forEach(testCase =>
        it(`${getTestCaseDescription(testCase)}`, () =>
          expect(sortedPermutationRank(testCase.input)).toEqual(
            testCase.output
          ))
      ));

    describe('Correctness tests', () =>
      (fixture as Fixture<string, number>).correctnessTests.forEach(testCase =>
        it(`${getTestCaseDescription(testCase)}`, () =>
          expect(sortedPermutationRank(testCase.input)).toEqual(
            testCase.output
          ))
      ));

    describe('Performance tests', () =>
      (fixture as Fixture<string, number>).performanceTests.forEach(testCase =>
        it(`${getPerformanceTestCaseDescription(testCase)}`, () =>
          expect(
            sortedPermutationRank(generateArray(testCase.inputSize).join(''))
          ).toBeDefined())
      ));
  });
});
