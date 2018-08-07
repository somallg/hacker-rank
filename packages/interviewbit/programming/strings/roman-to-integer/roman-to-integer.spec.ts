/**
 * Test specs for roman-to-integer problem
 * RomanToInteger
 */

import {
  Fixture,
  getPerformanceTestCaseDescription,
  getTestCaseDescription
} from '@challenges/util';

import { romanToInteger } from './roman-to-integer';
import * as fixture from './roman-to-integer.fixture.json';

describe('Interviewbit - RomanToInteger', () => {
  describe('romanToInteger', () => {
    (fixture as Fixture<string, number>).testCategories.forEach(
      (testCategory, index) => {
        describe(`${testCategory.name}`, () => {
          testCategory.testCases.forEach(testCase => {
            if (index < 2) {
              it(`${getTestCaseDescription(testCase)}`, () =>
                expect(romanToInteger(testCase.input)).toEqual(
                  testCase.output
                ));
            } else {
              it(`${getPerformanceTestCaseDescription(testCase)}`, () =>
                expect(
                  romanToInteger('I'.repeat(testCase.inputSize))
                ).toBeDefined());
            }
          });
        });
      }
    );
  });
});
