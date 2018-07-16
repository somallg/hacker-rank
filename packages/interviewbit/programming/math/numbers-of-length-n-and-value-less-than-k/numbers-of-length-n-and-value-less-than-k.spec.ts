/**
 * Test specs for numbers-of-length-n-and-value-less-than-k problem
 * NumbersOfLengthNAndValueLessThanK
 */

import {
  Fixture,
  generateArray,
  getPerformanceTestCaseDescription,
  getTestCaseDescription
} from '@challenges/util';

import { numbersOfLengthNAndValueLessThanK } from './numbers-of-length-n-and-value-less-than-k';
import * as fixture from './numbers-of-length-n-and-value-less-than-k.fixture.json';

type TestInput = [number[], number, number];

describe('Interviewbit - NumbersOfLengthNAndValueLessThanK', () => {
  describe('numbersOfLengthNAndValueLessThanK', () => {
    describe('Example tests', () =>
      (fixture as Fixture<TestInput, number>).exampleTests.forEach(testCase =>
        it(`${getTestCaseDescription(testCase)}`, () => {
          const [sets, n, k] = testCase.input;
          expect(numbersOfLengthNAndValueLessThanK(sets, n, k)).toEqual(
            testCase.output
          );
        })
      ));

    describe('Correctness tests', () =>
      (fixture as Fixture<TestInput, number>).correctnessTests.forEach(
        testCase =>
          it(`${getTestCaseDescription(testCase)}`, () => {
            const [sets, n, k] = testCase.input;
            expect(numbersOfLengthNAndValueLessThanK(sets, n, k)).toEqual(
              testCase.output
            );
          })
      ));

    describe('Performance tests', () =>
      (fixture as Fixture<TestInput, number>).performanceTests.forEach(
        testCase =>
          it(`${getPerformanceTestCaseDescription(testCase)}`, () =>
            expect(
              numbersOfLengthNAndValueLessThanK(
                generateArray(testCase.inputSize, 10),
                9,
                1e9
              )
            ).toBeDefined())
      ));
  });
});
