/**
 * Test specs for <%= problem %> problem
 * <%= challengeUrl %>
 */

import {
  Fixture,
  generateArray,
  getPerformanceTestCaseDescription,
  getTestCaseDescription
} from '@challenges/util';

import { <%= functionName %> } from './<%= problem %>';
import * as fixture from './<%= problem %>.fixture.json';

describe('<%= classify(challengeName) %> - <%= classify(problem) %>', () => {
  describe('<%= functionName %>', () => {
    (fixture as Fixture<InputType, number>).testCategories.forEach(
      (testCategory, index) => {
        describe(`${testCategory.name}`, () => {
          testCategory.testCases.forEach(testCase => {
            if (index < 2) {
              it(`${getTestCaseDescription(testCase)}`, () =>
                 expect(<%= functionName %>(testCase.input)).toEqual(testCase.output));
            } else {
              it(`${getPerformanceTestCaseDescription(testCase)}`, () =>
                 expect(<%= functionName %>(testCase.inputSize)).toBeDefined());
            }
          });
        });
      }
    );
  });
});
