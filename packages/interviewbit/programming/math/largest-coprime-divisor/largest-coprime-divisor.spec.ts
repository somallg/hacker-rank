/**
 * Test specs for largest-coprime-divisor problem
 * LargestCoprimeDivisor
 */

import {
  Fixture,
  getPerformanceTestCaseDescription,
  getTestCaseDescription
} from '@challenges/util';

import { largestCoprimeDivisor } from './largest-coprime-divisor';
import * as fixture from './largest-coprime-divisor.fixture.json';

describe('Interviewbit - LargestCoprimeDivisor', () => {
  describe('largestCoprimeDivisor', () => {
    describe('Example tests', () =>
      (fixture as Fixture<[number, number], number>).exampleTests.forEach(
        testCase =>
          it(`${getTestCaseDescription(testCase)}`, () => {
            const [a, b] = testCase.input;
            expect(largestCoprimeDivisor(a, b)).toEqual(testCase.output);
          })
      ));

    describe('Correctness tests', () =>
      (fixture as Fixture<[number, number], number>).correctnessTests.forEach(
        testCase =>
          it(`${getTestCaseDescription(testCase)}`, () => {
            const [a, b] = testCase.input;
            expect(largestCoprimeDivisor(a, b)).toEqual(testCase.output);
          })
      ));

    xdescribe('Performance tests', () =>
      (fixture as Fixture<[number, number], number>).performanceTests.forEach(
        testCase =>
          it(`${getPerformanceTestCaseDescription(testCase)}`, () =>
            expect(
              largestCoprimeDivisor(
                Math.floor(Math.random() * testCase.inputSize + 1),
                Math.floor(Math.random() * testCase.inputSize + 1)
              )
            ).toBeDefined())
      ));
  });
});
