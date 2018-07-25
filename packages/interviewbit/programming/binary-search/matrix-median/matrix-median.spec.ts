/**
 * Test specs for matrix-median problem
 * MatrixMedian
 */

import {
  Fixture,
  generateMatrix,
  getPerformanceTestCaseDescription,
  getTestCaseDescription
} from '@challenges/util';

import { matrixMedian } from './matrix-median';
import * as fixture from './matrix-median.fixture.json';

describe('Interviewbit - MatrixMedian', () => {
  describe('matrixMedian', () => {
    (fixture as Fixture<number[][], number>).testCategories.forEach(
      (testCategory, index) => {
        describe(`${testCategory.name}`, () => {
          testCategory.testCases.forEach(testCase => {
            if (index < 2) {
              it(`${getTestCaseDescription(testCase)}`, () =>
                expect(matrixMedian(testCase.input)).toEqual(testCase.output));
            } else {
              // it(`${getPerformanceTestCaseDescription(testCase)}`, () =>
              //   expect(
              //     matrixMedian(generateMatrix(testCase.inputSize))
              //   ).toBeDefined());
            }
          });
        });
      }
    );
  });
});
