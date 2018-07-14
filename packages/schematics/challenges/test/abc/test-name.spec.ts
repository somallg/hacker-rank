/**
 * Test specs for test-name problem
 *  Abc - Test-name
 */

import {
  Fixture,
  getPerformanceTestCaseDescription,
  getTestCaseDescription,
  generateArray
} from '@challenges/util';

import { testName } from './test-name';
import * as fixture from './test-name.fixture.json';

describe('Abc - TestName', () => {
  describe('testName', () => {
    describe('Example tests', () =>
      (fixture as Fixture<number, number>).exampleTests.forEach(testCase =>
        it(`${getTestCaseDescription(testCase)}`, () =>
          expect(testName(testCase.input)).toEqual(testCase.output))
      ));

    describe('Correctness tests', () =>
      (fixture as Fixture<number, number>).correctnessTests.forEach(testCase =>
        it(`${getTestCaseDescription(testCase)}`, () =>
          expect(testName(testCase.input)).toEqual(testCase.output))
      ));

    xdescribe('Performance tests', () =>
      (fixture as Fixture<number, number>).performanceTests.forEach(testCase =>
        it(`${getPerformanceTestCaseDescription(testCase)}`, () =>
          expect(testName(generateArray(testCase.inputSize))).toBeDefined())
      ));
  });
});
