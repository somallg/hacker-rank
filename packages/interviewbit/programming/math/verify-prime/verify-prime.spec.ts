/**
 * Test specs for verify-prime problem
 * Interviewbit - VerifyPrime
 */

import {
  Fixture,
  getPerformanceTestCaseDescription,
  getTestCaseDescription
} from '@challenges/util';

import { verifyPrime } from './verify-prime';
import * as fixture from './verify-prime.fixture.json';

describe('Interviewbit - VerifyPrime', () => {
  describe('verifyPrime', () => {
    describe('Example tests', () =>
      (fixture as Fixture<number, number>).exampleTests.forEach(testCase =>
        it(`${getTestCaseDescription(testCase)}`, () =>
          expect(verifyPrime(testCase.input)).toEqual(testCase.output))
      ));

    describe('Correctness tests', () =>
      (fixture as Fixture<number, number>).correctnessTests.forEach(testCase =>
        it(`${getTestCaseDescription(testCase)}`, () =>
          expect(verifyPrime(testCase.input)).toEqual(testCase.output))
      ));

    describe('Performance tests', () =>
      (fixture as Fixture<number, number>).performanceTests.forEach(testCase =>
        it(`${getPerformanceTestCaseDescription(testCase)}`, () =>
          expect(verifyPrime(testCase.inputSize)).toBeDefined())
      ));
  });
});
