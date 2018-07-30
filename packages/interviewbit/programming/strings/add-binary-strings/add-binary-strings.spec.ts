/**
 * Test specs for add-binary-strings problem
 * AddBinaryStrings
 */

import {
  Fixture,
  generateArray,
  getPerformanceTestCaseDescription,
  getTestCaseDescription
} from '@challenges/util';

import { addBinaryStrings } from './add-binary-strings';
import * as fixture from './add-binary-strings.fixture.json';

describe('Interviewbit - AddBinaryStrings', () => {
  describe('addBinaryStrings', () => {
    (fixture as Fixture<[string, string], number>).testCategories.forEach(
      (testCategory, index) => {
        describe(`${testCategory.name}`, () => {
          testCategory.testCases.forEach(testCase => {
            if (index < 2) {
              it(`${getTestCaseDescription(testCase)}`, () => {
                const [a, b] = testCase.input;
                expect(addBinaryStrings(a, b)).toEqual(testCase.output);
              });
            } else {
              it(`${getPerformanceTestCaseDescription(testCase)}`, () =>
                expect(
                  addBinaryStrings(
                    generateArray(testCase.inputSize, 1).toString(),
                    generateArray(testCase.inputSize, 1).toString()
                  )
                ).toBeDefined());
            }
          });
        });
      }
    );
  });
});
