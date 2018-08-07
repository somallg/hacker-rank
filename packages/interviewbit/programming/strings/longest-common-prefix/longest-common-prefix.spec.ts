/**
 * Test specs for longest-common-prefix problem
 * LongestCommonPrefix
 */

import {
  Fixture,
  generateArray,
  getPerformanceTestCaseDescription,
  getTestCaseDescription
} from '@challenges/util';

import { longestCommonPrefix } from './longest-common-prefix';
import * as fixture from './longest-common-prefix.fixture.json';

describe('Interviewbit - LongestCommonPrefix', () => {
  describe('longestCommonPrefix', () => {
    (fixture as Fixture<string[], string>).testCategories.forEach(
      (testCategory, index) => {
        describe(`${testCategory.name}`, () => {
          testCategory.testCases.forEach(testCase => {
            if (index < 2) {
              it(`${getTestCaseDescription(testCase)}`, () =>
                expect(longestCommonPrefix(testCase.input)).toEqual(
                  testCase.output
                ));
            } else {
              it(`${getPerformanceTestCaseDescription(testCase)}`, () =>
                expect(
                  longestCommonPrefix(
                    generateArray(testCase.inputSize).map(String)
                  )
                ).toBeDefined());
            }
          });
        });
      }
    );
  });
});
