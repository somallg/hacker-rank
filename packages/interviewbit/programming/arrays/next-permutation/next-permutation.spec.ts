/**
 * Test specs for next-permutation problem
 * Interviewbit - NextPermutation
 */

import {
  Fixture,
  getTestCaseDescription,
  getPerformanceTestCaseDescription,
  generateArray
} from '@challenges/util';

import * as fixture from './next-permutation.fixture.json';
import { nextPermutation } from './next-permutation';

describe('Interviewbit - NextPermutation', () => {
  describe('nextPermutation', () => {
    describe('Example tests', () => {
      (fixture as Fixture<number[], number[]>).exampleTests.forEach(
        testCase => {
          it(`${getTestCaseDescription(testCase)}`, () => {
            expect(nextPermutation(testCase.input)).toEqual(testCase.output);
          });
        }
      );
    });

    describe('Correctness tests', () => {
      (fixture as Fixture<number[], number[]>).correctnessTests.forEach(
        testCase => {
          it(`${getTestCaseDescription(testCase)}`, () => {
            expect(nextPermutation(testCase.input)).toEqual(testCase.output);
          });
        }
      );
    });

    describe('Performance tests', () => {
      (fixture as Fixture<number[], number[]>).performanceTests.forEach(
        testCase => {
          it(`${getPerformanceTestCaseDescription(testCase)}`, () => {
            nextPermutation(generateArray(testCase.inputSize));
          });
        }
      );
    });
  });
});
