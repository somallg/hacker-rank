/**
 * Test specs for all-factors problem
 * Interviewbit - AllFactors
 */

import {
  Fixture,
  getPerformanceTestCaseDescription,
  getTestCaseDescription
} from '@challenges/util';

import * as fixture from './all-factors.fixture.json';

import { allFactors } from './all-factors';

describe('Interviewbit - AllFactors', () => {
  describe('allFactors', () => {
    describe('Example tests', () => {
      (fixture as Fixture<number, number[]>).exampleTests.forEach(testCase => {
        it(`${getTestCaseDescription(testCase)}`, () => {
          expect(allFactors(testCase.input)).toEqual(testCase.output);
        });
      });
    });

    describe('Correctness tests', () => {
      (fixture as Fixture<number, number[]>).correctnessTests.forEach(
        testCase => {
          it(`${getTestCaseDescription(testCase)}`, () => {
            expect(allFactors(testCase.input)).toEqual(testCase.output);
          });
        }
      );
    });

    describe('Performance tests', () => {
      (fixture as Fixture<number, number[]>).performanceTests.forEach(
        testCase => {
          it(`${getPerformanceTestCaseDescription(testCase)}`, () => {
            allFactors(testCase.inputSize);
          });
        }
      );
    });
  });
});
