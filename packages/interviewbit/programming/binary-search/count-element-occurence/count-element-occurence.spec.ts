/**
 * Test specs for count-element-occurence problem
 * CountElementOccurence
 */

import {
  Fixture,
  generateArray,
  getPerformanceTestCaseDescription,
  getTestCaseDescription
} from '@challenges/util';

import { countElementOccurence } from './count-element-occurence';
import * as fixture from './count-element-occurence.fixture.json';

describe('Interviewbit - CountElementOccurence', () => {
  describe('countElementOccurence', () => {
    (fixture as Fixture<[number[], number], number>).testCategories.forEach(
      (testCategory, index) => {
        describe(`${testCategory.name}`, () => {
          testCategory.testCases.forEach(testCase => {
            if (index < 2) {
              it(`${getTestCaseDescription(testCase)}`, () => {
                const [matrix, target] = testCase.input;
                expect(countElementOccurence(matrix, target)).toEqual(
                  testCase.output
                );
              });
            } else {
              it(`${getPerformanceTestCaseDescription(testCase)}`, () =>
                expect(
                  countElementOccurence(generateArray(testCase.inputSize, 1), 1)
                ).toBeDefined());
            }
          });
        });
      }
    );
  });
});
