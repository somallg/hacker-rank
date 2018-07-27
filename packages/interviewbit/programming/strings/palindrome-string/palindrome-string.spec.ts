/**
 * Test specs for palindrome-string problem
 * PalindromeString
 */

import {
  Fixture,
  getPerformanceTestCaseDescription,
  getTestCaseDescription
} from '@challenges/util';

import { palindromeString } from './palindrome-string';
import * as fixture from './palindrome-string.fixture.json';

describe('Interviewbit - PalindromeString', () => {
  describe('palindromeString', () => {
    (fixture as Fixture<string, number>).testCategories.forEach(
      (testCategory, index) => {
        describe(`${testCategory.name}`, () => {
          testCategory.testCases.forEach(testCase => {
            if (index < 2) {
              it(`${getTestCaseDescription(testCase)}`, () =>
                expect(palindromeString(testCase.input)).toEqual(
                  testCase.output
                ));
            } else {
              it(`${getPerformanceTestCaseDescription(testCase)}`, () =>
                expect(
                  palindromeString('A'.repeat(testCase.inputSize))
                ).toBeDefined());
            }
          });
        });
      }
    );
  });
});
