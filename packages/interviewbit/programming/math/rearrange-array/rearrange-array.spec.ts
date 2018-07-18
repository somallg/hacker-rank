/**
 * Test specs for rearrange-array problem
 * RearrangeArray
 */

import {
  Fixture,
  generateArray,
  getPerformanceTestCaseDescription,
  getTestCaseDescription
} from '@challenges/util';

import { rearrangeArray } from './rearrange-array';
import * as fixture from './rearrange-array.fixture.json';

describe('Interviewbit - RearrangeArray', () => {
  describe('rearrangeArray', () => {
    describe('Example tests', () =>
      (fixture as Fixture<number[], number[]>).exampleTests.forEach(testCase =>
        it(`${getTestCaseDescription(testCase)}`, () =>
          expect(rearrangeArray(testCase.input)).toEqual(testCase.output))
      ));

    describe('Correctness tests', () =>
      (fixture as Fixture<number[], number[]>).correctnessTests.forEach(
        testCase =>
          it(`${getTestCaseDescription(testCase)}`, () =>
            expect(rearrangeArray(testCase.input)).toEqual(testCase.output))
      ));

    describe('Performance tests', () =>
      (fixture as Fixture<number[], number[]>).performanceTests.forEach(
        testCase =>
          it(`${getPerformanceTestCaseDescription(testCase)}`, () =>
            expect(
              rearrangeArray(generateArray(testCase.inputSize))
            ).toBeDefined())
      ));
  });
});
