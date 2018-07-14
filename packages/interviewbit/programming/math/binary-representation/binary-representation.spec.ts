/**
 * Test specs for binary-representation problem
 * Interviewbit - BinaryRepresentation
 */

import {
  Fixture,
  getPerformanceTestCaseDescription,
  getTestCaseDescription
} from '@challenges/util';

import { binaryRepresentation } from './binary-representation';
import * as fixture from './binary-representation.fixture.json';

describe('Interviewbit - BinaryRepresentation', () => {
  describe('binaryRepresentation', () => {
    describe('Example tests', () =>
      (fixture as Fixture<number, string>).exampleTests.forEach(testCase =>
        it(`${getTestCaseDescription(testCase)}`, () =>
          expect(binaryRepresentation(testCase.input)).toEqual(testCase.output))
      ));

    describe('Correctness tests', () =>
      (fixture as Fixture<number, string>).correctnessTests.forEach(testCase =>
        it(`${getTestCaseDescription(testCase)}`, () =>
          expect(binaryRepresentation(testCase.input)).toEqual(testCase.output))
      ));

    describe('Performance tests', () =>
      (fixture as Fixture<number, string>).performanceTests.forEach(testCase =>
        it(`${getPerformanceTestCaseDescription(testCase)}`, () =>
          expect(binaryRepresentation(testCase.inputSize)).toBeDefined())
      ));
  });
});
