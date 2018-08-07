/**
 * Test specs for sorted-insert-position problem
 */

import {
  Fixture,
  generateArray,
  getPerformanceTestCaseDescription,
  getTestCaseDescription
} from '@challenges/util';

import { sortedInsertPosition } from './sorted-insert-position';
import * as fixture from './sorted-insert-position.fixture.json';

describe('Interviewbit - SortedInsertPosition', () => {
  describe('sortedInsertPosition', () => {
    (fixture as Fixture<[number[], number], number>).testCategories.forEach(
      (testCategory, index) => {
        describe(`${testCategory.name}`, () => {
          testCategory.testCases.forEach(testCase => {
            if (index < 2) {
              it(`${getTestCaseDescription(testCase)}`, () => {
                const [array, target] = testCase.input;
                expect(sortedInsertPosition(array, target)).toEqual(
                  testCase.output
                );
              });
            } else {
              it(`${getPerformanceTestCaseDescription(testCase)}`, () =>
                expect(
                  sortedInsertPosition(generateArray(testCase.inputSize, 1), 2)
                ).toBeDefined());
            }
          });
        });
      }
    );
  });
});
