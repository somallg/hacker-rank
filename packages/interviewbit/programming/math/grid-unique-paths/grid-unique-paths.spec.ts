/**
 * Test specs for grid-unique-paths problem
 * GridUniquePaths
 */

import {
  Fixture,
  getPerformanceTestCaseDescription,
  getTestCaseDescription
} from '@challenges/util';

import { gridUniquePaths } from './grid-unique-paths';
import * as fixture from './grid-unique-paths.fixture.json';

describe('Interviewbit - GridUniquePaths', () => {
  describe('gridUniquePaths', () => {
    describe('Example tests', () =>
      (fixture as Fixture<[number, number], number>).exampleTests.forEach(
        testCase =>
          it(`${getTestCaseDescription(testCase)}`, () => {
            const [row, col] = testCase.input;
            expect(gridUniquePaths(row, col)).toEqual(testCase.output);
          })
      ));

    describe('Correctness tests', () =>
      (fixture as Fixture<[number, number], number>).correctnessTests.forEach(
        testCase =>
          it(`${getTestCaseDescription(testCase)}`, () => {
            const [row, col] = testCase.input;
            expect(gridUniquePaths(row, col)).toEqual(testCase.output);
          })
      ));

    describe('Performance tests', () =>
      (fixture as Fixture<[number, number], number>).performanceTests.forEach(
        testCase =>
          it(`${getPerformanceTestCaseDescription(testCase)}`, () =>
            expect(
              gridUniquePaths(testCase.inputSize, testCase.inputSize)
            ).toBeDefined())
      ));
  });
});
