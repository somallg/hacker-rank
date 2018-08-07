/**
 * Test specs for minimum-characters-required-to-make-a-string-palindromic problem
 * MinimumCharactersRequiredToMakeAStringPalindromic
 */

import {
  Fixture,
  getPerformanceTestCaseDescription,
  getTestCaseDescription
} from '@challenges/util';

import { minimumCharactersRequiredToMakeAStringPalindromic } from './minimum-characters-required-to-make-a-string-palindromic';
import * as fixture from './minimum-characters-required-to-make-a-string-palindromic.fixture.json';

describe('Interviewbit - MinimumCharactersRequiredToMakeAStringPalindromic', () => {
  describe('minimumCharactersRequiredToMakeAStringPalindromic', () => {
    (fixture as Fixture<string, number>).testCategories.forEach(
      (testCategory, index) => {
        describe(`${testCategory.name}`, () => {
          testCategory.testCases.forEach(testCase => {
            if (index < 2) {
              it(`${getTestCaseDescription(testCase)}`, () =>
                expect(
                  minimumCharactersRequiredToMakeAStringPalindromic(
                    testCase.input
                  )
                ).toEqual(testCase.output));
            } else {
              it(`${getPerformanceTestCaseDescription(testCase)}`, () =>
                expect(
                  minimumCharactersRequiredToMakeAStringPalindromic(
                    'a'.repeat(testCase.inputSize)
                  )
                ).toBeDefined());
            }
          });
        });
      }
    );
  });
});
