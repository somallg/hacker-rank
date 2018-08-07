/**
 * Test specs for zigzag-string problem
 * ZigzagString
 */

import {
  Fixture,
  getPerformanceTestCaseDescription,
  getTestCaseDescription
} from '@challenges/util';

import { zigzagString } from './zigzag-string';
import * as fixture from './zigzag-string.fixture.json';

describe('Interviewbit - ZigzagString', () => {
  describe('zigzagString', () => {
    (fixture as Fixture<[string, number], number>).testCategories.forEach(
      (testCategory, index) => {
        describe(`${testCategory.name}`, () => {
          testCategory.testCases.forEach(testCase => {
            if (index < 2) {
              it(`${getTestCaseDescription(testCase)}`, () => {
                const [text, nRows] = testCase.input;
                expect(zigzagString(text, nRows)).toEqual(testCase.output);
              });
            } else {
              it(`${getPerformanceTestCaseDescription(testCase)}`, () =>
                expect(
                  zigzagString(
                    'A'.repeat(testCase.inputSize),
                    testCase.inputSize / 10
                  )
                ).toBeDefined());
            }
          });
        });
      }
    );
  });
});
