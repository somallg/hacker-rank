/**
 * Test specs for matrix-search problem
 * MatrixSearch
 */

import {
  Fixture,
  generateMatrix,
  getPerformanceTestCaseDescription,
  getTestCaseDescription
} from '@challenges/util';

import { matrixSearch } from './matrix-search';
import * as fixture from './matrix-search.fixture.json';

describe('Interviewbit - MatrixSearch', () => {
  describe('matrixSearch', () => {
    (fixture as Fixture<[number[][], number], number>).testCategories.forEach(
      (testCategory, index) => {
        describe(`${testCategory.name}`, () => {
          testCategory.testCases.forEach(testCase => {
            if (index < 2) {
              it(`${getTestCaseDescription(testCase)}`, () => {
                const [matrix, target] = testCase.input;
                expect(matrixSearch(matrix, target)).toEqual(testCase.output);
              });
            } else {
              it(`${getPerformanceTestCaseDescription(testCase)}`, () =>
                expect(
                  matrixSearch(generateMatrix(testCase.inputSize, 1), 1)
                ).toBeDefined());
            }
          });
        });
      }
    );
  });
});
