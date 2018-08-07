/**
 * Test specs for median-of-array problem
 * MedianOfArray
 */

import {
  Fixture,
  generateArray,
  getPerformanceTestCaseDescription,
  getTestCaseDescription
} from '@challenges/util';

import { medianOfArray } from './median-of-array';
import * as fixture from './median-of-array.fixture.json';

describe('Interviewbit - MedianOfArray', () => {
  describe('medianOfArray', () => {
    (fixture as Fixture<[number[], number[]], number>).testCategories.forEach(
      (testCategory, index) => {
        describe(`${testCategory.name}`, () => {
          testCategory.testCases.forEach(testCase => {
            if (index < 2) {
              it(`${getTestCaseDescription(testCase)}`, () => {
                const [a, b] = testCase.input;
                expect(medianOfArray(a, b)).toEqual(testCase.output);
              });
            } else {
              it(`${getPerformanceTestCaseDescription(testCase)}`, () =>
                expect(
                  medianOfArray(
                    generateArray(testCase.inputSize),
                    generateArray(testCase.inputSize / 2)
                  )
                ).toBeDefined());
            }
          });
        });
      }
    );
  });
});
