/**
 * Test specs for count-and-say problem
 * CountAndSay
 */

import {
  Fixture,
  getPerformanceTestCaseDescription,
  getTestCaseDescription
} from '@challenges/util';

import { countAndSay } from './count-and-say';
import * as fixture from './count-and-say.fixture.json';

describe('Interviewbit - CountAndSay', () => {
  describe('countAndSay', () => {
    (fixture as Fixture<number, string>).testCategories.forEach(
      (testCategory, index) => {
        describe(`${testCategory.name}`, () => {
          testCategory.testCases.forEach(testCase => {
            if (index < 2) {
              it(`${getTestCaseDescription(testCase)}`, () =>
                expect(countAndSay(testCase.input)).toEqual(testCase.output));
            } else {
              xit(`${getPerformanceTestCaseDescription(testCase)}`, () =>
                expect(countAndSay(testCase.inputSize)).toBeDefined());
            }
          });
        });
      }
    );
  });
});
