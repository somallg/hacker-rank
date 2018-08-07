/**
 * Test specs for length-of-last-word problem
 * LengthOfLastWord
 */

import {
  Fixture,
  getPerformanceTestCaseDescription,
  getTestCaseDescription
} from '@challenges/util';

import { lengthOfLastWord } from './length-of-last-word';
import * as fixture from './length-of-last-word.fixture.json';

describe('Interviewbit - LengthOfLastWord', () => {
  describe('lengthOfLastWord', () => {
    (fixture as Fixture<string, number>).testCategories.forEach(
      (testCategory, index) => {
        describe(`${testCategory.name}`, () => {
          testCategory.testCases.forEach(testCase => {
            if (index < 2) {
              it(`${getTestCaseDescription(testCase)}`, () =>
                expect(lengthOfLastWord(testCase.input)).toEqual(
                  testCase.output
                ));
            } else {
              it(`${getPerformanceTestCaseDescription(testCase)}`, () =>
                expect(
                  lengthOfLastWord('A'.repeat(testCase.inputSize))
                ).toBeDefined());
            }
          });
        });
      }
    );
  });
});
