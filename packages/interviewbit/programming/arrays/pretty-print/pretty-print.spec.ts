/**
 * Test specs for pretty-print problem
 * PrettyPrint
 */

import {
  Fixture,
  getPerformanceTestCaseDescription,
  getTestCaseDescription
} from '@challenges/util';

import { prettyPrint } from './pretty-print';
import * as fixture from './pretty-print.fixture.json';

describe('Interviewbit - PrettyPrint', () => {
  describe('prettyPrint', () => {
    describe('Example tests', () =>
      (fixture as Fixture<number, number[][]>).exampleTests.forEach(testCase =>
        it(`${getTestCaseDescription(testCase)}`, () =>
          expect(prettyPrint(testCase.input)).toEqual(testCase.output))
      ));

    describe('Correctness tests', () =>
      (fixture as Fixture<number, number[][]>).correctnessTests.forEach(
        testCase =>
          it(`${getTestCaseDescription(testCase)}`, () =>
            expect(prettyPrint(testCase.input)).toEqual(testCase.output))
      ));

    describe('Performance tests', () =>
      (fixture as Fixture<number, number>).performanceTests.forEach(testCase =>
        it(`${getPerformanceTestCaseDescription(testCase)}`, () =>
          expect(prettyPrint(testCase.inputSize)).toBeDefined())
      ));
  });
});
