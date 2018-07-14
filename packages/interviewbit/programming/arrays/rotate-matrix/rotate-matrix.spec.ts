/**
 * Test specs for rotate-matrix problem
 * Interviewbit - RotateMatrix
 */

import {
  Fixture,
  getTestCaseDescription,
  getPerformanceTestCaseDescription,
  generateMatrix
} from '@challenges/util';

import * as fixture from './rotate-matrix.fixture.json';
import { rotateMatrix } from './rotate-matrix';

describe('Interviewbit - RotateMatrix', () => {
  describe('rotateMatrix', () => {
    describe('Example tests', () => {
      (fixture as Fixture<number[][], number[][]>).exampleTests.forEach(
        testCase => {
          it(`${getTestCaseDescription(testCase)}`, () => {
            expect(rotateMatrix(testCase.input)).toEqual(testCase.output);
          });
        }
      );
    });

    describe('Correctness tests', () => {
      (fixture as Fixture<number[][], number[][]>).correctnessTests.forEach(
        testCase => {
          it(`${getTestCaseDescription(testCase)}`, () => {
            expect(rotateMatrix(testCase.input)).toEqual(testCase.output);
          });
        }
      );
    });

    describe('Performance tests', () => {
      (fixture as Fixture<number[][], number[][]>).performanceTests.forEach(
        testCase => {
          it(`${getPerformanceTestCaseDescription(testCase)}`, () => {
            rotateMatrix(generateMatrix(testCase.inputSize));
          });
        }
      );
    });
  });
});
