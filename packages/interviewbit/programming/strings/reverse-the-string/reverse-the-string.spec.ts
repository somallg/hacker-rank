/**
 * Test specs for reverse-the-string problem
 * ReverseTheString
 */

import {
  Fixture,
  getPerformanceTestCaseDescription,
  getTestCaseDescription
} from '@challenges/util';

import { reverseTheString } from './reverse-the-string';
import * as fixture from './reverse-the-string.fixture.json';

describe('Interviewbit - ReverseTheString', () => {
  describe('reverseTheString', () => {
    (fixture as Fixture<string, string>).testCategories.forEach(
      (testCategory, index) => {
        describe(`${testCategory.name}`, () => {
          testCategory.testCases.forEach(testCase => {
            if (index < 2) {
              it(`${getTestCaseDescription(testCase)}`, () =>
                expect(reverseTheString(testCase.input)).toEqual(
                  testCase.output
                ));
            } else {
              it(`${getPerformanceTestCaseDescription(testCase)}`, () =>
                expect(
                  reverseTheString('A'.repeat(testCase.inputSize))
                ).toBeDefined());
            }
          });
        });
      }
    );
  });
});
