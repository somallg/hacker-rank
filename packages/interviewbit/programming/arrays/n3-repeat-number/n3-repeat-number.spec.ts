/**
 * Test specs for n3-repeat-number problem
 * Interviewbit - N3RepeatNumber
 */

import {
  Fixture,
  getTestCaseDescription,
  getPerformanceTestCaseDescription,
  generateArray
} from '@challenges/util';

import * as fixture from './n3-repeat-number.fixture.json';
import { n3RepeatNumber } from './n3-repeat-number';

describe('Interviewbit - N3RepeatNumber', () => {
  describe('n3RepeatNumber', () => {
    describe('Example tests', () => {
      (fixture as Fixture<number[], number>).exampleTests.forEach(testCase => {
        it(`${getTestCaseDescription(testCase)}`, () => {
          expect(n3RepeatNumber(testCase.input)).toEqual(testCase.output);
        });
      });
    });

    describe('Correctness tests', () => {
      (fixture as Fixture<number[], number>).exampleTests.forEach(testCase => {
        it(`${getTestCaseDescription(testCase)}`, () => {
          expect(n3RepeatNumber(testCase.input)).toEqual(testCase.output);
        });
      });
    });

    describe('Performance tests', () => {
      (fixture as Fixture<number[], number>).performanceTests.forEach(
        testCase => {
          it(`${getPerformanceTestCaseDescription(testCase)}`, () => {
            n3RepeatNumber(generateArray(testCase.inputSize));
          });
        }
      );
    });
  });
});
