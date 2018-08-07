/**
 * Test specs for painters-partition-problem problem
 * PaintersPartitionProblem
 */

import {
  Fixture,
  generateArray,
  getPerformanceTestCaseDescription,
  getTestCaseDescription
} from '@challenges/util';

import { paintersPartitionProblem } from './painters-partition-problem';
import * as fixture from './painters-partition-problem.fixture.json';

type InputType = [number, number, number[]];

describe('Interviewbit - PaintersPartitionProblem', () => {
  describe('paintersPartitionProblem', () => {
    (fixture as Fixture<InputType, number>).testCategories.forEach(
      (testCategory, index) => {
        describe(`${testCategory.name}`, () => {
          testCategory.testCases.forEach(testCase => {
            if (index < 2) {
              it(`${getTestCaseDescription(testCase)}`, () => {
                const [k, n, l] = testCase.input;
                expect(paintersPartitionProblem(k, n, l)).toEqual(
                  testCase.output
                );
              });
            } else {
              it(`${getPerformanceTestCaseDescription(testCase)}`, () =>
                expect(
                  paintersPartitionProblem(
                    10,
                    testCase.inputSize,
                    generateArray(testCase.inputSize)
                  )
                ).toBeDefined());
            }
          });
        });
      }
    );
  });
});
