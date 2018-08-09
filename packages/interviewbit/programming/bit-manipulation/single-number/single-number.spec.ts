/**
 * Test specs for single-number problem
 * SingleNumber
 */

import {
  Fixture,
  generateArray,
  getPerformanceTestCaseDescription,
  getTestCaseDescription
} from '@challenges/util';

import { singleNumber } from './single-number';
import * as fixture from './single-number.fixture.json';

describe('Interviewbit - SingleNumber', () => {
  describe('singleNumber', () => {
    (fixture as Fixture<number[], number>).testCategories.forEach(
      (testCategory, index) => {
        describe(`${testCategory.name}`, () => {
          testCategory.testCases.forEach(testCase => {
            if (index < 2) {
              it(`${getTestCaseDescription(testCase)}`, () =>
                expect(singleNumber(testCase.input)).toEqual(testCase.output));
            } else {
              it(`${getPerformanceTestCaseDescription(testCase)}`, () =>
                expect(
                  singleNumber(generateArray(testCase.inputSize))
                ).toBeDefined());
            }
          });
        });
      }
    );
  });
});
