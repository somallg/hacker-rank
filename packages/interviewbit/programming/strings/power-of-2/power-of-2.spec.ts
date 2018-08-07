/**
 * Test specs for power-of-2 problem
 * PowerOf2
 */

import {
  Fixture,
  getPerformanceTestCaseDescription,
  getTestCaseDescription
} from '@challenges/util';

import { powerOf2 } from './power-of-2';
import * as fixture from './power-of-2.fixture.json';

describe('Interviewbit - PowerOf2', () => {
  describe('powerOf2', () => {
    (fixture as Fixture<string, number>).testCategories.forEach(
      (testCategory, index) => {
        describe(`${testCategory.name}`, () => {
          testCategory.testCases.forEach(testCase => {
            if (index < 2) {
              it(`${getTestCaseDescription(testCase)}`, () =>
                expect(powerOf2(testCase.input)).toEqual(testCase.output));
            } else {
              it(`${getPerformanceTestCaseDescription(testCase)}`, () =>
                expect(powerOf2(`${testCase.inputSize}`)).toBeDefined());
            }
          });
        });
      }
    );
  });
});
