/**
 * Test specs for find-permutation problem
 * Interviewbit - FindPermutation
 */

import {
  Fixture,
  getTestCaseDescription,
  getPerformanceTestCaseDescription
  // generateArray
} from '@challenges/util';

import * as fixture from './find-permutation.fixture.json';
import { findPermutation } from './find-permutation';

describe('Interviewbit - FindPermutation', () => {
  describe('findPermutation', () => {
    describe('Example tests', () => {
      (fixture as Fixture<[string, number], number[]>).exampleTests.forEach(
        testCase => {
          it(`${getTestCaseDescription(testCase)}`, () => {
            const [s, n] = testCase.input;
            expect(findPermutation(s, n)).toEqual(testCase.output);
          });
        }
      );
    });

    describe('Correctness tests', () => {
      (fixture as Fixture<[string, number], number[]>).correctnessTests.forEach(
        testCase => {
          it(`${getTestCaseDescription(testCase)}`, () => {
            const [s, n] = testCase.input;
            expect(findPermutation(s, n)).toEqual(testCase.output);
          });
        }
      );
    });

    xdescribe('Performance tests', () => {
      (fixture as Fixture<[string, number], number[]>).performanceTests.forEach(
        testCase => {
          it(`${getPerformanceTestCaseDescription(testCase)}`, () => {
            findPermutation('D'.repeat(testCase.inputSize), testCase.inputSize);
          });
        }
      );
    });
  });
});
