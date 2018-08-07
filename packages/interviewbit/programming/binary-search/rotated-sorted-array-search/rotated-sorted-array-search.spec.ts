/**
 * Test specs for rotated-sorted-array-search problem
 * RotatedSortedArraySearch
 */

import {
  Fixture,
  generateArray,
  getPerformanceTestCaseDescription,
  getTestCaseDescription
} from '@challenges/util';

import { rotatedSortedArraySearch } from './rotated-sorted-array-search';
import * as fixture from './rotated-sorted-array-search.fixture.json';

describe('Interviewbit - RotatedSortedArraySearch', () => {
  describe('rotatedSortedArraySearch', () => {
    (fixture as Fixture<[number[], number], number>).testCategories.forEach(
      (testCategory, index) => {
        describe(`${testCategory.name}`, () => {
          testCategory.testCases.forEach(testCase => {
            if (index < 2) {
              it(`${getTestCaseDescription(testCase)}`, () => {
                const [array, target] = testCase.input;
                expect(rotatedSortedArraySearch(array, target)).toEqual(
                  testCase.output
                );
              });
            } else {
              it(`${getPerformanceTestCaseDescription(testCase)}`, () =>
                expect(
                  rotatedSortedArraySearch(
                    generateArray(testCase.inputSize),
                    testCase.inputSize
                  )
                ).toBeDefined());
            }
          });
        });
      }
    );
  });
});
