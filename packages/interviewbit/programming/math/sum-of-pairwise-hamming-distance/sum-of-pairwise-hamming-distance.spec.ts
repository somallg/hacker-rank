/**
 * Test specs for sum-of-pairwise-hamming-distance problem
 * SumOfPairwiseHammingDistance
 */

import {
  Fixture,
  generateArray,
  getPerformanceTestCaseDescription,
  getTestCaseDescription
} from '@challenges/util';

import { sumOfPairwiseHammingDistance } from './sum-of-pairwise-hamming-distance';
import * as fixture from './sum-of-pairwise-hamming-distance.fixture.json';

describe('Interviewbit - SumOfPairwiseHammingDistance', () => {
  describe('sumOfPairwiseHammingDistance', () => {
    describe('Example tests', () =>
      (fixture as Fixture<number[], number>).exampleTests.forEach(testCase =>
        it(`${getTestCaseDescription(testCase)}`, () =>
          expect(sumOfPairwiseHammingDistance(testCase.input)).toEqual(
            testCase.output
          ))
      ));

    describe('Correctness tests', () =>
      (fixture as Fixture<number[], number>).correctnessTests.forEach(
        testCase =>
          it(`${getTestCaseDescription(testCase)}`, () =>
            expect(sumOfPairwiseHammingDistance(testCase.input)).toEqual(
              testCase.output
            ))
      ));

    xdescribe('Performance tests', () =>
      (fixture as Fixture<number[], number>).performanceTests.forEach(
        testCase =>
          it(`${getPerformanceTestCaseDescription(testCase)}`, () =>
            expect(
              sumOfPairwiseHammingDistance(generateArray(testCase.inputSize))
            ).toBeDefined())
      ));
  });
});
