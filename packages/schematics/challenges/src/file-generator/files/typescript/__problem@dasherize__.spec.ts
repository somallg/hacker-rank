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
    describe('Example tests', () =>
      (fixture as Fixture<number, number>).exampleTests.forEach(testCase =>
        it(`${getTestCaseDescription(testCase)}`, () =>
          expect(<%= functionName %>(testCase.input)).toEqual(testCase.output))
      ));

    describe('Correctness tests', () =>
      (fixture as Fixture<number, number>).correctnessTests.forEach(testCase =>
        it(`${getTestCaseDescription(testCase)}`, () =>
          expect(<%= functionName %>(testCase.input)).toEqual(testCase.output))
      ));

    xdescribe('Performance tests', () =>
      (fixture as Fixture<number, number>).performanceTests.forEach(testCase =>
        it(`${getPerformanceTestCaseDescription(testCase)}`, () =>
          expect(<%= functionName %>(generateArray(testCase.inputSize))).toBeDefined())
      ));
  });
});
