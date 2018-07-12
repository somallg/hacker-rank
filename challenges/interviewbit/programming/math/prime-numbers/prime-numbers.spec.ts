/**
 * Test specs for prime-numbers problem
 * Interviewbit - PrimeNumbers
 */

import {
  Fixture,
  generateArray,
  getPerformanceTestCaseDescription,
  getTestCaseDescription
} from '@challenges/util';

import { primeNumbers } from './prime-numbers';
import * as fixture from './prime-numbers.fixture.json';

describe('Interviewbit - PrimeNumbers', () => {
  describe('primeNumbers', () => {
    describe('Example tests', () =>
      (fixture as Fixture<number, number[]>).exampleTests.forEach(testCase =>
        it(`${getTestCaseDescription(testCase)}`, () =>
          expect(primeNumbers(testCase.input)).toEqual(testCase.output))
      ));

    describe('Correctness tests', () =>
      (fixture as Fixture<number, number[]>).correctnessTests.forEach(
        testCase =>
          it(`${getTestCaseDescription(testCase)}`, () =>
            expect(primeNumbers(testCase.input)).toEqual(testCase.output))
      ));

    describe('Performance tests', () =>
      (fixture as Fixture<number, number[]>).performanceTests.forEach(
        testCase =>
          it(`${getPerformanceTestCaseDescription(testCase)}`, () =>
            expect(
              primeNumbers(generateArray(testCase.inputSize))
            ).toBeDefined())
      ));
  });
});
