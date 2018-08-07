/**
 * Test specs for implement-power-function problem
 * ImplementPowerFunction
 */

import {
  Fixture,
  getPerformanceTestCaseDescription,
  getTestCaseDescription
} from '@challenges/util';

import { implementPowerFunction } from './implement-power-function';
import * as fixture from './implement-power-function.fixture.json';

type InputType = [number, number, number];

describe('Interviewbit - ImplementPowerFunction', () => {
  describe('implementPowerFunction', () => {
    (fixture as Fixture<InputType, number>).testCategories.forEach(
      (testCategory, index) => {
        describe(`${testCategory.name}`, () => {
          testCategory.testCases.forEach(testCase => {
            if (index < 2) {
              it(`${getTestCaseDescription(testCase)}`, () => {
                const [x, n, d] = testCase.input;
                expect(implementPowerFunction(x, n, d)).toEqual(
                  testCase.output
                );
              });
            } else {
              it(`${getPerformanceTestCaseDescription(testCase)}`, () =>
                expect(
                  implementPowerFunction(
                    testCase.inputSize,
                    testCase.inputSize / 2,
                    testCase.inputSize
                  )
                ).toBeDefined());
            }
          });
        });
      }
    );
  });
});
