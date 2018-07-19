/**
 * Test specs for greatest-common-divisor problem
 *
 */

import {
  Fixture,
  getPerformanceTestCaseDescription,
  getTestCaseDescription
} from '@challenges/util';

import { greatestCommonDivisor } from './greatest-common-divisor';
import * as fixture from './greatest-common-divisor.fixture.json';

describe('Interviewbit - GreatestCommonDivisor', () => {
  describe('greatestCommonDivisor', () => {
    describe('Example tests', () =>
      (fixture as Fixture<[number, number], number>).exampleTests.forEach(
        testCase =>
          it(`${getTestCaseDescription(testCase)}`, () => {
            const [m, n] = testCase.input;
            expect(greatestCommonDivisor(m, n)).toEqual(testCase.output);
          })
      ));

    describe('Correctness tests', () =>
      (fixture as Fixture<[number, number], number>).correctnessTests.forEach(
        testCase =>
          it(`${getTestCaseDescription(testCase)}`, () => {
            const [m, n] = testCase.input;
            expect(greatestCommonDivisor(m, n)).toEqual(testCase.output);
          })
      ));

    describe('Performance tests', () =>
      (fixture as Fixture<[number, number], number>).performanceTests.forEach(
        testCase =>
          it(`${getPerformanceTestCaseDescription(testCase)}`, () =>
            expect(
              greatestCommonDivisor(
                testCase.inputSize,
                // tslint:disable:no-bitwise
                testCase.inputSize >>> 1
              )
            ).toBeDefined())
      ));
  });
});
