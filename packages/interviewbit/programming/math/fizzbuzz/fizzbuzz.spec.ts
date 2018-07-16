/**
 * Test specs for fizzbuzz problem
 * Fizzbuzz
 */

import {
  Fixture,
  getPerformanceTestCaseDescription,
  getTestCaseDescription
} from '@challenges/util';

import { fizzbuzz } from './fizzbuzz';
import * as fixture from './fizzbuzz.fixture.json';

describe('Interviewbit - Fizzbuzz', () => {
  describe('fizzbuzz', () => {
    describe('Example tests', () =>
      (fixture as Fixture<number, string>).exampleTests.forEach(testCase =>
        it(`${getTestCaseDescription(testCase)}`, () =>
          expect(fizzbuzz(testCase.input)).toEqual(testCase.output))
      ));

    describe('Correctness tests', () =>
      (fixture as Fixture<number, string[]>).correctnessTests.forEach(
        testCase =>
          it(`${getTestCaseDescription(testCase)}`, () =>
            expect(fizzbuzz(testCase.input)).toEqual(testCase.output))
      ));

    describe('Performance tests', () =>
      (fixture as Fixture<number, string[]>).performanceTests.forEach(
        testCase =>
          it(`${getPerformanceTestCaseDescription(testCase)}`, () =>
            expect(fizzbuzz(testCase.inputSize)).toBeDefined())
      ));
  });
});
