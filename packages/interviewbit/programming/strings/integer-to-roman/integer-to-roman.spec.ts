/**
 * Test specs for integer-to-roman problem
 * IntegerToRoman
 */

import {
  Fixture,
  getPerformanceTestCaseDescription,
  getTestCaseDescription
} from '@challenges/util';

import { integerToRoman } from './integer-to-roman';
import * as fixture from './integer-to-roman.fixture.json';

describe('Interviewbit - IntegerToRoman', () => {
  describe('integerToRoman', () => {
    (fixture as Fixture<number, string>).testCategories.forEach(
      (testCategory, index) => {
        describe(`${testCategory.name}`, () => {
          testCategory.testCases.forEach(testCase => {
            if (index < 2) {
              it(`${getTestCaseDescription(testCase)}`, () =>
                expect(integerToRoman(testCase.input)).toEqual(
                  testCase.output
                ));
            } else {
              it(`${getPerformanceTestCaseDescription(testCase)}`, () =>
                expect(integerToRoman(testCase.inputSize)).toBeDefined());
            }
          });
        });
      }
    );
  });
});
