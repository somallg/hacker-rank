/**
 * Test specs for implement-strstr problem
 * ImplementStrstr
 */

import {
  Fixture,
  getPerformanceTestCaseDescription,
  getTestCaseDescription
} from '@challenges/util';

import { implementStrstr } from './implement-strstr';
import * as fixture from './implement-strstr.fixture.json';

describe('Interviewbit - ImplementStrstr', () => {
  describe('implementStrstr', () => {
    (fixture as Fixture<[string, string], number>).testCategories.forEach(
      (testCategory, index) => {
        describe(`${testCategory.name}`, () => {
          testCategory.testCases.forEach(testCase => {
            if (index < 2) {
              it(`${getTestCaseDescription(testCase)}`, () => {
                const [a, b] = testCase.input;
                expect(implementStrstr(a, b)).toEqual(testCase.output);
              });
            } else {
              // it(`${getPerformanceTestCaseDescription(testCase)}`, () =>
              //   expect(
              //     implementStrstr(
              //       'ab'.repeat(testCase.inputSize),
              //       'ab'.repeat(testCase.inputSize / 2)
              //     )
              //   ).toBeDefined());
            }
          });
        });
      }
    );
  });
});
